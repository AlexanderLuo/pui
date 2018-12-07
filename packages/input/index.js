import PInput from './src/input';

/* istanbul ignore next */
PInput.install = function(Vue) {
  Vue.component(PInput.name, PInput);
};

export default PInput;
