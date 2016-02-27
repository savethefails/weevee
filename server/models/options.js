import _ from 'lodash'
const options = {
  profiles: function(text = "Who's presenting at Launch?"){
    return {
      text,
      type: "Text",
      uri: "baskets/profiles"
    }
  },
  yes: function(uri, text){
    if (!text) text = _.sample(['Yup', 'Yes please', "Sure", "Tell me more"])
    return {
      text,
      type: 'Text',
      uri
    }
  },
  no: function(text){
    if (!text) text = _.sample(['Nope', 'No thanks', "That's ok", "I'll pass", "Not right now"])
    return {
      text,
      type: 'Text',
      uri: 'baskets/beforeSignOff'
    }
  }
}

export default options;