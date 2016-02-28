import {makeBasketUri} from '../lib/util'
const models = [
 {
   text: "Aileen Lee",
   type: "Profile",
   id: 1,
   profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/569024280ab377f58005c9ac/1452287073541/Aileen+Lee.jpg?format=300w",
   description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
   short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
   company: "Cowboy Ventures"
 },
 {
   text: "Jed Katz",
   type: "Profile",
   id: 2,
   profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56536d49e4b0a9af8dd8a7aa/1448308365810/Jed+Katz.jpg?format=300w",
   description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
   short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
   company: "Javelin Venture Partners"
 },
 {
   text: "Hunter Walk",
   type: "Profile",
   id: 3,
   profile_url: "http://vni.s3.amazonaws.com/151006144918627.png",
   description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
   short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
   company: "Homebrew"
 },
  {
    text: "Dave McClure",
    type: "Profile",
    id: 4,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/5699347ea12f447c7c8df253/1452881046851/Dave+McClure.jpeg?format=300w",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: '500 Startups'
  },
  {
    text: "Cameron Teitelman",
    type: "Profile",
    id: 5,
    profile_url: "http://www.youwebinc.com/data_prod/media/orginal/cameron-teitelman-headshot-6754.jpg",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'StartX'
  },
  {
    text: "Emily Kirsch",
    type: "Profile",
    id: 6,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56c3cd89f699bb8d36e5f263/1455672738587/Emily+Kirsch.jpg?format=300w",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'Powerhouse'
  },
  {
    text: "Gil Penchina",
    type: "Profile",
    id: 7,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56980c5a5dc6def158490435/1452805311882/Gil+Penchina.jpg?format=300w",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'SuperAngel'
  },
  {
    text: "Paige Craig",
    type: "Profile",
    id: 8,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/56a661345827c3eac64f78ba/5640f91be4b0e6862edb2f1b/1456196504926/Robert+Scoble.jpg?format=300w",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'Arena Ventures'
  },
  {
    text: "Jenny Fielding",
    type: "Profile",
    id: 9,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56cbc338ab48def1a6f68aca/1456194931406/JennyFielding21.jpg?format=300w",
    description: "Random's television work tended to be in dramatic roles, in venerable programs like Dr. Kildare, Mr. Novak, Ben Casey, and Lassie, or Western series, such as Gunsmoke, The Virginian, The Iron Horse, and The Legend of Jesse James (which starred Christopher Jones). He did occasional comedies, including The Dick Van Dyke Show and Gidget (in a recurring role as Gidget's friend Mark).",
    short_description: "Robert Random, usually billed as Bob Random, is a Canadian-born character actor",
    company: 'Techstars'
  }
]
models.forEach((model) => {
  model.uri = makeBasketUri(model)
})

export default models;