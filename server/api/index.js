import { Router } from 'express'
import baskets from './baskets'

export default function() {
	const api = Router()

	api.use('/baskets', baskets())

	return api
}
