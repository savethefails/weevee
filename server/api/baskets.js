import { Router } from 'express'
import {makePayload} from '../lib/util'
import profiles from './profiles'
import options from '../models/options'
import events from './events'
export default function() {
  const api = Router({mergeParams: true})
  const introRespOptions = [options.profilesrandom(), options.eventsintro()]
  api.get('/', (req, res) => {
    const data = makePayload('intro', introRespOptions)
    res.json({data});
  });

  api.get('/preoutro', (req, res) => {
    const respOptions = [
      options.yes(),
      options.no()
    ]
    const data = makePayload('preoutro', respOptions)
    res.json({data});
  })

  api.get('/keepgoing', (req, res) => {
    const data = makePayload('keepgoing', introRespOptions)
    res.json({data});
  })

  api.get('/outro', (req, res) => {
    const data = makePayload('outro', [])
    res.json({data});
  })

  api.use('/profiles', profiles())
  api.use('/events', events())
  return api
}
