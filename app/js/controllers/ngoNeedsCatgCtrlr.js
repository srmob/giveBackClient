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
