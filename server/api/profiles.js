import { Router } from 'express'
import {makePayload, findById, findRelatedModel} from '../lib/util'
import {profiles} from '../models'
import _ from 'lodash'
import options from '../models/options'
export default function() {
  const api = Router({mergeParams: true})
  api.get('/random', (req, res) => {
    const profile = _.sample(profiles)
    const event = findRelatedModel(profile, 'events')
    const resOptions = [
      options.yes({text: 'Tell me more', uri: event.uri}),
      options.yes({text: 'Who else is speaking?', uri: 'baskets/profiles'}),
      options.thanks()
    ]
    const data = makePayload({"profilesrandom": [profile]}, resOptions)
    res.json({data});
  });
  api.get('/', (req, res) => {
    console.log();
    console.log(profiles.length);

    const data = makePayload("profiles", _.sampleSize(profiles, 3) )
    res.json({data});
  });
  api.get('/:id', (req, res) => {
    const profile = findById(profiles, parseInt(req.params.id))
    const event = findRelatedModel(profile, 'events')
    const resOptions = [
      options.yes({text: "Tell me more", uri: event}),
      options.yes({text: "Anything else?", uri: 'baskets/keepgoing'})
    ]
    const data = makePayload({"profile": [profile, event]}, resOptions)
    res.json({data})
  })
  return api
}
