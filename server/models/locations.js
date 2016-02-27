import {makeBasketUri} from '../lib/util'
const models = [
  {
    id: 1,
    type: 'Location',
    text: 'Launch Stage Powered by IBM (Festival Pavilion)',
    latitiude: 40.0000,
    longitude: -71.32234,
    address: 'Fort Mason, San Francisco'
  }
]

models.forEach((model) => {
  model.uri = makeBasketUri(model)
})

export default models;