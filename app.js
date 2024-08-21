import express from 'express';
import path from 'path';
const app = express();

app.get("/", (req, res) => {
    const filePath = path.join(process.cwd(), "index.html"); // Using process.cwd() to get the current working directory
    res.sendFile(filePath);
});

const server = app.listen(5000);
const portNumber = server.address().port; 
console.log(`Port is open on ${portNumber}`);
