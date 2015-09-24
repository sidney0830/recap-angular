'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contract', {
    templateUrl: 'view_contract/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {


    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    $scope.data = {
        contract_types: ['Acquisition', 'Asset Purchase', 'Assignment', 'Co-Development', 'Co-Market', 'Co-Promotion', 'Collaboration', 'Cross-license', 'Development', 'Distribution', 'Equity', 'Joint Venture', 'Letter of Intent', 'License', 'Loan', 'Manufacturing', 'Marketing', 'Merger', 'Option', 'Research', 'Security', 'Settlement', 'Sublicense', 'Supply', 'Termination', 'Warrant'],
        contract_parties: ["Pharma-Biotech" ,"Biotech-Biotech" ,"Pharma-Pharma" ,"University-Biotech" ,"Non-Medical"],
        select_contact_parties: "",
        select_contract_types: "",
        company: "",
        contract_text: "",
        from: "",
        until: "",
        contract_result: "",
        progress_bar_img: "",
        in_progressing: false

    }


    $scope.submit = function() {

        console.log('send reqeust')

        $scope.data.in_progressing = true;
        console.log($scope.data)
        console.log('webservice/contracts.php?' + $.param($scope.data))

        $http({
            method: 'get',
            url: 'webservice/contracts.php?' + $.param($scope.data)
        }).success(function(data) {
            $scope.data.contract_result = data
            $scope.data.in_progressing = false
        })


    }


}]);
