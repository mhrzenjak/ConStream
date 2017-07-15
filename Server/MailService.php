<?php
//Get posted parameters
$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

function IsNullOrEmptyString($question){
    return (!isset($question) || trim($question)==='');
}

$jsonIterator = new RecursiveIteratorIterator(
    new RecursiveArrayIterator(json_decode($json, TRUE)),
    RecursiveIteratorIterator::SELF_FIRST);

$message = '
<html>
<body>
<h2>Nova prijava programa:</h2>
<table>
';

if (!IsNullOrEmptyString($obj['title'])) {
  $message .= "<tr><td style='border: 2px solid black'>Naslov</td><td style='border: 2px solid black'>{$obj['title']}</td></tr>";
}
$message .= "<tr><td style='border: 2px solid black'>Opis</td><td style='border: 2px solid black'>{$obj['description']}</td></tr>";
$message .= "<tr><td style='border: 2px solid black'>Tip</td><td style='border: 2px solid black'>{$obj['type']['name']}</td></tr>";

$message .= "<tr><td></td></tr>";
$message .= "<tr><td style='border: 2px solid black'>Predavači / Voditelji</td></tr>";

$size = count($obj['presenters']);
for ($i=0; $i<$size; $i++) {
    $message .= "<tr><td style='border: 2px solid black'>Ime</td><td style='border: 2px solid black'>{$obj['presenters'][$i]}</td></tr>";
    $message .= "<tr><td style='border: 2px solid black'>Biografija</td><td style='border: 2px solid black'>{$obj['presenterBiographies'][$i]}</td></tr>";
}

$message .= "<tr><td></td></tr>";
$message .= "<tr><td style='border: 2px solid black'>Trajanje</td><td style='border: 2px solid black'>{$obj['duration']} minuta</td></tr>";
$message .= "<tr><td style='border: 2px solid black'>Nedostupnost</td><td style='border: 2px solid black'>{$obj['unavailability']}</td></tr>";

$message .= "<tr><td></td></tr>";
if (!IsNullOrEmptyString($obj['numberOfPlayers'])) {
  $message .= "<tr><td style='border: 2px solid black'>Broj igraća</td><td style='border: 2px solid black'>{$obj['numberOfPlayers']}</td></tr>";
}
if (!IsNullOrEmptyString($obj['numberOfTables'])) {
  $message .= "<tr><td style='border: 2px solid black'>Broj stolova</td><td style='border: 2px solid black'>{$obj['numberOfPlayers']}</td></tr>";
}
if (!IsNullOrEmptyString($obj['applicationLocation']['name'])) {
  $message .= "<tr><td style='border: 2px solid black'>Mjesto prijave</td><td style='border: 2px solid black'>{$obj['applicationLocation']['name']}</td></tr>";
}
if (!IsNullOrEmptyString($obj['organizationName'])) {
  $message .= "<tr><td style='border: 2px solid black'>Naziv udruge</td><td style='border: 2px solid black'>{$obj['organizationName']}</td></tr>";
}

$message .= "<tr><td></td></tr>";
$message .= "<tr><td style='border: 2px solid black'>Kontakt broj</td><td style='border: 2px solid black'>{$obj['contactNumber']}</td></tr>";
$message .= "<tr><td style='border: 2px solid black'>Kontakt email</td><td style='border: 2px solid black'>{$obj['contactEmail']}</td></tr>";
if (!IsNullOrEmptyString($obj['questions'])) {
  $message .= "<tr><td style='border: 2px solid red'>Pitanja</td><td style='border: 2px solid red'>{$obj['questions']}</td></tr>";
}


$message .= '
</table>
</body>
</html>
';



// Multiple recipients
$to = 'mathrzenjak@hotmail.com,'.$obj['contactEmail']; // note the comma

// Subject
$subject = "{$obj['title']} - {$obj['type']['name']}";

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';

// Additional headers
$headers[] = 'From: ConStream Test <constreamapp@sferakon.org>';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
?>
