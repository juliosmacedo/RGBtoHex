function rgb(r, g, b){
  let num1 = r.toString(16).toUpperCase();
  let num2 = g.toString(16).toUpperCase();
  let num3 = b.toString(16).toUpperCase();
   
    if (!num1[1]) {num1 = '0' + num1[0]} 
    if (!num2[1]) {num2 = '0' + num2[0]} 
    if (!num3[1]) {num3 = '0' + num3[0]} 
    
    if (num1 < 0) {num1 = '00'} 
    if (num2 < 0) {num2 = '00'} 
    if (num3 < 0) {num3 = '00'} 
  
    if (r >= 255) {num1 = 'FF'} 
    if (g >= 255) {num2 = 'FF'} 
    if (b >= 255) {num3 = 'FF'} 
  
    return (num1+num2+num3).toString()
}

function getRndInteger() {
  return Math.floor(Math.random() * (255));
}
  



const btn = document.getElementById("button");
btn.onclick = function submit() {
  const r = +document.getElementById("r").value
  const g = +document.getElementById("g").value
  const b = +document.getElementById("b").value
  const newColor = rgb(r, g, b)
  document.getElementById('info').innerHTML =
        `<h3 style="color:#${newColor}"><strong>#${newColor}</strong></h3>`
  document.body.style.backgroundColor = `#${newColor}`
}


const randomBtn = document.getElementById("random");
randomBtn.onclick = function submit() {

  const randomR = getRndInteger()
  const randomG = getRndInteger()
  const randomB = getRndInteger()

  const newColor = rgb(randomR, randomG, randomB)

  document.getElementById("r").value = randomR
  document.getElementById("g").value = randomG
  document.getElementById("b").value = randomB

  document.getElementById('info').innerHTML =
          `<h3 style="color:#${newColor}"><strong>#${newColor}</strong></h3>`
  document.body.style.backgroundColor = `#${newColor}`
}

