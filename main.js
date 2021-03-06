const userInput = document.querySelector ('#userInput')
const btn = document.querySelector ('#btn_generate')
const container = document.querySelector ('#flex_container')
const inputTab = document.querySelector ('#tab') 
const btn_stop = document.querySelector( '#btn_stop')

//==================================== Copy Function =============================
const copyFunction=(element)=> {
let fakeTextArea = document.createElement("textarea");
fakeTextArea.value = element.textContent; //element is the js variable which content to be copied
document.body.appendChild(fakeTextArea);
fakeTextArea.select();
document.execCommand("Copy");
fakeTextArea.remove()} 
// ==================================== hexa color generator   =========================
const hexaColorGenerator = () => {
let colorCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hexaColor = '#'
for(let i = 0;  i < 6;  i++ ) {
    let randNum = Math.floor(Math.random() * colorCode.length)
    hexaColor += colorCode[randNum]
} return hexaColor
}
// ===================================  hexacode to rgb code  =============================
const hexaToRgb= (hexacol) => {
const numObj =  {A:10, B:11,C:12,D:13,E:14,F:15}
let arr = hexacol.replace('#','').split('')
let arrNum =  arr.map(z =>  parseInt(z) >= 0 ? parseInt(z) : numObj[z] ) 
let rgb= ` rgb(${arrNum[0]*16+arrNum[1]},${arrNum[2]*16+arrNum[3]},${arrNum[4]*16+arrNum[5]})`
return rgb
}
//=================================     setting dynamic header background   ====================
inputTab.style.background  =  hexaColorGenerator()
interval = setInterval ( function() {
 inputTab.style.background  =  hexaColorGenerator()
 },4000)

// =================================      color div generator         ===============================
let colorDivGenerator= function (n = 10)  {

document.querySelector('#flex_container').innerHTML = ''

for(i = 0; i < n;  i++ )  { 
    let div = document.createElement('div') //colorbox
    let hexaCode  = document.createElement('p')
    let rgbCode  =  document.createElement('p')
    let copyButton1 = document.createElement('button')
    let copyButton2 = document.createElement('button')  
    let displayContet1 = document.createElement('div')
    let displayContet2 = document.createElement('div')
    div.setAttribute('class','colorDiv') 
    displayContet2.setAttribute('class','displayContet2') 
    copyButton1.textContent = 'copy'
    copyButton2.textContent = 'copy'
    div.style.height='120px'
    div.style.color='black'
    
    const assignColor= function(){
        randomHexaColor = hexaColorGenerator() 
        randomRgbColor = hexaToRgb(randomHexaColor)
        rgbCode.textContent = randomRgbColor 
        hexaCode.textContent = randomHexaColor
        div.style.background = randomHexaColor
    }
    assignColor()

    let interval = setInterval(assignColor,2000) 
    
    div.addEventListener ('mouseover', () => clearInterval(interval))
    div.addEventListener ('mouseout', function() { 
    interval  =  setInterval( () => assignColor(),2000)
    })
    btn_stop.addEventListener('click', () =>  clearInterval(interval))

    copyButton1.addEventListener ("click", ()=>  copyFunction(hexaCode));
    copyButton2.addEventListener ("click", ()=>  copyFunction(rgbCode));
    displayContet1.append(hexaCode,copyButton1)
    displayContet2.append(rgbCode,copyButton2)  
     div.append(displayContet1,displayContet2)
    container.append(div)}       
}  

colorDivGenerator()
btn.addEventListener('click',function(){    
    let m = userInput.value
    if ( m > 0 && m <= 200 ) { 
        colorDivGenerator(m)
    }
    else { 
        alert ("Please type a number between 1 and 1000!")
    } 
})

