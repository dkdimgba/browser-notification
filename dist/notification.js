/*
 * This file is part of the Browser Notification package.
 *
 * (c) Dimgba Kalu <dkdimgba@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// notification body in an array

var articles = [
["ProJaro is recruiting","http://projaro.com"],
["Visit ProJaro's website for update","http://projaro.com"],
["ProJaro builds people, technology and products","http://projaro.com"]
];

// set time out for notification
setTimeout(function(){
	// randomly select number from 1 to 3
	var randomNumber = Math.floor((Math.random() * 3) + 1);
	// get the title from the array articles
	var title = articles[randomNumber][0];
	/* I used a fixed description. YOu can as well add it to the array
       add pass it like this 
       var desc = articles[randomNumber][1];
    */
	var description = 'ProJaro is a talent accelartaion startup.';
	// get the url of teh article
	var url = articles[randomNumber][1];
	// call browser notification
	browserNotification(title,description,url);
}, 5000);


// add event listener
document.addEventListener('DOMContentLoaded', function () 
{
	// check if permission is granted to show notification on desktop
	if (Notification.permission !== "granted")
	{
		// show notification
		Notification.requestPermission();
	}

	document.querySelector("#desktopNotification").addEventListener("click", function(e)
	{
		// randomly select number from 1 to 3
		var randomNumber = Math.floor((Math.random() * 3) + 1);
		// get the title from the array articles
		var title = articles[randomNumber][0];
		/* I used a fixed description. YOu can as well add it to the array
	       add pass it like this 
	       var desc = articles[randomNumber][1];
	    */
		var description = 'ProJaro is a talent acceleration startup';
		// get the url of teh article
		var url = articles[randomNumber][1];
		// call browser notification
		browserNotification(title,description,url);
		// you all know who this guy is!
		e.preventDefault();
	});
});


/* function to call the notification
 * checks if notification is avaliable on your browser
 * checks if permission is granted to show the notification
 * displays notification
 * removes notification
*/
function browserNotification(title,desc,url) 
{
	// check if notification is vaaliable
	if (!Notification) {
		// if not displays message on console
		console.log('Desktop notifications is not available in your browser..'); 
		// bye
		return;
	}

	// if notification avaliable, check if user have granted permission
	if (Notification.permission !== "granted")
	{
		// if permission is not granted, then request for one
		Notification.requestPermission();
	}
	else 
	{
		// go ahead to show notification
		var notification = new Notification(title, {
		icon:'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/13083284_490780627779286_4039618550099495940_n.png?oh=2e22e6270e67f2513af9da5eb5a4aaf1&oe=57F104B4',
		body: desc,
		});

		// Remove the notification from Notification Center when clicked.
		notification.onclick = function () {
			window.open(url);      
		};

		// Callback function when the notification is closed.
		notification.onclose = function () {
			console.log('Notification closed');
		};

	}
}