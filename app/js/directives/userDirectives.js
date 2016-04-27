(function(){
    var funcNGODirective =function($scope,$stateParams ){
       return {
        controller: 'userController',
        templateUrl: '/templates/home.html'
      };
    };
    ngoApp.directive('userDirective',funcNGODirective) ;
}());
