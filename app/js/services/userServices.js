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