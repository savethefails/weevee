const options = {
  profiles: function(text = "Festival speakers"){
    return {
      text,
      type: "Profiles",
      url: "api/baskets/profiles"
    }
  }
}

export default options;