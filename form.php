<?php
    date_default_timezone_set("PRC");
    
        /* Check whether the value is empty */
	$isEmpty = empty($_POST["name"])
	         ||empty($_POST["email"])
	 	 ||empty($_POST["qq"])
	         ||empty($_POST["phone"])
		 ||empty($_POST["sug"]);
	if ($isEmpty) { die(); }

        if(!$name = $_POST["name"]) {$name = "none";}
	if(!$email = $_POST["email"]) {$email = "none";}
	if(!$qq = $_POST["qq"]) {$qq = "0";}
	if(!$phone = $_POST["phone"]) {$phone = "0";}
	if(!$sug = $_POST["sug"]) {$sug = "none";}

	$xmlDoc = new DOMDocument();
	$xmlDoc->load("formInfo.xml");

	$SECTION = $xmlDoc->getElementsByTagName("section")->item(0);
	$PERSON = $xmlDoc->createElement("person");

	$NAME = $xmlDoc->createElement("name", $name);
	$PERSON->appendChild($NAME);
	$EMAIL = $xmlDoc->createElement("email", $email);
	$PERSON->appendChild($EMAIL);
	$QQ = $xmlDoc->createElement("qq", $qq);
	$PERSON->appendChild($QQ);
	$PHONE = $xmlDoc->createElement("phone", $phone);
	$PERSON->appendChild($PHONE);
	$SUG = $xmlDoc->createElement("sug", $sug);
	$PERSON->appendChild($SUG);

	$SECTION->appendChild($PERSON);

	$xmlDoc->save("formInfo.xml");
	echo 1;
?>
