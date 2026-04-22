fetch('count.xml')
  .then(response => response.text())
  .then(str => new DOMParser().parseFromString(str, "text/xml"))
  .then(xml => {
    const count = xml.getElementsByTagName("count")[0]?.textContent || "0";
    document.getElementById("output").textContent = count;
  })
  .catch(err => console.error("Error loading XML:", err));