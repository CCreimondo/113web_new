<?php
    date_default_timezone_set("PRC");
    /*
     * Handle like data
     * /

    /* $begin handle like data */    
    if (empty($_POST["name"])) { die(); } 
    $name = $_POST["name"];
    
    $xmlDoc = new DOMDocument();
    $xmlDoc->load("./like.xml");
    
    $theTargets = $xmlDoc->getElementsByTagName("work");
    foreach($theTargets AS $theTarget){
      $targetName = $theTarget->getAttribute("name");
      if($targetName == $name){
        $theValue = (int)($theTarget->nodeValue);
        $theValue++;
        $theTarget->nodeValue = $theValue;
        echo $theValue;
        break;
      }
    }
    $xmlDoc->save("like.xml");
    /* $end handle like data */
?>
