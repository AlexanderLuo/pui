import PRadio from './src/radio';

/* istanbul ignore next */
PRadio.install = function(Vue) {
  Vue.component(PRadio.name, PRadio);
};

export default PRadio;
