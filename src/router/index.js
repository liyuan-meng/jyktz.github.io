import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ImportantLinks from '@/components/ImportantLinks'
import Group from '@/components/Group'
import Instrument from '@/components/Instrument'
import Achievement from '@/components/Achievement'
import News from '@/components/News'
import Article from '@/components/Article'
import Research from '@/components/Research'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/important_link',
    name: 'important_link',
    component: ImportantLinks
  }, {
    path: '/group',
    name: 'group',
    component: Group
  }, {
    path: '/instrument',
    name: 'instrument',
    component: Instrument
  }, {
    path: '/achievement',
    name: 'achievement',
    component: Achievement
  }, {
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/article',
    name: 'article',
    component: Article
  }, {
    path: '/research',
    name: 'research',
    component: Research
  }]
})
