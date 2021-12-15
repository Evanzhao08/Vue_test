/*
 * @Author: your name
 * @Date: 2021-12-12 22:47:12
 * @LastEditTime: 2021-12-14 22:45:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue_test1\vue.config.js
 */
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
    },
  },
   //lintOnSave:false,// false 关闭语法检查, true 开启
    //开启代理服务器(方式一)
   /*   devServer: {
    proxy: "http://localhost:5000",
  }, */
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws: true, //用于支持websocket
        changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws: true, //用于支持websocket
        changeOrigin: true
      }
    }
  }
};
