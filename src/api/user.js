/*
用户相关api
*/

export default {
  login(callback){
    let jData = {
      userId: 11111,
      userName: 'jeff',
      token: 'token666'
    }
    setTimeout(() => callback(jData), 1000)
  },

  reg(){

  },

  logout(){

  }
}

