<?php
// Mikaley Milner (UC ID: 3139510) and Nicholas Shelley (UC ID: 3151660)
// utilising base code from Ray Villalobos: https://gist.github.com/planetoftheweb/5914179
require 'tmhOAuth.php'; // obtained from: https://github.com/themattharris/tmhOAuth
$connection = new tmhOAuth(array( //access key details for Twitter account: u3151660; obtained from http://dev.twitter.com/apps
  	'consumer_key' => 'PDqUxLQ4KRvDMFgTBTAnwfEMq',
	'consumer_secret' => 'wc7FTJo2uZ82gK6ytGJYvYrsC7HlaPAh6Oh0BW728mbhQ5FYsB',
	'user_token' => '928024763750014976-OBZAdB2VYgQHWvnzq1jafbEZO5L4FOU', //access token
	'user_secret' => 'xpZ5kzK8YT6XpSUAeThbPl6ajpvNs2uXZiK9F42AvmRoS' //access token secret
));
// set up parameters to pass
$parameters = array();
if ($_GET['count']) {
	$parameters['count'] = strip_tags($_GET['count']);
}
if ($_GET['screen_name']) {
	$parameters['screen_name'] = strip_tags($_GET['screen_name']);
}
if ($_GET['twitter_path']) { $twitter_path = $_GET['twitter_path']; }  else {
	$twitter_path = '1.1/statuses/user_timeline.json';
}
$http_code = $connection->request('GET', $connection->url($twitter_path), $parameters );
if ($http_code === 200) { // OK response if all authorised
	$response = strip_tags($connection->response['response']);
	if ($_GET['callback']) { // if we ask for a jsonp callback function
		echo $_GET['callback'],'(', $response,');';
	} else {
		echo $response;	
	}
} else {
	echo "Error ID: ",$http_code, "<br>\n"; //reports error code to client
	echo "Error: ",$connection->response['error'], "<br>\n";
}