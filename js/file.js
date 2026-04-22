fetch('js/count.xml')
  .then(res => {
    console.log("STATUS:", res.status);
    console.log("CONTENT-TYPE:", res.headers.get("content-type"));
    return res.text();
  })
  .then(text => {
    console.log("RAW:", text);

    const xml = new DOMParser().parseFromString(text, "application/xml");

    const errorNode = xml.querySelector("parsererror");
    if (errorNode) {
      console.error("XML ERROR:", errorNode.textContent);
      document.getElementById("output").textContent = "INVALID XML";
      return;
    }

    const node = xml.getElementsByTagName("count")[0];

    document.getElementById("output").textContent =
      node ? node.textContent : "NOT FOUND";
  });