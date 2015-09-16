
<?php
if (!empty($_GET)) {
  mysql_connect('140.113.117.125','root','root');
  mysql_select_db('recap');

  $from = $_GET['from'];
  $to = $_GET['to'];

  $query = "SELECT * FROM alliance WHERE Date BETWEEN '$from' AND '$to'";
  // print_r($_GET);
  echo "sql: $query<br>";
  $result = mysql_query($query) or die('MySQL query error');
  $is_first = true;
  echo "<table border=1>";
      while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){
        if ($is_first) {
          echo "<tr>";
           foreach ($row as $key => $value) {
            echo "<th>$key</th>";
           }
          echo "</tr>";
          $is_first = false;
        }

        echo "<tr>";
        foreach ($row as $key => $value) {
            echo "<td>$value</td>";
        }
        echo "</tr>";
        }
    echo "</table>";
}


?>
