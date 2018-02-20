<?php
  $name = $_POST['user-name'];
  $phone = $_POST['tel'];
  $street = $_POST['street'];
  $house = $_POST['house'];
  $housing = $_POST['housing'];
  $apartment = $_POST['apartment'];
  $floor = $_POST['floor'];
  $comment = $_POST['comment'];
  $payment =  $_POST['payment'];

  $dont = $_POST['form-checkbox-call'];

  $message_mail = '<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
   <h2>Заказ</h2>
    <ul>
      <li>$name</li>
      <li>$phone </li>
      <li>$street</li>
      <li>$house</li>
      <li>$housing </li>
      <li>$apartment</li>
      <li>$floor</li>
      <li>$comment</li>
      <li>$payment</li>
      <li>$dont</li>
    </ul>
  </body>
  </html>'

  echo $message_mail
?>