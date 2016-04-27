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
angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('donateCtrl', function($scope) {

})
   
.controller('nGOCtrl', function($scope) {

})
      
.controller('needsCtrl', function($scope) {

})
   
.controller('aboutNGOCtrl', function($scope) {

})
   
.controller('nGONeedsCtrl', function($scope) {

})
 
angular.module('app.directives', [])

.directive('blankDirective', [function(){

}]);


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
angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);


(function(){
    var funcNGONeeds =function($scope,$stateParams,ngoService,$state ){
        $scope.category = $stateParams.catg;
        $scope.ngoNeeds = angular.fromJson($stateParams.items);
        //console.log(" NGO Needs data from state params is "+JSON.stringify($scope.ngoNeeds)); 

        /*$scope.showAllNGOsBasedOnCatg = function(){
            console.log(' ngo needs triggered for ctg: '+$stateParams.catg);
            ngoService.getNgoNeedsOnCatg($scope.category).then(function(data){
                $scope.ngoNeeds = data;
                console.log(" NGO Needs data from Services is "+JSON.stringify(data)); 
            });
            
            $scope.ngoNeeds = ngoService.getOrgNeedsOnCatg($scope.category);
            console.log(" NGO Needs data from Services is "+JSON.stringify($scope.ngoNeeds)); 
        };*/
        //$scope.showAllNGOsBasedOnCatg();
        $scope.donateForNGO = function(ngo){
            console.log('donate invoked for'+ngo);
            var donationData = angular.toJson(ngo);
            $state.go("menu.donate1",{donationDetails:donationData});
        }
    };
    ngoApp.controller('anNGOAskCtrlr',funcNGONeeds) ;
}());

(function(){
    var funcNGONeeds = function($scope,$stateParams,ngoService,$state){
        $scope.ngoData = [{"name": "NGO1","desc": "care about orphan kids","founded":"May 1, 2000","imgSrc" : "img/ngo1.jpeg","members":52},
                          {"name": "NGO2","desc": "care about elderly adults","founded":"May 1, 2010","imgSrc" : "img/ngo2.jpeg","members":40}
                         ];
        $scope.showAllOrgs = function(){
            ngoService.getAllOrgs().then(function(orgDataFromService){
              //console.log("org data from service is"+JSON.stringify(orgDataFromService));
              $scope.orgData = orgDataFromService;

            })
        };
        $scope.showAllOrgs();

         $scope.addOrganization = function(orgData){
            console.log('Add Org triggered for '+JSON.stringify(orgData));

            var orgDataToAdd = {};
            orgDataToAdd['orgCategory'] = orgData.category;
            orgDataToAdd['name'] = orgData.name;
            orgDataToAdd['email'] = orgData.email;
            orgDataToAdd['phone'] = orgData.phone;
            orgDataToAdd['memberCount'] = orgData.memeberCount;
            orgDataToAdd['desc'] = orgData.desc;
            orgDataToAdd['itemCatgs'] = orgData.itemDetailsNeed;

            ngoService.addOrganization(orgDataToAdd).then(function(res){
              console.log('org added '+ res );

              if(res == 200 ){
                $state.go('menu.nGO');
              }
            })

         }
    };
    ngoApp.controller('ngoCtrlr',funcNGONeeds) ;
}());

(function(){
       
    var funcNGONeeds =function($scope,$stateParams,$state,ngoService ){
        //console.log(' ngo needs triggered');
        /*$scope.items = [
              {
                src:'img/clothes.jpg',
                sub:'Clothes',
                cat:'clothes'
                  
              },
              {
                src:'img/bedsheets.jpg',
                sub:'bedsheets',
                cat:'bedsheets'
              },
              {
                src:'img/toys.jpg',
                sub:'toys',
                cat:'toys'
              },
              {
                src:'img/books.jpg',
                sub:'books',
                cat:'books'
              }
            ];*/
        $scope.items = [];

        $scope.showAllOrgNeeds = function(){
            ngoService.getAllOrgNeeds().then(function(orgNeedsDataFromService){
              //console.log("org data from service is"+JSON.stringify(orgNeedsDataFromService));
             /* $scope.orgData = orgNeedsDataFromService[0];*/
              //$scope.items.push( orgNeedsDataFromService);
              //console.log("items--->"+$scope.items);
              angular.forEach(orgNeedsDataFromService,function(value,key){
                  //console.log(value);
                 /* $scope.items.push({"catg": value._id});
                  $scope.items.push({"items": value.items});*/
                  $scope.items.push( value);
                  //console.log(key);
              }); 
              //console.log("items11 ->"+JSON.stringify($scope.items));
              //console.log("items12 ->"+JSON.stringify($scope.items[0]._id.catg));

            })
        };
        $scope.showAllOrgNeeds();

        $scope.showNGONeeds = function(cat,items){
            /*console.log('an individual ngo need called for category: '+cat);
            console.log('an individual ngo need called for items: '+JSON.stringify(items));
            console.log('an individual ngo need called for items raw: '+angular.toJson(items));*/
            $state.go("menu.nGONeeds",{catg:cat,items:angular.toJson(items)});
        };
        
    };
    ngoApp.controller('ngoNeedsCatgCtrlr',funcNGONeeds) ;
}());

