fetch('./js/count.xml')
  .then(res => res.text())
  .then(text => {
    console.log("RAW:", text);

    const xml = new DOMParser().parseFromString(text, "application/xml");

    // Check for XML parsing errors
    const errorNode = xml.querySelector("parsererror");
    if (errorNode) {
      console.error("XML PARSE ERROR:", errorNode.textContent);
      throw new Error("Invalid XML");
    }

    const node = xml.getElementsByTagName("count")[0];

    console.log("NODE:", node);

    document.getElementById("output").textContent =
      node ? node.textContent : "NOT FOUND";
  })
.catch(err => {
  console.error("FULL ERROR:", err);
  document.getElementById("output").textContent = err.message;
});