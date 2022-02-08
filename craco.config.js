/* 
通过 CRA（create-react-app）和 craco + craco-alias 创建的 typescript 模板项目如何设置 alias path
url：
<<<<<<< HEAD
https://juejin.cn/post/6990896895077908487  
or:
https://blog.csdn.net/huaqi_/article/details/122690410
 */

const CracoAlias = require('craco-alias')

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: './tsconfig.path.json',
            },
        },
    ],
}
