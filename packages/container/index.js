import Container from './src/container';
import Header from './src/header'
import Aside from './src/aside'
import Content from './src/content'
import Footer from './src/footer'


/* istanbul ignore next */
Container.install = function(Vue) {
  Vue.component(Container.name, Container);
};
/* istanbul ignore next */
Aside.install = function(Vue) {
  Vue.component(Aside.name, Aside);
};
Content.install = function(Vue) {
  Vue.component(Content.name, Content);
};

Header.install = function(Vue) {
  Vue.component(Header.name, Header);
};

Footer.install = function(Vue) {
  Vue.component(Footer.name, Footer);
};

export  {Container,Header,Aside,Content,Footer};
