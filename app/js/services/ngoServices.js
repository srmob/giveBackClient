(function(){
    var ngoService = function($http,RestAPIEndPointUrl) {
      var self = this;

        self.giveItems = function(items) {
            console.log('items sent are '+items)
        };
        self.getOrgNeedsOnCatg = function(catg){
            var catg = [];
            var ngo1={"name":"NGO1","imgSrc":"/img/ngo1.jpeg","desc":"need kids clothes"};
            var ngo2={"name":"NGO2","imgSrc":"/img/ngo2.jpeg","desc":"need adult clothes"};
            catg.push(ngo1);
            catg.push(ngo2);
            
            return catg;
        };
        self.getAllOrgs = function(){
            return $http.get(RestAPIEndPointUrl + '/orgs')
              .then(function(orgData){
                //console.log("OrgData is-"+JSON.stringify(orgData));
                return orgData.data.allOrgs;
              },function(error) {
                    console.log("Error in Service(ngoService); function(getAllOrgs); "+JSON.stringify(error));
            });
            
        };
        self.getAllOrgNeeds = function(){
            return $http.get(RestAPIEndPointUrl + '/itemsNeed')
              .then(function(orgNeedData){
                /*console.log("OrgData is-"+JSON.stringify(orgNeedData));
                console.log("OrgData is-"+orgNeedData.data.allItemsNeed.length);*/
                return orgNeedData.data.allItemsNeed;
              },function(error) {
                    console.log("Error in Service(ngoService); function(getAllOrgs); "+JSON.stringify(error));
            });
            
        };
        self.addOrganization = function(orgData){

            return $http.post(RestAPIEndPointUrl + '/addOrganization',orgData,{
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }).then(function (result){
                console.log('Post result for adding Orgs '+JSON.stringify(result));
                return result.status;
            }).catch(function(error) {
                console.log("Error in  posting orgData to DB "+error.message);
            });
        }
      return self;
    };
    ngoApp.service('ngoService',ngoService) ;
}());