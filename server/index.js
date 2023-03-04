import express from 'express';
import { createCanvas, loadImage } from 'canvas';

const app = express();
const port = 3001;
app.get('/he',(req,res) => { 
  res.send('hel')
 })

app.get('/',(req, res) => {
  try {
    // Create a new canvas with a white background
    const canvas = createCanvas( 300, 100);
    const context = canvas.getContext('2d');
    const color = req.query.color || '#00000000'; // set default color to white
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Add text to the image
    context.font = '16px Arial';
    context.fillStyle = '#343A40';
    context.fillText(req.query.text , 50, 50);

    // Convert the canvas to a data URL
    const dataUrl = canvas.toDataURL();

    // Send the image as a response 
    // res.send('hello')
    res.writeHead(200, { 'Content-Type': 'image/png' });
    const buffer = new Buffer.from(dataUrl.split(',')[1], 'base64');
    res.end(buffer);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});