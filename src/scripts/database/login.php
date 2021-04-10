<?

include $_SERVER['DOCUMENT_ROOT']."\php\database.php";

$login = $_POST['login'];
$password = $_POST['password'];
$rememberme = $_POST['rememberme'];

echo $login;
echo $password;
echo $rememberme;

?>