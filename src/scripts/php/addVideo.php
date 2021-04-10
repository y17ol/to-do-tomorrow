<?
    $name = $_POST["name"];
    $linkVideo = str_replace('watch?v=', 'embed/', $_POST["link"]);
    $topic = $_POST["topic"];
    $date = time() * 1000;
    
    $query = "INSERT INTO `video_lessons`( `name`, `topic`, `video`, `date` ) VALUES ( '".$name."', '".$topic."', '".$linkVideo."', '".$date."')";
      
    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));

    $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link)); 
    
    mysqli_close($link);

    echo $result;
?>