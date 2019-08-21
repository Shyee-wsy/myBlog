import UserApi from '@/api/user'

const user = {
  state: {
    avatarUrl: null,
    name: null,
    location: null,
    blog: null,
    followers: 0,
    following: 0
  },
  mutations: {
    SET_AVATAR_URL: (state, value) => {
      state.avatarUrl = value
    },
    SET_NAME: (state, value) => {
      state.name = value
    }
  }
}
