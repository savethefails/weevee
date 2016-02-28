// messages wrap text and a type
const messages = {
  intro: [
     "Welcome to Launch Festival!",
     ["What can I help you with?"]
  ],
  eventsintro: [
    "First things first",
    "Breakfast is at 8am - 10am",
    ["March 2, 3, and 4", "on all 3 days"],
    "There will also be demos running throughout the festival",
    "These will take place in the demo pit",
    "Make sure to check them out",
    "Also",
    "Lunch is at 12pm - 2pm everday",
    "Want to know more?"
  ],
  days: [
    "Ok",
    "Which day?",
    "They're all going to be good",
    "Just saying"
  ],
  day: [
    ["There's a great line up", "There are many great presentations and panels happening"],
    ["Here's just a few", "Take a look at what I've chosen", "You might like these"]
  ],
  profilesrandom: [
    ["Our line-up is stelar this year", "",""],
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
    ["Let me paste in all the details", "Here's more info", "What you need to know is below"],
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
