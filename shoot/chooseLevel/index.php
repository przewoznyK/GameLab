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
    foreach ($fileList as $file) {
        if (is_file($folderPath . '/' . $file)) {
            echo '<a href="' . $targetLocation . $file . '">' . $file . '</a><br>';
        }
    }

    ?>
</body>

</html>