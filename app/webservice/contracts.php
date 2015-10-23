<?php
ini_set('display_errors',1);
ini_set('memory_limit', '-1');
set_time_limit(0);
error_reporting(E_ERROR | E_PARSE);
date_default_timezone_set('Asia/Taipei');

header('Content-Type: application/json; charset=utf-8');



if (!empty($_GET)) {
  $conn=mysql_connect('140.113.117.125','root','root');
  if (!$conn)
  {
  die('Could not connect: ' . mysql_error());
  }

  mysql_select_db('recap');
  mysql_set_charset('utf8');
  // $conn= mysql_connect('140.113.117.125','root','root');

  $from = $_GET['from'];
  $until = $_GET['until'];
  $contract_type = $_GET['select_contract_types'];
  $contract_text = $_GET['contract_text'];
  $parties = $_GET['select_contact_parties'];


  $has_where = false;
  $query = "SELECT * FROM contract ";

  if (($from != null) && ($until != null)) {
    $from = date('Y-m-d', strtotime($from));
    $until = date('Y-m-d', strtotime($until));
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

  // echo $query;

  $result = mysql_query($query) or die('MySQL query error');
  $is_first = true;
  $rows = array();
  $i = 0;
  while ($rows[$i++] = mysql_fetch_array($result, MYSQL_ASSOC));
  array_pop($rows);

  echo json_encode($rows);
  // echo json_last_error(); //debug use


}
?>



