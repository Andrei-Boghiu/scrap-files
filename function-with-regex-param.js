const text = "whatever text content you want"
  const requirements = text // && other things

  if (requirements) {
    async function getItemFromText(itemParam) { // in this case itemParam will be a string
      const regex = new RegExp(`/${itemParam} (\w+)/`)
      return caseSubject.match(regex) ?? "ERROR" 
    }

    console.log(getItemFromText("you"))
  }

  const link = "https://example.com"

async function getItemFromWeb(itemParam) { // in this case itemParam will be a querySelector 
  fetch(link)
  .then((response) => response.text())
  .then((data) => {
    const html = parser.parseFromString(data, "text/html")
    return html.querySelector(itemParam).textContent ?? "ERROR"
  })
}
