<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choose Level</title>
</head>

<body>

    <?php

    $currentLocation = $_SERVER['REQUEST_URI'];
    $parentDirectory = dirname(dirname($currentLocation));
    $targetLocation = $parentDirectory . '/startGame/index.html?levelName=';


    $folderPath = '../createLevel/createdLevels';

    $fileList = scandir($folderPath);
    $createdLevelsNames = [];
    echo '<table style="border: 1px solid black;"><tr><th style="text-align: center; border: 1px solid black; margin: auto;">Levels</th></tr>';
    foreach ($fileList as $file) {
        if (is_file($folderPath . '/' . $file)) {
            echo '<tr><td style="border: 1px solid black;"><a href="' . $targetLocation . $file . '">' . $file . '</a></td></tr>';
        }
    }
    echo '</table>';
    
    ?>
</body>

</html>