<?php

    // event

    $id = $_POST["id"];

    $query = "SELECT * FROM `events` WHERE `id` = ".$id;
      
    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));

    $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
    
    mysqli_close($link);

    $data = mysqli_fetch_all($result)[0];

    // image

    $imageClass = "bigImage";

    $query = "SELECT * FROM `events_images` WHERE `id` = ".$data[4];
      
    $link = mysqli_connect('localhost', 'gorevents', 'jJiUfy658zdqvi60', 'gorevents') 
        or die("error 00" . mysqli_error($link));

    $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
    
    mysqli_close($link);
    
    $image = '<img class="'.$imageClass.'" src="data:image/jpeg;base64,'.base64_encode(mysqli_fetch_all($result)[0][2]).'" />';

?>

<!DOCTYPE html>
<html lang="ru">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Мероприятие | <?php echo $data[1] ?></title>

    <!-- icon -->
    <link rel="shortcut icon" href="../../img/favicon.png" type="image/x-icon">

    <!-- bootstrap css -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- fonts -->
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- my css -->
    <link rel="stylesheet" href="../../styles/specification.css">
    <link rel="stylesheet" href="../../styles/bigBlock.css">
    <link rel="stylesheet" href="../../styles/pages.css">
    
    <!-- JQ -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- script for bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <!-- my scripts -->
    <script src="../../scripts/htmlBlocks/bigBlocks.js"></script>
    <script src="../../scripts/htmlBlocks/blocks.js"></script>
    <script src="../../scripts/utils.js"></script>

</head>

<body>

    <div class="header"></div>
    
    <div class="main eventDetails">
        <div class="container">  

            <div class="eventDetails__image d-flex justify-content-center">
                <?php echo $image ?>
            </div>

            <h2>
                <?php echo $data[1] ?>
            </h2>

            <p>
                <?php echo $data[3] ?>
            </p>

            <h4>Когда?</h4>
            <p>
                <?php
                    $date = date_create();
                    date_timestamp_set($date, $data[5] / 1000); 
                    echo date_format($date, 'd.m.Y H:i')
                ?>
            </p>

            <h4>Где?</h4>
            <p>
                <?php echo $data[6] ?>
            </p>

            <h4>Контакты</h4>
            <p>
                <?php echo $data[8] ?>
            </p>

            <p class="date">
                <?php
                    $date = date_create();
                    date_timestamp_set($date, $data[11] / 1000); 
                    echo date_format($date, 'd.m.Y H:i')
                ?>
            </p>
            
        </div>
    </div>

    <div class="footer"></div>

    <script>
        
        document.querySelector('.header').insertAdjacentHTML('beforeend', returnMenu('../../'))
        document.querySelector('.footer').insertAdjacentHTML('beforeend', returnFooter('../../'))
        
    </script>

</body>

</html>