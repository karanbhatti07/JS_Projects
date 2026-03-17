let b1 = document.getElementById("btn");
b1.addEventListener("click", function () {
  let xhttp = new XMLHttpRequest();
  console.log(xhttp.readyState);
  xhttp.open("GET", "https://fakestoreapi.com/products", true);
  console.log(xhttp.readyState);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      console.log(data);
      let table = document.createElement("table");
      table.border = "1";

      let table1 = document.createElement("tr")
      let thead = document.createElement("tr")

      let th1 = document.createElement("th") 
      th1.innerText = "Price"

      thead.appendChild(th1)


      for (let key in data) {
        let { title, price, image } = data[key];

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = price;

        let td2 = document.createElement("td");
        td2.innerHTML = title;

        let td3 = document.createElement("td");

        let imgtag = document.createElement("img");
        imgtag.src = image;
        imgtag.height = 100;
        imgtag.width = 100;
        imgtag.style.marginLeft = "100px";

        td3.appendChild(imgtag);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
      }
      document.body.appendChild(table);
    }
  };
  xhttp.send();
});
