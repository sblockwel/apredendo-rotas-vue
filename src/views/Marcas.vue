<template>
  <div> 
      <h1>Marcas</h1>
      <table>
          <th>
              <td>Id</td>
              <td>Nome</td>
              <td></td>
          </th>
          <tr v-for="m in marcas" :key="m.id">
              <td>{{m.id}}</td>
              <td>{{m.nome}}</td>
              <td><a href="#" @click="editar(m)">Editar</a></td>
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
        axios.get('https://carros-app-example.herokuapp.com/marca').then(response => {
            this.marcas = response.data    
        })

    },
    methods: {
        editar(marca) {
            this.$router.push(`/marca/${marca.id}`)
        }
    }


}
</script>

<style>

</style>