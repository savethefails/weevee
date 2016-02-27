import { Router } from 'express'
import {makePayload, findById, findRelatedModel} from '../lib/util'
import profiles from '../models/profiles'
import _ from 'lodash'
import options from '../models/options'
export default function() {
  const api = Router({mergeParams: true})
  api.get('/', (req, res) => {
    const data = makePayload({"profiles": [_.sample(profiles)]}, profiles)
    res.json({data});
  });
  api.get('/:id', (req, res) => {
    const profile = findById(profiles, parseInt(req.params.id))
    const resOptions = [
      options.yes({uri: event}),
      options.no()
    ]
    const event = findRelatedModel(profile, 'events')
    res.json(makePayload({"profile": [profile, event]}, resOptions))
  })
  return api
}
