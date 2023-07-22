<?php

@include 'config.php';

session_start();

if(!isset($_SESSION['user_name'])){
   header('location:login_form.php');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Page</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <div class="container">
        <div class="content">
        <h3>hii!..</h3>
        <h2>welcome <br><span>Mis. </span> <span><?php echo $_SESSION['user_name'] ?></span></h2>
        <p>Now visit our Tour & Travel website</p>
        <a href="index_main.html"><i class="btn fa fa-arrow-right-long"></i></a><br><br>
        <a href="login_form.php" class="btn">login</a>
        <a href="register_form.php" class="btn">register</a><br><br>
        <a href="logout_page.php" class="btn">logout</a>
    </div>
</div>
</body>
</html>