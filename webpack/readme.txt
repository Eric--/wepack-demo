1.  webpack --display-error-details //执行

2.  webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包

3.  webpack --watch   //监听变动并自动打包

4.  webpack -p    //压缩混淆脚本，这个非常非常重要！

5.  webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了

6.  webpack-dev-server --progress --colors  //监听自动刷新

7.  webpack --display-error-details    //打印错误细节，查找原因

8.  package.json 配置
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"

    webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
    --devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
    --progress - 显示合并代码进度
    --colors - Yay，命令行中显示颜色！
    --content-base build - 指向设置的输出目录

9.  webpack 重新打包要使用 ，webpack-dev-server 只是监控刷新，并不能重新打包
