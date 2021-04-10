<?
    $chart = new stdClass;
    $chart->type = $_POST["type"];
    $chart->data = $_POST["data"];
    $chart->opt = $_POST["opt"];

    $name = $_POST["name"];
    $topic = $_POST["topic"];
    $serialized_array_variables = json_encode($chart, JSON_UNESCAPED_UNICODE);
    $date = time() * 1000;

    $query = "INSERT INTO `analytics`(  `name`, `topic`, `serialized_array_variables`, `date` ) VALUES ( '".$name."','".$topic."','".$serialized_array_variables."', '".$date."')";

    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));

    
    $result = mysqli_query($link, $query) or die("error 6" . mysqli_error($link)); 
    
    mysqli_close($link);

    echo $result;
?>