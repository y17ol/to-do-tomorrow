<?    
    $query = "SELECT * FROM `events`";
      
    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));

    $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
    
    mysqli_close($link);

    echo json_encode(mysqli_fetch_all($result));
?>