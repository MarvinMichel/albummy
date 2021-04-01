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
### Server-side rendering
Because the images are uploaded by form to the MongoDB database, the core functionalities of the app are available to every user. Even without the support or accessability of Javascript. The images are retrieved from the database as Base64 data, which makes it possible to show images even with plain HTML.

### Drag&drop zone
With the file type input from HTML5, the user can drag their photo's to the input for uploading. Since there's little feedback, plus a small button to drag to, the user experience could be improved a lot. This is where the newly styled button comes in. It's a larger button to drag your files onto, to improve stabillity and easy access to drag&drop. With a little help of vanilla Javascript, we show to image name to the user when the file is uploaded correctly. The next progressive step is to show a preview of the image instead. This done by the FileReader API for the browsers that support this feature.
```js
  function handleUpload(images) {
    fileInput.files = images
    images = [...images]
    images.forEach(image => {
      if (fileReaderSupported) {
        previewImage(image)
      }
    })
  }
```
By listing to a file input change and a drop event, we handle the upload ourselves with Javascript. We first retrieve the images from the event object. To loop trough them, we turn the Object-List into an array. With a `forEach` we check if the FileReader API is supported by the clients browser. If so, we want to preview the image.

```js
  function previewImage(image) {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = () => {
      const img = document.createElement("img")
      img.src = reader.result
      dropZone.appendChild(img)
    }
  }
```
The FileReader works asynchronous. We do need to wait for the API to be done before we use append the image to the DOM. The FileReaderSync API would have been the better option to this is, but it has less support from browsers. That's why we use the `onload` event to wait for the API to be done.

### Slideshow
The image slideshow work by scrolling or dragging the pictures. This works with CSS only, which is widely covered by browsers. For the moderen browsers, the slideshow uses `scroll-snap-align` which creates a snapping effect from image to image improving the scroll behaviour. On non-touchscreens, the slideshow also uses buttons to navigate trough the images with `scrollIntoView()`.

```js
if (slideShow && scrollIntoViewSupported && !isTouchDevice) {
  const sliderButtons = slideShow.querySelectorAll("button")
  const slides = slideShow.querySelectorAll("img")

  let index = 0
  
  sliderButtons.forEach(button => {
    button.classList.add("js")
    button.addEventListener("click", slideImage)
  })

  function slideImage(e) {
    const targetId = e.target.id

    if (targetId === "prev") {
      if (index === 0) {
        index = slides.length - 1
        slides[index].scrollIntoView()
      } else {
        index--
        slides[index].scrollIntoView()
      }
    } else {
      if (index === (slides.length - 1)) {
        index = 0
        slides[index].scrollIntoView()
      } else {
        index++
        slides[index].scrollIntoView()
      }
    }
  }
}
```

## Tests
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

#### Safari IOS
<img width="300" alt="Albummy IOS home screen" src="https://user-images.githubusercontent.com/25977763/113277415-f96e0a00-92e0-11eb-9dfc-36cf722fe46c.PNG" />     <img width="300" alt="Albummy IOS edit screen" src="https://user-images.githubusercontent.com/25977763/113277435-fecb5480-92e0-11eb-89a1-54f14ccb0507.PNG" />

#### Google Chrome Android

#### Safari Mac OSX
<img width="1552" alt="Albummy home screen on Safari" src="https://user-images.githubusercontent.com/25977763/113274503-10f7c380-92de-11eb-9c32-994b1cd0e1c7.png">
<img width="1552" alt="Albummy upload screen on Safari" src="https://user-images.githubusercontent.com/25977763/113274533-18b76800-92de-11eb-91a8-30147cabe963.png">

#### Firefox Mac OSX
<img width="1552" alt="Albummy upload screen on Firefox" src="https://user-images.githubusercontent.com/25977763/113276172-db53da00-92df-11eb-96d7-e8baf29378df.png">
