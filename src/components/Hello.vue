<template>

  <div class="hello">
    <mt-header fixed title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="page-main">
      <h1>{{ count }}</h1>
        <li>
          <span>{{user}}</span>
        </li>
        <br>
        <mt-button @click="increment">{{test}}</mt-button>
        <br>
        <mt-button @click="ajaxFn">get_access_token</mt-button>
        <br>
        <li>
          <a href="./#/Test">go Test</a>
        </li>
        <br>
        <mt-button @click="login">login</mt-button>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      ...mapState({
        count: state => state.test.count,
        user: (state => state.user)
      }),
      test: function () {
        return 'test'
      }
    },
    methods:{
      ...mapMutations([
        'increment'
      ]),
      ...mapActions([
        'login'
      ]),
      ajaxFn(){
        // 1QKyS8rjnQzaFTQ60chO--wSo1itTvDXp8xnh3tqKlgmsRzCURTkSethcMQ68yQWPnxhPfsebF1j6377m6JyjekqQrZx1lA9k08QRPYu9wfj7kqrz_OPb-MJizn15SH4CNCgAIAMXM
        this.$ajax({
          url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx5d85995867751542&secret=111d756e983441a5f65118a041c954da',
          method: 'get',
          data: {
            grant_type: 'client_credential',
            appid: 'wx5d85995867751542',
            secret: '111d756e983441a5f65118a041c954da'
          }
        }).then(function(response) {
          console.log(response)
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    created (){
      Toast('提示信息');
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
    }
  }
</style>
