import PRadio from './src/radio';
import PRadioGroup from './src/radio_group'

/* istanbul ignore next */
PRadio.install = function(Vue) {
  Vue.component(PRadio.name, PRadio);
};/* istanbul ignore next */

PRadioGroup.install = function(Vue) {
  Vue.component(PRadioGroup.name, PRadioGroup);
};

export  {PRadio,PRadioGroup};
