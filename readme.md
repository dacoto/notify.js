<p align="center">
    <img src="https://cdn.jsdelivr.net/npm/@dacoto/notify.js/notify.png" alt="icon" height="100">
</p>
<h1 align="center">
    Notify.js
    <br>
    <a href="https://www.npmjs.com/package/@dacoto/notify.js"><img src="https://img.shields.io/npm/dt/@dacoto/notify.js.svg" alt="Total Downloads"></a>
    <a href="https://www.npmjs.com/package/@dacoto/notify.js"><img src="https://img.shields.io/npm/v/@dacoto/notify.js.svg" alt="Latest Stable Version"></a>
    <a href="https://www.npmjs.com/package/@dacoto/notify.js"><img src="https://img.shields.io/npm/l/@dacoto/notify.js.svg" alt="License"></a>
    <a href="https://github.com/dacoto/notify.js"><img src="https://img.shields.io/github/last-commit/dacoto/notify.js.svg" alt="Last commit"></a>
</h1>

A library to show nice notifications in web application.

[VIEW DEMO](https://notify-js.vercel.app/)

## Installation

``` cmd
// npm install
npm install @dacoto/notify.js

// yarn install
npm add @dacoto/notify.js
```

## Usage

##### Include

``` cmd
    import Notify from '@dacoto/notify.js';
```
##### CDN

``` cmd
    <script src="//cdn.jsdelivr.net/npm/@dacoto/notify.js/dist/notify.min.js"></script>
```
## Notification example

``` cmd
let options = {
    title: 'Notification title',
    message: 'Notification message',
    icon: 'fas fa-home',
};
let type = 'primary';

var notification = new Notify(options, type);

notification.open();
notification.close();
```

## Notification Params

#### Options

|Props|Default value|Description|Type|Required|
|--- |--- |--- |--- |--- |
|title| |Notification title|string|X|
|message| |Notification message|string|X|
|icon|notify-icon notify-icon-primary|Class of notification icon, similar to this:&lt;i class="<strong>notify-icon notify-icon-primary</strong>"&gt;&lt;/i&gt;|string| |
|link| |Link at the end of the notification (see link table)|array| |
|width|420|Width in pixels of the notification|integer| |
|duration|0|The amount of time in milliseconds before closing the notification. 0 means never closed|integer| |
|autoOpen|true|Open the notification when instantiate it|boolean| |
|onOpen| |Callback for the open event|function| |
|onClose| |Callback for the hide event|function| |

#### Link

|Props|Note|Type|Required|
|--- |--- |--- |--- |
|linkHref|Link url|url|X|
|linkClass|Link class|string|X|
|linkText|Link text|string|X|

#### Type

|Prop|Color|Icon|
|--- |--- |--- |
|primary|#4d9aff|<img src="https://cdn.jsdelivr.net/npm/@dacoto/notify.js@0.1.0/src/img/primary.png" alt="primary" width="20px" style="padding-top: 6px">|
|success|#59d9a4|<img src="https://cdn.jsdelivr.net/npm/@dacoto/notify.js@0.1.0/src/img/success.png" alt="primary" width="20px" style="padding-top: 6px">|
|warning|#ffc400|<img src="https://cdn.jsdelivr.net/npm/@dacoto/notify.js@0.1.0/src/img/warning.png" alt="primary" width="20px" style="padding-top: 6px">|
|danger|#ff542e|<img src="https://cdn.jsdelivr.net/npm/@dacoto/notify.js@0.1.0/src/img/danger.png" alt="primary" width="20px" style="padding-top: 6px">|

## Notification methods

|Name|Note|
|--- |--- |
|open()|Opens the notification|
|close()|Closes the notification|

## License

MIT
