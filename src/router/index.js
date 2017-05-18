import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Hello from '@/components/Hello'
import Test from '@/components/Test'

Vue.use(Router)

const aRouters = [
  {
    path: '/',
    name: 'Hello',
    component: Hello,
    meta: {
      notLogin: true
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      notLogin: true
    }
  }
]

const router = new Router({
  routes: aRouters
})

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

router.beforeEach((to, from, next) => {

  if (to.matched.some(r => !r.meta.notLogin)) {
    if (store.state.token) {
      next()
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next()
  }
})

export default router
