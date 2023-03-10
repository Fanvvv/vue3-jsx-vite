import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.scss'
import App from './App'
import { MyRouteType } from './mytypes'

// 找到 examples 下的文件
const examples = import.meta.glob('./examples/**/*.tsx')
console.log(examples);

const routes: MyRouteType[] = []

const examplePromises = Object.keys(examples).map(x => examples[x]).map(f => f())

Promise.all(examplePromises).then(list=> {

  for (let module of list) {
    
    if (typeof module === 'object') {
      for (let key in module) {
        routes.push({
          path : "/" + key.toLocaleLowerCase(),
          key,
          component : (module as any)[key]
        })
      }
    }
  }

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })
  
  createApp(App, { routes }).use(router).mount('#app')
})


