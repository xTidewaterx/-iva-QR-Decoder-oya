
1:: we need to:: create a function for scanning QR codes from an image

1.1:: basically find a good tutorial to complete step 1












:create qr scanner web app, web app should::1:  allow you to select a file, 
: scan the selected file to decode the information data, 





intel:: you must find a qr reader that accepts an image file react

conclusion::
 we must then conclude the experiment was successful by uploading our react vite application to github and then to netlify where we can test our application, remember https*. our application should be able to select a file that includes a qr code, from our computer, and the our webapp should be able to scan this cryptic data and give us the decoded qr code message in return
































*1 react qr scanner * = It uses the WebRTC standards for reading webcam data and jsQR is used for detecting QR codes in that data. To optimise the speed and experience, a web-worker is used to offload the heavy QR code algorithm on a separate process. The web worker is inlined and loaded on creation of the component. 


*2  qr code scan:: In QR codes, information is encoded in the arrangement of squares. Either way, data transforms into a machine-readable arrangement of visual elements.


*3 https :: Hypertext transfer protocol secure
Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer.












extraNotes plann:: exactly::



Usage
jsQR exports a method that takes in 3 arguments representing the image data you wish to decode. Additionally can take an options object to further configure scanning behavior.

const code = jsQR(imageData, width, height, options?);

if (code) {
  console.log("Found QR code", code);
}
Arguments
imageData - An Uint8ClampedArray of RGBA pixel values in the form [r0, g0, b0, a0, r1, g1, b1, a1, ...]. As such the length of this array should be 4 * width * height. This data is in the same form as the ImageData interface, and it's also commonly returned by node modules for reading images.
width - The width of the image you wish to decode.
height - The height of the image you wish to decode.
options (optional) - Additional options.
inversionAttempts - (attemptBoth (default), dontInvert, onlyInvert, or invertFirst) - Should jsQR attempt to invert the image to find QR codes with white modules on black backgrounds instead of the black modules on white background. This option defaults to attemptBoth for backwards compatibility but causes a ~50% performance hit, and will probably be default to dontInvert in future versions.
Return value


extra notes::

what we need is imageData = UintC
 - An Uint8ClampedArray of RGBA pixel values in the form [r0, g0, b0, a0, r1, g1, b1, a1, ...]

 --bascially get an imageFile and then explain to it the rules, 
 do something like this to the data::

       const image = await Jimp.read('src/qr.png');

        // Get the image data
        const imageData = {
            data: new Uint8ClampedArray(image.bitmap.data),
            width: image.bitmap.width,
            height: image.bitmap.height,
        };
---example above is without imported code, uint8clampedarray is built into javascript ::


The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0–255. The contents are initialized to 0 unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).
