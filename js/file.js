fetch('count.xml')
  .then(response => {
    console.log("Status:", response.status);
    return response.text();
  })
  .then(str => {
    console.log("XML content:", str);
    return new DOMParser().parseFromString(str, "text/xml");
  })
  .then(xml => {
    console.log("Parsed XML:", xml);

    const node = xml.getElementsByTagName("count")[0];
    console.log("Node:", node);

    const count = node ? node.textContent : "NOT FOUND";
    document.getElementById("output").textContent = count;
  })
  .catch(err => console.error("Error:", err));