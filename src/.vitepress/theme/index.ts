import type { Theme } from 'vitepress';
import Layout, { components } from '../../components';
import * as icons from '../../components/Icon/libs';
const define = <T>(value: T): T => value;
import '../style/index.less';
export default define<Theme>({
  Layout,
  NotFound: () => '404',
  enhanceApp: ({ app }) => {
    components.forEach((com) => {
      app.component(com.name, com);
    });
    Object.keys(icons).forEach((icon) => {
      app.component(icon, icons[icon]);
    });
  },
});
