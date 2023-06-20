<?php

if(isset($_POST)){
  $data = file_get_contents("php://input");
  $json_decode = json_decode($data, true);
  $folderPath = 'createdLevels';
  $data =  json_encode($json_decode['addedObjectArray']);

  foreach ($fileList as $file) {
    if (is_file($folderPath . $file)) {
        if($file == $json_decode['nameLevel']) break;
    }
}
  file_put_contents($folderPath.'/'.$json_decode['nameLevel'].'.json', $data);

}
?>