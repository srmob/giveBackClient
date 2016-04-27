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
