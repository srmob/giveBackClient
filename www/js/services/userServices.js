(function(){
    exports.userService = function($http) {
      var self = this;

      self.giveItems = function(items) {
       /* return $http.get('/home')
          .then(function(result){
            return result.data;
          },function(error) {
                console.log(error.message);
          });*/
        console.log('items sent are '+items)
      };

      return self;
    };
}());