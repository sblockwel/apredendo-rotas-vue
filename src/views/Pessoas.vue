<template>
  <div>
      <h1>Lista de pessoas</h1>
      <button @click="novaPessoa()">Novo</button>      
      <table>
          <tr v-for="p in pessoas" :key="p.id">
              <td>{{p.nome}}</td>
              <td><a href="#" @click="editar(p)">Editar</a></td>
          </tr>    
      </table>

  </div>    
</template>

<script>
export default {
    data() {
        return {
            pessoas: [
                {
                    id: 1,
                    nome: "Fabiano"
                },
                {
                    id: 2,
                    nome: "Thomas"
                },
                {
                    id: 3,
                    nome: "Beatriz"
                }


            ]
        }
    },
    methods: {
        novaPessoa() {
            this.$router.push('/pessoa/novo')
        },
        editar(pessoa) {
            this.$router.push('/pessoa/' + pessoa.id)
        }
    }

}
</script>

<style>

</style>