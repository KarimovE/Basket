let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let btn = document.querySelector("#logIn");
let asAGuest=document.querySelector("#guest");
let signIn = document.querySelector("#sign-in");
let signOut = document.querySelector("#sign-out");
let cards=document.querySelectorAll(".card")
let showItems=document.querySelector("#show");
let myProducts=document.querySelector(".my-products-list")
let basket=document.querySelector("#basket");
let products=document.querySelector("#products");
let logInPanel=document.querySelector("#logInPanel");

let selectedCards=[]

if (localStorage.getItem("loginCase")) {
  btn.addEventListener("click", function (e) {
      if (username.value === "az" && pass.value === "12") {
          localStorage.setItem("loginCase", "true");
          logInPanel.style.visibility = "hidden";
          signIn.style.display = "none";
          signOut.style.display = "block";
          products.style.display = "block";
          basket.style.display = "block";

      }
      else {
          return;
      }
  })
  asAGuest.addEventListener("click", function (e) {
      localStorage.setItem("loginCase", "false");
      logInPanel.style.visibility = "hidden";
      signIn.style.display = "block";
      signOut.style.display = "none";
      products.style.display = "block";
      basket.style.display = "block";
  })
}

// signOut.addEventListener("click", function (e) {
//     localStorage.removeItem("loginCase");
// })
// signIn.addEventListener("click", function (e) {
//    localStorage.removeItem("loginCase");
// })


// // cards.forEach(item => {
// //   item.children[1].children[2].addEventListener("click", function (e) {
// //       readAllItemCount();
      
// //       let imgSrc = this.children[0].children[0].getAttribute("src");
// //       let productName = this.children[1].children[0].innerText;
// //       let productPrice = this.children[1].children[1].innerText;
// //       let productCount = 1;

// //       let newProd = {
// //           src: imgSrc,
// //           name: productName,
// //           price: productPrice,
// //           count: productCount,

// //       };

// //     })
// //   })
