import store from '../index'
import Cookie from '@/utils/cookie'
import Vue from 'vue'
import UserApi from '@/api/user'

const TOKEN_KEY = 'TOKEN_KEY'
const token = {
  state: {
    token: Cookie.getCookie(TOKEN_KEY)//使用js-cookie的get方法获取cookie
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
    Authentication({ commit }, accessToken) {
      UserApi.verifyToken(accessToken).then((response) => {
        let result = response.data
        let githubUsername = store.state.configuration.githubUsername
        if(githubUsername === result['login']) {
          commit('SET_TOKEN', accessToken)
          Vue.prototype.$nofify({
            title: '成功',
            message: 'Token绑定成功',
            type:'success'
          })
        } else {
          Vue.prototype.$message({
            message: 'Token用户不一致',
            type: 'error'
          })
        }
      }).catch(() => {

      })
    },
    Cancellation ({ commit}) {
      commit('REMOVE_TOKEN')
      Vue.prototype.$message({
        message: 'Token取消绑定',
        type: 'info'
      })
    }
  }
}

export default token
