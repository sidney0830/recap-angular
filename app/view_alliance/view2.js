'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/alliance', {
    templateUrl: 'view_alliance/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$document', function($scope, $http, $document) {

    $scope.input = {
        alliance_types_full: ["Acquisition","Asset Purchase","Assignment","Co-Development","Co-Market","Co-Promotion","Collaboration","Cross-license","Development","Distribution","Equity","Joint Venture","Letter of Intent","License","Loan","Manufacturing","Marketing","Merger","Option","Research","Security","Settlement","Sublicense","Supply","Termination","Warrant"],
        alliance_types: ['Acq','Ast','Asn','CoD','CoM','CoP','Col','CrL','D','Di','E','JV','LoI','L','Lo','Man','Mkt','Mrg','O','R','S','Sec','Set','Sub','Ter','W'],
        alliance_parties: ["Pharma-Biotech" ,"Biotech-Biotech" ,"Pharma-Pharma" ,"University-Biotech", "University-Pharma" ,"Non-Medical"],
        alliance_technologies:  ["Adjuvant" ,"Bioinformatics" ,"Carbohydrates" ,"Cell Therapy - Stem Cells/Factors" ,"Collagen matrix" ,"Combinatorial" ,"Device" ,"Diagnostics" ,"DNA Probes" ,"Drug Delivery - Liposomes" ,"Drug Delivery - Oral" ,"Drug Delivery - Other" ,"Drug Delivery - Sustained Release" ,"Drug Delivery - Transdermal" ,"Gene Expression" ,"Gene Sequencing" ,"Generics" ,"Hyaluronic acid" ,"Immunoassay" ,"Immunoglobulin" ,"Implantable Devices" ,"In-licensed Products" ,"Microarrays" ,"Micropropagation" ,"Microspheres" ,"Monoclonals" ,"Monoclonals - Anti-Idiotypes" ,"Monoclonals - Conjugates" ,"Monoclonals - Humanized & Fully Human Abs" ,"Monoclonals - Transgenic mice" ,"Natural Product" ,"Oligonucleotide ligands" ,"Oligonucleotides - Antisense/Triple helix" ,"Oligonucleotides - Gene Therapy" ,"Oligonucleotides - Ribozymes" ,"Peptides" ,"PFOB Emulsions" ,"Pharmacogenomics" ,"Phototherapy" ,"Polyclonal Antibodies" ,"Polyethylene glycol" ,"Proteomics" ,"Purines & Pyrimidines" ,"Rational Drug Design - Computational" ,"Rational Drug Design - Small Molecules" ,"Recombinant DNA" ,"Resin Polymers" ,"Screening" ,"Separations" ,"Service Laboratory" ,"Small Molecules" ,"Transcription Factors" ,"Transgenics" ,"Vaccines"],
        alliance_stages: ["Formulation" ,"Discovery" ,"Lead Molecule" ,"Preclinical" ,"Phase I" ,"Phase II" ,"Phase III" ,"BLA/NDA filed" ,"Approved"],
        alliance_allergic: ["Allergic (All)","Broad Focus Allergic","Allergic Rhinitis","Anaphylactic Shock","Food/Pet Allergies","Other Allergic"],
        alliance_autoimmune: ["Autoimmune (All)","Broad Focus Autoimmune/Inflammatory","Osteoarthritis","Psoriatic Arthritis","Rheumatoid Arthritis","Scleroderma","Systemic Lupus Erythematosus","Other Autoimmune/Inflammatory"],
        alliance_bone: ["Bone Disease (All)","Broad Focus Bone Disease","Bone Non-Union/Fracture","Osteoporosis","Paget's Disease","Other Bone Disease"],
        alliance_cancer: ["Cancer (All)","Broad Focus Cancer","Bladder","Brain","Breast","Cervical","Colorectal","Diagnosis - Contrast/Imaging","Digestive/Gastrointestinal","Head and Neck","Kaposi's Sarcoma","Kidney","Leukemia","Liver","Lung","Lymphoma","Melanoma","Multiple Myeloma","Ovarian","Pancreatic","Prostate","Solid Tumors","Other Cancer"],
        alliance_cardi: ["Cardiovascular (All)","Broad Focus Cardiovascular","Angina","Arrhythmia","Atherosclerosis/Coronary Artery Disease","Congestive Heart Failure","Diagnosis - Contrast/Imaging","Hypercholesterolemia","Hypertension","Myocardial Infarction","Peripheral Arterial Disease","Restenosis","Other Cardiovascular"],
        alliance_centr: ["Central Nervous System (All)","Broad Focus Central Nervous System","Alzheimer's Disease","Amyotrophic Lateral Sclerosis","Dementia","Epilepsy","Migraine","Multiple Sclerosis","Pain","Parkinson's Disease","Sleep Disorders","Spinal Cord Injury","Stroke","Other Central Nervous System"],

        alliance_dental: ["Dental/Oral (All)","Broad Focus Dental/Oral","Mouth Ulcers","Mucositis","Periodontal Disease","Other Dental/Oral"],
        alliance_derma: ["Dermatologic (All)","Broad Focus Dermatologic","Acne","Actinic Keratosis","Burns","Dermatitis","Hair Disorders","Psoriasis","Venous Ulcers","Wound Healing","Other Dermatologic"],
        alliance_endoc: ["Endocrinological & Metabolic (All)","Broad Focus Endocrinological & Metabolic","Diabetes","Growth Hormone Disorders","Hypogonadism","Lysosomal Storage Disorders","Menopausal Symptoms","Obesity","Thyroid Disease","Other Endocrinological & Metabolic"],
        alliance_gastro: ["Gastrointestinal (All)","Broad Focus Gastrointestinal","Bowel Movement Disorders","Esophageal Reflux","IBD - Crohn's Disease","IBD - Ulcerative Colitis","IBD - Other","Peptic Ulcers","Other Gastrointestinal"],
        alliance_genit: ["Genitourinary/Gynecologic (All)","Broad Focus Genitourinary/Gynecologic","Contraception","Incontinence","Infertility","Sexual Dysfunction","Other Genitourinary/Gynecologic"],
        alliance_hemato: ["Hematologic (All)","Broad Focus Hematologic","Anemia","Blood Substitute","Hemophilia","Immune Thrombocytopenic Purpura","Neutropenia","Sickle Cell Disease","Thrombocytopenia","Thrombosis","Other Hematologic"],
        alliance_infectb: ["Infectious-Bacterial (All)","Broad Focus Infectious-Bacterial","Anthrax","Bacterial Meningitis","Lyme Disease","Pneumonia","Sepsis","Tuberculosis","Urinary Tract Infections","Other Infectious-Bacterial"],
        alliance_infectv: ["Infectious-Viral (All)","Broad Focus Infectious-Viral","Common Cold","Cytomegalovirus/CMV","Hepatitis A","Hepatitis B","Hepatitis C","Human Immunodeficiency Virus/HIV","Influenza","Respiratory Syncytial Virus/RSV","Other Infectious-Viral"],
        alliance_infectm: ["Infectious-Miscellaneous (All)","Fungal","Malaria","Parasitic-Miscellaneous","Other Infectious-Miscellaneous"],
        alliance_liver: ["Liver & Gallbladder Diseases (All)","Broad Focus Liver & Gallbladder Diseases","Cirrhosis/Scarring","Fatty Liver","Gallbladder Stones","Liver Disease/Inflammation","Primary Bilary Cirrhosis","Other Liver & Gallbladder Diseases"],
        alliance_opht: ["Ophthalmic (All)","Broad Focus Ophthalmic","Age-Related Macular Degeneration","Cataracts","Conjunctivitis","Glaucoma","Retinopathy","Uveitis","Other Ophthalmic"],
        alliance_psy: ["Psychiatric (All)","Broad Focus Psychiatric","Addiction","Anxiety","Attention Deficit Hyperactivity Disorder","Depression & Mania","Schizophrenia","Other Psychiatric"],
        alliance_renal: ["Renal (All)","Broad Focus Renal","Glomerulonephritis","Kidney Stones","Nephritis - Other","Other Renal"],
        alliance_resp: ["Respiratory (All)","Broad Focus Respiratory","Acute Respiratory Distress Syndrome","Asthma","Bronchitis","Chronic Obstructive Pulmonary Disease","Cystic Fibrosis","Pulmonary Embolism","Other Respiratory"],
        alliance_trans: ["Transplantation (All)","Broad Focus Transplantation","Stem Cell/Bone Marrow","Graft-versus-Host Disease","Organ/Tissue Transplants","Other Transplantation"],

        alliance_other: ["Other/Miscellaneous (All)","Agriculture","Animal Health","Cosmetics","Industrial Chemicals","Nutritionals/Vitamins","Orthopedics","OTC Products","Other Other/Miscellaneous"],
    }

    $scope.data = {
        select_alliance_parties: "",
        select_alliance_types: "",
        select_alliance_technologies: "",
        select_alliance_stages: '',
        select_alliance_allergic: '',
        select_alliance_autoimmune: '',
        select_alliance_bone: '',
        select_alliance_cancer: '',
        select_alliance_cardi: '',
        select_alliance_centr: '',
        select_alliance_dental: '',
        select_alliance_derma: '',
        select_alliance_endoc: '',
        select_alliance_gastro: '',
        select_alliance_genit: '',
        select_alliance_hemato: '',
        select_alliance_infectb: '',
        select_alliance_infectv: '',
        select_alliance_infectm: '',
        select_alliance_liver: '',
        select_alliance_opht: '',
        select_alliance_psy: '',
        select_alliance_renal: '',
        select_alliance_resp: '',
        select_alliance_trans: '',
        select_alliance_other: '',

        company: "",
        subject: "",
        alliance_text: "",
        agreement_from: "",
        agreement_to: "",
        deal_size_greater: "",
        deal_size_less: "",
        upfront_greater: "",
        upfront_less: "",
        royalty_greater: "",
        royalty_less: "",
        equity_greater: "",
        equity_less: "",
        rd_payment_greater: "",
        rd_payment_less: "",
        total_milestone_payment_greater: "",
        total_milestone_payment_less: "",
        profit_split_greater: "",
        profit_split_less: "",
        alliance_result: "",
        in_progressing: false
    }


    $scope.submit = function() {
        $('.testselect2').SumoSelect();
        return
        // submit form

        console.log('send reqeust')

        $scope.data.alliance_result = ""

        $scope.data.in_progressing = true

        // $scope.data.in_progressing = true;
        console.log($scope.data)
        console.log('webservice/alliances.php?' + $.param($scope.data))

        $http({
            method: 'get',
            url: 'webservice/alliances.php?' + $.param($scope.data)
        }).success(function(data) {
            console.log(data)
            $scope.data.alliance_result = data
            $scope.data.header = getKeys($scope.data.alliance_result[0])
            $scope.data.in_progressing = false
        })

    }


    var getKeys = function(obj){
        var keys = [];
        for(var key in obj){
            keys.push(key);
        }
        return keys;
    }


    $scope.$on('$viewContentLoaded', function(){
        //Here your view content is fully loaded !!
        $('.parties').SumoSelect({selectAll: true});
        $('.alliance_types').SumoSelect({selectAll: true});
        $('.alliance_technologies').SumoSelect({selectAll: true});
        $('.alliance_stages').SumoSelect({selectAll: true});
    });



}]);

