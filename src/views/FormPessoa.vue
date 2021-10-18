<template>
  <div>
      <h1>Form pessoa</h1>
       {{ $route.params.id }} 

      <a href="#" @click="openEnderecos()">Endereços</a>
      <router-view/>

      <button @click="voltar()">Voltar</button>
  </div>
</template>

<script>
export default {
    methods: {
        voltar() {
            this.$router.go(-1)
        },
        openEnderecos() {
            this.$router.push('/endereco' )
        }
    },
    mounted() {
        console.log(this.$route.params.id)
    },
    watch: {
        $route(to, from) {
            console.log(to)
            console.log(from)
        }
    }

}
</script>

<style>

</style>