import profiles from './profiles'
import locations from './locations'
import _ from 'lodash'
import {makeBasketUri} from '../lib/util'
const models = [
  {
    type: 'Event',
    id: 1,
    Text: 'Breakfast + Demo Pit',
    profiles: [],
    start: "Wed Mar 02 2016 08:00 -0800",
    end: "Wed Mar 02 2016 10:00 -0800",
    location: 1
  },
  {
    type: 'Event',
    id: 2,
    Text: 'VC Panel',
    profiles: [
      1,
      2,
      3
    ],
    start: "Wed Mar 02 2016 10:00 -0800",
    end: "Wed Mar 02 2016 10:30 -0800",
    location: 1
  }
]

models.forEach((model) => {
  model.start = new Date(model.start)
  model.end = new Date(model.end)
  model.profiles = model.profiles.map( (profileId) => {
    return _.find(profiles, ['id', profileId])
  })
  model.location = _.find(locations, ['id', model.location])
  model.uri = makeBasketUri(model)
})

export default models;