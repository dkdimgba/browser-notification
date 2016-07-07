# browser-notification

> Browser notification for web apps

### Introduction

This package can be used to configure and display **browser notifications** for web apps. 


## Installation

[Bower](https://bower.org) is required. Javascript needs to be enabled on your browsers

Bower is a command line utility. To get the latest version of Browser Notification, install Bower using `npm` by running this command command prompt. 

```
$ npm install -g bower.
```

Bower needs [npm](http://nodejs.org/), [node](http://nodejs.org) and [git](http://git-scm.org/)

You'll then need to run `bower install dkdimgba/browser-notification` to download it.

Hmm! If you cannot find your way around bower. You can download the repo and add the javascript reference to your html page as shown below 

```
<script type="text/javascript" src="path-to-js/notification.js"></script>
```


## Usage

Use the object id `desktopNotification` to call the function on any HTML page

```
<a href="#" id="desktopNotification" class="button">Click here to see the notifications</a>
```

```
document.querySelector("#desktopNotification").addEventListener("click", function(e)
{
	// event here
});
```

```
// go ahead to show notification
var notification = new Notification(title, {
	icon:'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/13083284_490780627779286_4039618550099495940_n.png?oh=2e22e6270e67f2513af9da5eb5a4aaf1&oe=57F104B4',
	body: desc,
});
```

If nothing happens, errors are logged in the console. Please check there


## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Contribution

Please feel free to fork this package and contribute by submitting a pull request to enhance the functionalities.


## How can I thank you?

Why not star the github repo? I'd love it. It'll encourage me! Share the link for this repository on Twitter or HackerNews. Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/dkdimgba)!

Thanks!<br>
Dimgba Kalu.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
