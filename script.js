var result = document.querySelector(".result");

var btn = document.querySelectorAll(".beg-div button");
var result1 = document.querySelector(".data");

btn.forEach((btn1) => {
  btn1.onclick = (e) => {
    let parent = e.target.parentElement.parentElement;
    getdata(parent);
  };
});

function getdata(parent) {
  var img = parent.querySelector("img").src;
  var h3 = parent.querySelector("h3").textContent;
  var h2 = parent.querySelector("h2").textContent;
  var obj = { img, h3, h2 };

  storedata(obj);
}
function storedata(obj) {
  var cart = JSON.parse(localStorage.getItem("items"));

  if (cart) {
    cart.push(obj);
    localStorage.setItem("items", JSON.stringify(cart));
    showdata();
  } else {
    localStorage.setItem("items", JSON.stringify([obj]));
    showdata();
  }
}

function showdata() {
  var cart = JSON.parse(localStorage.getItem("items"));
  //    console.log(result);

  //    console.log(cart);

  var empty = "";
  cart.forEach((data, i) => {
    empty += `
           <div class='result1'>
            <img class="img1" src="${data.img}"></img>
            <h3 class="data-h3">${data.h3}</h3>
            <h2 class="data-h2">${data.h2}</h2>

            <button class="data-btn" onclick="deleteindax(${i})">x</button>
           </div>
           `;

    result1.innerHTML = empty;
  });
}
function deleteindax(i) {
  var z = JSON.parse(localStorage.getItem("items"));
  console.log(z);
  z.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(z));
  showdata();
}

showdata();

function clear1() {
  localStorage.clear();
  result1.innerHTML = "";
}
