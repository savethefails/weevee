import { Router } from 'express'
import {makePayload} from '../lib/util'
import profiles from './profiles'
import options from '../models/options'
export default function() {
  const api = Router({mergeParams: true})
  api.get('/', (req, res) => {
    const data = makePayload('intro', options.profiles())
    res.json({data});
  });
  api.use('/profiles', profiles())
  return api
}
