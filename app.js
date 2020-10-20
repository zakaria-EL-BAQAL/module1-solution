(function(){

    'use strict'

    angular.module('LunchCheck',[])
        .controller('lunchCheckController', LunchCheck);
    
        LunchCheck.$inject = ['$scope'];

        function LunchCheck($scope){
                $scope.element = {
                    color : "",
                    message: ""
                };

                $scope.lunchItems = "";
                
                $scope.getMyMessage = function(){
                    $scope.element = lunchItems($scope.lunchItems);
                }
        }

        function lunchItems(string){
            //check if the string exist
            if(string == ""){
                    return{
                        color:"red error",
                        message:"Please enter data first"
                    }
            } 
            //convert string to an array
            let items = string.trim().split(",");  //[pizza, cofee, ,jus, ]
            let count = 0;
            //count the number of element exist in this array
            items.forEach(element => {
                if(element.trim() != "") count++;
            });
            
            
            if(count <= 3){
                return {
                    color:"green enjoy",
                    message:"Enjoy!"
                };

            }else if(count > 3){
                return {
                    color:"green enjoy",
                    message:"Too much!"
                };
            } 
        }

})()