(function(){
       
    var funcUserDonations =function($scope,$stateParams,$ionicHistory,userService ){
        //console.log('history details are '+JSON.stringify($ionicHistory.currentStateName()));
        console.log(' user donating for'+JSON.stringify(angular.fromJson($stateParams.donationDetails)));
        $scope.donationDetails = angular.fromJson($stateParams.donationDetails);
        $scope.stateName = $ionicHistory.currentStateName();
        $scope.userDetails = {};
        $scope.userDetails.default_select = {"catg_name":"Books", "catg_value":"Books"};
        if ($scope.stateName == 'menu.donate1') {
        	$scope.userDetails.default_select = {"catg_name":$scope.donationDetails.item_catg, "catg_value":$scope.donationDetails.item_catg};
        	$scope.org_name=$scope.donationDetails.org_name;
        	console.log("default value in"+JSON.stringify($scope.userDetails.default_select.catg_name));
        }

        console.log("default value out"+JSON.stringify($scope.default_select ));
        $scope.selectOptions =
        						[	{"catg_name":"Clothes", "catg_value":"Clothes"},
        							{"catg_name":"Shoes", "catg_value":"Shoes"},
        							{"catg_name":"Toys", "catg_value":"toys"},
        							{"catg_name":"books", "catg_value":"books"},
        							{"catg_name":"kitchen items", "catg_value":"kitchen items"},
        							{"catg_name":"Bedsheets", "catg_value":"Bedsheets"},
        							{"catg_name":"Medicines", "catg_value":"Medicines"}
        						];
        					
        //console.log(' user donate triggered for: '+$scope.ngoNeedDetails);

        //ngoDetails
        $scope.addDonation = function(userData){
            console.log('user donation data to be added'+JSON.stringify(userData));
            /*var donationData = [];
            donationData.push({"name": userData.name});*/
            var donationData = {};
            donationData['catg'] = userData.default_select.catg_name;
            donationData['name'] = userData.name;
            donationData['email'] = userData.email;
            donationData['phone'] = userData.phone;
            donationData['item_count'] = userData.item_count;
            donationData['details'] = userData.details;

             console.log('user donation Formatted data to be added'+JSON.stringify(donationData));
            userService.addDonation(donationData).then(function(res){
            	console.log('donated !!!'+res);
            })
           
        };
        
    };
    ngoApp.controller('userController',funcUserDonations) ; 
}());


(function(){
    var funcNGODirective =function($scope,$stateParams ){
       return {
        controller: 'userController',
        templateUrl: '/templates/home.html'
      };
    };
    ngoApp.directive('userDirective',funcNGODirective) ;
}());

