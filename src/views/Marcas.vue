<template>
  <div> 
      <h1>Marcas</h1>
      <button @click="novaMarca()">Nova Marca</button>
      <table>
          <th>
              <td>Id</td>
              <td>Nome</td>
              <td></td>
          </th>
          <tr v-for="m in marcas" :key="m.id">
              <td>{{m.id}}</td>
              <td>{{m.nome}}</td>
              <td>
                  <a href="#" @click="editar(m)">Editar |</a>
                  <a href="#" @click="deletar(m)"> Deletar</a>
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
            marcas: []
        }
    },
    mounted() {
        this.load()

    },
    methods: {
        load(){
            axios.get('https://carros-app-example.herokuapp.com/marca').then(response => {
                this.marcas = response.data    
            })   
        },
        editar(marca) {
            this.$router.push(`/marca/${marca.id}`)
        },
        deletar(marca) {
            if (confirm("Deseja apagar o registro?")) {
                axios.delete(`https://carros-app-example.herokuapp.com/marca/${marca.id}`)
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
        novaMarca() {
           this.$router.push('/marca/novo') 
        }
    }


}
</script>

<style>

</style>