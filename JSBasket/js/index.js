
let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let btn = document.querySelector("#logIn");
let welcome = document.querySelector(".Heading");
let welcomeH = document.querySelector(".Heading h1");
let form = document.querySelector(".form");
let logout = document.querySelector(".logout");
let card1=document.querySelector(".card1");
let card2=document.querySelector(".card2");
let card3=document.querySelector(".card3");
let addCard1=document.querySelector("#addCard1");
let addCard2=document.querySelector("#addCard2");
let addCard3=document.querySelector("#addCard3");
let showItems=document.querySelector("#show");
let asAGuest=document.querySelector("#guest");
let basket=document.querySelector(".basket");
let ul=document.querySelector("ul");
let count=0;
let arr=[];

const Product1 = {name: "", price: "", imgSource: ""};
const Product2 = {name: "", price: "", imgSource: ""};
const Product3 = {name: "", price: "", imgSource: ""};


let localUser = JSON.parse(localStorage.getItem("login"));

const userInfo = {username: "az", pass: "12"};

if (localUser !== null) {
  welcome.style.display = "block";
  form.style.display = "none";
  welcomeH.innerText += " " + localUser.username;

  addCard1.addEventListener("click", function (e) {
    const {name: card1Name, price: card1Name, imgSource: card1ImgSource}=Product1
      localStorage.setItem("Product1", JSON.stringify(Product1));
      
    count++;
    array[count]=
  });
  
  addCard2.addEventListener("click", function (e) {
    const {name: card2Name, price: card1Name, imgSource: card3ImgSource}=Product2
      localStorage.setItem("Product2", JSON.stringify(Product2));
      count++;
      array[count]=
  });
  
  addCard3.addEventListener("click", function (e) {
    const {name: card3Name, price: card1Name, imgSource: card3ImgSource}=Product3
      localStorage.setItem("Product3", JSON.stringify(Product3));
      count++;
      array[count]=
  });
  
  showItems.addEventListener("click", function (e) {
    arr.forEach(product => {
      let li=document.createElement("li")
      li.innerText=product.name
      ul.appendChild(li)
    });
   });

} 

else {

  asAGuest.addEventListener("click", function (e) {
    addCard1.addEventListener("click", function (e) {
      const {name: card1Name, price: card1Name, imgSource: card1ImgSource}=Product1
        sessionStorage.setItem("Product1", JSON.stringify(Product1));
        
    });
    
    addCard2.addEventListener("click", function (e) {
      const {name: card2Name, price: card1Name, imgSource: card3ImgSource}=Product2
      sessionStorage.setItem("Product2", JSON.stringify(Product2));
      
    });
    
    addCard3.addEventListener("click", function (e) {
      const {name: card3Name, price: card1Name, imgSource: card3ImgSource}=Product3
      sessionStorage.setItem("Product3", JSON.stringify(Product3));
      
    });
    
    showItems.addEventListener("click", function (e) {
      arr.forEach(product => {
        let li=document.createElement("li")
        li.innerText=product.name
        ul.appendChild(li)
      });
     });
  
  });

  welcome.style.display = "none";
  form.style.display = "block";
}

let userName;
let passW;

username.addEventListener("change", function (e) {
  const { value: userVal } = e.target;
  userName = userVal;
});
pass.addEventListener("change", function (e) {
  const { value: userPass } = e.target;
  passW = userPass;
});

btn.addEventListener("click", function (e) {
  const { username: myName, pass: userPassword } = userInfo;
  if (userName === myName && passW === userPassword) {
    localStorage.setItem("login", JSON.stringify(userInfo));
    location.reload();
  }
});

logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("login");
  location.reload();
});

