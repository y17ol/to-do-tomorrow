<?
    $id = intval($_POST["id"]);
    $imageClass = $_POST["imageClass"];

    $query = "SELECT * FROM `events_images` WHERE `id` = ".$id;
      
    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));

    $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
    
    mysqli_close($link);
    
    // echo mysqli_fetch_all($result)[0][2];

    echo '<img class="'.$imageClass.'" src="data:image/jpeg;base64,'.base64_encode(mysqli_fetch_all($result)[0][2]).'" />';
?>