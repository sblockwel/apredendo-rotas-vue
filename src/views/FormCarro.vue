<template>
  <div>
      <h1>Form Carro</h1>
      {{mensagem}}
      <form id="formulario" v-if="carro" @submit.prevent="salvar">

        <div class="campo">
            <label>Id:</label> <br/>
            <input type="number" v-model="carro.id" placeholder="Id" disabled="true"/> <br/>
        </div>
       
        <div class="campo">
            <label>Nome:</label> <br/>
            <input type="text" v-model="carro.nome" placeholder="Nome"/> <br/>
        </div>

        <div class="campo">
            <label>Ano fabricação:</label> <br/>
            <input type="number" min="1940" max="2025" v-model="carro.anoFabricacao" placeholder="Ano Fabricação"/> <br/>
        </div>

        <div class="campo">
            <label>Ano Modelo:</label> <br/>
            <input type="number" min="1940" max="2025" v-model="carro.anoModelo" placeholder="Ano Modelo"/> <br/>
        </div>

        <div class="campo">
            <label>Preço:</label> <br/>
            <input type="number" v-model="carro.preco" placeholder="Preço"/> <br/>
        </div>
        
        <div class="campo"> 
        <label>Marca:</label> <br/>    
        <select v-model="carro.marca"> 
            <option v-for="m in marca" :key="m.id" :value="m">{{m.nome}}</option> 
        </select> 
        </div> 

        <div class="campo"> 
        <label>Cor:</label> <br/>    
        <select v-model="carro.cor"> 
            <option v-for="c in cor" :key="c.id" :value="c">{{c.nome}}</option> 
        </select> 
        </div> 

        <div class="campo"> 
        <input type="submit" value="Salvar"/>
        </div> 

        <div class="campo"> 
        <button id="botao" @click.prevent="voltar"> Voltar</button>
        </div> 
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            carro: null,
            mensagem: null,
            marca: [],
            cor: []         
        }
    },
    mounted() {
        axios.get('https://carros-app-example.herokuapp.com/marca').then(response => { 
                this.marca = response.data 
                console.log(this.marca)
            }).catch(error => { 
                alert(error) 
            })
        axios.get('https://carros-app-example.herokuapp.com/cor').then(response => { 
                this.cor = response.data 
            }).catch(error => { 
                alert(error) 
            })    
        if (this.$route.params.id == 'novo') {
            this.carro = {
                id : null,
                nome : null
            }  
              
        }
        else{
            axios.get(`https://carros-app-example.herokuapp.com/carro/${this.$route.params.id}`)
                .then(response => {
                    this.carro = response.data
                })
        }
    },
    methods: {
        voltar() {
            this.$router.go(-1)
        },
        salvar() {
            axios.post('https://carros-app-example.herokuapp.com/carro', 
                    this.carro)
                    .then((response) => {
                        if (this.carro.id == null) {
                            this.mensagem = "Registro adicionado " + response.data
                            this.carro.id = response.data
                        }
                        else
                            this.mensagem = "Registro alterado " + response.data
                    })
                    .catch(error => 
                        alert(error)
                    )
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


#formulario {
  width: 60%; 
  margin-left: 20%;
  padding: 45px 15px;
  height: 100px;
}

.campo {
  width: 40%;
  float: left;
}

.campo input {
  margin: 10px 1%;
  padding: 8px 1%;
  width: 90%;
}

#botao {
    width: 90%;
    height: 35px;    
    padding: 8px 1%;
    margin: 10px 1%;
}

select{
    width: 92%;
    height: 40px;
    padding: 8px 1%;    
    margin: 10px 1%;
}

</style>