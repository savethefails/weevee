import { Router } from 'express'
import {makePayload, findById, findRelatedModel} from '../lib/util'
import {profiles, events, options} from '../models'
import _ from 'lodash'
export default function() {
  const api = Router({mergeParams: true})
  // api.get('/', (req, res) => {
  //   const data = makePayload("profiles");
  // });
  api.get('/:id', (req, res) => {
    const event = findById(events, parseInt(req.params.id))
    const resOptions = [
      options.thanks()
    ]
    res.json(makePayload({"event": [event]}, resOptions))
  })
  return api
}
