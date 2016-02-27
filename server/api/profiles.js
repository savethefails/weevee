import { Router } from 'express'
import {makePayload, findById} from '../lib/util'
import profiles from '../models/profiles'
import _ from 'lodash'
export default function() {
  const api = Router({mergeParams: true})
  api.get('/', (req, res) => {
    const data = makePayload({"profiles": [_.sample(profiles)]}, () => profiles)
    res.json({data});
  });
  api.get('/:id', (req, res) => {
    const profile = findById(profiles, req.params.id)
    res.json(makePayload({"profile": [profile]}, ['yes', 'no']))
  })
  return api
}
