import _ from 'lodash'
function optionPayLoad(args = {}) {
  let uri  = args.uri
  let text = args.text
  let type = args.type || 'Text'
  if (_.isObject(uri)) uri = uri.uri
  return {
    text,
    type,
    uri
  }
}
const options = {
  profilesrandom: function(args = {}){
    if (!args.text) args.text = _.sample(["Who's presenting?", "Who's speaking?"])
    args.uri = "baskets/profiles/random"
    return optionPayLoad(args)
  },
  eventsintro: function(args = {}){
    args.text = "What's going on?"
    args.uri = "baskets/events/intro"
    return optionPayLoad(args)
  },
  yes: function(args = {}){
    if (!args.text) args.text = _.sample(['Yup', 'Yes please', "Sure", "Tell me more"])
    if (!args.uri) args.uri = "baskets/keepgoing"
    return optionPayLoad(args)
  },
  no: function(args = {}){
    if (!args.text) args.text = _.sample(['Nope', 'No thanks', "That's ok", "I'll pass", "Not right now"])
    if (!args.uri) args.uri = 'baskets/outro'
    return optionPayLoad(args)
  },
  thanks: function(args = {}){
    if (!args.text) args.text = _.sample(['Thanks', 'Great', 'Looks good', 'Ok'])
    args.uri = 'baskets/preoutro'
    return optionPayLoad(args)
  }
}

export default options;