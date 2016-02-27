// messages wrap text and a type
const messages = {
  intro: [
     "Welcome to Launch Festival!",
     ["Breakfast will be served at 8am today"],
     ["Our first event is at 10am"],
     ["What can I help you with?"]
  ],
  profilesrandom: [
    "Our line-up is stelar this year",
    "We're really excited that {profileFullName} will be joining us on stage",
    "{profileCard}"
  ],
  profiles: [
    ["Who do you want to know about?"]
  ],
  profile: [
    ["Sure thing", "Let me look", "One second..."],
    ["Here's {profileFirstName} details", "I found this info about {profileFirstName}"],
    "{profileCard}",
    ["{profileFirstName} will be speaking on {eventDate} at {eventTime}", "See {profileFirstName} on stage {eventDate} at {eventTime}"],
    "Want to know more?"
  ],
  event: [
    ["Let me paste in all the details"],
    ["One moment"],
    ['Here you go'],
    "{eventCard}",
  ],
  preoutro: [
    ["Anything else I can help you with?", "Anything else?", "Want to know anything more?", "Let's keep this up"]
  ],
  outro: [
    ["Ok", "I understand", "Sure thing"],
    ["Well thanks for hanging out", "Catch you later", "Have a great time at the festival!", "Till next time"]
  ],
  keepgoing: [
    ["Great", "Super", "Sure thing"],
    ["I've always got more to share", "There's always more to know"],
    ["Tell me what else you're interested in knowing?", "What more can tell you about?"]
  ]
}

export default messages

// [{
//   type:
// }
// ]

// baskets/speakers:
//   messages:[listMessages(speakers)]
//   options: [listOptions(speakers)]
// baskets/speakers/1
//   messages: [entityMessages(speakers/1)]
//   options: [entityOptions(speakers/1)]
// baskets/speakers/1?q=events
//   messages: [entityMessages(speakers/1, events)]
//   options: [entityOptions(speakers/1), events]
// baskets/speakers/1?q=profile
