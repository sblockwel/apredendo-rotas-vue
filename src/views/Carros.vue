<template>
  <div>
      <h1>Carros</h1>
      <button @click="novoCarro()">Nova Carro</button>
      <table>
          
        <th>Id</th>
        <th>Nome</th>
        <th>Ano Fabricacao</th>
        <th>Ano Modelo</th>
        <th>Preço</th>
        <th>Marca</th>
        <th>Cor</th>
         
          <tr v-for="c in carros" :key="c.id">
              <td>{{c.id}}</td>
              <td>{{c.nome}}</td>
              <td>{{c.anoFabricacao}}</td>
              <td>{{c.anoModelo}}</td>
              <td>{{c.preco}}</td>
              
              <td> <span v-if="c.marca">{{c.marca.nome}}</span></td>
              <td> <span v-if="c.cor">{{c.cor.nome}}</span></td>
              
              <td>
                  <a href="#" @click="editar(c)">Editar |</a>
                  <a href="#" @click="deletar(c)"> Deletar</a>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
        return {
            carros: []
        }
    },
    mounted() {
        this.load()

    },
    methods: {
        load(){
            axios.get('https://carros-app-example.herokuapp.com/carro').then(response => {
                this.carros = response.data    
            })   
        },
        editar(carro) {
            this.$router.push(`/carro/${carro.id}`)
        },
        deletar(carro) {
            if (confirm("Deseja apagar o registro?")) {
                axios.delete(`https://carros-app-example.herokuapp.com/carro/${carro.id}`)
                    .then(() => {
                        this.load()
                        alert("Registro apagado")

                    })
                    .catch(error => {
                        console.log(error)
                        alert(error)
                    })
            }
        },
        novoCarro() {
           this.$router.push('/carro/novo') 
        }
    }
}
</script>

<style>
table {
    border-collapse: collapse;
    width: 50%;
}

th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tr:hover{
  background-color:#d4d4d4

}

.tabela {
  margin: auto;
}

#botao {
    width: 20%;
    height: 50px;
    margin-top: 17px;
}

button:hover{
  cursor: pointer;
}

</style>