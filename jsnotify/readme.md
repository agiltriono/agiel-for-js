# JS Notify


##Requirements

* Enabled JavaScript in browser
* jQuery installed

##Installation

Run:

```bower install jsnotify```

Add the following between your projects ```head``` tags:

```html
<!-- JsNotify Style -->
<link rel="stylesheet" href="bower_components/jsnotify/src/style.css">
```

And the following just before your projects closing ```body``` tag:

```html
<!-- JsNotify Script -->
<script src="bower_components/jsnotify/src/notify.js"></script>
```

##Usage

```javascript

var options = {
	'title': 'Oi!',
	'message': 'Whatever you did, it worked!',
	'icon': 'check',
	'style': 'success'
};

var n = new notify(options);

n.show();
```

##Global Config

```javascript
window.JSNOTIFY_CONFIG = {
	theme: 'default'
}
```

##Options

| Option        | Required | Description                                                                                          |
|---------------|----------|------------------------------------------------------------------------------------------------------|
| ```title```   | No       | The title of the notification, this will appear at the top of the notification.                      |
| ```message``` | Yes      | This is the body of the notification.                                                                |
| ```icon```    | No       | The icon to be used within the notification, this is displayed at the left side of the notification. |
| ```style```   | No       | Style of the notification. Can be ```default```, ```success``` or ```error```.                       |
| ```theme```   | No       | Notification theme (only applies to the object this property is set on).                             |
| ```timeout``` | No       | How long the notification should be available for, before automatically disppearing (null for never).|

##Themes

Currently supported themes are: ```default``` and ```flat```, these can be set on either the global config, or the instance of the notification.