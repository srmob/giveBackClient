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
        controller: 'userController'
      }
    }
  })

  .state('menu.donate1', {
    url: '/donate/:donationDetails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/donate.html',
        controller: 'userController'
      }
    }
  })

  .state('menu.nGO', {
    url: '/ngo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nGO.html',
        controller: 'ngoCtrlr'
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
        templateUrl: 'templates/allNGONeeds.html',
        controller: 'ngoNeedsCatgCtrlr'
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
    url: '/ngoNeed/:catg/:items',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nGONeeds.html',
        controller: 'anNGOAskCtrlr'
      }
    }
  })
  .state('menu.registerOrg', {
    url: '/registerOrg',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orgRegister.html',
        controller: 'ngoCtrlr'
      }
    }
  })


$urlRouterProvider.otherwise('/side-menu21/donate')

  

});