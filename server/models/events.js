import profiles from './profiles'
import locations from './locations'
import _ from 'lodash'
import {makeBasketUri} from '../lib/util'
const models = [
  {
    type: 'Event',
    id: 2,
    text: 'VC Panel',
    profiles: [
      1,
      2,
      3
    ],
    start: "Mar 02 2016 10:00 -0800",
    end: "Mar 02 2016 10:30 -0800",
    location: 1,
    day: 1
  },
  {
    type: 'Event',
    id: 3,
    text: 'Accelerator Panel',
    profiles: [4, 5, 6],
    start: "Mar 03 2016 10:00 -0800",
    end: "Mar 03 2016 10:30 -0800",
    location: 1,
    day: 2,
  },
  {
    type: 'Event',
    id: 3,
    text: 'Angel Panel',
    profiles: [7, 8, 9],
    start: "Mar 04 2016 10:00 -0800",
    end: "Mar 04 2016 10:30 -0800",
    day: 3,
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