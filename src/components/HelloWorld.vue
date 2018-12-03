<template>
  <div class="hello">
    <h1>Hello my name is {{name}}</h1>
    <p>Number: {{number}}</p>
    <p v-if="number >= 12">He's sleeping</p>
    <button @click='attack(1)'>+</button>
    <button @click='attack(10)'>+</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        name: 'Cory',
        number: 0
      }
    },
    computed: {
      targets() {
        return
      }
    },
    methods: {
      attack(val) {
        this.$store.dispatch('attace', val)
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>