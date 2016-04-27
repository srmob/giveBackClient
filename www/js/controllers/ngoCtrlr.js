(function(){
       
    var funcNGONeeds =function($scope,$stateParams ){
           
        $scope.showNGONeeds = function(ngoID){
            console.log(' ngo needs triggered');
        };
        
    };
    ngoApp.controller('ngoCtrlr',funcNGONeeds) ;
}());
