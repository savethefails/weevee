// messages wrap text and a type
const messages = {
  intro: [
     "Welcome to Launch Festival 2016!",
     "I'm WeeVee and I'll be your personal conference guide",
     ["What can I help you with?"]
  ],
  eventsintro: [
    "There will be demos running throughout the festival in the demo pit",
    "We also have a great line up of different speakers",
    "and booths where you can learn about new startups."
  ],
  days: [
    "Sure!",
    "Which day?"
  ],
  day: [
    ["There's a great line up of panels, presentations, and demos", "We have a lot of great presentations and panels happening"],
    ["Here's one you might like", "Take a look at this"],
    "{eventCard}"
  ],
  profilesrandom: [
    ["We have a great line-up of speakers",""],
    ["We're really excited that {profileFullName} will be joining us on stage", "Have you heard of {profileFullName}?"],
    "{profileCard}"
  ],
  profiles: [
    ["Who do you want to know about?"]
  ],
  eventspeakers: [
    ["Sure thing", "Here you go", "Let me pull up the profiles", "Here are their details"]
  ],
  eventspeaker: [
    ["Sure thing", "Here you go", "Let me pull up the profile", "Here are the details"]
  ],
  profile: [
    ["Sure thing", "Let me look", "One second..."],
    ["Here's {profileFirstName} details", "I found this info about {profileFirstName}"],
    "{profileCard}",
    ["{profileFirstName} will be speaking on {eventDate} at {eventTime}", "See {profileFirstName} on stage {eventDate} at {eventTime}"]
  ],
  event: [
    ["Grabbing the details for you", "Here's more info", "This event looks great", "I'm excited for this one"],
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
