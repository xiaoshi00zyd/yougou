import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.11.99:3000/api/'
// 对返回的数据进行拦截
axios.interceptors.response.use(function (response) {
  // Do something with response data
//   返回response.data
  return response.data
}, function (error) {
// Do something with response error
  return Promise.reject(error)
})

export function getHomeBanner () {
  return axios.get('HomeBanner')
}
// 签到
export function getHomeSignin () {
  return axios.get('HomeSignin')
}
// 热门分类
export function getClassification () {
  return axios.get('classification')
}
// 限时秒杀
export function getClassHomeSeckill () {
  return axios.get('HomeSeckill')
}
// 精选活动
export function getActivity () {
  return axios.get('activity')
}
