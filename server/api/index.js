import { Router } from 'express';
import baskets from './baskets';

export default function() {
	var api = Router();

	api.use('/baskets', baskets());

	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	return api;
}
