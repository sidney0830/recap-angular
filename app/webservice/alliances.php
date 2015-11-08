<?php
ini_set('display_errors',1);
ini_set('memory_limit', '-1');
set_time_limit(0);
error_reporting(E_ERROR | E_PARSE);
date_default_timezone_set('Asia/Taipei');

header('Content-Type: application/json; charset=utf-8');

if (!empty($_GET)) {
	mysql_connect('140.113.117.125','root','root');
	mysql_select_db('recapnew');
	//mysql_select_db('recap');
	mysql_set_charset('utf8');

	$has_where = false;
	$query = "SELECT * FROM alliance ";

	if ($_GET['agreement_from'] != null && $_GET['agreement_to'] != null) {
		$_GET['agreement_from'] = explode("(", $_GET['agreement_from'])[0];
		$_GET['agreement_to'] = explode("(", $_GET['agreement_to'])[0];
		$from = date('Y-m-d', strtotime($_GET['agreement_from']));
		$to = date('Y-m-d', strtotime($_GET['agreement_to']));
		$query = ($has_where == false ? $query."WHERE Date BETWEEN '$from' AND '$to' " : $query."AND Date BETWEEN '$from' AND '$to' ");
		$has_where = true;
	}

	if ($_GET['deal_size_greater'] != null && $_GET['deal_size_less'] != null) {
		$greater = $_GET['deal_size_greater'];
		$less = $_GET['deal_size_less'];
		$query = ($has_where == false ? $query."WHERE Size BETWEEN $greater AND $less " : $query."AND Size BETWEEN $greater AND $less ");
		$has_where = true;
	} else if ($_GET['deal_size_greater'] != null) {
		$greater = $_GET['deal_size_greater'];
		$query = ($has_where == false ? $query."WHERE Size > $greater " : $query."AND Size > $greater ");
		$has_where = true;
	} else if ($_GET['deal_size_less'] != null) {
		$less = $_GET['deal_size_less'];
		$query = ($has_where == false ? $query."WHERE Size < $less " : $query."AND Size < $less ");
		$has_where = true;
	}

	if ($_GET['upfront_greater'] != null && $_GET['upfront_less'] != null) {
		$greater = $_GET['upfront_greater'];
		$less = $_GET['upfront_less'];
		$query = ($has_where == false ? $query."WHERE Upfront BETWEEN $greater AND $less " : $query."AND Upfront BETWEEN $greater AND $less ");
		$has_where = true;
	} else if ($_GET['upfront_greater'] != null) {
		$greater = $_GET['upfront_greater'];
		$query = ($has_where == false ? $query."WHERE Upfront > $greater " : $query."AND Upfront > $greater ");
		$has_where = true;
	} else if ($_GET['upfront_less'] != null) {
		$less = $_GET['upfront_less'];
		$query = ($has_where == false ? $query."WHERE Upfront < $less " : $query."AND Upfront < $less ");
		$has_where = true;
	}

	if ($_GET['royalty_greater'] != null && $_GET['royalty_less'] != null) {
		$greater = $_GET['royalty_greater'];
		$less = $_GET['royalty_less'];
		$query = ($has_where == false ? $query."WHERE Royalty BETWEEN $greater AND $less " : $query."AND Royalty BETWEEN $greater AND $less ");
		$has_where = true;
	} else if ($_GET['royalty_greater'] != null) {
		$greater = $_GET['royalty_greater'];
		$query = ($has_where == false ? $query."WHERE Royalty > $greater " : $query."AND Royalty > $greater ");
		$has_where = true;
	} else if ($_GET['royalty_less'] != null) {
		$less = $_GET['royalty_less'];
		$query = ($has_where == false ? $query."WHERE Royalty < $less " : $query."AND Royalty < $less ");
		$has_where = true;
	}

	if ($_GET['equity_greater'] != null && $_GET['equity_less'] != null) {
		$greater = $_GET['equity_greater'];
		$less = $_GET['equity_less'];
		$query = ($has_where == false ? $query."WHERE Equity BETWEEN $greater AND $less " : $query."AND Equity BETWEEN $greater AND $less ");
		$has_where = true;
	} else if ($_GET['equity_greater'] != null) {
		$greater = $_GET['equity_greater'];
		$query = ($has_where == false ? $query."WHERE Equity > $greater " : $query."AND Equity > $greater ");
		$has_where = true;
	} else if ($_GET['equity_less'] != null) {
		$less = $_GET['equity_less'];
		$query = ($has_where == false ? $query."WHERE Equity < $less " : $query."AND Equity < $less ");
		$has_where = true;
	}


	if ($_GET['rd_payment_greater'] != null && $_GET['rd_payment_less'] != null) {
		$greater = $_GET['rd_payment_greater'];
		$less = $_GET['rd_payment_less'];
		$query = ($has_where == false ? $query."WHERE `RD Amt` BETWEEN $greater AND $less " : $query."AND `RD Amt` BETWEEN $greater AND $less ");
		$has_where = true;
	} else if ($_GET['rd_payment_greater'] != null) {
		$greater = $_GET['rd_payment_greater'];
		$query = ($has_where == false ? $query."WHERE `RD Amt` > $greater " : $query."AND `RD Amt` > $greater ");
		$has_where = true;
	} else if ($_GET['rd_payment_less'] != null) {
		$less = $_GET['rd_payment_less'];
		$query = ($has_where == false ? $query."WHERE `RD Amt` < $less " : $query."AND `RD Amt` < $less ");
		$has_where = true;
	}

	if ($_GET['total_milestone_payment_greater'] != null && $_GET['total_milestone_payment_less'] != null) {
		$greater = $_GET['total_milestone_payment_greater'];
		$less = $_GET['total_milestone_payment_less'];
		$query = ($has_where == false ? $query."WHERE `Tot Milestone Amt` BETWEEN $greater AND $less " : $query."AND `Tot Milestone Amt` BETWEEN $greater AND $less ");
		$has_where = true;
	} else if ($_GET['total_milestone_payment_greater'] != null) {
		$greater = $_GET['total_milestone_payment_greater'];
		$query = ($has_where == false ? $query."WHERE `Tot Milestone Amt` > $greater " : $query."AND `Tot Milestone Amt` > $greater ");
		$has_where = true;
	} else if ($_GET['total_milestone_payment_less'] != null) {
		$less = $_GET['total_milestone_payment_less'];
		$query = ($has_where == false ? $query."WHERE `Tot Milestone Amt` < $less " : $query."AND `Tot Milestone Amt` < $less ");
		$has_where = true;
	}

	if ($_GET['profit_split_greater'] != null && $_GET['profit_split_less'] != null) {
		$greater = $_GET['profit_split_greater'];
		$less = $_GET['profit_split_less'];
		$query = ($has_where == false ? $query."WHERE `Profit Split` BETWEEN $greater AND $less " : $query."AND `Profit Split` BETWEEN $greater AND $less ");
		$has_where = true;
	} else if ($_GET['profit_split_greater'] != null) {
		$greater = $_GET['profit_split_greater'];
		$query = ($has_where == false ? $query."WHERE `Profit Split` > $greater " : $query."AND `Profit Split` > $greater ");
		$has_where = true;
	} else if ($_GET['profit_split_less'] != null) {
		$less = $_GET['profit_split_less'];
		$query = ($has_where == false ? $query."WHERE `Profit Split` < $less " : $query."AND `Profit Split` < $less ");
		$has_where = true;
	}


	if ($_GET['select_contact_parties'] != null && count($_GET['select_contact_parties']) > 0) {
		$parties = $_GET['select_contact_parties'];
		$value = array_shift($parties);
		$query = ($has_where == false ? $query."WHERE (Parties LIKE '%$value%' " : $query."AND (Parties LIKE '%$value%'");
		$has_where = true;

		foreach($parties as $value) {
			$query = $query." OR Parties LIKE '%$value%'";
		}
		$query = $query.') ';
	}


	// Parties
	if ($_GET['select_alliance_parties'] != null && count($_GET['select_alliance_parties']) > 0) {
		$parties = $_GET['select_alliance_parties'];
		$value = array_shift($parties);
		$query = ($has_where == false ? $query."WHERE (Parties LIKE '%$value%' " : $query."AND (Parties LIKE '%$value%'");
		$has_where = true;

		foreach($parties as $value) {
			$query = $query." OR Parties LIKE '%$value%'";
		}
		$query = $query.') ';
	}

	// Alliance Type
	if ($_GET['select_alliance_types'] != null && count($_GET['select_alliance_types']) > 0) {
		$types = $_GET['select_alliance_types'];
		$value = array_shift($types);
		//$query = ($has_where == false ? $query."WHERE BINARY (Type LIKE '%$value%' " : $query."AND BINARY (Type LIKE '%$value%'");
		$query = ($has_where == false ? $query."WHERE BINARY (Type LIKE '%$value,%' OR Type LIKE '$value' " : $query."AND BINARY (Type LIKE '%$value,%' OR Type LIKE '$value' ");
		$has_where = true;

		foreach($types as $value) {
			//$query = $query." OR Type LIKE '%$value%'";
			$query = $query." OR Type LIKE '%$value,%' OR Type LIKE '$value' ";
		}
		$query = $query.') ';
	}

	// Technology:
	if ($_GET['select_alliance_technologies'] != null && count($_GET['select_alliance_technologies']) > 0) {
		$techs = $_GET['select_alliance_technologies'];
		$value = array_shift($techs);
		$query = ($has_where == false ? $query."WHERE (Technology LIKE '%$value%' " : $query."AND (Technology LIKE '%$value%'");
		$has_where = true;

		foreach($techs as $value) {
			$query = $query." OR Technology LIKE '%$value%'";
		}
		$query = $query.') ';
	}

	//Stage:
	if ($_GET['select_alliance_stages'] != null && count($_GET['select_alliance_stages']) > 0) {
		$stages = $_GET['select_alliance_stages'];
		$value = array_shift($stages);
		$query = ($has_where == false ? $query."WHERE (Stage LIKE '%$value%' " : $query."AND (Stage LIKE '%$value%'");
		$has_where = true;

		foreach($stages as $value) {
			$query = $query." OR Stage LIKE '%$value%'";
		}
		$query = $query.') ';
	}

    if ($_GET['select_alliance_exclusiv'] != null && count($_GET['select_alliance_exclusiv']) > 0) {
    $exclusiv = $_GET['select_alliance_exclusiv'];
    $value = array_shift($exclusiv);
    $query = ($has_where == false ? $query."WHERE (Exclusivity LIKE '$value' " : $query."AND (Exclusivity LIKE '$value'");
    $has_where = true;

    foreach($exclusiv as $value) {
      $query = $query." OR Exclusivity LIKE '$value'";
    }
    $query = $query.') ';
  }

	// alliance_subject
	if ($_GET['alliance_subject'] != null ) {
		$alliance_subject = $_GET['alliance_subject'];
		$value = $alliance_subject;
		$query = ($has_where == false ? $query."WHERE (Subject LIKE '%$value%' " : $query."AND (Subject LIKE '%$value%'");
		$has_where = true;
		$query = $query.') ';
	}

  //Company
  if ($_GET['alliance_company'] != null ) {
    $alliance_company = $_GET['alliance_company'];
    $value = $alliance_company;
    $query = ($has_where == false ? $query."WHERE ( `Licensee/Buyer` LIKE '%$value%' OR `Licensor/Seller` LIKE '%$value%'" : $query."AND (`Licensor/Seller` LIKE '%$value%' OR `Licensee/Buyer` LIKE '%$value%'");
    $has_where = true;
    $query = $query.') ';
  }
//	echo $query;

	//$query = $query."LIMIT 10";

	$result = mysql_query($query) or die('MySQL query error');
	$is_first = true;
	$rows = array();
	$i = 0;
	while ($rows[$i++] = mysql_fetch_array($result, MYSQL_ASSOC));
	array_pop($rows);
	echo json_encode($rows);





}















?>
