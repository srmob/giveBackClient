(function(){
       
    var funcUserDonations =function($scope,$stateParams ){
           
        $scope.donateItems = function(data){
            console.log(' user donate triggered');
        };
        
    };
    ngoApp.controller('userController',funcUserDonations) ;
}());
