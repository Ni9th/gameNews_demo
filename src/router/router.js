import Home from '@/views/Home/Home.vue'
import layOut from '@/views/LayOut/index.vue'
import search from '@/views/search/index.vue'
import findGames from '@/views/findGames/index.vue'
import findStrategy from '@/views/findStrategy/index.vue'
import community from '@/views/community/index.vue'
import personalCenter from '@/views/personalCenter/index.vue'
import focusTopic from '@/views/Home/focusTopic.vue'
import hotTopic from '@/views/Home/hotTopic.vue'
import About from '@/views/About.vue'
import strategyOfGames from '@/views/findStrategy/strategyOfGames.vue'
import gameTools from '@/views/findStrategy/gameTools.vue'
import filter from '@/views/community/filter.vue'
import artical from '@/views/artical/index.vue'
import comment from '@/views/artical/comment.vue'
import gameDetails from '@/views/gameDetails/index.vue'
import login from '@/views/login/index.vue'

import edit from '@/views/edit/index.vue'
import blockFilter from '@/views/edit/blockFilter.vue'
// eslint-disable-next-line camelcase
import not_found from '@/views/404page/index.vue'
import gameStages from '@/views/findGames/gameStages.vue'
// const _import_ = file => () => import('@/views/' + file + '.vue')

export default [
  {
    path: '/',
    name: '首页',
    redirect: '/home',
    component: layOut,
    children: [
      { path: 'home', component: Home, name: '首页1' }
    ]
  }, {
    path: '/gameTools',
    component: layOut,
    redirect: '/',
    children: [
      { path: '/', component: gameTools, name: '攻略2' }
    ]
  }, {
    path: '/strategyOfGames',
    component: layOut,
    redirect: '/',
    children: [
      { path: '/', component: strategyOfGames, name: '攻略1' }
    ]
  }, {
    path: '/findGames',
    component: layOut,
    redirect: '/',
    children: [
      { path: '/', component: findGames, name: '游戏1' }
    ]
  }, {
    path: '/gameStages/:stageName',
    component: layOut,
    redirect: '/',
    children: [
      { path: '/', component: gameStages, name: '游戏2', props: true }
    ]
  }, {
    path: '/community',
    component: layOut,
    redirect: '/',
    children: [
      { path: '/', component: community, name: '社区1' }
    ]
  }, {
    path: '/filter',
    component: layOut,
    redirect: '/',
    meta: { slide: 1 },
    children: [
      { path: '/', component: filter, name: '社区2' }
    ]
  }, {
    path: '/hotTopic',
    component: layOut,
    redirect: '/',
    children: [
      { path: '/', component: hotTopic, name: '首页2' }
    ]
  }, {
    path: '/focusTopic',
    component: layOut,
    redirect: '/',
    children: [
      { path: '/', component: focusTopic, name: '关注' }
    ]
  }, {
    path: '/personalCenter',
    name: '个人中心',
    component: personalCenter
  }, {
    path: '/article/:id',
    name: 'article',
    meta: { slide: 1 },
    component: artical,
    props: true
  }, {
    path: '/comment/:id',
    name: 'comment',
    component: comment,
    props: true
  }, {
    path: '/gameDetails/:id',
    name: 'gameDetails',
    meta: { slide: 1 },
    component: gameDetails,
    props: true
  }, {
    path: '/search',
    name: 'search',
    meta: { slide: 1 },
    component: search
  }, {
    path: '/edit',
    name: 'edit',
    props: true,
    component: edit
  }, {
    path: '/blockFilter',
    name: 'blockFilter',
    meta: { slide: 1 },
    component: blockFilter
  }, {
    path: '/login',
    name: 'login',
    meta: { slide: 1 },
    component: login
  }, {
    path: '/About',
    name: 'About',
    component: About
  }, {
    path: '*',
    component: not_found
  }
]
