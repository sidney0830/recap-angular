<?php
header('Content-Type: application/json; charset=utf-8');

if (!empty($_GET)) {
  mysql_connect('140.113.117.125','root','root');
  mysql_select_db('recap');

  $from = $_GET['from'];
  $until = $_GET['until'];
  $contract_type = $_GET['select_contract_type'];
  $contract_text = $_GET['contract_text'];
  $parties = $_GET['select_contact_parties'];


  $has_where = false;
  $query = "SELECT * FROM contract ";

  if (($from != null) && ($until != null)) {
    $query = ($has_where == false ? $query."WHERE Contract_Date BETWEEN '$from' AND '$until' " : $query."AND Date BETWEEN '$from' AND '$until' ");
    $has_where = true;
  }

  if ($contract_type != null) {
    $query = ($has_where == false ? $query."WHERE Contract_Type LIKE '%$contract_type%' " : $query."AND Contract_Type LIKE '%$contract_type%' ");
    $has_where = true;
  }

  if ($parties != null) {
    $query = ($has_where == false ? $query."WHERE Parties LIKE '%$parties%' " : $query."AND Parties LIKE '%$parties%' ");
    $has_where = true;
  }

  $query = "SELECT * FROM contract LIMIT 1000";


  $result = mysql_query($query) or die('MySQL query error');
  $is_first = true;
  $rows = array();
  $i = 0;
  while ($rows[$i++] = mysql_fetch_array($result, MYSQL_ASSOC));
  array_pop($rows);

  echo json_encode($rows);

}
?>


