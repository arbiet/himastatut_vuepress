import { defaultTheme } from '@vuepress/theme-default';
import { navbarConfig } from './navbar.js';
// import { sidebarConfig } from './sidebar.js';


export const themeConfig = defaultTheme({
  logo: '/images/logo.png',
  navbar: navbarConfig,
//   sidebar: sidebarConfig,
});
