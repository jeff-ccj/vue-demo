<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h1>123123</h1>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'test',
    data () {
      return {
      }
    },
    methods:{

    },
    computed: {
      ...mapState({
        count: state => state.test.count
      }),
    },
    created (){
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  body{
    background: #f1f1f1;
    a {
      color: #42b983;
    }
  }
</style>
