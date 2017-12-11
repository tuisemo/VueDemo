import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: {
      	template:`
      	<div>
      	<h1>关于我们</h1>
      	</div>
      	`
      }
      children:[
      {
      	path:'/'
      }
      ]

      }
    }
  ]
})
