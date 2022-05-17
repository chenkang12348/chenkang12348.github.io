import type { UserConfig } from 'vitepress';
import { head } from './config/head';
const config: UserConfig = {
  title: 'F小站',
  description: '笔记！',
  head,
  lang: 'zh-cn',
  outDir: '../docs',
};
export default config;
