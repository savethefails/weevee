import { Router } from 'express'
import {makePayload, findById, findRelatedModel} from '../lib/util'
import {profiles, events, options} from '../models'
import _ from 'lodash'
export default function() {
  const api = Router({mergeParams: true})
  api.get('/intro', (req, res) => {
    const resOptions = [
      options.yes({uri: 'baskets/events/days'}),
      options.thanks({uri: 'baskets/preoutro'})
    ]
    const data = makePayload("eventsintro", resOptions);
    res.json({data})
  });
  api.get('/days', (req, res) => {
    const resOptions = [
      options.yes({text: 'March 2', uri: 'baskets/events/days/1'}),
      options.yes({text: 'March 3', uri: 'baskets/events/days/2'}),
      options.yes({text: 'March 4', uri: 'baskets/events/days/3'}),
      options.thanks({text: 'Nevermind', uri: 'baskets/preoutro'})
    ]
    const data = makePayload("days", resOptions);
    res.json({data})
  });
  api.get('/days/:id', (req, res) => {
    const resOptions = _.filter(events, ['day', parseInt(req.params.id)])
    const data = makePayload("day", resOptions);
    res.json({data})
  });
  api.get('/:id', (req, res) => {
    const event = findById(events, parseInt(req.params.id))
    const resOptions = [
      options.thanks()
    ]
    const data = makePayload({"event": [event]}, resOptions)
    res.json({data})
  })
  return api
}
