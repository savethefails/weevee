import {makeBasketUri} from '../lib/util'
const models = [
 {
   text: "Aileen Lee",
   type: "Profile",
   id: 1,
   profile_url: 'http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/5699347ea12f447c7c8df253/1452881046851/Dave+McClure.jpeg?format=500w',
   company: "Cowboy Ventures"
 },
 {
   text: "Jed Katz",
   type: "Profile",
   id: 2,
   profile_url: 'http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/5699347ea12f447c7c8df253/1452881046851/Dave+McClure.jpeg?format=500w',
   company: "Javelin Venture Partners"
 },
 {
   text: "Hunter Walk",
   type: "Profile",
   id: 3,
   profile_url: 'http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/5699347ea12f447c7c8df253/1452881046851/Dave+McClure.jpeg?format=500w',
   company: "Homebrew"
 }
  // {
  //   text: "Dave McClure",
  //   type: "Profile",
  //   id: 1,
  //   profile_url: 'http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/5699347ea12f447c7c8df253/1452881046851/Dave+McClure.jpeg?format=500w'
  // },
  // {
  //   text: "Danielle Morril",
  //   type: "Profile",
  //   id: 2,
  //   profile_url: 'http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56a2cf1269a91a5239ac6d62/1453510489071/Danielle+Morrill.jpg?format=500w'
  // },
  // {
  //   text: "Chamath Palihapitiya",
  //   type: "Profile",
  //   id: 3,
  //   profile_url: 'http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/5640f91be4b0cdd4e931afce/1447099402260/Chamath+Palihapitiya.jpeg?format=500w'
  // }
]
models.forEach((model) => {
  model.uri = makeBasketUri(model)
})

export default models;