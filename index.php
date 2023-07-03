<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login|Nutricense</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/login.css">

</head>
<body>
    <section class="formSection">
        <img src="" alt="">
        <h1>NUTRICENSE</h1>
        <div class="fomrContainer">
            <form action="includes/login.inc.php" method="post" class="formularioLogin">
                <input type="text" name="uid" placeholder="Usuario">
                <input type="password" name="pwd" placeholder="Contraseña">
                <button type="submit" name="submit" class="boton1">Iniciar Sesion</button>
            </form>
        </div>
        <?php
    if(isset($_GET["error"])){
        if($_GET["error"] == "emptyinput"){
            echo"<p>Please fill in all fields</p>";
        }else if($_GET["error"] == "wronglogin"){
            echo"<p>Invalid login information</p>";
        }
    }
    ?>
    </section>
</body>
</html>