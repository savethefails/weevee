// messages wrap text and a type
const messages = {
  intro: [
     "Welcome to Launch Festival!",
     "What do you want to know about?"
  ],
  speakers: [
    "Our line-up is stelar this year",
    "We're really excited that Dave McClure will be joining us on stage",
    "/profiles/1",
    "Who else do you want to know about?"
  ],
  speaker: [
    "Sure thing",
    "Here's :speaker:'s profile"
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
