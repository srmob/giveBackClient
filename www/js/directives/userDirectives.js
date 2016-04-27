(function(){
    exports.userDirective = function() {
      return {
        controller: 'userController',
        templateUrl: '/templates/home.html'
      };
    };
}())