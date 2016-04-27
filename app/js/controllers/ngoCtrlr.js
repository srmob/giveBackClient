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
