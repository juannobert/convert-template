const USD = 5.43
const EUR = 6.35
const GBP = 7.34


const form = document.querySelector("form")
const input = document.querySelector("#amount")
const select = document.getElementById("currency")
const footer = document.querySelector("footer")
input.addEventListener("input",() => {
    const hasCaractersRegex = /\D+/g
    input.value = input.value.replace(hasCaractersRegex,"")
})
// £ €
form.onsubmit = (e) =>{
    e.preventDefault()
    switch(select.value){
        case "USD":
            converter(input.value,USD,"$")
            break;
        case "EUR":
            converter(input.value,EUR,"€")
            break;
        case "GBP":
            converter(input.value,GBP,"£")
            break;
    }
    
}

function converter(preco,moeda,simbolo){
    console.log(preco,moeda,simbolo)
    footer.classList.add("show-result")
    footer.children[0].innerHTML = `${simbolo} 1 = R$ ${moeda}` //US$ 1 = R$ 4,86
    const total = preco*moeda
     footer.children[1].innerHTML = `${total.toFixed(2)} Reais` //US$ 1 = R$ 4,86

}