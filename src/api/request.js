export const createFormData = (param) => {
  const formData = new FormData()
  for (const key in param) {
    formData.append(key, param[key])
  }
  return formData
}

/**
 * 封装--window.fetch
 * @param param: {
 *   url: '',
 *   method: 'POST',// 'GET' | 'POST' | 'PUT'
 *   data: {},
 *   requestBodyType: 'String',// String | FormData | Blob/File | ArrayBuffer | ArrayBufferView (Uint8Array等) | URLSearchParams
 *   responseBodyType: 'JSON',// String | FormData | JSON | ArrayBuffer | Blob
 *   needToken: Boolean,
 *   redirectAfterFailAuth: Boolean,
 *   ...
 * }
 * @returns {Promise<Response>}
 */
const defaultParam = {
  method: 'GET',
  mode: 'cors',
  data: {},
  requestBodyType: 'String',
  responseBodyType: 'JSON',
  needToken: true,
  redirectAfterFailAuth: true
}
// @ts-ignore
export const request = async (param) => {
  console.log(param, 'param')
  const paramAfterAssign = { ...defaultParam, ...param }
  console.log(paramAfterAssign['data'], 'paramAfterAssign')
  const headers = Object.assign(
    {},
    paramAfterAssign['requestBodyType'] === 'String'
      ? { 'Content-Type': 'application/json' }
      : null,
    paramAfterAssign['needToken'] ? { 'x-auth-token': localStorage.getItem('token') } : null,
    paramAfterAssign['needToken'] ? { 'x-share-token': localStorage.getItem('share-token') } : null
  )
  // fetch param demo
  //
  // init:{
  //   body: JSON.stringify(data), // must match 'Content-Type' header
  //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: 'same-origin', // include, same-origin, *omit
  //   headers: {
  //     'user-agent': 'Mozilla/4.0 MDN Example',
  //     'content-type': 'application/json'
  //   },
  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'cors', // no-cors, cors, *same-origin
  //   redirect: 'follow', // manual, *follow, error
  //   referrer: 'no-referrer', // *client, no-referrer
  // }
  const init = {
    method: paramAfterAssign['method'],
    headers,
    body: paramAfterAssign['data']
  }
  let url = import.meta.env.VITE_BASE_URL + paramAfterAssign['url']
  if (paramAfterAssign['method'] === 'POST') {
    // 如果是post格式- 合并请求
    if (paramAfterAssign['requestBodyType'] === 'String') {
      debugger
      Object.assign(init, { body: JSON.stringify(paramAfterAssign['data']) })
    }
    if (paramAfterAssign['requestBodyType'] === 'FormData') {
      Object.assign(init, { body: createFormData(paramAfterAssign['data']) })
    }
  }
  console.log(init, 'init')
  if (paramAfterAssign['method'] === 'GET') {
    // 判断是get请求的话修改请求参数
    const params = paramAfterAssign['data'] || {}
    // @ts-ignore
    const paramsArray = []
    // 拼接参数
    Object.keys(params).forEach((key) => paramsArray.push(key + '=' + params[key]))
    console.log(paramsArray, 'paramsArray')
    if (paramsArray.length > 0) {
      if (url.search(/\?/) === -1) {
        // @ts-ignore
        url += '?' + paramsArray.join('&')
      } else {
        // @ts-ignore
        url += '&' + paramsArray.join('&')
      }
    }
  }

  /**
   * 针对fetch进行兼容
   */
  const compatibleFetch = window.fetch
  try {
    // @ts-ignore
    const result = await compatibleFetch(url, init)
    if (200 !== result.status) {
      return {
        status: result.status,
        code: 'NET_ERROR',
        msg: `网络错误！${result.status}`
      }
    }
    if ('String' === paramAfterAssign['responseBodyType']) {
      return result.text()
    }
    if ('ArrayBuffer' === paramAfterAssign['responseBodyType']) {
      return result.arrayBuffer()
    }
    if ('Blob' === paramAfterAssign['responseBodyType']) {
      return result.blob()
    }
    if ('FormData' === paramAfterAssign['responseBodyType']) {
      return result.formData()
    }
    if ('JSON' === paramAfterAssign['responseBodyType']) {
      const resultJson = await result.json()
      // debugger
      if (1 === resultJson.code) {
        // 退出到登录页
        localStorage.clear()
        window.location.href = window.location.origin + '/login'
      }
      return resultJson
    }
  } catch (e) {
    return e
  }
}
