// messages wrap text and a type
const messages = {
  intro: [
     "Welcome to Launch Festival!",
     ["Breakfast will be served at 8am today"],
     ["Our first event is at 10am on the Festival Stage"],
     ["What can I help you with?"]
  ],
  profiles: [
    "Our line-up is stelar this year",
    "We're really excited that {profileFullName} will be joining us on stage",
    "{profileCard}",
    "Who else do you want to know about?"
  ],
  profile: [
    ["Sure thing", "Let me look", "One second..."],
    ["Here's {profileFirstName} details", "I found this info about {profileFirstName}"],
    "{profileCard}",
    ["{profileFirstName} will be speaking on {eventDate} at {eventTime}", "See {profileFirstName} on stage {eventDate} at {eventTime}"],
    "Want to know more?"
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
