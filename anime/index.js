const xhr = new XMLHttpRequest()
let char = "test";
xhr.open('GET', "./anime.md")
xhr.addEventListener('load' , () => {
  char = xhr.responseText
})
xhr.send()
console.log(char)
console.log(xhr.responseText)