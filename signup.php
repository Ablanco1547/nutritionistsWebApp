<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section class="signupSection">
        <h2>Sign up users</h2>
        <div class="signupForm">
            <form action="includes/signup.inc.php" method="post">
                <input type="text" name="name" placeholder="name">
                <input type="text" name="email" placeholder="email">
                <input type="text" name="uid" placeholder="uid">
                <input type="password" name=" pwd"placeholder="pwd">
                <input type="password" name=" pwdrepeat"placeholder="pwdrepeat">
                <button type="submit" name="submit">Sign Up user</button>
            </form>
        </div>

    </section>
</body>
</html>