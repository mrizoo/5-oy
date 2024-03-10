// 1️⃣ BMI kalkulyator
// const ism = prompt("Ismingizni kiriting");
// const boy = prompt("Boyingizni kiriting");
// const vazn = prompt("vazningizni kiriting");
// const title = document.getElementById("title");
// BMI = vazn / boy ** 2;
// if (BMI <= 18.5) {
//   title.textContent =
//     ism +
//     " - Siz ozg'insiz, sport bilan shug'illanib tabiiy mahsulotlarni ko'proq iste'mol qiling";
// } else if (BMI >= 18.8 && BMI <= 24.9) {
//   title.textContent =
//     ism + " - Sizning vazningiz bo'yingizga mos, shunday davom eting :)";
// } else if (BMI >= 25 && BMI <= 29.9) {
//   title.textContent =
//     ism +
//     " - Sizda ortiqcha vaznlar bor sport va dietani hayot tarzingizga kiriting";
// } else {
//   title.textContent =
//     ism + " - Sizda semizlik kasali bor doktor bilan uchrashing ";
// }

//2️⃣ Kiritilgan son random orqali ekranga chiqiladi va uylangan son bulsa ha yoki yuq degan kod
// let myNumber = +prompt("Enter number untill 10")
// let randomNumber = Math.trunc(10 * Math.random() ) + 1
// let title = document.getElementById("title")
// if(myNumber == randomNumber){
//     title.textContent = randomNumber + " - Siz kiritgan son bilan bir xil"
// }else{
//     title.textContent = randomNumber + " - Afsus siz topaolmadingiz"
// }

// textcontent
// const titles = document.getElementById("titles")
// titles.textContent += " New Text"
// const listItem = document.querySelectorAll(".list-item")
// listItem.forEach((item) =>{
//     item.textContent += " darslari"
// })

// innerHTML
// const titles = document.getElementById("titles")
// titles.innerHTML = " <i>New Text</i>"

// const names = [`Ilyos, Ma'ruf, Usmon`]
// const ol = document.querySelector("ol")
// names.forEach((name) => {
//     ol.innerHTML += `<li> ${name}</li>`
// })

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://www.yandex.ru");

// link.textContent = "Go To Yandex Main Page";

// const text = document.querySelector("p")
// console.log(text.getAttribute('class'));
// text.setAttribute('class','success')

// text.setAttribute('style','color: red')

// const heading = document.querySelector('h1')
// heading.setAttribute('style', 'margin: 50px')
// console.log(heading.style);
// heading.style.margin = '50px'
// heading.style.color = 'crimson'
// heading.style.fontSize = '50px'
// heading.style.margin = ''
// heading.style.backgroundColor = '#ccc'