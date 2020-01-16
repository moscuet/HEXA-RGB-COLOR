const userInput= document.querySelector('#userInput')
const btn= document.querySelector('#btn_generate')
const container=document.querySelector('#flex_container')
const inputTab=document.querySelector('#tab') 
let n
let notClick=true
//Copy Function
const copyFunction=(element)=> {
let fakeTextArea = document.createElement("textarea");
fakeTextArea.value = element.textContent; //element is the js variable which content to be copied
document.body.appendChild(fakeTextArea);
fakeTextArea.select();
document.execCommand("Copy");
fakeTextArea.remove()} 
              // hexa color generator 
const hexaColorGenerator= () => {
let colorCode=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hexaColor='#'
for(let i=0; i<6;i++){
    let randNum= Math.floor(Math.random()*colorCode.length)
    hexaColor+=colorCode[randNum]
} return hexaColor
}
// hexacoor to rgb color
const hexaToRgb= (hexacol) => {
const numObj = {A:10, B:11,C:12,D:13,E:14,F:15}
let arr=hexacol.replace('#','').split('')
let arrNum= arr.map( z => parseInt(z)>=0 ? parseInt(z): numObj[z]) 
let rgb= ` rgb(${arrNum[0]*16+arrNum[1]},${arrNum[2]*16+arrNum[3]},${arrNum[4]*16+arrNum[5]})`
return rgb
}

inputTab.style.background=hexaColorGenerator()
interval = setInterval(function(){
 inputTab.style.background=hexaColorGenerator()
 },5000)

//  color div generator
let colorDivGenerator= function (n=10){
document.querySelector('#flex_container').innerHTML=''

for(i=0; i<n; i++){ 
    let div = document.createElement('div') //colorbox
    let hexaCode= document.createElement('p')
    let rgbCode=document.createElement('p')
    let copyButton1=document.createElement('button')
    let copyButton2=document.createElement('button')  
    let displayContet1=document.createElement('div')
    let displayContet2=document.createElement('div')
    div.setAttribute('class','colorDiv') 
    displayContet2.setAttribute('class','displayContet2') 
    copyButton1.textContent='copy hexa'
    copyButton2.textContent='copy rgb'
    div.style.height='100px'
    div.style.color='black'
    
    
    
       const assignColor= function(){
        randomHexaColor=hexaColorGenerator() 
        randomRgbColor= hexaToRgb(randomHexaColor)
        rgbCode.textContent=randomRgbColor 
        hexaCode.textContent= randomHexaColor
        div.style.background= randomHexaColor
       }
       assignColor()
    let interval = setInterval(assignColor,2000) 

    div.addEventListener('mouseover', ()=>clearInterval(interval))
    div.addEventListener('mouseout', function(){ 
    if(notClick) {interval=setInterval( () =>assignColor(),2000)}
    })
    
    document.querySelector('#btn_stop').addEventListener('click', ()=> {
    clearInterval(interval)
    notClick=false
})
    copyButton1.addEventListener("click", ()=>copyFunction(hexaCode));
    copyButton2.addEventListener("click", ()=> copyFunction(rgbCode));
    displayContet1.append(hexaCode,copyButton1)
    displayContet2.append(rgbCode,copyButton2)  
     div.append(displayContet1,displayContet2)
    container.append(div)}       
}  



colorDivGenerator()

btn.addEventListener('click',function(){    
 let m =userInput.value
  colorDivGenerator(m)
})





//let interval = setInterval(colorDivGenerator,1000)


/*
 setTimeout(() => {
    
 }, timeout),arg1,1rg2,...;


 setInterval(() => {
    
 }, interval);
*/


// btn.addEventListener('click',function(){    
//   clearInterval(interval)
//   n=userInput.value
//   colorDivGenerator()
//   interval=setInterval( () =>colorDivGenerator(),2500)
// })

// container.addEventListener('mouseover', ()=>clearInterval(interval))
// container.addEventListener('mouseout', function(){
// interval=setInterval( () =>colorDivGenerator(),2000)})
document.querySelector('#btn_stop').addEventListener('click', ()=> clearInterval(interval))














    /* code finish here */ 
// colorDivGenerator(m)
//  if(m<=200 ){ 
//      inputTabMessage.textContent='Type How many Random color you want'
//      inputTabMessage.style.color='black'
//      colorDivGenerator(m)
//     // setInterval(colorDivGenerator(4),2000)
//     }
//     else if(m>200){ 
//     inputTabMessage.textContent='CANNOT PRODUCE MORE THAN 200 RANDOM COLOR'
//     inputTabMessage.style.color='red'
//     }       




//##########################  copy function  ################################

//addevent listener
// btn.addEventListener('click',function(){  
//    let m=userInput.value

//    setInterval(function(){ 
//     if(m>5 && m<=200 ){ 
//         inputTabMessage.textContent='Type How many Random color you want'
//         inputTabMessage.style.color='black'
//         document.querySelector('#flex_container').innerHTML=''
//         colorGenerator(m)
//        }
//        else if(m>200){ 
//        inputTabMessage.textContent='CANNOT PRODUCE MORE THAN 200 RANDOM COLOR'
//        inputTabMessage.style.color='red'
//        } }, 50000);
   
// })


// // ################# stop window refresh #####################
//  const btn2= document.querySelector('#btn_stop')
// // btn2.addEventListener(
// //    'click', function(){
// //        console.log('test')
// //    } s
// // )
// console.log(btn2)

// const btn2= document.querySelector('#btn_stop')
// btn2.addEventListener('click',function(){
//     window.stop();
// })

//######## calss  ############

// let interval = setInterval(() => {

// }, 1000);

// GamepadButton.addEventListener('click', () => {
//     clearInterval(interval)
// })

// setTimeout(() => {

// }, timeout);



/// Note



/*
//Copy Function
//method 1: Global copy function 
function copyFunction(element) {
let textArea = document.createElement("textarea");
textArea.value = element.textContent; //para is element which content to be copied
document.body.appendChild(textArea);
textArea.select();
document.execCommand("Copy");
textArea.remove()}
//calling Copy Function: copy function  available globally we only need following  code
copyButton.addEventListener("click", function (){   // copybutton is the clickable button what tigger copy function
    copyFunction(rgbCode) // rgbCode is the variable in js presenting the html content need to be copied
});
// method 2: local used copy function

 copyButton1.addEventListener("click", copyFunction1); //button id btn  
        function copyFunction1() {
        let textArea = document.createElement("textarea");
        textArea.value = rgbCode.textContent; //para is element which content to be copied
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove()}
*/