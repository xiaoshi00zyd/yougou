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
// 品牌专区
export function getHomeBaner () {
  return axios.get('HomeBaner')
}
// 为你推荐
export function getRecommend () {
  return axios.get('recommend')
}

// 优购分类接口 全部品牌
export function getOptionGroup () {
  return axios.get('Allboot')
}
// 优购分类接口 女鞋
export function getWomanShoe () {
  return axios.get('womenShoes')
}
// 优购分类接口 男鞋
export function getManShoe () {
  return axios.get('manShoes')
}
// 优购分类接口 运动
export function getSoprt () {
  return axios.get('soprt')
}
// 优购分类接口 户外
export function getOutdoor () {
  return axios.get('outdoor')
}
// 优购分类接口 童装
export function getChild () {
  return axios.get('child')
}
// 发现接口
export function getDiscover () {
  return axios.get('discover')
}

// 主页定制接口
export function getcustomization () {
  return axios.get('customization')
}
