 let counts=document.getElementById('count')
let saves=document.getElementById('save-el')


let count=0

function increment(){
    count+=1
    counts.textContent=count
}

function save(){
   var number= ' ' + count + '-'
   saves.textContent+= number
   counts.textContent=0
     count=0
}
