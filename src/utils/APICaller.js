import axios from 'axios'

const baseUrlSherpa = 'https://sherpa-api-huynhlv.herokuapp.com/api'
const baseUrlMedia = 'https://adtech2019.herokuapp.com/api'
const baseUrlPublicsher = 'http://ad-tech-dac.herokuapp.com/api/social_accounts'

export function CallerSherpa(endpoint, method = 'GET', body = {}) {
  return axios(
    `${baseUrlSherpa}/${endpoint}`,
    {
      method: method,
      data: body
    })
}

export function CallerMedia(endpoint, method = 'GET', body = {}) {
  return axios(
    `${baseUrlMedia}/${endpoint}`,
    {
      method: method,
      data: body
    })
}
export default function CallerPublicsher(endpoint, method = 'GET', body = {}) {
  return axios(
    `${baseUrlPublicsher}/${endpoint}`,
    {
      method: method,
      data: body
    })
}