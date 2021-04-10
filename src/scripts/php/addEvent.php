<?

    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));

    // add image

    $image_name = $_FILES["image"]["name"];
    $image_tmp = addslashes(file_get_contents($_FILES["image"]["tmp_name"]));

    $query = "INSERT INTO `events_images`(`name`, `data`) VALUES ('".$image_name."', '".$image_tmp."')";
    $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link)); 

    // get id image

    $query = "SELECT MAX(`id`) FROM `events_images`";
    $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link));
     
    // add event
    
    $name = $_POST["name"];
    $topic = $_POST["topic"];
    $сontent = $_POST["content"];
    $image = mysqli_fetch_array($result)[0];
    $date_event = strtotime($_POST["datetime"]) * 1000;
    $location = $_POST["location"];
    $contacts = $_POST["contacts"];
    $analytics = "16";
    $organizers = "{}";
    $participants = "{}";
    $date = time() * 1000;

    $query = "INSERT INTO `events`( `name`, `topic`, `сontent`, `image`, `date_event`, `location`, `contacts`, `analytics`, `organizers`, `participants`, `date`) VALUES ".
        "( '".$name."', '".$topic."', '".$сontent."', '".$image."', '".$date_event."', '".$location."', '".$contacts."', '".$analytics."', '".$organizers."', '".$participants."', '".$date."')";

    $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link)); 
    
    mysqli_close($link);

    // echo $result;

    include('../../pages/add/add-event.html')

?>