'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alliance', {
    templateUrl: 'view_alliance/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {

    $scope.data = {
        alliance_types: ['Acquisition', 'Asset Purchase', 'Assignment', 'Co-Development', 'Co-Market', 'Co-Promotion', 'Collaboration', 'Cross-license', 'Development', 'Distribution', 'Equity', 'Joint Venture', 'Letter of Intent', 'License', 'Loan', 'Manufacturing', 'Marketing', 'Merger', 'Option', 'Research', 'Security', 'Settlement', 'Sublicense', 'Supply', 'Termination', 'Warrant'],
        alliance_parties: ["Pharma-Biotech" ,"Biotech-Biotech" ,"Pharma-Pharma" ,"University-Biotech", "University-Pharma" ,"Non-Medical"],
        alliance_technologies:  ["Adjuvant" ,"Bioinformatics" ,"Carbohydrates" ,"Cell Therapy - Stem Cells/Factors" ,"Collagen matrix" ,"Combinatorial" ,"Device" ,"Diagnostics" ,"DNA Probes" ,"Drug Delivery - Liposomes" ,"Drug Delivery - Oral" ,"Drug Delivery - Other" ,"Drug Delivery - Sustained Release" ,"Drug Delivery - Transdermal" ,"Gene Expression" ,"Gene Sequencing" ,"Generics" ,"Hyaluronic acid" ,"Immunoassay" ,"Immunoglobulin" ,"Implantable Devices" ,"In-licensed Products" ,"Microarrays" ,"Micropropagation" ,"Microspheres" ,"Monoclonals" ,"Monoclonals - Anti-Idiotypes" ,"Monoclonals - Conjugates" ,"Monoclonals - Humanized & Fully Human Abs" ,"Monoclonals - Transgenic mice" ,"Natural Product" ,"Oligonucleotide ligands" ,"Oligonucleotides - Antisense/Triple helix" ,"Oligonucleotides - Gene Therapy" ,"Oligonucleotides - Ribozymes" ,"Peptides" ,"PFOB Emulsions" ,"Pharmacogenomics" ,"Phototherapy" ,"Polyclonal Antibodies" ,"Polyethylene glycol" ,"Proteomics" ,"Purines & Pyrimidines" ,"Rational Drug Design - Computational" ,"Rational Drug Design - Small Molecules " ,"Recombinant DNA" ,"Resin Polymers" ,"Screening" ,"Separations" ,"Service Laboratory" ,"Small Molecules " ,"Transcription Factors" ,"Transgenics" ,"Vaccines"],
        alliance_stages: ["Formulation" ,"Discovery" ,"Lead Molecule" ,"Preclinical" ,"Phase I" ,"Phase II" ,"Phase III" ,"BLA/NDA filed" ,"Approved"],
        select_alliance_parties: "",
        select_alliance_types: "",
        select_alliance_technologies: "",
        select_alliance_stages: '',
        company: "",
        subject_text: "",
        alliance_text: "",
        from: "",
        until: "",
        alliance_result: ""

    }


    $scope.submit = function() {
        // submit form

    }

}]);

