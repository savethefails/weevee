// messages wrap text and a type
const messages = {
  intro: [
     "Welcome to Launch Festival 2016!",
     "I'm WeeVee and I'll be your personal conference guide",
     ["What can I help you with?"]
  ],
  eventsintro: [
    "Breakfast is at 8am-10am and Lunch is 12-2pm",
    "There will also be demos running throughout the festival in the demo pit",
  ],
  days: [
    "Ok",
    "Which day?"
  ],
  day: [
    ["There's a great line up", "There are many great presentations and panels happening"],
    ["Here's one you might like", "Take a look at this event"]
  ],
  profilesrandom: [
    ["We have a great line-up of speakers", "There are too many inspirational speakers to name",""],
    ["We're really excited that {profileFullName} will be joining us on stage", "Have you heard of {profileFullName}?"],
    "{profileCard}"
  ],
  profiles: [
    ["Who do you want to know about?"]
  ],
  profile: [
    ["Sure thing", "Let me look", "One second..."],
    ["Here's {profileFirstName} details", "I found this info about {profileFirstName}"],
    "{profileCard}",
    ["{profileFirstName} will be speaking on {eventDate} at {eventTime}", "See {profileFirstName} on stage {eventDate} at {eventTime}"]
  ],
  event: [
    ["Grabbing the details for you", "Here's more info", "What you need to know is below"],
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
