import {makeBasketUri} from '../lib/util'
const models = [
  {
    id: 1,
    type: 'Location',
    text: 'Launch Stage - Powered by IBM (Festival Pavilion)',
    latitude: 37.8068163,
    longitude: -122.4314884,
    address: "2 Marina Blvd. San Francisco, CA 94123"
  },
  {
    id: 2,
    type: 'Location',
    text: 'Scale Stage - Presented by McDonald\'s (Cowell Theater)',
    latitude: 37.8068163,
    longitude: -122.4314884,
    address: "2 Marina Blvd. San Francisco, CA 94123"
  },
  {
    id: 3,
    type: 'Location',
    text: 'AMA Stage Powered by WSGR (Festival Pavilion, Behind the Demo Pit)',
    latitude: 37.8068163,
    longitude: -122.4314884,
    address: "2 Marina Blvd. San Francisco, CA 94123"
  }
]

models.forEach((model) => {
  model.uri = makeBasketUri(model)
})

export default models;