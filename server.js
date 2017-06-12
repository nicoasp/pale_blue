const express = require('express');

const app = express();
const server = require("http").createServer(app); // this is for socket.io
server.listen(process.env.PORT || 3000);
		
app.use(express.static(__dirname));


app.get('/', (req, res) => {
	res.send('./index.html');
})