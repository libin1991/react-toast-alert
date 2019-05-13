const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const rewireLess = require('react-app-rewire-less');
var path = require('path');
const excludeFiles = require('postcss-exclude-files').default;
const addCustomize = () => config => {
  config.resolve={
    alias: {   //模块别名定义，方便后续直接引用别名，无须多写长长的地址
      '@':path.join(__dirname, './', 'src'),     //设置相对路径，参考Vue脚手架  @相当于./src/...
    }
  },
  require('react-app-rewire-postcss')(config, {
        plugins: loader => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
                autoprefixer: {
                    flexbox: 'no-2009',
                },
                stage: 3,
            }),
            require('postcss-aspect-ratio-mini')({}),
            require('postcss-px-to-viewport')({
                viewportWidth: 750, // (Number) The width of the viewport.
                viewportHeight: 1334, // (Number) The height of the viewport.
                unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
                viewportUnit: 'vw', // (String) Expected units.
                selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
                minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
                mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
                exclude:/heart/gi  //过滤文件夹
            }),
            require('postcss-write-svg')({
                utf8: false
            }),
            require('postcss-viewport-units')({}),
//          require('cssnano')({
//              preset: "advanced",
//              autoprefixer: false,
//              "postcss-zindex": false
//          })
						
        ]
    });
  return config;
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'ant-mobile',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    //modifyVars: { '@primary-color': '#1DA57A' }, # 这里不注释掉，那你的无法修改主题色primary-color 这里很坑的 要注意！
  }),
  addCustomize(),
);
