### 用法： 
1. ``` npm install ```
2. ``` sudo npm run dev ``` 
3. 进入devService.js，配置proxy(接口调用代理，没有可以不用配置)

### 打包:
``` npm run build ```

### 浏览器地址
未绑定域名的使用：
http://localhost/pages/index/index.html   
绑定了域名可以使用：
http://xxx.com/pages/index/index.html

### 开发说明
1. Html代码还是使用原生H5开发
2. 业务逻辑可以使用js或ts
3. 支持单页面和多页面打包
4. 样式可以直接写.css或.less，目前没接入sass，如果有需要自己接入就OK，比较简单

### 打正式包后，测试打包代码
``` npm run build ```  
``` npm run http ```   
然后根据提示打开链接进入dist目录，进入pages目录下对应的页面测试就oK