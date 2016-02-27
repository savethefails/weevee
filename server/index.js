import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db';
import middleware from './middleware';
import api from './api';
// import 'morgan' from 'morgan';

var app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json({
	limit : '100kb'
}));

// configure app
// app.use(morgan('dev')); // log requests to the console

// connect to db
db( λ => {

	// internal middleware
	app.use(middleware());

	// api router
	app.use('/api', api());

	app.server.listen(process.env.PORT || 8080);

	console.log(`-> ${new Date()} Started on port ${app.server.address().port} \r\n\r\n`);
});

export default app;
