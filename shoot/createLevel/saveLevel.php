<?php

if(isset($_POST)){
  $data = file_get_contents("php://input");
  $json_decode = json_decode($data, true);
  $folderPath = 'createdLevels';
  $data =  json_encode($json_decode['addedObjectArray']);
  $continue = false;
  $fileList = scandir($folderPath);
  foreach ($fileList as $file) {

        if($file == $json_decode['nameLevel'].'.json'){
          file_put_contents($folderPath.'/'.$json_decode['nameLevel'].'-'.uniqid().'.json', $data);
          $continue = false;
          break;
        }
    
}
if($continue)
{
    file_put_contents($folderPath.'/'.$json_decode['nameLevel'].'.json', $data);
}

}
