import { Router } from 'express'
import {makePayload, findById, findRelatedModel} from '../lib/util'
import {profiles, events, options, messages} from '../models'
import _ from 'lodash'
export default function() {
  const api = Router()

  api.get('/intro', (req, res) => {
    const resOptions = [
      options.yes({text: "Tell me more", uri: 'baskets/events/days'}),
      options.yes({text: "Thanks", uri: 'baskets/keepgoing'})
    ]
    const data = makePayload("eventsintro", resOptions);
    res.json({data})
  });

  api.get('/days', (req, res) => {
    const resOptions = [
      options.yes({text: 'March 2', uri: 'baskets/events/days/1'}),
      options.yes({text: 'March 3', uri: 'baskets/events/days/2'}),
      options.yes({text: 'March 4', uri: 'baskets/events/days/3'}),
      options.thanks({text: 'Nevermind', uri: 'baskets/keepgoing'})
    ]
    const data = makePayload("days", resOptions);
    res.json({data})
  });

  api.get('/days/:id', (req, res) => {
    const event = _.sample(_.filter(events, ['day', parseInt(req.params.id)]))
    let speakerOptionText = _.sample(["Tell me about the speakers", "Anything more about the speakers?"])
    if (event.profiles.length == 1) {
      speakerOptionText = speakerOptionText.replace("the speakers", event.profiles[0].text.split(' ')[0])
    }
    const resOptions = [
      options.yes({text: speakerOptionText, uri: event.uri + '/speakers'}),
      options.yes({text: "Anything else?", uri: 'baskets/days'})
    ]

    const data = makePayload({"day": [event]}, resOptions);
    res.json({data})
  });

  api.get('/:id/speakers', (req, res) => {
    const event = findById(events, parseInt(req.params.id))
    const resOptions = [
      options.yes({text: "Thanks!", uri: 'baskets/keepgoing'})
    ]
    const m = event.profiles.length == 1 ? "eventspeaker" : "eventspeakers"
    const data = makePayload(m, resOptions);
    data.messages = data.messages.concat(event.profiles)
    res.json({data})
  })

  api.get('/:id/', (req, res) => {
    const event = findById(events, parseInt(req.params.id))
    let speakerOptionText = _.sample(["Tell me about the speakers", "Anything more about the speakers?"])
    if (event.profiles.length == 1) {
      speakerOptionText = speakerOptionText.replace("the speakers", event.profiles[0].text.split(' ')[0])
    }
    const resOptions = [
      options.yes({text: speakerOptionText, uri: event.uri + '/speakers'}),
      options.yes({text: "Thanks!", uri: 'baskets/keepgoing'})
    ]
    const data = makePayload({"event": [event]}, resOptions)
    res.json({data})
  })

  return api
}
