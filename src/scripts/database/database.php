<?

class database
{
    public static function et()
    {
        //$link = mysqli_connect($_SESSION['host'], $_SESSION['username'], $_SESSION['userpass'], $_SESSION['DB']) 
        $link = mysqli_connect('localhost', 'root', 'root', 'gorevents') 
            or die("error 00" . mysqli_error($link));
            return $link;

    }

    public static function close($link)
    {
        mysqli_close($link);
        return 0;
    }
}

class access_users extends database
{
    public function select()
    {
        $query ="SELECT * FROM access_users";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 1" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function insert($name, $insert_video_lessons, $insert_analytics, $insert_events, $insert_users, $insert_comments, $insert_access_users, $insert_personal, $update_video_lessons, $update_analytics, $update_events, $update_users, $update_access_users, $update_personal, $update_comments, $delete_video_lessons, $delete_analytics, $delete_events, $delete_users, $delete_access_users, $delete_comments, $select_video_lessons, $select_analytics, $select_events, $select_users, $select_access_users, $select_personal, $select_comments)
    {
        $query ="INSERT INTO `access_users`( `name`, `insert_video_lessons`, `insert_analytics`, `insert_events`, `insert_users`, `insert_comments`, `insert_access_users`, `insert_personal`, `update_video_lessons`, `update_analytics`, `update_events`, `update_users`, `update_access_users`, `update_personal`, `update_comments`, `delete_video_lessons`, `delete_analytics`, `delete_events`, `delete_users`, `delete_access_users`, `delete_comments`, `select_video_lessons`, `select_analytics`, `select_events`, `select_users`, `select_access_users`, `select_personal`, `select_comments`) VALUES ( ".$name.", ".$insert_video_lessons.", ".$insert_analytics.", ".$insert_events.", ".$insert_users.", ".$insert_comments.", ".$insert_access_users.", ".$insert_personal.", ".$update_video_lessons.", ".$update_analytics.", ".$update_events.", ".$update_users.", ".$update_access_users.", ".$update_personal.", ".$update_comments.", ".$delete_video_lessons.", ".$delete_analytics.", ".$delete_events.", ".$delete_users.", ".$delete_access_users.", ".$delete_comments.",".$select_video_lessons.", ".$select_analytics.", ".$select_events.", ".$select_users.", ".$select_access_users.", ".$select_personal.", ".$select_comments.")";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 2" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function update($id ,$name, $insert_video_lessons, $insert_analytics, $insert_events, $insert_users, $insert_comments, $insert_access_users, $insert_personal, $update_video_lessons, $update_analytics, $update_events, $update_users, $update_access_users, $update_personal, $update_comments, $delete_video_lessons, $delete_analytics, $delete_events, $delete_users, $delete_access_users, $delete_comments, $select_video_lessons, $select_analytics, $select_events, $select_users, $select_access_users, $select_personal, $select_comments)
    {
        $query ="UPDATE `access_users` SET `name`='".$name."',`insert_video_lessons`=".$insert_video_lessons.",`insert_analytics`=".$insert_analytics.",`insert_events`=".$insert_events.",`insert_users`=".$insert_users.",`insert_comments`=". $insert_comments.",`insert_access_users`=".$insert_access_users.",`insert_personal`=".$insert_personal.",`update_video_lessons`=".$update_video_lessons.",`update_analytics`=".$update_analytics.",`update_events`=". $update_events.",`update_users`=".$update_users.",`update_access_users`=".$update_access_users.",`update_personal`=".$update_personal.",`update_comments`=".$update_comments.",`delete_video_lessons`=".$delete_video_lessons.",`delete_analytics`=".$delete_analytics.",`delete_events`=".$delete_events.",`delete_users`=".$delete_users.",`delete_access_users`=".$delete_access_users.",`delete_comments`=".$delete_comments.",`select_video_lessons`=".$select_video_lessons.",`select_analytics`=".$select_analytics.",`select_events`=".$select_events.",`select_users`=".$select_users.",`select_access_users`=".$select_access_users.",`select_personal`=".$select_personal.",`select_comments`=".$select_comments." WHERE `id` =".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 3" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function delete($id)
    {
        $query ="DELETE FROM `access_users` WHERE `id`=".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 4" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
}

class analytics extends database
{
    public function select()
    {
        $query ="SELECT * FROM analytics";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 5" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function insert($name,$topic,$serialized_array_variables)
    {
        $query ="INSERT INTO `analytics`(  `name`, `topic`, `serialized_array_variables` ) VALUES ( '".$name."','".$topic."','".$serialized_array_variables."')";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 6" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function update($id,$name,$topic,$serialized_array_variables)
    {
        $query ="UPDATE `analytics` SET `name`='".$name."',`topic`='".$topic."',`serialized_array_variables`='".$serialized_array_variables."' WHERE `id` =".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 7" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function delete($id)
    {
        $query ="DELETE FROM `analytics` WHERE `id`=".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 8" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
}

class comments extends database
{
    public function select()
    {
        $query ="SELECT * FROM comments";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 9" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function insert($email,$topic,$display_name,$content)
    {
        $query ="INSERT INTO `comments`(  `email`, `topic`, `display_name`,`content` ) VALUES ( '".$email."','".$topic."','".$display_name."','".$content."')";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 10" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function update($id,$email,$topic,$display_name,$content)
    {
        $query ="UPDATE `comments` SET `email`='".$email."',`topic`='".$topic."',`display_name`='".$display_name."',`content`='".$content."' WHERE `id` =".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 11" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function delete($id)
    {
        $query ="DELETE FROM `comments` WHERE `id`=".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 12" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
}

class events extends database
{
    public function select()
    {
        $query ="SELECT * FROM events";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function insert($name,$topic,$сontent_serialized_array_variables,$image,$date,$count_org,$count_participant,$geolacation,$contacts,$analytics,$personal_org,$personal_participant)
    {
        $query = "INSERT INTO `events`(  `name`,`topic`,`сontent_serialized_array_variables`,`image`,`date`,`count_org`,`count_participant`,`geolacation`,`contacts`,`analytics`,`personal_org`,`personal_participant` ) VALUES ( '".$name."','".$topic."','".$сontent_serialized_array_variables."','".$image."','".$date."','".$count_org."','".$count_participant."','".$geolacation."','".$contacts."','".$analytics."','".$personal_org."','".$personal_participant."')";
      
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function update($id,$name,$topic,$сontent_serialized_array_variables,$image,$date,$count_org,$count_participant,$geolacation,$contacts,$analytics,$personal_org,$personal_participant)
    {
        $query ="UPDATE `events` SET `name`='".$name."',`topic`='".$topic."',`date`='".$date."',`сontent_serialized_array_variables`='".$сontent_serialized_array_variables."',`image`='".$image."',`count_org`='".$count_org."',`count_participant`='".$count_participant."',`geolacation`='".$geolacation."',`contacts`='".$contacts."',`analytics`='".$analytics."',`personal_org`='".$personal_org."',`personal_participant`='".$personal_participant."' WHERE `id` =".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 15" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function delete($id)
    {
        $query ="DELETE FROM `events` WHERE `id`=".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 16" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
}

class personal extends database
{
    public function select()
    {
        $query ="SELECT * FROM personal";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function insert( $fio, $date_birthday, $serial_number_passport, $education, $users)
    {
        $query = "INSERT INTO `personal`(  `fio`, `date_birthday`, `serial_number_passport`, `education`, `users` ) VALUES ( '".$fio."', '".$date_birthday."', '".$serial_number_passport."', '".$education."', '".$users."')";
      
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
    
    public function update($id,$fio, $date_birthday, $serial_number_passport, $education, $users)
    {
        $query ="UPDATE `personal` SET `fio`='".$fio."', `date_birthday`='".$date_birthday."'  ,`serial_number_passport`='".$serial_number_passport."',`education`='".$education."', `users`='".$users."' WHERE `id` =".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 15" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function delete($id)
    {
        $query ="DELETE FROM `personal` WHERE `id`=".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 16" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
}

class users extends database
{
    public function select()
    {
        $query ="SELECT * FROM users";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function insert( $login, $email, $pwd, $access)
    {
        $hash = md5($hashpwd);
        $query = "INSERT INTO `users`( `login`, `email`, `hashpwd`, `access` ) VALUES ( '".$login."', '".$email."', '".$hash."', '".$access."')";
      
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
    
    public function update($id, $login, $email, $pwd, $access)
    {
        $hash = md5($hash);
        $query ="UPDATE `users` SET `login`='".$login."', `email`='".$date_birthday."'  ,`hashpwd`='".$hash."',`access`='".$access."' WHERE `id` =".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 15" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function delete($id)
    {
        $query ="DELETE FROM `users` WHERE `id`=".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 16" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
}

class video_lessons extends database
{
    public function select()
    {
        $query ="SELECT * FROM video_lessons";
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 13" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public static function insert($name, $topic, $video)
    {
        $hash = md5($hash);
        $query = "INSERT INTO `video_lessons`( `name`, `topic`, `video` ) VALUES ( '".$name."', '".$topic."', '".$video."')";
      
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 14" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
    
    public function update($id, $name, $topic, $video)
    {
        $hash = md5($hash);
        $query ="UPDATE `video_lessons` SET `name`='".$name."', `topic`='".$topic."'  ,`video`='".$video."' WHERE `id` =".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 15" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }

    public function delete($id)
    {
        $query ="DELETE FROM `video_lessons` WHERE `id`=".$id;
        $link = database::et();
        $result = mysqli_query($link, $query) or die("error 16" . mysqli_error($link)); 
        database::close($link);
        return  $result;
    }
}

?>