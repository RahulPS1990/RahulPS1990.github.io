fetch('count.xml')
  .then(response => response.text())
  .then(str => new DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    let count = data.getElementsByTagName("count").textContent;
    let output = count;
    document.getElementById("output").innerHTML = output;
  })
  .catch(err => console.error("Error loading XML:", err));