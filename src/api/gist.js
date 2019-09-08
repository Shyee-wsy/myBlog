import request from '@/utils/request'
import store from '../store/index'

export default {
  gistsCollection: function(query) {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `/users/${githubUsername}/gists?page=${query.current_page}&per_page=${query.page_size}`
    })
  },
  singleGist: function(gistId){
    return request({
      url: `/gists/` + gistId
    })
  },
  createGist(form){
    let files = {}
    files[form.filename] = { content: form.content }
    return request({
      method: 'POST',
      url: `/gists`,
      data: {
        'public': true,
        'description': form.tag,
        'files': files
      }
    })
  },
  editGist(gistId, form){
    let files = {}
    files[form.filename] = { content: form.content }
    return request({
      method: 'PATCH',
      url: `/gists/` + gistId,
      data: {
        'description': form.tag,
        'files': files
      }
    })
  },
  deleteGist(gistId) {
    return request({
      method: 'DELETE',
      url: `/gists/` + gistId
    })
  }
}
