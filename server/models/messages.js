// messages wrap text and a type
const messages = {
  intro: [
     "Welcome to Launch Festival!",
     "What are you interested in knowing about?"
  ],
  speaking: [
    "Our line-up is great this stelar",
    "We're really excited that Dave McClure will be joining us on stage",
    "/profiles/1",
    "Who else do you want to know about?"
  ]
}

export default messages

// [{
//   type:
// }
// ]

// basket/speakers:
//   messages:[listMessages(speakers)]
//   options: [listOptions(speakers)]
// basket/speakers/1
//   messages: [entityMessages(speakers/1)]
//   options: [entityOptions(speakers/1)]
// basket/speakers/1?q=events
//   messages: [entityMessages(speakers/1, events)]
//   options: [entityOptions(speakers/1), events]
// basket/speakers/1?q=profile
