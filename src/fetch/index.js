import {
  getFullUrl,
  prepareBody,
  prepareHeaders,
  prepareUrl,
  finishUrl,
  appendHeader,
  handleErrors,
  toJson,
} from './utils'

let store = {}

export function setStore(s = {}) {
  store = s
}

export default function(props = {}) {
  const {
    url,
    fullUrl = false,
    params,
    body,
    mode = 'cors',
    method = 'GET',
    headers = {},
    noHeaders = false,
    contentType = 'application/json',
    token,
  } = props

  const {getState = () => {}} = store

  const state = getState()

  const options = {
    method,
    mode,
    body: prepareBody(body, method),
    headers: prepareHeaders(headers, method, contentType, noHeaders),
  }

  let totalUrl
  totalUrl = getFullUrl({url, fullUrl})
  totalUrl = prepareUrl(totalUrl, method, params)
  totalUrl = finishUrl(totalUrl)

  const fetchWrap = () => {
    if (token) {
      appendHeader(options.headers, 'AUTHORIZATION', 'bearer ' + token)
    }

    return fetch(totalUrl, options)
      .then(handleErrors)
      .then(toJson)
      .catch((error) => {
        if (error.status) {
          return Promise.reject(error)
        } else {
          const errorObject = {}
          errorObject.status = null
          errorObject.message = `Network error`
          errorObject.extra = `Error: ${error.message}`

          return Promise.reject(errorObject)
        }
      })
  }

  return fetchWrap()
}
