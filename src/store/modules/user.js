import UserApi from '@/api/user'

const user = {
  state: {
    avatarUrl: null,
    name: null,
    blog: null,
    followers: 0,
    following: 0
  },

  mutations: {
    SET_AVATAR_URL: (state, value) =>{
      state.avatarUrl = value
    },
    SET_NAME: (state, value) => {
      state.name = value
    },
    SET_BLOG: (state, value) => {
      state.blog = value
    },
    SET_FOLLOWERS: (state, value) => {
      state.followers =value
    },
    SET_FOLLOWING: (state, value) => {
      state.following = value
    }
  },

  actions: {
    GetInfo ({ commit }){
      UserApi.getInfo().then((response) => {
        commit('SET_AVATAR_URL', response['avatar_url'])
        commit('SET_NAME', response['name'])
        commit('SET_BLOG', response['blog'])
        commit('SET_FOLLOWERS', response['followers'])
        commit('SET_FOLLOWING', response['following'])
      })
    }
  }
}

export default user
