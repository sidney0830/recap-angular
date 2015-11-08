'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/alliance', {
		templateUrl: 'view_alliance/view2.html',
		controller: 'View2Ctrl'
	});
}])

.controller('View2Ctrl', ['$scope', '$http', '$document', '$route', function($scope, $http, $document, $route) {


	$scope.input = {
		alliance_types_full: ["Acquisition","Asset Purchase","Assignment","Co-Development","Co-Market","Co-Promotion","Collaboration","Cross-license","Development","Distribution","Equity","Joint Venture","Letter of Intent","License","Loan","Manufacturing","Marketing","Merger","Option","Research","Security","Settlement","Sublicense","Supply","Termination","Warrant"],
		alliance_types: {
			Acq: "Acquisition",
			Ast: "Asset Purchase",
			Asn: "Assignment",
			CoD: "Co-Development",
			CoM: "Co-Marketing",
			CoP: "Co-Promotion",
			Col: "Collaboration",
			CrL: "Cross-License",
			D:   "Development",
			Di:  "Distribution",
			E: "Equity",
			JV: "Joint Venture",
			LoI: "Letter of Intent",
			L: "License",
			Lo: "Loan",
			Man: "Manufacturing",
			Mkt: "Marketing",
			Mrg: "Merger",
			O: "Option",
			R: "Research",
			S: "Supply",
			Sec: "Security",
			Set: "Settlement",
			Sub: "Sublicense",
			Ter: "Termination",
			W: "Warrant",
			CON: "Confidential",
			EFR: "Effective Royalty Rate",
			BLA: "Biologic License Application",
			NDA: "New Drug Application"
		},
		alliance_parties: ["Pharma-Biotech" ,"Biotech-Biotech" ,"Pharma-Pharma" ,"University-Biotech", "University-Pharma" ,"Non-Medical"],
		alliance_technologies:  ["Adjuvant" ,"Bioinformatics" ,"Carbohydrates" ,"Cell Therapy - Stem Cells/Factors" ,"Collagen matrix" ,"Combinatorial" ,"Device" ,"Diagnostics" ,"DNA Probes" ,"Drug Delivery - Liposomes" ,"Drug Delivery - Oral" ,"Drug Delivery - Other" ,"Drug Delivery - Sustained Release" ,"Drug Delivery - Transdermal" ,"Gene Expression" ,"Gene Sequencing" ,"Generics" ,"Hyaluronic acid" ,"Immunoassay" ,"Immunoglobulin" ,"Implantable Devices" ,"In-licensed Products" ,"Microarrays" ,"Micropropagation" ,"Microspheres" ,"Monoclonals" ,"Monoclonals - Anti-Idiotypes" ,"Monoclonals - Conjugates" ,"Monoclonals - Humanized & Fully Human Abs" ,"Monoclonals - Transgenic mice" ,"Natural Product" ,"Oligonucleotide ligands" ,"Oligonucleotides - Antisense/Triple helix" ,"Oligonucleotides - Gene Therapy" ,"Oligonucleotides - Ribozymes" ,"Peptides" ,"PFOB Emulsions" ,"Pharmacogenomics" ,"Phototherapy" ,"Polyclonal Antibodies" ,"Polyethylene glycol" ,"Proteomics" ,"Purines & Pyrimidines" ,"Rational Drug Design - Computational" ,"Rational Drug Design - Small Molecules" ,"Recombinant DNA" ,"Resin Polymers" ,"Screening" ,"Separations" ,"Service Laboratory" ,"Small Molecules" ,"Transcription Factors" ,"Transgenics" ,"Vaccines"],
		alliance_stages: ["Formulation" ,"Discovery" ,"Lead Molecule" ,"Preclinical" ,"Phase I" ,"Phase II" ,"Phase III" ,"BLA/NDA filed" ,"Approved"],
		alliance_allergic: ["Broad Focus Allergic","Allergic Rhinitis","Anaphylactic Shock","Food/Pet Allergies","Other Allergic"],
		alliance_autoimmune: ["Broad Focus Autoimmune/Inflammatory","Osteoarthritis","Psoriatic Arthritis","Rheumatoid Arthritis","Scleroderma","Systemic Lupus Erythematosus","Other Autoimmune/Inflammatory"],
		alliance_bone: ["Broad Focus Bone Disease","Bone Non-Union/Fracture","Osteoporosis","Paget's Disease","Other Bone Disease"],
		alliance_cancer: ["Broad Focus Cancer","Bladder","Brain","Breast","Cervical","Colorectal","Diagnosis - Contrast/Imaging","Digestive/Gastrointestinal","Head and Neck","Kaposi's Sarcoma","Kidney","Leukemia","Liver","Lung","Lymphoma","Melanoma","Multiple Myeloma","Ovarian","Pancreatic","Prostate","Solid Tumors","Other Cancer"],
		alliance_cardi: ["Broad Focus Cardiovascular","Angina","Arrhythmia","Atherosclerosis/Coronary Artery Disease","Congestive Heart Failure","Diagnosis - Contrast/Imaging","Hypercholesterolemia","Hypertension","Myocardial Infarction","Peripheral Arterial Disease","Restenosis","Other Cardiovascular"],
		alliance_centr: ["Broad Focus Central Nervous System","Alzheimer's Disease","Amyotrophic Lateral Sclerosis","Dementia","Epilepsy","Migraine","Multiple Sclerosis","Pain","Parkinson's Disease","Sleep Disorders","Spinal Cord Injury","Stroke","Other Central Nervous System"],
		alliance_dental: ["Broad Focus Dental/Oral","Mouth Ulcers","Mucositis","Periodontal Disease","Other Dental/Oral"],
		alliance_derma: ["Broad Focus Dermatologic","Acne","Actinic Keratosis","Burns","Dermatitis","Hair Disorders","Psoriasis","Venous Ulcers","Wound Healing","Other Dermatologic"],
		alliance_endoc: ["Broad Focus Endocrinological & Metabolic","Diabetes","Growth Hormone Disorders","Hypogonadism","Lysosomal Storage Disorders","Menopausal Symptoms","Obesity","Thyroid Disease","Other Endocrinological & Metabolic"],
		alliance_gastro: ["Broad Focus Gastrointestinal","Bowel Movement Disorders","Esophageal Reflux","IBD - Crohn's Disease","IBD - Ulcerative Colitis","IBD - Other","Peptic Ulcers","Other Gastrointestinal"],
		alliance_genit: ["Broad Focus Genitourinary/Gynecologic","Contraception","Incontinence","Infertility","Sexual Dysfunction","Other Genitourinary/Gynecologic"],
		alliance_hemato: ["Broad Focus Hematologic","Anemia","Blood Substitute","Hemophilia","Immune Thrombocytopenic Purpura","Neutropenia","Sickle Cell Disease","Thrombocytopenia","Thrombosis","Other Hematologic"],
		alliance_infectb: ["Broad Focus Infectious-Bacterial","Anthrax","Bacterial Meningitis","Lyme Disease","Pneumonia","Sepsis","Tuberculosis","Urinary Tract Infections","Other Infectious-Bacterial"],
		alliance_infectv: ["Broad Focus Infectious-Viral","Common Cold","Cytomegalovirus/CMV","Hepatitis A","Hepatitis B","Hepatitis C","Human Immunodeficiency Virus/HIV","Influenza","Respiratory Syncytial Virus/RSV","Other Infectious-Viral"],
		alliance_infectm: ["Fungal","Malaria","Parasitic-Miscellaneous","Other Infectious-Miscellaneous"],
		alliance_liver: ["Broad Focus Liver & Gallbladder Diseases","Cirrhosis/Scarring","Fatty Liver","Gallbladder Stones","Liver Disease/Inflammation","Primary Bilary Cirrhosis","Other Liver & Gallbladder Diseases"],
		alliance_opht: ["Broad Focus Ophthalmic","Age-Related Macular Degeneration","Cataracts","Conjunctivitis","Glaucoma","Retinopathy","Uveitis","Other Ophthalmic"],
		alliance_psy: ["Broad Focus Psychiatric","Addiction","Anxiety","Attention Deficit Hyperactivity Disorder","Depression & Mania","Schizophrenia","Other Psychiatric"],
		alliance_renal: ["Broad Focus Renal","Glomerulonephritis","Kidney Stones","Nephritis - Other","Other Renal"],
		alliance_resp: ["Broad Focus Respiratory","Acute Respiratory Distress Syndrome","Asthma","Bronchitis","Chronic Obstructive Pulmonary Disease","Cystic Fibrosis","Pulmonary Embolism","Other Respiratory"],
		alliance_trans: ["Broad Focus Transplantation","Stem Cell/Bone Marrow","Graft-versus-Host Disease","Organ/Tissue Transplants","Other Transplantation"],
		alliance_other: ["Agriculture","Animal Health","Cosmetics","Industrial Chemicals","Nutritionals/Vitamins","Orthopedics","OTC Products","Other Other/Miscellaneous"],

		alliance_asia: ["(Any) Asian Territory","Australia","China","India","Japan","New Zealand","Southeast Asia","Other Asian"],
		alliance_africa: ["(Any) African Territory","All African Countries","Algeria","Egypt"  ,"South Africa" ,"Other African"],
		alliance_europe: ["(Any) European Territory","Eastern Europe","European Union","France","Germany","Russia","Scandinavia","Spain","United Kingdom","Other European"],
		alliance_mideast: ["(Any) Mideast Territory","Israel","Saudi Arabia","Turkey","Other Middle Eastern"],

		alliance_northamerica: ["(Any) North American Territory","Canada","Mexico","US"],
		alliance_southamerica: ["(Any) South American Territory","Argentina","Brazil","Chile","Other South American"],
		alliance_disclosure: ["Full","Partial","None"],
		alliance_exclusiv: ["Exclusive","Semi-exclusive","Non-exclusive"]

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

		select_alliance_asia:'',
		select_alliance_africa:'',
		select_alliance_europe:'',
		select_alliance_mideast:'',
		select_alliance_northamerica:'',
		select_alliance_southamerica:'',

		select_alliance_disclosure:'',
		select_alliance_exclusiv:'',

		alliance_company: "",
		alliance_subject: "",
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
		alliance_result: ""
	}

	$scope.in_progressing = false


	$scope.submit = function() {
		// submit form

		console.log('send reqeust')

		$scope.data.alliance_result = ""

		$scope.in_progressing = true

		// $scope.in_progressing = true;
		console.log($scope.data)
		console.log('webservice/alliances.php?' + $.param($scope.data))

		$http({
			method: 'get',
			url: 'webservice/alliances.php?' + $.param($scope.data)
		}).success(function(data) {
			console.log(data)
			for (var index in data) {
				for (var key in data[index]) {
					if (key == 'Type') {
						// trim first and last comma
						data[index][key] = data[index][key].replace(/(^,)|(,$)/g, "")
						data[index][key] = data[index][key].split(",")
					}
				}
			}
			$scope.data.alliance_result = data
			$scope.data.header = getKeys($scope.data.alliance_result[0])
			$scope.in_progressing = false
		})

	}

	$scope.reset = function() {
		// trick, we reset form by reloading page
		$route.reload()
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

		$('.alliance_allergics').SumoSelect({selectAll: true, selectAlltext: "Allergic (All)",floatWidth: 800});
		$('.alliance_autoimmunes').SumoSelect({selectAll: true, selectAlltext: "Autoimmune (All)"});
		$('.alliance_bones').SumoSelect({selectAll: true, selectAlltext: "Bone Disease (All)"});
		$('.alliance_cancers').SumoSelect({selectAll: true, selectAlltext: "Cancer (All)"});
		$('.alliance_cardis').SumoSelect({selectAll: true, selectAlltext: "Cardiovascular (All)"});
		$('.alliance_centrs').SumoSelect({selectAll: true, selectAlltext: "Central Nervous System (All)"});
		$('.alliance_dentals').SumoSelect({selectAll: true, selectAlltext: "Dental/Oral (All)"});
		$('.alliance_dermas').SumoSelect({selectAll: true, selectAlltext: "Dermatologic (All)"});
		$('.alliance_endocs').SumoSelect({selectAll: true, selectAlltext: "Endocrinological & Metabolic (All)"});
		$('.alliance_gastros').SumoSelect({selectAll: true, selectAlltext: "Gastrointestinal (All)"});
		$('.alliance_genits').SumoSelect({selectAll: true, selectAlltext: "Genitourinary/Gynecologic (All)"});
		$('.alliance_hematos').SumoSelect({selectAll: true, selectAlltext: "Hematologic (All)"});
		$('.alliance_infectbs').SumoSelect({selectAll: true, selectAlltext: "Infectious-Bacterial (All)"});
		$('.alliance_infectvs').SumoSelect({selectAll: true, selectAlltext: "Infectious-Viral (All)"});
		$('.alliance_infectms').SumoSelect({selectAll: true, selectAlltext: "Infectious-Miscellaneous (All)"});
		$('.alliance_livers').SumoSelect({selectAll: true, selectAlltext: "Liver & Gallbladder Diseases (All)"});
		$('.alliance_ophts').SumoSelect({selectAll: true, selectAlltext: "Ophthalmic (All)"});
		$('.alliance_psys').SumoSelect({selectAll: true, selectAlltext: "Psychiatric (All)"});
		$('.alliance_renals').SumoSelect({selectAll: true, selectAlltext: "Renal (All)"});
		$('.alliance_resps').SumoSelect({selectAll: true, selectAlltext: "Respiratory (All)"});
		$('.alliance_trans').SumoSelect({selectAll: true, selectAlltext: 'Transplantation (All)'});
		$('.alliance_others').SumoSelect({selectAll: true, selectAlltext: 'Other/Miscellaneous (All)'});


		$('.alliance_asia').SumoSelect({selectAll: true, selectAlltext: 'All Asian Countries'});
		$('.alliance_africa').SumoSelect({selectAll: true, selectAlltext: 'All African Countries'});
		$('.alliance_europe').SumoSelect({selectAll: true, selectAlltext: 'All European Countries'});
		$('.alliance_mideast').SumoSelect({selectAll: true, selectAlltext: 'All Mideast Countries'});
		$('.alliance_northamerica').SumoSelect({selectAll: true, selectAlltext: '"All North American Countries"'});
		$('.alliance_southamerica').SumoSelect({selectAll: true, selectAlltext: 'All South American Countries'});


		$('.alliance_disclosure').SumoSelect();
		$('.alliance_exclusiv').SumoSelect();
	});




}]);

