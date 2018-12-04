import PButton from './button/index';
import PRow from './row/index'
import PCol from './col/index'
import {
  Container as PContainer,
  Header as PHeader,
  Aside as PAside,
  Content as PContent,
  Footer as PFooter
} from './container/index'


const components = [
  PButton,
  PRow,
  PCol,
  PContainer,
  PAside,
  PContent,
  PHeader,
  PFooter,
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}


export default {
  install,
  PButton,
  PRow,
  PCol,
  PContainer,
  PAside,
  PContent,
  PHeader,
  PFooter
}
