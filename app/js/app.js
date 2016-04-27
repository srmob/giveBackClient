// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var ngoApp = angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives','ion-gallery'])


.constant('RestAPIEndPointUrl','http://localhost:3000/api/v1') 
//.constant('RestAPIEndPointUrl','https://limitless-harbor-19627.herokuapp.com/api/v1')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function(ionGalleryConfigProvider) {
  ionGalleryConfigProvider.setGalleryConfig({
      action_label: 'Close',
      toggle: false,
      row_size: 3,
      fixed_row_size: true
  });
});