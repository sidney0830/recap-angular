<?php

header('Content-Type: application/json; charset=utf-8');

date_default_timezone_set('Asia/Taipe');
error_reporting(E_ERROR | E_PARSE);


if (!empty($_GET)) {
  mysql_connect('140.113.117.125','root','root');
  mysql_select_db('recap');

  $from = $_GET['from'];
  $until = $_GET['until'];
  $contract_type = $_GET['select_contract_types'];
  $contract_text = $_GET['contract_text'];
  $parties = $_GET['select_contact_parties'];


  $has_where = false;
  $query = "SELECT * FROM contract ";

  if (($from != null) && ($until != null)) {
    !$from = date('Y-m-d', strtotime($from));
    !$until = date('Y-m-d', strtotime($until));
    $new_date_format = date('Y-m-d', $timestamp);
    $query = ($has_where == false ? $query."WHERE Contract_Date BETWEEN '$from' AND '$until' " : $query."AND Contract_Date BETWEEN '$from' AND '$until' ");
    $has_where = true;
  }

  if ($contract_type != null && count($contract_type) > 0) {
      $value = array_shift($contract_type);
      $query = ($has_where == false ? $query."WHERE (Contract_Type LIKE '%$value%'" : $query."AND (Contract_Type LIKE '%$value%'");
      $has_where = true;

      foreach($contract_type as $value) {
        $query = $query." OR Contract_Type LIKE '%$value%'";
      }
      $query = $query.') ';
  }

  if ($parties != null && count($parties) > 0) {
      $value = array_shift($parties);
      $query = ($has_where == false ? $query."WHERE (Parties LIKE '%$value%' " : $query."AND (Parties LIKE '%$value%'");
      $has_where = true;

      foreach($parties as $value) {
          $query = $query." OR Parties LIKE '%$value%'";
      }
      $query = $query.') ';
  }

  $query = "$query LIMIT 5000";


  // echo $query;

  $result = mysql_query($query) or die('MySQL query error');
  $is_first = true;
  $rows = array();
  $i = 0;
  while ($rows[$i++] = mysql_fetch_array($result, MYSQL_ASSOC));
  array_pop($rows);

  echo json_encode($rows);

  echo count($rows);
  // echo 'hi';


}
?>



