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
