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
  profiles: function(args){
    if (!args.text) args.text = "Who's presenting at Launch?"
    args.uri = "baskets/profiles"
    return optionPayLoad(args)
  },
  yes: function(args = {}){
    if (!args.text) args.text = _.sample(['Yup', 'Yes please', "Sure", "Tell me more"])
    return optionPayLoad(args)
  },
  no: function(args = {}){
    if (!args.text) args.text = _.sample(['Nope', 'No thanks', "That's ok", "I'll pass", "Not right now"])
    args.uri = 'baskets/beforeSignOff'
    return optionPayLoad(args)
  }
}

export default options;