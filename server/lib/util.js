
// *	Creates a callback that proxies node callback style arguments to an Express Response object.
//  *	@param {express.Response} res	Express HTTP Response
//  *	@param {number} [status=200]	Status code to send on success
//  *
//  *	@example
//  *		list(req, res) {
//  *			collection.find({}, toRes(res));
//  *		}



// export function toRes(res, status=200) {
// 	return (err, thing) => {
// 		if (err) return res.status(500).send(err);

// 		if (thing && typeof thing.toObject==='function') {
// 			thing = thing.toObject();
// 		}
// 		res.status(status).json(thing);
// 	};
// }

import messages from '../models/messages'
import options from '../models/options'
import profiles from '../models/profiles'
import _ from 'lodash'

const entities = {
  messages,
  options,
  profiles
}
export function makePayload(messageType = '', optionTypes = []){
  return {
    messages: findMessages(messageType),
    options: findOptions(optionTypes)
  }
}

function findMessages(type){
  return (messages[type] || []).map( (message, index) => {
    let payload = {}
    if (message.indexOf('/') === -1){
      payload = {
        type: 'Text',
        value: message,
        id: type + index
      }
    } else {
      const keys = message.split('/')
      const type = keys[1]
      const id = keys[2]

      payload = findById(entities[type], id)
    }
    return payload
  })
}

function findOptions(optionTypes = []){
  if (_.isFunction(optionTypes)) return optionTypes()
  let payload = optionTypes.map( (type) => {
    let payload;
    if (_.isString(type)) {
      payload = options[type]()
    } else if (_.isObject(type)) {
      const obj = type
      type = Object.keys(obj)[0]
      let args = Object.values(obj)[0]
      payload = options[type](...args)
    } else if (_.isFunction(type)) {
      payload = type()
    } else {
      payload = {}
    }
    return payload
  })
  return _.flatten(payload)
}

function findByType(collection, type){
  return find(collection, 'type', type)
}
function findById(collection, id){
  return find(collection, 'id', id)
}

function find(collection, key, value){
  return _.find(collection, [key, value])

}
