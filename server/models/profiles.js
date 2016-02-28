import {makeBasketUri} from '../lib/util'
const models = [
 {
  text: "Aileen Lee",
   id: 1,
   profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/569024280ab377f58005c9ac/1452287073541/Aileen+Lee.jpg?format=300w",
   description: "Aileen Lee is an American seed investor who was a venture capital investor. She joined Kleiner Perkins Caufield & Byers in 1999 and was founding CEO of RMG Networks, a company backed by KPCB. She later founded Cowboy Ventures.",
   short_description: "Founder and partner at Cowboy Ventures",
   company: "Cowboy Ventures"
 },
 {
  text: "Jed Katz",
   id: 2,
   profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56536d49e4b0a9af8dd8a7aa/1448308365810/Jed+Katz.jpg?format=300w",
   description: "One of the pioneers of Internet commerce, Jed has spent his career developing, advising and investing in early stage technology ventures. Prior to joining Javelin Venture Partners, Jed was a Managing Director of DFJ Gotham Ventures in New York. Prior to DFJ Gotham, Jed was the COO of Yamcon, the developer of the highly acclaimed “SkyScout”, one of the best selling astronomy products of all time. ",
   short_description: "Managing Director of Javelin Venture Partners.",
   company: "Javelin Venture Partners"
 },
 {
  text: "Hunter Walk",
   id: 3,
   profile_url: "http://vni.s3.amazonaws.com/151006144918627.png",
   description: "Before Homebrew, Hunter led consumer product management at YouTube, starting when it was acquired by Google. He originally joined Google in 2003, managing product and sales efforts for AdSense, Google‘s contextual advertising business. His first job in Silicon Valley was as the founding product and marketing guy at Linden Lab. ",
   short_description: "Partner at Homebrew VC and former YouTube, Google, Second Life product lead",
   company: "Homebrew"
 },
  {
    text: "Dave McClure",
    id: 4,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/5699347ea12f447c7c8df253/1452881046851/Dave+McClure.jpeg?format=300w",
    description: "Dave McClure is an entrepreneur and angel investor based in the San Francisco Bay Area, who founded and runs the business accelerator 500 Startups. He is often described as one of the super angel investors.",
    short_description: "Founder of 500 Startups",
    company: '500 Startups'
  },
  {
    text: "Cameron Teitelman",
    id: 5,
    profile_url: "http://www.youwebinc.com/data_prod/media/orginal/cameron-teitelman-headshot-6754.jpg",
    description: "Cameron created the first ever business accelerator affiliated with Stanford University. Providing student and alumni entrepreneurs with the highest chance of succeeding in their venture by removing the roadblocks to success through removing information, network, and resource barriers. Connecting them with free office space, legal, web services and most importantly mentorship with VCs, Angels, and seasoned entrepreneurs. ",
    short_description: "Founder and CEO of StartX",
    company: 'StartX'
  },
  {
    text: "Emily Kirsch",
    id: 6,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56c3cd89f699bb8d36e5f263/1455672738587/Emily+Kirsch.jpg?format=300w",
    description: "Startup founder, investor in BrightCurrent, UtilityAPI, PVComplete and Ra Power Management. Worked with former advisor to President Obama, Van Jones, at the Ella Baker Center. Launched and led the Green Jobs Corps, the Climate Action Coalition, and the Oakland Solar Mosaic Pilot. Author of Making Green Work and Creating Climate Action in Your Community. New Leaders Council Alumni and Young Climate Leaders Fellow.",
    short_description: "Co-Founder and CEO of Powerhouse, Solar Incubator and Accelerator.",
    company: 'Powerhouse'
  },
  {
    text: "Gil Penchina",
    id: 7,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56980c5a5dc6def158490435/1452805311882/Gil+Penchina.jpg?format=300w",
    description: "Gil Penchina is an American business manager. He was formerly the CEO of Wikia Inc., and the vice president and general manager, international at eBay",
    short_description: "Angel Investor in Linkedin, Wealthfront, AngelList, Indiegogo, Fastly, Vouch, Blockstream, UXPin",
    company: 'SuperAngel'
  },
  {
    text: "Paige Craig",
    id: 8,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/56a661345827c3eac64f78ba/5640f91be4b0e6862edb2f1b/1456196504926/Robert+Scoble.jpg?format=300w",
    description: "Paige Craig is a Founder and General Partner of Arena Ventures. He is an experienced angel investor who has invested in over 110 startups in the last seven years, including companies like Lyft, AngelList, Wish, Postmates, Twitter, Styleseat, Zenpayroll, Quizup and more.",
    short_description: "Managing Partner at Arena Ventures",
    company: 'Arena Ventures'
  },
  {
    text: "Jenny Fielding",
    id: 9,
    profile_url: "http://static1.squarespace.com/static/56311fdae4b0b8356ef61530/5640f90ce4b0cdd4e931af27/56cbc338ab48def1a6f68aca/1456194931406/JennyFielding21.jpg?format=300w",
    description: "Jenny Fielding is a Managing Director at Techstars where she focuses on IoT/Hardware and FinTech. Previously, Jenny ran Ventures for BBC Worldwide where she invested in early stage digital media companies. She also founded BBC Labs, a corporate startup accelerator. Jenny has a long history in the tech industry, co-founding start-ups such as Switch-Mobile, a disruptive VoIP mobile software company, that was acquired in 2008.",
    short_description: "Managing Director at Techstars",
    company: 'Techstars'
  },
  {
    text: "Josh Elman",
    id: 10,
    profile_url: "https://gh-prod-ruby-images.s3.amazonaws.com/uploads/ama_post/logo/50/josh_elman.jpg",
    description: "Josh invests in entrepreneurs building social networks and platforms, mobile apps, new media, and connected devices. Josh currently serves on the boards of Medium, Meerkat, Operator, Discord, and Jelly. Josh also works closely with our investments in Nextdoor and Whosay. Josh led Greylock’s investment in SmartThings, which was acquired by Samsung in 2014.",
    short_description: "Partner at Greylock, longtime product manager",
    company: 'Greylock'
  },
  {
    text: "Abigail Keifer",
    id: 11,
    profile_url: "http://blog.housewares.org/wp-content/uploads/2015/02/AKiefer_RedClay_Photo-resize-300x300.png",
    description: "Abigail co-founded Red Clay in 2011. Red Clay is a platform built to design exceptional products. It gives any company, from a startup to global enterprise, access to hundreds of vetted freelance designers and provides software to manage an entire design process to go from concept to prototyping within weeks.",
    short_description: "Co-Founder and CEO of Red Clay",
    company: 'Red Clay'
  },
  ///---- @TODO----//
  {
    text: "Anneke Jong",
    company: 'Reserve',
    id: 12,
    profile_url: "https://pbs.twimg.com/profile_images/621569881591287808/iNTQgOlD.jpg",
    description: "As VP of Operations & Marketing, Anneke leads the business side of Reserve. She joined the company from the Google Creative Lab where she led teams building the future of tech. A startup veteran, she is an experienced entrepreneur and storyteller who speaks and writes on topics related to technology and mentorship.",
    short_description: "VP of Operations and Marketing at Reserve"
  },
  {
    text: "Jeffrey Pfeffer",
    company: 'Stanford School',
    id: 13,
    profile_url: "https://www.gsb.stanford.edu/sites/gsb/files/styles/270x270/public/person_photos/SGSB-0349-Jeffrey_PfefferRT.jpg?itok=L8694Hyb",
    description: "Jeffrey Pfeffer, is an American business theorist and the Thomas D. Dee II Professor of Organizational Behavior at the Graduate School of Business, Stanford University, and is considered one of today's most influential management thinkers.",
    short_description: "Professor of Organizational Behavior at the Graduate School of Business, Stanford University"
  },
  {
    text: "Prayag Narula",
    company: 'LeadGenius',
    id: 14,
    profile_url: "http://inacademy.eu/executive-training/assets/img/Speaker/Prayag.jpg",
    description: "Prayag Narula is the co-founder and CEO at LeadGenius. LeadGenius is a demand generation automation company that use a combination of data mining, technology and crowdsourcing to automate and accelerate outbound sales and marketing for hundreds of mid-market and enterprise companies from around the world.",
    short_description: "Co-founder and CEO at LeadGenius"
  },
  {
    id: 15,
    text: "Rob May",
    company: 'Talla',
    profile_url: "https://pbs.twimg.com/profile_images/3778534559/26cd30c321797ee3d8a3cd7410fc57d0_400x400.png",
    description: "Rob May is the co-founder and CEO of Talla, a Massachusetts-based developer of an intelligent virtual assistant for recruiting teams.",
    short_description: "Co-founder and CEO at Talla"
  }
]
models.forEach((model) => {
  model.type = "Profile"
  model.uri = makeBasketUri(model)
})

export default models;