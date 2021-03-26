## Use Case
[Online Foto Album](https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Usecase-online-foto-album.md):

The goal of this project, was to create a web-application that is progressivly enhanced. This means that you start with plain HTML to make sure that the core features of the application will work for everyone. You can build different layers of functionality, to make the app look better and/or improve UX.

## Live Preview
Check out the live demo [here!](albummy.herokuapp.com/images)

## Dependencies

### Modules
- [Node JS](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [MongoDB](https://account.mongodb.com/account/login)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://github.com/expressjs/multer)

>⚠️ To use the application in development, you need a MongoDB database and a URI to connect with it!

### Browser API's
- [Drag & Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API): Handles the drag & drop functionallity with uploading images.
- [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader): Handles the image preview when uploading with drag & drop.

## Progressive Enhancements

### Feature Detection
- The detail page to edit an image uses a hover state on the inputs to show the borders. Because devices with a touchscreen have different behaviour with hover states, I **check if the device is using a touchscreen**
```js
const isTouchDevice = ("ontouchstart" in document.documentElement)
```
- The drag & drop funcitonallity is default behaviour of an HTML input with a file type. But it only allows the user to drop the image onto the button. Plus, there isn't any user feedback implemented either. With the **selfmade drag & drop** the user has a dropzone, which shows the user when to let go. To check for the availabillity of the drop event:
```js
const dropSupported = ("ondrop" in document.documentElement)
```
- With the new styling of the input button, the label with the filename is hidden. This hides any feedback of upload completion to the user. If the client **supports the FileReader API**, we can actually extract information about the image and show a preview to the user when the image is retrieved.
```js
const fileReaderSupported = ("FileReader" in window)
```
- The application uses a slideshow to show all the uploaded images to the user. CSS is used to make the slideshow container scrollable. This way, even with Javascript disabled the user can still scroll trough his/her collection. The arrows on the slideshow will only appear if Javascript is enabled and the the scrollIntoView method is supported by the client. To **check if the client supports the scrollIntoView method**:
```js
const scrollIntoViewSupported = ("scrollIntoView" in document.documentElement)
```

### Testing Browsers
- <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png"
    width="15"
  /> Firefox
- <img 
    src="https://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png"
    width="16"
  /> Chrome on Android
- <img 
    src="https://img.favpng.com/23/24/13/safari-computer-icons-ios-7-web-browser-png-favpng-XXQSh4qcvFmqv2vV8tjAnf5b6.jpg"
    width="15"
  /> Safari IOS & Safari Mac OSX

