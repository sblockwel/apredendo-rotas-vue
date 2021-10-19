<template>
  <div>
      <h1>Form Carro</h1>
      {{mensagem}}
      <form v-if="carro" @submit.prevent="salvar">
        <input type="number" v-model="carro.id" placeholder="Id" disabled="true"/> <br/>
        <input type="text" v-model="carro.nome" placeholder="Nome"/> <br/>
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
            carro: null,
            mensagem: null
        }
    },
    mounted() {
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

</style>