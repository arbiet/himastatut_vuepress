import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { svgIconPlugin } from '@goy/vuepress-plugin-svg-icons'
import { baseConfig } from './config/base.js';
import { themeConfig } from './config/theme.js';

export default defineUserConfig({
  ...baseConfig,
  theme: themeConfig,
  bundler: viteBundler(),
  plugins:[svgIconPlugin()]
})
