/*
第一步:
npm install --save art-template
npm install --save express-art-template
*/

const express = require('express')
const app = express()
/*
第二步:
在express中配置art-template
第一个参数表示：当渲染以.art结尾的文件时，使用art-template模板引擎
express-art-template是专门用在Express中把art-template整合到Express中
虽不加载art-template 但也必须安装（由于express-art-template依赖art-template）
*/
app.engine('art',require('express-art-template'))  

/*
结果:
- Express为Response相应对象提供了一个方法: render
- render默认是不可使用的，但是如果配置了模板引擎就可以使用了
- res.render('html模板名',{模板数据})
注意: 第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
也就是说 Express 有一个约定: 开发人员把所有的视图放到view目录中
- 如果想要修改默认views目录，则可以app.set('views',默认路径)
*/
app.get('/',(req,res)=>{})
app.listen(3000,()=> console.log('server is running'))