const moduleAlias = require('module-alias');
const path = require('path');
moduleAlias.addAliases({
  // eslint-disable-next-line no-undef
  '@controllers': path.resolve(__dirname, '../controllers'),
  // eslint-disable-next-line no-undef
  '@services': path.resolve(__dirname, '../services'),
  // eslint-disable-next-line no-undef
  '@configs': path.resolve(__dirname, '../configs'),
  // eslint-disable-next-line no-undef
  '@middlewares': path.resolve(__dirname, '../middlewares'),
  // eslint-disable-next-line no-undef
  '@routes': path.resolve(__dirname, '../routes'),
  // eslint-disable-next-line no-undef
  '@common': path.resolve(__dirname, '../common'),
  // eslint-disable-next-line no-undef
  '@models': path.resolve(__dirname, '../models'),
  // eslint-disable-next-line no-undef
  '@utils': path.resolve(__dirname, '../utils'),
});
