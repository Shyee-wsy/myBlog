import Cookies from 'js-cookie'

export default {
  setCookie (key, value, time) {
    if (time) {
      // 设置cookie
      return Cookies.set(key, value, {
        expires: time // 时效
      })
    }
    return Cookies.set(key, value)
  },
  getCookie(key) {
    // 读取cookie
    return Cookies.get(key)
  },
  removeCookie (key) {
    // 删除cookie
    return Cookies.remove(key)
  }
}
