<template>
  <div>
      <h1>Form marca</h1>
      {{mensagem}}
      <form v-if="marca" @submit.prevent="salvar">
        <input type="number" v-model="marca.id" placeholder="Id" disabled="true"/> <br/>
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
            marca: null,
            mensagem: null
        }
    },
    mounted() {
        if (this.$route.params.id == 'novo') {
            this.marca = {
                id : null,
                Nome : null
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
            axios.post('https://carros-app-example.herokuapp.com/marca/', this.marca)
            .then(()=> {
                this.mensagem = "Registro alterado!"  
            })
            .catch(error => alert(error))
        }
    }

}
</script>

<style>

</style>