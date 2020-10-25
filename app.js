const form = document.querySelector("#logoform")
const logoName = document.querySelector("input[name = 'brandname']")
const logoColor = document.querySelector("input[name = 'color']")
const logoFont = document.querySelector("input[name = 'fontsize']")
const results = document.querySelector("#results")
// console.log("logoname, logoColor, logoFont")

form.addEventListener("submit", function(e){
	e.preventDefault()
	const logoValues = createLogo(logoName.value, logoColor.value, logoFont.value)
	results.appendChild(logoValues)

})


function createLogo(name, color, font){
	console.log(name, color, font)
	const newlogo = document.createElement("h2")
	newlogo.innerText = name;
	newlogo.style.color = color;
	newlogo.style.fontSize = font + 'px'
	return newlogo
}