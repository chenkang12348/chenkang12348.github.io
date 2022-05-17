declare module '*.vue' {
  import { type DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
  export interface GlobalComponents {
    Github: typeof import('../src/components/Icon/libs')['Github'];
    Qingchu: typeof import('../src/components/Icon/libs')['Qingchu'];
    Article: typeof import('../src/components/Icon/libs')['Article'];
    Project: typeof import('../src/components/Icon/libs')['Project'];
    Xihuan: typeof import('../src/components/Icon/libs')['Xihuan'];
    Youxiang: typeof import('../src/components/Icon/libs')['Youxiang'];
  }
}
