import {makeBasketUri} from '../lib/util'
const models = [
 {
   text: "Aileen Lee",
   type: "Profile",
   id: 1,
   profile_url: "https://randomuser.me/api/portraits/med/women/64.jpg",
   description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
   short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
   company: "Cowboy Ventures"
 },
 {
   text: "Jed Katz",
   type: "Profile",
   id: 2,
   profile_url: "https://randomuser.me/api/portraits/med/men/45.jpg",
   description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
   short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
   company: "Javelin Venture Partners"
 },
 {
   text: "Hunter Walk",
   type: "Profile",
   id: 3,
   profile_url: "https://randomuser.me/api/portraits/med/men/45.jpg",
   description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
   short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
   company: "Homebrew"
 },
  {
    text: "Dave McClure",
    type: "Profile",
    id: 4,
    profile_url: "https://randomuser.me/api/portraits/med/men/45.jpg",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: '500 Startups'
  },
  {
    text: "Cameron Teitelman",
    type: "Profile",
    id: 5,
    profile_url: "https://randomuser.me/api/portraits/med/men/45.jpg",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'StartX'
  },
  {
    text: "Emily Kirsch",
    type: "Profile",
    id: 6,
    profile_url: "https://randomuser.me/api/portraits/med/women/64.jpg",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'Powerhouse'
  },
  {
    text: "Gil Penchina",
    type: "Profile",
    id: 7,
    profile_url: "https://randomuser.me/api/portraits/med/men/45.jpg",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'SuperAngel'
  },
  {
    text: "Paige Craig",
    type: "Profile",
    id: 8,
    profile_url: "https://randomuser.me/api/portraits/med/women/64.jpg",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'Arena Ventures'
  },
  {
    text: "Jenny Fielding",
    type: "Profile",
    id: 9,
    profile_url: "https://randomuser.me/api/portraits/med/women/64.jpg",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'Techstars'
  }
]
models.forEach((model) => {
  model.uri = makeBasketUri(model)
})

export default models;