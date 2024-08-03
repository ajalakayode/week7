document.body.style.background = "blue"

const title = document.querySelector("h1")
title.textContent = "DOM manipulation"

// alert(title.textContent)

const sec = document.getElementById("second")
const idSec = document.querySelector('#second')
const fifth = document.querySelector("ul>:nth-child(5)")

const lists = document.querySelectorAll("ul li")

// below targets element with  a particular name
const seconds = document.getElementsByClassName("second")


lists[0].textContent ="hauwa"
lists[7].textContent ="amarachi"
fifth.textContent = "kayode ajala"
sec.textContent = "first id"
idSec.textContent = "id second"
seconds[0].textContent = "paul"
seconds[1].textContent = "samuel"

idSec.style.backgroundColor = "tomato"
idSec.style.paddingBlock = "2em"
idSec.style.textTransform = "uppercase"

