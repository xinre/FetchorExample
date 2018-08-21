// 格式化对象型url
const formatUrl = (urlObj) => {
  if (typeof(urlObj) === 'string') {
    return urlObj
  }

  let url = `/pages/${urlObj.name}/main`
  let params = urlObj.params

  if (params) {
    url += '?'
    for (let key in params) {
      url += `${key}=${params[key]}&`
    }
    url = url.substring(0, url.length - 1)
  }

  return url
}

class Router {
  constructor () {
    this.push = urlObj => new Promise((resolve, reject) => {
      wx.navigateTo({
        url: formatUrl(urlObj),   // 格式化对象型url
        success: (msg) => {
          resolve(msg)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })

    this.replace = urlObj => new Promise((resolve, reject) => {
      wx.redirectTo({
        url: formatUrl(urlObj),   // 格式化对象型url
        success: (msg) => {
          resolve(msg)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
}



export {
  Router
}
