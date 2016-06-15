module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.js',
    '/bower_components/web-animations-js/web-animations.min.js',
    '/bower_components/webrtc-polyfill/index.js',
    '/src/images/*'
  ],
  navigateFallback: '/index.html',
  runtimeCaching: [
    {
      urlPattern: /\/src\/images\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxEntries: 200,
          name: 'images-cache'
        }
      }
    }
  ]
};