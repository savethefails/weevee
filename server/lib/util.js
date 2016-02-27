
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
import locations from '../models/locations'
import events from '../models/events'
import _ from 'lodash'

const models = {
  messages,
  options,
  profiles,
  locations,
  events
}
export function makePayload(messageType = '', options = []){
  return {
    messages: findMessages(messageType),
    options
  }
}

function findMessages(type){
  let messageModels = []
  if (_.isFunction(type)) return type()
  if (_.isObject(type)) {
    messageModels = Object.values(type)[0]
    type = Object.keys(type)[0]
  }
  let buildMessages = (messages[type] || []).map( (message, index) => {
    let payload = {}
    if (_.isArray(message)) message = _.sample(message)
    message = makeMessageEntitySpecific(message, messageModels)
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

  return findById(models[type], id)
}

function makeMessageEntitySpecific(message = '', models = []){
  const events = _.filter(models, ['type', 'Event'])
  message = message.replace("{eventsTotal}", events.length)
  models.forEach( model => {
    if(!_.isString(message)) return message
    if (_.isString(model)) model = findEntityByUri(model)
    if (model.type === 'Profile'){
      if (message.indexOf("{profileCard}") > -1) return message = model
      message = message.replace("{profileFirstName}", model.text.split()[0])
      message = message.replace("{profileFullName}", model.text)
    }
    if (model.type === 'Event'){
      const month = model.start.getMonth() + 1
      const day = model.start.getDay()
      const hour = model.start.getHours()
      const minute = model.start.getMinutes()
      message = message.replace("{eventDate}", "" + month + "/" + day)
      message = message.replace("{eventTime}", `${hour}:${minute}`)
    }
  })
  return message
}

export function makeBasketUri(model){
  return `baskets/${model.type.toLowerCase()}/${model.id}`
}


export function findRelatedModel(targetModel, modelType){
  return _.find(models[modelType], (destModel) => {
    const targetModelRef = targetModel.type.toLowerCase()
    const targetModelRefs = targetModelRef + 's'
    let relatedModel = destModel[targetModelRef]
    const relatedCollections = destModel[targetModelRefs]
    if (relatedCollections) {
      relatedCollections.forEach((collectionModel) => {
        // console.log();
        // console.log('collectionModel', collectionModel);
        // console.log();
        // console.log('collectionModel.id == targetModel.id', collectionModel.id == targetModel.id);

        if(collectionModel.id == targetModel.id) relatedModel = collectionModel
      })
    }
    // console.log();
    // console.log('relatedModel -->', relatedModel);

    if (relatedModel && relatedModel.id === targetModel.id) return relatedModel
    // console.log();
    // console.log("relatedModel && relatedModel.id === targetModel.id", relatedModel && relatedModel.id === targetModel.id);

    return false
  })
}