(function(){
    var ngoService = function($http,RestAPIEndPointUrl) {
      var self = this;

        self.giveItems = function(items) {
            console.log('items sent are '+items)
        };
        self.getOrgNeedsOnCatg = function(catg){
            var catg = [];
            var ngo1={"name":"NGO1","imgSrc":"/img/ngo1.jpeg","desc":"need kids clothes"};
            var ngo2={"name":"NGO2","imgSrc":"/img/ngo2.jpeg","desc":"need adult clothes"};
            catg.push(ngo1);
            catg.push(ngo2);
            
            return catg;
        };
        self.getAllOrgs = function(){
            return $http.get(RestAPIEndPointUrl + '/orgs')
              .then(function(orgData){
                //console.log("OrgData is-"+JSON.stringify(orgData));
                return orgData.data.allOrgs;
              },function(error) {
                    console.log("Error in Service(ngoService); function(getAllOrgs); "+JSON.stringify(error));
            });
            
        };
        self.getAllOrgNeeds = function(){
            return $http.get(RestAPIEndPointUrl + '/itemsNeed')
              .then(function(orgNeedData){
                /*console.log("OrgData is-"+JSON.stringify(orgNeedData));
                console.log("OrgData is-"+orgNeedData.data.allItemsNeed.length);*/
                return orgNeedData.data.allItemsNeed;
              },function(error) {
                    console.log("Error in Service(ngoService); function(getAllOrgs); "+JSON.stringify(error));
            });
            
        };
        self.addOrganization = function(orgData){

            return $http.post(RestAPIEndPointUrl + '/addOrganization',orgData,{
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).then(function (result){
                console.log('Post result for adding Orgs '+JSON.stringify(result));
                return result.status;
            }).catch(function(error) {
                console.log("Error in  posting orgData to DB "+error.message);
            });
        }
      return self;
    };
    ngoApp.service('ngoService',ngoService) ;
}());
(function(){
    var userService = function($http,RestAPIEndPointUrl) {
      var self = this;

      self.addDonation = function(items) {
       console.log('items to be added to DB are '+JSON.stringify(items));
       return $http.post(RestAPIEndPointUrl + '/addDonations',items,{
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).then(function (result){
                console.log('Post result is '+JSON.stringify(result));
            }).catch(function(error) {
                console.log("Error in  posting to DB "+error.message);
            });
      };
      /*return $http.post(ApiEndpoint + '/order/proceedOrder',urlValues+"buyerId="+buyerId,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            })*/
      /*$http({method:'POST',url: RestAPIEndPointUrl+'/addDonations',data:{items}})
      	.then(function(){
            console.log('Post result is '+JSON.stringify(result));
        })*/
      return self;
    };
    ngoApp.service('userService',userService) ;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzLmpzIiwiZGlyZWN0aXZlcy5qcyIsInJvdXRlcy5qcyIsInNlcnZpY2VzLmpzIiwiY29udHJvbGxlcnMvbmdvQXNrQ3RybHIuanMiLCJjb250cm9sbGVycy9uZ29DdHJsci5qcyIsImNvbnRyb2xsZXJzL25nb05lZWRzQ2F0Z0N0cmxyLmpzIiwiY29udHJvbGxlcnMvdXNlckN0cmxyLmpzIiwiZGlyZWN0aXZlcy9uZ29EaXJlY3RpdmVzLmpzIiwiZGlyZWN0aXZlcy91c2VyRGlyZWN0aXZlcy5qcyIsInNlcnZpY2VzL25nb1NlcnZpY2VzLmpzIiwic2VydmljZXMvdXNlclNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFN0YXJ0ZXIgQXBwXG5cbi8vIGFuZ3VsYXIubW9kdWxlIGlzIGEgZ2xvYmFsIHBsYWNlIGZvciBjcmVhdGluZywgcmVnaXN0ZXJpbmcgYW5kIHJldHJpZXZpbmcgQW5ndWxhciBtb2R1bGVzXG4vLyAnc3RhcnRlcicgaXMgdGhlIG5hbWUgb2YgdGhpcyBhbmd1bGFyIG1vZHVsZSBleGFtcGxlIChhbHNvIHNldCBpbiBhIDxib2R5PiBhdHRyaWJ1dGUgaW4gaW5kZXguaHRtbClcbi8vIHRoZSAybmQgcGFyYW1ldGVyIGlzIGFuIGFycmF5IG9mICdyZXF1aXJlcydcbi8vICdzdGFydGVyLnNlcnZpY2VzJyBpcyBmb3VuZCBpbiBzZXJ2aWNlcy5qc1xuLy8gJ3N0YXJ0ZXIuY29udHJvbGxlcnMnIGlzIGZvdW5kIGluIGNvbnRyb2xsZXJzLmpzXG52YXIgbmdvQXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsnaW9uaWMnLCAnYXBwLmNvbnRyb2xsZXJzJywgJ2FwcC5yb3V0ZXMnLCAnYXBwLnNlcnZpY2VzJywgJ2FwcC5kaXJlY3RpdmVzJywnaW9uLWdhbGxlcnknXSlcblxuXG4uY29uc3RhbnQoJ1Jlc3RBUElFbmRQb2ludFVybCcsJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEnKSBcbi8vLmNvbnN0YW50KCdSZXN0QVBJRW5kUG9pbnRVcmwnLCdodHRwczovL2xpbWl0bGVzcy1oYXJib3ItMTk2MjcuaGVyb2t1YXBwLmNvbS9hcGkvdjEnKVxuXG4ucnVuKGZ1bmN0aW9uKCRpb25pY1BsYXRmb3JtKSB7XG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuICAgIH1cbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xuICAgICAgLy8gb3JnLmFwYWNoZS5jb3Jkb3ZhLnN0YXR1c2JhciByZXF1aXJlZFxuICAgICAgU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59KVxuLmNvbmZpZyhmdW5jdGlvbihpb25HYWxsZXJ5Q29uZmlnUHJvdmlkZXIpIHtcbiAgaW9uR2FsbGVyeUNvbmZpZ1Byb3ZpZGVyLnNldEdhbGxlcnlDb25maWcoe1xuICAgICAgYWN0aW9uX2xhYmVsOiAnQ2xvc2UnLFxuICAgICAgdG9nZ2xlOiBmYWxzZSxcbiAgICAgIHJvd19zaXplOiAzLFxuICAgICAgZml4ZWRfcm93X3NpemU6IHRydWVcbiAgfSk7XG59KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwLmNvbnRyb2xsZXJzJywgW10pXG4gIFxuLmNvbnRyb2xsZXIoJ2hvbWVDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbn0pXG4gICBcbi5jb250cm9sbGVyKCdkb25hdGVDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbn0pXG4gICBcbi5jb250cm9sbGVyKCduR09DdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbn0pXG4gICAgICBcbi5jb250cm9sbGVyKCduZWVkc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxufSlcbiAgIFxuLmNvbnRyb2xsZXIoJ2Fib3V0TkdPQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG59KVxuICAgXG4uY29udHJvbGxlcignbkdPTmVlZHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbn0pXG4gIiwiYW5ndWxhci5tb2R1bGUoJ2FwcC5kaXJlY3RpdmVzJywgW10pXG5cbi5kaXJlY3RpdmUoJ2JsYW5rRGlyZWN0aXZlJywgW2Z1bmN0aW9uKCl7XG5cbn1dKTtcblxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcC5yb3V0ZXMnLCBbXSlcblxuLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cbiAgLy8gSW9uaWMgdXNlcyBBbmd1bGFyVUkgUm91dGVyIHdoaWNoIHVzZXMgdGhlIGNvbmNlcHQgb2Ygc3RhdGVzXG4gIC8vIExlYXJuIG1vcmUgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXItdWkvdWktcm91dGVyXG4gIC8vIFNldCB1cCB0aGUgdmFyaW91cyBzdGF0ZXMgd2hpY2ggdGhlIGFwcCBjYW4gYmUgaW4uXG4gIC8vIEVhY2ggc3RhdGUncyBjb250cm9sbGVyIGNhbiBiZSBmb3VuZCBpbiBjb250cm9sbGVycy5qc1xuICAkc3RhdGVQcm92aWRlclxuICAgIFxuICBcblxuICAgICAgLnN0YXRlKCdtZW51LmhvbWUnLCB7XG4gICAgdXJsOiAnL3BhZ2UxJyxcbiAgICB2aWV3czoge1xuICAgICAgJ3NpZGUtbWVudTIxJzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9ob21lLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnaG9tZUN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnbWVudS5kb25hdGUnLCB7XG4gICAgdXJsOiAnL2RvbmF0ZScsXG4gICAgdmlld3M6IHtcbiAgICAgICdzaWRlLW1lbnUyMSc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZG9uYXRlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAndXNlckNvbnRyb2xsZXInXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnbWVudS5kb25hdGUxJywge1xuICAgIHVybDogJy9kb25hdGUvOmRvbmF0aW9uRGV0YWlscycsXG4gICAgdmlld3M6IHtcbiAgICAgICdzaWRlLW1lbnUyMSc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvZG9uYXRlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAndXNlckNvbnRyb2xsZXInXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnbWVudS5uR08nLCB7XG4gICAgdXJsOiAnL25nbycsXG4gICAgdmlld3M6IHtcbiAgICAgICdzaWRlLW1lbnUyMSc6IHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbkdPLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnbmdvQ3RybHInXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnbWVudScsIHtcbiAgICB1cmw6ICcvc2lkZS1tZW51MjEnLFxuICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL21lbnUuaHRtbCcsXG4gICAgYWJzdHJhY3Q6dHJ1ZVxuICB9KVxuXG4gIC5zdGF0ZSgnbWVudS5uZWVkcycsIHtcbiAgICB1cmw6ICcvbmVlZHMnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnc2lkZS1tZW51MjEnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2FsbE5HT05lZWRzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnbmdvTmVlZHNDYXRnQ3RybHInXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgnbWVudS5hYm91dE5HTycsIHtcbiAgICB1cmw6ICcvbmdvYWJvdXQnLFxuICAgIHZpZXdzOiB7XG4gICAgICAnc2lkZS1tZW51MjEnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2Fib3V0TkdPLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnYWJvdXROR09DdHJsJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAuc3RhdGUoJ21lbnUubkdPTmVlZHMnLCB7XG4gICAgdXJsOiAnL25nb05lZWQvOmNhdGcvOml0ZW1zJyxcbiAgICB2aWV3czoge1xuICAgICAgJ3NpZGUtbWVudTIxJzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9uR09OZWVkcy5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2FuTkdPQXNrQ3RybHInXG4gICAgICB9XG4gICAgfVxuICB9KVxuICAuc3RhdGUoJ21lbnUucmVnaXN0ZXJPcmcnLCB7XG4gICAgdXJsOiAnL3JlZ2lzdGVyT3JnJyxcbiAgICB2aWV3czoge1xuICAgICAgJ3NpZGUtbWVudTIxJzoge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9vcmdSZWdpc3Rlci5odG1sJyxcbiAgICAgICAgY29udHJvbGxlcjogJ25nb0N0cmxyJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuXG4kdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvc2lkZS1tZW51MjEvZG9uYXRlJylcblxuICBcblxufSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcC5zZXJ2aWNlcycsIFtdKVxuXG4uZmFjdG9yeSgnQmxhbmtGYWN0b3J5JywgW2Z1bmN0aW9uKCl7XG5cbn1dKVxuXG4uc2VydmljZSgnQmxhbmtTZXJ2aWNlJywgW2Z1bmN0aW9uKCl7XG5cbn1dKTtcblxuIiwiKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGZ1bmNOR09OZWVkcyA9ZnVuY3Rpb24oJHNjb3BlLCRzdGF0ZVBhcmFtcyxuZ29TZXJ2aWNlLCRzdGF0ZSApe1xuICAgICAgICAkc2NvcGUuY2F0ZWdvcnkgPSAkc3RhdGVQYXJhbXMuY2F0ZztcbiAgICAgICAgJHNjb3BlLm5nb05lZWRzID0gYW5ndWxhci5mcm9tSnNvbigkc3RhdGVQYXJhbXMuaXRlbXMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiIE5HTyBOZWVkcyBkYXRhIGZyb20gc3RhdGUgcGFyYW1zIGlzIFwiK0pTT04uc3RyaW5naWZ5KCRzY29wZS5uZ29OZWVkcykpOyBcblxuICAgICAgICAvKiRzY29wZS5zaG93QWxsTkdPc0Jhc2VkT25DYXRnID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgbmdvIG5lZWRzIHRyaWdnZXJlZCBmb3IgY3RnOiAnKyRzdGF0ZVBhcmFtcy5jYXRnKTtcbiAgICAgICAgICAgIG5nb1NlcnZpY2UuZ2V0TmdvTmVlZHNPbkNhdGcoJHNjb3BlLmNhdGVnb3J5KS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgICRzY29wZS5uZ29OZWVkcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgTkdPIE5lZWRzIGRhdGEgZnJvbSBTZXJ2aWNlcyBpcyBcIitKU09OLnN0cmluZ2lmeShkYXRhKSk7IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICRzY29wZS5uZ29OZWVkcyA9IG5nb1NlcnZpY2UuZ2V0T3JnTmVlZHNPbkNhdGcoJHNjb3BlLmNhdGVnb3J5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIE5HTyBOZWVkcyBkYXRhIGZyb20gU2VydmljZXMgaXMgXCIrSlNPTi5zdHJpbmdpZnkoJHNjb3BlLm5nb05lZWRzKSk7IFxuICAgICAgICB9OyovXG4gICAgICAgIC8vJHNjb3BlLnNob3dBbGxOR09zQmFzZWRPbkNhdGcoKTtcbiAgICAgICAgJHNjb3BlLmRvbmF0ZUZvck5HTyA9IGZ1bmN0aW9uKG5nbyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZG9uYXRlIGludm9rZWQgZm9yJytuZ28pO1xuICAgICAgICAgICAgdmFyIGRvbmF0aW9uRGF0YSA9IGFuZ3VsYXIudG9Kc29uKG5nbyk7XG4gICAgICAgICAgICAkc3RhdGUuZ28oXCJtZW51LmRvbmF0ZTFcIix7ZG9uYXRpb25EZXRhaWxzOmRvbmF0aW9uRGF0YX0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBuZ29BcHAuY29udHJvbGxlcignYW5OR09Bc2tDdHJscicsZnVuY05HT05lZWRzKSA7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGZ1bmNOR09OZWVkcyA9IGZ1bmN0aW9uKCRzY29wZSwkc3RhdGVQYXJhbXMsbmdvU2VydmljZSwkc3RhdGUpe1xuICAgICAgICAkc2NvcGUubmdvRGF0YSA9IFt7XCJuYW1lXCI6IFwiTkdPMVwiLFwiZGVzY1wiOiBcImNhcmUgYWJvdXQgb3JwaGFuIGtpZHNcIixcImZvdW5kZWRcIjpcIk1heSAxLCAyMDAwXCIsXCJpbWdTcmNcIiA6IFwiaW1nL25nbzEuanBlZ1wiLFwibWVtYmVyc1wiOjUyfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wibmFtZVwiOiBcIk5HTzJcIixcImRlc2NcIjogXCJjYXJlIGFib3V0IGVsZGVybHkgYWR1bHRzXCIsXCJmb3VuZGVkXCI6XCJNYXkgMSwgMjAxMFwiLFwiaW1nU3JjXCIgOiBcImltZy9uZ28yLmpwZWdcIixcIm1lbWJlcnNcIjo0MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAkc2NvcGUuc2hvd0FsbE9yZ3MgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbmdvU2VydmljZS5nZXRBbGxPcmdzKCkudGhlbihmdW5jdGlvbihvcmdEYXRhRnJvbVNlcnZpY2Upe1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwib3JnIGRhdGEgZnJvbSBzZXJ2aWNlIGlzXCIrSlNPTi5zdHJpbmdpZnkob3JnRGF0YUZyb21TZXJ2aWNlKSk7XG4gICAgICAgICAgICAgICRzY29wZS5vcmdEYXRhID0gb3JnRGF0YUZyb21TZXJ2aWNlO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuc2hvd0FsbE9yZ3MoKTtcblxuICAgICAgICAgJHNjb3BlLmFkZE9yZ2FuaXphdGlvbiA9IGZ1bmN0aW9uKG9yZ0RhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZCBPcmcgdHJpZ2dlcmVkIGZvciAnK0pTT04uc3RyaW5naWZ5KG9yZ0RhdGEpKTtcblxuICAgICAgICAgICAgdmFyIG9yZ0RhdGFUb0FkZCA9IHt9O1xuICAgICAgICAgICAgb3JnRGF0YVRvQWRkWydvcmdDYXRlZ29yeSddID0gb3JnRGF0YS5jYXRlZ29yeTtcbiAgICAgICAgICAgIG9yZ0RhdGFUb0FkZFsnbmFtZSddID0gb3JnRGF0YS5uYW1lO1xuICAgICAgICAgICAgb3JnRGF0YVRvQWRkWydlbWFpbCddID0gb3JnRGF0YS5lbWFpbDtcbiAgICAgICAgICAgIG9yZ0RhdGFUb0FkZFsncGhvbmUnXSA9IG9yZ0RhdGEucGhvbmU7XG4gICAgICAgICAgICBvcmdEYXRhVG9BZGRbJ21lbWJlckNvdW50J10gPSBvcmdEYXRhLm1lbWViZXJDb3VudDtcbiAgICAgICAgICAgIG9yZ0RhdGFUb0FkZFsnZGVzYyddID0gb3JnRGF0YS5kZXNjO1xuICAgICAgICAgICAgb3JnRGF0YVRvQWRkWydpdGVtQ2F0Z3MnXSA9IG9yZ0RhdGEuaXRlbURldGFpbHNOZWVkO1xuXG4gICAgICAgICAgICBuZ29TZXJ2aWNlLmFkZE9yZ2FuaXphdGlvbihvcmdEYXRhVG9BZGQpLnRoZW4oZnVuY3Rpb24ocmVzKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29yZyBhZGRlZCAnKyByZXMgKTtcblxuICAgICAgICAgICAgICBpZihyZXMgPT0gMjAwICl7XG4gICAgICAgICAgICAgICAgJHN0YXRlLmdvKCdtZW51Lm5HTycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICB9XG4gICAgfTtcbiAgICBuZ29BcHAuY29udHJvbGxlcignbmdvQ3RybHInLGZ1bmNOR09OZWVkcykgO1xufSgpKTtcbiIsIihmdW5jdGlvbigpe1xuICAgICAgIFxuICAgIHZhciBmdW5jTkdPTmVlZHMgPWZ1bmN0aW9uKCRzY29wZSwkc3RhdGVQYXJhbXMsJHN0YXRlLG5nb1NlcnZpY2UgKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnIG5nbyBuZWVkcyB0cmlnZ2VyZWQnKTtcbiAgICAgICAgLyokc2NvcGUuaXRlbXMgPSBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6J2ltZy9jbG90aGVzLmpwZycsXG4gICAgICAgICAgICAgICAgc3ViOidDbG90aGVzJyxcbiAgICAgICAgICAgICAgICBjYXQ6J2Nsb3RoZXMnXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzonaW1nL2JlZHNoZWV0cy5qcGcnLFxuICAgICAgICAgICAgICAgIHN1YjonYmVkc2hlZXRzJyxcbiAgICAgICAgICAgICAgICBjYXQ6J2JlZHNoZWV0cydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzonaW1nL3RveXMuanBnJyxcbiAgICAgICAgICAgICAgICBzdWI6J3RveXMnLFxuICAgICAgICAgICAgICAgIGNhdDondG95cydcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzonaW1nL2Jvb2tzLmpwZycsXG4gICAgICAgICAgICAgICAgc3ViOidib29rcycsXG4gICAgICAgICAgICAgICAgY2F0Oidib29rcydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTsqL1xuICAgICAgICAkc2NvcGUuaXRlbXMgPSBbXTtcblxuICAgICAgICAkc2NvcGUuc2hvd0FsbE9yZ05lZWRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG5nb1NlcnZpY2UuZ2V0QWxsT3JnTmVlZHMoKS50aGVuKGZ1bmN0aW9uKG9yZ05lZWRzRGF0YUZyb21TZXJ2aWNlKXtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9yZyBkYXRhIGZyb20gc2VydmljZSBpc1wiK0pTT04uc3RyaW5naWZ5KG9yZ05lZWRzRGF0YUZyb21TZXJ2aWNlKSk7XG4gICAgICAgICAgICAgLyogJHNjb3BlLm9yZ0RhdGEgPSBvcmdOZWVkc0RhdGFGcm9tU2VydmljZVswXTsqL1xuICAgICAgICAgICAgICAvLyRzY29wZS5pdGVtcy5wdXNoKCBvcmdOZWVkc0RhdGFGcm9tU2VydmljZSk7XG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpdGVtcy0tLT5cIiskc2NvcGUuaXRlbXMpO1xuICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gob3JnTmVlZHNEYXRhRnJvbVNlcnZpY2UsZnVuY3Rpb24odmFsdWUsa2V5KXtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAvKiAkc2NvcGUuaXRlbXMucHVzaCh7XCJjYXRnXCI6IHZhbHVlLl9pZH0pO1xuICAgICAgICAgICAgICAgICAgJHNjb3BlLml0ZW1zLnB1c2goe1wiaXRlbXNcIjogdmFsdWUuaXRlbXN9KTsqL1xuICAgICAgICAgICAgICAgICAgJHNjb3BlLml0ZW1zLnB1c2goIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRlbXMxMSAtPlwiK0pTT04uc3RyaW5naWZ5KCRzY29wZS5pdGVtcykpO1xuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiaXRlbXMxMiAtPlwiK0pTT04uc3RyaW5naWZ5KCRzY29wZS5pdGVtc1swXS5faWQuY2F0ZykpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICAkc2NvcGUuc2hvd0FsbE9yZ05lZWRzKCk7XG5cbiAgICAgICAgJHNjb3BlLnNob3dOR09OZWVkcyA9IGZ1bmN0aW9uKGNhdCxpdGVtcyl7XG4gICAgICAgICAgICAvKmNvbnNvbGUubG9nKCdhbiBpbmRpdmlkdWFsIG5nbyBuZWVkIGNhbGxlZCBmb3IgY2F0ZWdvcnk6ICcrY2F0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbiBpbmRpdmlkdWFsIG5nbyBuZWVkIGNhbGxlZCBmb3IgaXRlbXM6ICcrSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbiBpbmRpdmlkdWFsIG5nbyBuZWVkIGNhbGxlZCBmb3IgaXRlbXMgcmF3OiAnK2FuZ3VsYXIudG9Kc29uKGl0ZW1zKSk7Ki9cbiAgICAgICAgICAgICRzdGF0ZS5nbyhcIm1lbnUubkdPTmVlZHNcIix7Y2F0ZzpjYXQsaXRlbXM6YW5ndWxhci50b0pzb24oaXRlbXMpfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH07XG4gICAgbmdvQXBwLmNvbnRyb2xsZXIoJ25nb05lZWRzQ2F0Z0N0cmxyJyxmdW5jTkdPTmVlZHMpIDtcbn0oKSk7XG4iLCIoZnVuY3Rpb24oKXtcbiAgICAgICBcbiAgICB2YXIgZnVuY1VzZXJEb25hdGlvbnMgPWZ1bmN0aW9uKCRzY29wZSwkc3RhdGVQYXJhbXMsJGlvbmljSGlzdG9yeSx1c2VyU2VydmljZSApe1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdoaXN0b3J5IGRldGFpbHMgYXJlICcrSlNPTi5zdHJpbmdpZnkoJGlvbmljSGlzdG9yeS5jdXJyZW50U3RhdGVOYW1lKCkpKTtcbiAgICAgICAgY29uc29sZS5sb2coJyB1c2VyIGRvbmF0aW5nIGZvcicrSlNPTi5zdHJpbmdpZnkoYW5ndWxhci5mcm9tSnNvbigkc3RhdGVQYXJhbXMuZG9uYXRpb25EZXRhaWxzKSkpO1xuICAgICAgICAkc2NvcGUuZG9uYXRpb25EZXRhaWxzID0gYW5ndWxhci5mcm9tSnNvbigkc3RhdGVQYXJhbXMuZG9uYXRpb25EZXRhaWxzKTtcbiAgICAgICAgJHNjb3BlLnN0YXRlTmFtZSA9ICRpb25pY0hpc3RvcnkuY3VycmVudFN0YXRlTmFtZSgpO1xuICAgICAgICAkc2NvcGUudXNlckRldGFpbHMgPSB7fTtcbiAgICAgICAgJHNjb3BlLnVzZXJEZXRhaWxzLmRlZmF1bHRfc2VsZWN0ID0ge1wiY2F0Z19uYW1lXCI6XCJCb29rc1wiLCBcImNhdGdfdmFsdWVcIjpcIkJvb2tzXCJ9O1xuICAgICAgICBpZiAoJHNjb3BlLnN0YXRlTmFtZSA9PSAnbWVudS5kb25hdGUxJykge1xuICAgICAgICBcdCRzY29wZS51c2VyRGV0YWlscy5kZWZhdWx0X3NlbGVjdCA9IHtcImNhdGdfbmFtZVwiOiRzY29wZS5kb25hdGlvbkRldGFpbHMuaXRlbV9jYXRnLCBcImNhdGdfdmFsdWVcIjokc2NvcGUuZG9uYXRpb25EZXRhaWxzLml0ZW1fY2F0Z307XG4gICAgICAgIFx0JHNjb3BlLm9yZ19uYW1lPSRzY29wZS5kb25hdGlvbkRldGFpbHMub3JnX25hbWU7XG4gICAgICAgIFx0Y29uc29sZS5sb2coXCJkZWZhdWx0IHZhbHVlIGluXCIrSlNPTi5zdHJpbmdpZnkoJHNjb3BlLnVzZXJEZXRhaWxzLmRlZmF1bHRfc2VsZWN0LmNhdGdfbmFtZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJkZWZhdWx0IHZhbHVlIG91dFwiK0pTT04uc3RyaW5naWZ5KCRzY29wZS5kZWZhdWx0X3NlbGVjdCApKTtcbiAgICAgICAgJHNjb3BlLnNlbGVjdE9wdGlvbnMgPVxuICAgICAgICBcdFx0XHRcdFx0XHRbXHR7XCJjYXRnX25hbWVcIjpcIkNsb3RoZXNcIiwgXCJjYXRnX3ZhbHVlXCI6XCJDbG90aGVzXCJ9LFxuICAgICAgICBcdFx0XHRcdFx0XHRcdHtcImNhdGdfbmFtZVwiOlwiU2hvZXNcIiwgXCJjYXRnX3ZhbHVlXCI6XCJTaG9lc1wifSxcbiAgICAgICAgXHRcdFx0XHRcdFx0XHR7XCJjYXRnX25hbWVcIjpcIlRveXNcIiwgXCJjYXRnX3ZhbHVlXCI6XCJ0b3lzXCJ9LFxuICAgICAgICBcdFx0XHRcdFx0XHRcdHtcImNhdGdfbmFtZVwiOlwiYm9va3NcIiwgXCJjYXRnX3ZhbHVlXCI6XCJib29rc1wifSxcbiAgICAgICAgXHRcdFx0XHRcdFx0XHR7XCJjYXRnX25hbWVcIjpcImtpdGNoZW4gaXRlbXNcIiwgXCJjYXRnX3ZhbHVlXCI6XCJraXRjaGVuIGl0ZW1zXCJ9LFxuICAgICAgICBcdFx0XHRcdFx0XHRcdHtcImNhdGdfbmFtZVwiOlwiQmVkc2hlZXRzXCIsIFwiY2F0Z192YWx1ZVwiOlwiQmVkc2hlZXRzXCJ9LFxuICAgICAgICBcdFx0XHRcdFx0XHRcdHtcImNhdGdfbmFtZVwiOlwiTWVkaWNpbmVzXCIsIFwiY2F0Z192YWx1ZVwiOlwiTWVkaWNpbmVzXCJ9XG4gICAgICAgIFx0XHRcdFx0XHRcdF07XG4gICAgICAgIFx0XHRcdFx0XHRcbiAgICAgICAgLy9jb25zb2xlLmxvZygnIHVzZXIgZG9uYXRlIHRyaWdnZXJlZCBmb3I6ICcrJHNjb3BlLm5nb05lZWREZXRhaWxzKTtcblxuICAgICAgICAvL25nb0RldGFpbHNcbiAgICAgICAgJHNjb3BlLmFkZERvbmF0aW9uID0gZnVuY3Rpb24odXNlckRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgZG9uYXRpb24gZGF0YSB0byBiZSBhZGRlZCcrSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICAgICAgICAgIC8qdmFyIGRvbmF0aW9uRGF0YSA9IFtdO1xuICAgICAgICAgICAgZG9uYXRpb25EYXRhLnB1c2goe1wibmFtZVwiOiB1c2VyRGF0YS5uYW1lfSk7Ki9cbiAgICAgICAgICAgIHZhciBkb25hdGlvbkRhdGEgPSB7fTtcbiAgICAgICAgICAgIGRvbmF0aW9uRGF0YVsnY2F0ZyddID0gdXNlckRhdGEuZGVmYXVsdF9zZWxlY3QuY2F0Z19uYW1lO1xuICAgICAgICAgICAgZG9uYXRpb25EYXRhWyduYW1lJ10gPSB1c2VyRGF0YS5uYW1lO1xuICAgICAgICAgICAgZG9uYXRpb25EYXRhWydlbWFpbCddID0gdXNlckRhdGEuZW1haWw7XG4gICAgICAgICAgICBkb25hdGlvbkRhdGFbJ3Bob25lJ10gPSB1c2VyRGF0YS5waG9uZTtcbiAgICAgICAgICAgIGRvbmF0aW9uRGF0YVsnaXRlbV9jb3VudCddID0gdXNlckRhdGEuaXRlbV9jb3VudDtcbiAgICAgICAgICAgIGRvbmF0aW9uRGF0YVsnZGV0YWlscyddID0gdXNlckRhdGEuZGV0YWlscztcblxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGRvbmF0aW9uIEZvcm1hdHRlZCBkYXRhIHRvIGJlIGFkZGVkJytKU09OLnN0cmluZ2lmeShkb25hdGlvbkRhdGEpKTtcbiAgICAgICAgICAgIHVzZXJTZXJ2aWNlLmFkZERvbmF0aW9uKGRvbmF0aW9uRGF0YSkudGhlbihmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgXHRjb25zb2xlLmxvZygnZG9uYXRlZCAhISEnK3Jlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfTtcbiAgICBuZ29BcHAuY29udHJvbGxlcigndXNlckNvbnRyb2xsZXInLGZ1bmNVc2VyRG9uYXRpb25zKSA7IFxufSgpKTtcbiIsIiIsIihmdW5jdGlvbigpe1xuICAgIHZhciBmdW5jTkdPRGlyZWN0aXZlID1mdW5jdGlvbigkc2NvcGUsJHN0YXRlUGFyYW1zICl7XG4gICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udHJvbGxlcjogJ3VzZXJDb250cm9sbGVyJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL2hvbWUuaHRtbCdcbiAgICAgIH07XG4gICAgfTtcbiAgICBuZ29BcHAuZGlyZWN0aXZlKCd1c2VyRGlyZWN0aXZlJyxmdW5jTkdPRGlyZWN0aXZlKSA7XG59KCkpO1xuIiwiKGZ1bmN0aW9uKCl7XG4gICAgdmFyIG5nb1NlcnZpY2UgPSBmdW5jdGlvbigkaHR0cCxSZXN0QVBJRW5kUG9pbnRVcmwpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzZWxmLmdpdmVJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbXMgc2VudCBhcmUgJytpdGVtcylcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5nZXRPcmdOZWVkc09uQ2F0ZyA9IGZ1bmN0aW9uKGNhdGcpe1xuICAgICAgICAgICAgdmFyIGNhdGcgPSBbXTtcbiAgICAgICAgICAgIHZhciBuZ28xPXtcIm5hbWVcIjpcIk5HTzFcIixcImltZ1NyY1wiOlwiL2ltZy9uZ28xLmpwZWdcIixcImRlc2NcIjpcIm5lZWQga2lkcyBjbG90aGVzXCJ9O1xuICAgICAgICAgICAgdmFyIG5nbzI9e1wibmFtZVwiOlwiTkdPMlwiLFwiaW1nU3JjXCI6XCIvaW1nL25nbzIuanBlZ1wiLFwiZGVzY1wiOlwibmVlZCBhZHVsdCBjbG90aGVzXCJ9O1xuICAgICAgICAgICAgY2F0Zy5wdXNoKG5nbzEpO1xuICAgICAgICAgICAgY2F0Zy5wdXNoKG5nbzIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gY2F0ZztcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5nZXRBbGxPcmdzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoUmVzdEFQSUVuZFBvaW50VXJsICsgJy9vcmdzJylcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ob3JnRGF0YSl7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk9yZ0RhdGEgaXMtXCIrSlNPTi5zdHJpbmdpZnkob3JnRGF0YSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmdEYXRhLmRhdGEuYWxsT3JncztcbiAgICAgICAgICAgICAgfSxmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIFNlcnZpY2UobmdvU2VydmljZSk7IGZ1bmN0aW9uKGdldEFsbE9yZ3MpOyBcIitKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5nZXRBbGxPcmdOZWVkcyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KFJlc3RBUElFbmRQb2ludFVybCArICcvaXRlbXNOZWVkJylcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ob3JnTmVlZERhdGEpe1xuICAgICAgICAgICAgICAgIC8qY29uc29sZS5sb2coXCJPcmdEYXRhIGlzLVwiK0pTT04uc3RyaW5naWZ5KG9yZ05lZWREYXRhKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPcmdEYXRhIGlzLVwiK29yZ05lZWREYXRhLmRhdGEuYWxsSXRlbXNOZWVkLmxlbmd0aCk7Ki9cbiAgICAgICAgICAgICAgICByZXR1cm4gb3JnTmVlZERhdGEuZGF0YS5hbGxJdGVtc05lZWQ7XG4gICAgICAgICAgICAgIH0sZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBTZXJ2aWNlKG5nb1NlcnZpY2UpOyBmdW5jdGlvbihnZXRBbGxPcmdzKTsgXCIrSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIHNlbGYuYWRkT3JnYW5pemF0aW9uID0gZnVuY3Rpb24ob3JnRGF0YSl7XG5cbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KFJlc3RBUElFbmRQb2ludFVybCArICcvYWRkT3JnYW5pemF0aW9uJyxvcmdEYXRhLHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQb3N0IHJlc3VsdCBmb3IgYWRkaW5nIE9yZ3MgJytKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN0YXR1cztcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiAgcG9zdGluZyBvcmdEYXRhIHRvIERCIFwiK2Vycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG4gICAgbmdvQXBwLnNlcnZpY2UoJ25nb1NlcnZpY2UnLG5nb1NlcnZpY2UpIDtcbn0oKSk7IiwiKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHVzZXJTZXJ2aWNlID0gZnVuY3Rpb24oJGh0dHAsUmVzdEFQSUVuZFBvaW50VXJsKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHNlbGYuYWRkRG9uYXRpb24gPSBmdW5jdGlvbihpdGVtcykge1xuICAgICAgIGNvbnNvbGUubG9nKCdpdGVtcyB0byBiZSBhZGRlZCB0byBEQiBhcmUgJytKU09OLnN0cmluZ2lmeShpdGVtcykpO1xuICAgICAgIHJldHVybiAkaHR0cC5wb3N0KFJlc3RBUElFbmRQb2ludFVybCArICcvYWRkRG9uYXRpb25zJyxpdGVtcyx7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUG9zdCByZXN1bHQgaXMgJytKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiAgcG9zdGluZyB0byBEQiBcIitlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIC8qcmV0dXJuICRodHRwLnBvc3QoQXBpRW5kcG9pbnQgKyAnL29yZGVyL3Byb2NlZWRPcmRlcicsdXJsVmFsdWVzK1wiYnV5ZXJJZD1cIitidXllcklkLHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKi9cbiAgICAgIC8qJGh0dHAoe21ldGhvZDonUE9TVCcsdXJsOiBSZXN0QVBJRW5kUG9pbnRVcmwrJy9hZGREb25hdGlvbnMnLGRhdGE6e2l0ZW1zfX0pXG4gICAgICBcdC50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUG9zdCByZXN1bHQgaXMgJytKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcbiAgICAgICAgfSkqL1xuICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcbiAgICBuZ29BcHAuc2VydmljZSgndXNlclNlcnZpY2UnLHVzZXJTZXJ2aWNlKSA7XG59KCkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
