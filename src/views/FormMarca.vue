<template>
  <div>
      <h1>Form marca</h1>
      {{mensagem}}
      <form id="formulario" v-if="marca" @submit.prevent="salvar">

          <div class="campo">
            <label>Id:</label> <br/>
            <input type="number" v-model="marca.id" placeholder="Id" disabled="true"/> <br/>
        </div>
       
        <div class="campo">
            <label>Nome:</label> <br/>
            <input type="text" v-model="marca.nome" placeholder="Nome"/> <br/>
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
            marca: null,
            mensagem: null
        }
    },
    mounted() {
        if (this.$route.params.id == 'novo') {
            this.marca = {
                id : null,
                nome : null
            }    
        }
        else{
            axios.get(`https://carros-app-example.herokuapp.com/marca/${this.$route.params.id}`)
                .then(response => {
                    this.marca = response.data
                })
        }
    },
    methods: {
        voltar() {
            this.$router.go(-1)
        },
        salvar() {
            axios.post('https://carros-app-example.herokuapp.com/marca', 
                    this.marca)
                    .then((response) => {
                        if (this.marca.id == null) {
                            this.mensagem = "Registro adicionado " + response.data
                            this.marca.id = response.data
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
</style>