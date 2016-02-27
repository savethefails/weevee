import { Router } from 'express'
import {makePayload} from '../lib/util'
import profiles from '../models/profiles'
export default function() {
  const api = Router({mergeParams: true})
  api.get('/', (req, res) => {
    const data = makePayload("speaking", () => profiles)
    res.json({data});
  });

  return api
}
