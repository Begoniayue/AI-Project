const container = () => import("@/components/Container/Container.vue")
const routes = [
  {
    path: '/',
    name: 'Square',
    component:container,
    children: [
      {
        path: '/',
        name: 'Square',
        component: () => import("@/views/Home/Square.vue"),
      },
        {
          path: '/plug',
          name: 'plug',
          component: () => import("@/views/Plug/Plug.vue"),
        },
      ]
  },
  /* 所有找不到的路由都会跳转到404页面 */
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: () => import("@/views/Home/home.vue"),
  // },
]

export default routes
