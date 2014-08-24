<?php
    date_default_timezone_set("PRC");
    /*
     * Handle like data
     * /

    /*
    $labels = array("csong", "sss", "pigeon", "wb");
    
    $xmlDoc = new DOMDocument();
    $xmlDoc->validateOnParse = true;
    if(!$xmlDoc->load("like.xml")){echo 0; exit();}
    
    //echo $xmlDoc->saveXML();
    $theTargets = $xmlDoc->getElementsByTagName("work");
    $_size = $theTargets->length;
    for($i=0; $i<$_size; $i++){
        $theTargets[$i]->setAttribute("id", $labels[$i]);
    }
    
    $id = $_POST["id"];
    $theTarget = $xmlDoc->getElementById($id);
    $theTargetValue = $theTarget->nodeValue;
    $theTargetValueNum = (int)($theTargetValue);
    $theTargetValueNum ++;
    $theTarget->nodeValue = $theTargetValueNum;
    
    $xmlDoc->save("like.xml");
    echo 1;
    */
    
    /* $begin handle like data */    
    $name = $_POST["name"];
    
    $xmlDoc = new DOMDocument();
    $xmlDoc->load("like.xml");
    
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
