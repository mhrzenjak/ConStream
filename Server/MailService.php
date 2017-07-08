<?php
// Multiple recipients
$to = 'mathrzenjak@hotmail.com'; // note the comma

// Subject
$subject = 'Birthday Reminders for August';

// Message
$message = '
<html>
<head>
  <title>Test mail</title>
</head>
<body>
  <p>Test maila.</p>
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';

// Additional headers
$headers[] = 'To: mathrzenjak@hotmail.com';
$headers[] = 'From: ConStream Test <constreamapp@sferakon.org>';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
?>
