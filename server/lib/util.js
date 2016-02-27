
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
  let entities = []
  if (_.isFunction(type)) return type()
  if (_.isObject(type)) {
    entities = Object.values(type)[0]
    type = Object.keys(type)[0]
  }
  let buildMessages = (messages[type] || []).map( (message, index) => {
    let payload = {}
    if (_.isArray(message)) message = _.sample(message)
    message = makeMessageEntitySpecific(message, entities)
    if (!message) {
      return null
    }
    else if (_.isString(message)){
      payload = {
        type: 'Text',
        text: message,
        id: type + index
      }
    }
    else {
      payload = message
    }
    return payload
  })
  return _.compact(buildMessages)
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

export function findByType(collection, type){
  return find(collection, 'type', type)
}
export function findById(collection, id){
  return find(collection, 'id', id)
}

export function find(collection, key, value){
  return _.find(collection, [key, value])
}

export function findEntityByUri(uri){
  const keys = uri.split('/')
  const type = keys[keys.length - 2]
  const id = keys[keys.length - 1]

  return findById(entities[type], id)
}

function makeMessageEntitySpecific(message = '', entities = []){
  const events = _.filter(entities, ['type', 'Event'])
  message = message.replace("{eventsTotal}", events.length)
  entities.forEach( entity => {
    if(!_.isString(message)) return message
    if (_.isString(entity)) entity = findEntityByUri(entity)
    if (entity.type === 'Profile'){
      console.log();
      console.log(message, message.indexOf("{profileCard}"));

      if (message.indexOf("{profileCard}") > -1) return message = entity

      message = message.replace("{profileFirstName}", entity.text.split()[0])
      message = message.replace("{profileFullName}", entity.text)

    }
  })
  return message
}
