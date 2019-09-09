import Cookie from '@/utils/cookie'
import UserApi from '@/api/user'
import Vue from 'vue'
import store from '../index'

const TOKEN_KEY = 'TOKEN_KEY'
const token = {
  state:{
    token: Cookie.getCookie(TOKEN_KEY)
  },
  mutations: {
    SET_TOKEN: (state, value) => {
      state.token = value
      Cookie.setCookie(TOKEN_KEY, value, 5)
    },
    REMOVE_TOKEN: (state) => {
      state.token = null
      Cookie.removeCookie(TOKEN_KEY)
    }
  },
  actions: {
    Authentication({ commit }, accessToken) { //参数为 context.commit 和 荷载accessToken
      UserApi.verifyToken(accessToken).then((response) => {
        let githubUsername = store.state.configuration.githubUsername
        if(githubUsername === response.data['login']) {
          commit('SET_TOKEN', accessToken)
          Vue.prototype.$notify({
            title: '成功',
            message: 'Token绑定成功',
            type: 'success'
          })
        } else {
          Vue.prototype.$message({
            message: 'Token用户不一致',
            type: 'error'
          })
        }
      }).catch(() => {
        console.log('token绑定失败')
      })
    },
    Cancellation({ commit }){
      commit('REMOVE_TOKEN')
      Vue.prototype.$message({
        message: 'Token取消绑定',
        type: 'info'
      })
    }
  }
}

export default token
