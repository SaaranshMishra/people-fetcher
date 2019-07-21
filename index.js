const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');

const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/user', async (req, res) => {
	const count = req.query.count ||20;
	const response = await axios.get(`https://randomuser.me/api/?results=${count}`);
	res.json({ data: response.data.results });
});

if(process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	})
}

port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server running on PORT ${port}`));