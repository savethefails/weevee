import profiles from './profiles'
import locations from './locations'
import _ from 'lodash'
import {makeBasketUri} from '../lib/util'
const models = [
  //-------
  //LOCATION 1
  //DAY 1
  {
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
  //DAY 2
  {
    text: 'Accelerator Panel',
    profiles: [4, 5, 6],
    start: "Mar 03 2016 10:00 -0800",
    end: "Mar 03 2016 10:30 -0800",
    location: 1,
    day: 2,
  },
  //DAY 3
  {
    text: 'Angel Panel',
    profiles: [7, 8, 9],
    start: "Mar 04 2016 10:00 -0800",
    end: "Mar 04 2016 10:30 -0800",
    day: 3,
    location: 1
  },
  //-------
  // LOCATION 2
  //DAY 1
  {
    text: 'Launching your rocket ship off someone else\'s platform',
    profiles: [10],
    start: "Mar 02 2016 11:00 -0800",
    end: "Mar 02 2016 11:20 -0800",
    day: 1,
    location: 2
  },
  {
    text: 'Big business development for tiny startups',
    profiles: [11],
    start: "Mar 02 2016 15:10 -0800",
    end: "Mar 02 2016 15:30 -0800",
    day: 1,
    location: 2
  },
  //DAY 2
  {
    text: 'Ruthless Growth Culture: Scaling Without Breaking Your Team',
    profiles: [12],
    start: "Mar 03 2016 11:00 -0800",
    end: "Mar 03 2016 11:20 -0800",
    day: 2,
    location: 2
  },
  {
    text: 'Some Power Principals for Founders/ Entrepreneurs',
    profiles: [13],
    start: "Mar 03 2016 14:20 -0800",
    end: "Mar 03 2016 14:40 -0800",
    day: 2,
    location: 2
  },
  //DAY 3
  {
    text: 'How to scale outbound sales: lessons learned from the trenches',
    profiles: [14],
    start: "Mar 04 2016 14:20 -0800",
    end: "Mar 04 2016 14:50 -0800",
    day: 3,
    location: 2
  },
  {
    text: 'Scaling Startup Funnels:  Moving Slow To Grow Fast',
    profiles: [15],
    start: "Mar 04 2016 11:50 -0800",
    end: "Mar 04 2016 12:00 -0800",
    day: 3,
    location: 2
  }
]

models.forEach((model, i) => {
  model.id = i
  model.type = "Event"
  model.start = new Date(model.start)
  model.end = new Date(model.end)
  model.profiles = model.profiles.map( (profileId) => {
    return _.find(profiles, ['id', profileId])
  })
  model.location = _.find(locations, ['id', model.location])
  model.uri = makeBasketUri(model)
})

export default models;