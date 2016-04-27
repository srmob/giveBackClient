angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.donate', {
    url: '/donate',
    views: {
      'side-menu21': {
        templateUrl: 'templates/donate.html',
        controller: 'donateCtrl'
      }
    }
  })

  .state('menu.nGO', {
    url: '/ngo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nGO.html',
        controller: 'nGOCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.needs', {
    url: '/needs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/needs.html',
        controller: 'needsCtrl'
      }
    }
  })

  .state('menu.aboutNGO', {
    url: '/ngoabout',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aboutNGO.html',
        controller: 'aboutNGOCtrl'
      }
    }
  })

  .state('menu.nGONeeds', {
    url: '/ngoNeed',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nGONeeds.html',
        controller: 'nGONeedsCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/side-menu21/ngo')

  

});