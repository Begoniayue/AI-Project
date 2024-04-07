const routes = [
  {
    path: '/',
    name: 'home',
    /* 重定向 */
    component: () => import("@/views/Home/index.vue"),
  },
  /* 所有找不到的路由都会跳转到404页面 */
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: () => import("@/views/Home/home.vue"),
  // },
]

export default routes
