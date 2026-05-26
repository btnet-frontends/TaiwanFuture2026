import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import 'aos/dist/aos.css'

export const createApp = ViteSSG(
  App,
  {
    routes: [{ path: '/', component: App }],
    base: '/bt_topic/2026/TaiwanFuture/'
  }
)