<template>
  <div>
      <h1>Carros</h1>
      <button @click="novoCarro()">Nova Carro</button>
      <table>
          <th>
              <td>Id</td>
              <td>Nome</td>
              <td>Ano Fabricacao</td>
              <td>Ano Modelo</td>
              <td>Preço</td>
              <td>Marca</td>
          </th>
          <tr v-for="c in carros" :key="c.id">
              <td>{{c.id}}</td>
              <td>{{c.nome}}</td>
              <td>{{c.anoFabricacao}}</td>
              <td>{{c.anoModelo}}</td>
              <td>{{c.preco}}</td>
              <td>{{c.marca.nome}}</td>
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

</style>