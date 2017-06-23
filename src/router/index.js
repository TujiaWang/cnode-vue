import Vue from 'vue'
import Router from 'vue-router'
import All from '@/components/All'
import Good from '@/components/Good'
import Share from '@/components/Share'
import Ask from '@/components/Ask'
import Job from '@/components/Job'
import Dev from '@/components/Dev'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/all'
    },
    {
      path:'/all',
      component:All
    },
    {
      path:'/good',
      component:Good
    },
    {
      path:'/share',
      component:Share
    },
    {
      path:'/ask',
      component:Ask
    },
    {
      path:'/job',
      component:Job
    },
    {
      path:'/dev',
      component:Dev
    }
  ]
})
