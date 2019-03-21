TypeScript Webpack Specify "mainFields" for Individual Modules Demo
==================================================================

webpack在打包modules的时候，如果希望使用module1的`main`字段指定的bundle文件，
同时使用module2的`module`字段指定的文件，怎么办？

当前做不到：<https://github.com/webpack/webpack/issues/5756>

因为`mainFields`一旦设定，则对所有的module一起生效。
