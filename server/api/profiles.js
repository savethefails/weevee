import { Router } from 'express'
import {makePayload} from '../lib/util'
import profiles from '../models/profiles'
export default function() {
  const api = Router({mergeParams: true})
  api.get('/', (req, res) => {
    const payload = makePayload("speaking", () => profiles)
    res.json(payload);
  });

  return api
}
