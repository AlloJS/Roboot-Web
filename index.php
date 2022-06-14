<?php 
$istruction_robot = ['Push eyes',
                    'Push hands',
                    'Push mouth',
                    'Push feet',
                    'Push change color on the chest'
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ROBOOT</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="body-page">

        <div class="flex">
            <div class="arm-left" id="arm-l">
            </div>
            <div class="arm-right" id="arm-r">
            </div>
        </div>

            <div class="flex">
                <div class="hand-left" id="hand-l">
                </div>
                <div class="hand-right" id="hand-r">
                </div>
            </div>

        <header>
            <nav>
                <ul>
                    <li>
                        <img src="img/2027195.svg" width="40px" alt="">
                    </li>
                    <li>
                        <h1>
                           <a href="index.html">ROBOOT</a>
                        </h1>
                    </li>
                    <li>
                        <label for="input-name"></label>
                        <input id="input-name" class="input-name" type="text" name="input-name" placeholder="Insert your name...">
                    </li>
                    <li>
                        <input id="submit" class="submit" type="submit" value="invia">
                    </li>
                </ul>
            </nav>
            <h1 class="h1" id="h1"></h1>
        </header>
        <main>
            <div class="head" id="head">
                <div class="eyes">
                    <div id="eye-l" class="pupils"></div>
                </div>
                <div class="eyes">
                    <div  id="eye-r"class="pupils"></div>
                </div>
                <div id="mouth" class="mouth">
                <div>++++++++++++++++++</div>
                </div>
            </div>
            <div class="neck" id="neck"> 
            </div>
            <div class="body" id="body-robot">
                <div>
                    <div id="change-color">Change color</div>
                </div>
            </div>
        </main>

        <div class="footer">
            <div class="legs" id="leg-l">
                
            </div>
            <div class="legs" id="leg-r">
                
            </div>

        </div>

        <div class="footer">
            <div class="feet" id="foot-l">

            </div>
            <div class="feet" id="foot-r">

            </div>
        </div>
        <div class="istruction">
            <?php
            foreach ($istruction_robot as $key) {
                echo "Istruction: " . $key . "<br/>";
            }
            ?>
        </div>

    <script src="script.js"></script>
</body>
</html>