import vueImgLazyload from './vue-imglazyload'
const imglazyload = {
    install (Vue, options) {
        Vue.component(vueImgLazyload.name, vueImgLazyload);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(imglazyload)
}
export default imglazyload