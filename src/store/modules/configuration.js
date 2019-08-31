const configuration = {
  state: {
    githubUsername: 'Shyee-wsy',
    htmlTile: '',
  },

  mutations: {
    SET_CONFIGURATION: (state, configuration) => {
      state.githubUsername = configuration['githubUsername'] || 'Shyee-wsy'
      state.htmlTile = configuration['htmlTitle'] || `${state.githubUsername}的博客`
    }
  },

  actions: {
    LocalReload ({ commit }, configuration) {
      commit('SET_CONFIGURATION', configuration)
    },
    Init( { commit }){
      let xmlhttp
      //判断浏览器是否支持XHR对象
      if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
      } else {
        // IE7之前的版本
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
      }
      xmlhttp.send()
      let configuration = JSON.parse(xmlhttp.responseText)
      commit('SET_CONFIGURATION', configuration)
    }
  }
}

export default configuration
