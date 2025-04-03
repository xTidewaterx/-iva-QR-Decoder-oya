
thoughtsPlan: 

WWEEE DID ITTTT::
lessons:: to scan a qr code in React you must::
download npm package with qr decoder components, we downloaded jsQR, 
::npm i jsqr
THEN:: we had an input file that onchange would take the image file (presumably) and make it readable for our qr decoder by doing an image constructor and canvas and width height on it, THEN our decoder would get that the data that was made ready to be decoded, and then it would decode the data, we can then set our state to this newly decoded value, we now know what the qr code in front of us hold, we have saved the value of the mysterious indecipherable qr code


important:: qr decoder:: our qr decoder basically just takes the ready made file and does this with it::    const qrCode = jsQR(imageData.data, imageData.width, imageData.height);  --- take note:: the imageData.data is our image that we have made ready like this:: 


 const handleFileChange = async () => {
        const file = event.target.files[0];
        if (file) {
            // Use FileReader to read the image as data URL
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0);
                    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);


we have the imageconstructor and the canvas and ctx drawimage ()

about drawimage method;; create image canvas height and width::

The CanvasRenderingContext2D.drawImage() method of the Canvas 2D API provides different ways to draw an image onto the canvas.

dx dy dwidth dheight drawimage (parameters)


method()


we have axis, we have destination context, rectangle sx and sy argument create draw image file onto destination context












we have a tutorial where we take a value and the qr code reader reads the provided value and provides us the decoded value if the initial component attribute was a readable qr code


simply put: 
we must import the qr reader and provide it a value



jsQR, how to read code: 