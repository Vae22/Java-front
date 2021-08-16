import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from "../views/BookManage";
import AddBook from "../views/AddBook";
import Index from "../views/Index"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "图书管理",
    component:Index,
    redirect: "/BookManage",
    children:[
      {
        /*path为请求路径，component引用组件*/
        path: "/BookManage",
        name: "查询图书",
        component: BookManage
      },
      {
        path: "/AddBook",
        name: "添加图书",
        component: AddBook
      }
    ]
  },


/*  {
    path: '/book',
    name: 'Book',
    component: Book
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo
  },
  {
    path: '/bar',
    name: 'Bar',
    component: Bar
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
