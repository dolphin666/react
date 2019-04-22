const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin') //导入 在内存中自动生成index 页面的插件

// 创建一个插件的实例
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'),//源文件
    filename:'index.html'//生成的内存中首页的名称
})

// 向外暴露一个打包的配置对象
module.exports = {
    //webpack配置
	//关闭 webpack 的性能提示
    performance: {
        hints:false
    },
    mode:'development',//development production
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[
            {test:/\.js|jsx/,use:'babel-loader',exclude:/node_modules/},
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'],
        alias:{
            '@':path.join(__dirname,'./src')
        }
    }
}