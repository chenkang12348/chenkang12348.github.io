import App from './App.vue';
import SvgIcon from './Icon/SvgIcon.vue';
import Tag from './common/Tag.vue';

import type { Component, Plugin } from 'vue';

const components = [SvgIcon, Tag] as Component[];
const plugins = [] as Plugin[];
export { components, plugins };
export default App;
