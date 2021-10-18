<template>
  <div>
      <h1>Form marca</h1>
      <form v-if="marca">
        <input type="number" v-model="marca.id" placeholder="Id"/> <br/>
        <input type="text" v-model="marca.nome" placeholder="Nome"/> <br/>
        <input type="submit" value="Salvar"/>
        <button @click.prevent="voltar"> Voltar</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            marca: null
        }
    },
    mounted() {
        axios.get(`https://carros-app-example.herokuapp.com/marca/${this.$route.params.id}`)
            .then(response => {
                this.marca = response.data
            })
    },
    methods: {
        voltar() {
            this.$router.go(-1)
        }
    }

}
</script>

<style>

</style>