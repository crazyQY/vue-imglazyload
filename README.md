# vue-simple-imglazy

> A Vue component to image lazy loading

## 安装

``` bash
# install dependencies
npm install vue-simple-imglazy -S
```

## 使用

```
import imgLazyload from 'vue-simple-imglazy'

Vue.use(imgLazyload)
```

## 配置

```
<!-- 在自定义class中设置宽高 -->
<img-lazyload    

	class="imglazy"

	v-for="img in images"

	:src="img.src"

	:loadingImg="loading"

	:errorImg="error">

</img-lazyload>

```

## Props

| name       | Description | type   | default |
| ---------- | ----------- | ------ | ------- |
| src        | 图片的真实地址     | String | ''      |
| loadingImg | 加载图片时的样式    | String | ''      |
| errorImg   | 加载失败时的样式    | String | ''      |

