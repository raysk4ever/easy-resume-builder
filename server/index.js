const express = require('express');
const app = express();
const cors = require('cors');

app.set('view engine', 'ejs');

app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
	try{
		console.log('creating resume with', req.body)
		let {firstName, lastName, email} = req.body;

		res.render('default', {
			name: `${firstName} ${lastName}` || 'User Name',
			email: email || 'User Email'
		})
	}catch(err){
		console.log('err', err);
		res.send({
			error: err
		})
	}
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Running at PORT ${PORT}`))