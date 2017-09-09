function showRepositories(event, data) {
  console.log(this.responseText)
  let repoList = "<ul>"
  for(var i=0;i < this.responseText.length; i++) {
    repoList += "<li>" + this.responseText[i]["name"] + "</li>"
  }
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET",
  'https://api.github.com/users/shoppersaysso/repos')
  req.send()
}
