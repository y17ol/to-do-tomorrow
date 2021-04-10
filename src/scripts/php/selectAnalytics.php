<? 
    $query = "SELECT * FROM analytics";
    
    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));
    
    $result = mysqli_query($link, $query) or die("error 5" . mysqli_error($link)); 
    
    mysqli_close($link);

    $data = mysqli_fetch_all($result);

    for ($i = 0; $i < count($data); $i++) {
        $data[$i][3] = json_decode($data[$i][3]);
    }

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
?>