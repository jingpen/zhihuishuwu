// 这里是node的js语法,文件的引入不能使用es6 import
// 只能使用common.js  require
// 获取本地json文件
// var data = require('./data.json')
// var seller = data.seller
// var goods = data.goods
// var ratings = data.ratings
// 将需要修改webpack配置的对象通过module.exports公开出去
// TODO:如果真实开发请让你的api与公司的api保持一致,项目完成后打包上架时,不会打包此处的代码! 你项目中网络请求与公司提供的api不一致导致无法请求数据

module.exports = {
    // runtimeCompiler:true,
    // publicPath:'./',
    // outputDir:undefined,
    // assetsDir:undefined,
    // productionSourceMap:undefined,
    // parallel:undefined,
    // css:undefined,
    devServer: { 
        

        //     before(app) {
        //         // 在服务器开始创建时声明当前本地服务
        //         // app代表服务器,get当前api为get请求,
        //         app.get('/ele/seller', function (req, res) {
        //             res.json({data: seller});
        //         });
        //         app.get('/ele/goods', function (req, res) {
        //             res.json({data: goods});
        //             // res.json 后台向前端返回json数据
        //         });
        //         app.get('/ele/ratings', function (req, res) {
        //             res.json({data: ratings});
        //         });
        //     },
        // 跨域api代理设置,TODO:跨域代理同样不会被打包到上架项目中,所以跨域api与真实服务保持一致


        proxy: {
            // "/api": { // 当项目向/api开头的路径发送请求都会通过服务器代理访问target网站
            //     target: "http://capi.douyucdn.cn", // 代理跳转的目标网站
            //     changeOrigin: true, // 代理跳转至指定的host
            //     // 当你要 http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0
            //     // 只需要访问 /api/v1/live?limit=20&offset=0
            // },
            // // http://v2.api.dmzj.com/recommend.json
            // "/dmzj": {
            //     target: "http://v2.api.dmzj.com",
            //     changeOrigin: true,
            //     // 路径重写之前请求 "/dmzj/recommend.json" => http://v2.api.dmzj.com/dmzj/recommend.json
            //     pathRewrite: { // 路径重写
            //         '^/dmzj': '', // rewrite path
            //         // 路径重写之后 /dmzj 被替换成了空字符 请求 "/dmzj/recommend.json" => http://v2.api.dmzj.com/recommend.json
            //     }
            // },
            // http://api.zhuishushenqi.com/cats/lv2/statistics
            "/cats": {
                target: "http://api.zhuishushenqi.com",
                changeOrigin: true
            },
            // https://api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=%E5%A5%87%E5%B9%BB&minor=&start=0&limit=20
            "/book":{
                target: "http://api.zhuishushenqi.com",
                changeOrigin:true
            },
            // http://api.zhuishushenqi.com/ranking/gender
            "/ranking":{
                target:"http://api.zhuishushenqi.com",
                changeOrigin:true
            },
            // http://lunbo.gdugm.cn/search/suggest?key=间客
            "/search":{
                target:"http://lunbo.gdugm.cn",
                changeOrigin:true
            },
            // http://lunbo.gdugm.cn/toc/mix?bookId=50874442abf1ced53c00002c'
            "/toc":{
                target:"http://lunbo.gdugm.cn",
                changeOrigin:true
            },
            //http://chapter.xmxingheju.com/chapter/http%3A%2F%2Fbook.kdqb.cc%2FgetBooks.aspx%3Fmethod%3Dcontent%26bookId%3D22517%26chapterFile%3DU_22517_201904151010206041_1692_1.txt
            "/chapter":{
                target:"http://chapter.xmxingheju.com",
                // changeOrigin:true
            },

        }
    },
}
