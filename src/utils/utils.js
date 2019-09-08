export default {
  parseHeader (headers) {
    try {
      let linkArr = headers['link'].split(",")
      for (let i = 0; i < linkArr.length; i++) {
        let temp = linkArr[i]
        if (temp.indexOf('rel=\"last\"') < 0) {
          continue
        }
        let paramArr = temp.split(/[\?&]/)
        for (let j = 0; j < paramArr.length; j++) {
          let stemp = paramArr[j]
          let kv = stemp.split("=")
          if (kv[0] != "page") {
            continue
          }
          return parseInt(kv[1])
        }
      }
    } catch (e) {
    }
    return 0
  }
}
