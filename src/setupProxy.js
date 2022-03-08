/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax',  // /api/list /api/detail /api/center /api/cart
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true
    })
  );

//   app.use(
//     '/ajax2',  // /api/list /api/detail /api/center /api/cart
//     createProxyMiddleware({
//       target: 'https://i2.maoyan.com',
//       changeOrigin: true
//     })
//   );

//   app.use(
//     '/ajax3',  // /api/list /api/detail /api/center /api/cart
//     createProxyMiddleware({
//       target: 'https://i3.maoyan.com',
//       changeOrigin: true
//     })
//   );
};

//https://i.maoyan.com/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=B0CC71C096A911EBA609453370FBFE2C59BC3AF5D61A4344A1A7C05FABCF4D21&optimus_risk_level=71&optimus_code=10