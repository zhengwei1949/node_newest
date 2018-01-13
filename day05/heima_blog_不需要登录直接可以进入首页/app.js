//  项目的入口文件
// 这里应该写什么代码？？？ 创建一个 Node 服务器   http   express
const express = require('express')
// 创建web服务器
const app = express()

// 配置模板引擎
// ejs 模板引擎中，默认文件的后缀名是 .ejs
app.set('view engine', 'ejs')
app.set('views', './views')


// 托管静态资源目录
app.use('/node_modules', express.static('./node_modules'))

// 配置 body-parser 来解析表单数据
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


// 导入自己的路由模块并使用 app.use 来注册
const router = require('./router.js')
app.use(router)

app.listen(3000, () => {
  console.log('server running at http://127.0.0.1:3000')
})

// 1. 创建基本的web服务器
// 2. 如果所有的路由都写到 app.js 中，这样不易维护，所以创建路由
// 3. 因为要渲染页面，所以配置模板引擎
// 4. 我们渲染页面时候，想要美化样式，就用到了bootstrap，此时，托管静态资源目录node_modules
// 5. body-parser 来解析表单数据