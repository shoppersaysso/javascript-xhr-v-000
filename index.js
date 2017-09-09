function showRepositories(event, data) {
  var repos = JSON.parse(this.responseText)
  console.log(repos)
  let repoList = "<ul>"
  for(var i=0;i < this.responseText.length; i++) {
    repoList += "<li>" + this.responseText[i]["name"] + "</li>"
  }
  repoList += "</ul>"
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET",
  'https://api.github.com/users/shoppersaysso/repos')
  req.send()
}
