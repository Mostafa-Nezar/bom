let btn = document.querySelector(".add")
let inp = document.querySelector(".input")
let tasks = document.querySelector(".tasks")
let div = document.createElement("div")
btn.addEventListener("click",()=>{
    if (document.querySelector(".input").value !== "") {
    let div = document.createElement("div")
    div.className="task"
    let del = document.createElement("span")
    del.innerHTML=`delete`
   div.innerHTML=`${inp.value}`
   div.appendChild(del)
   tasks.appendChild(div)
   del.id="hi"

   let divs = document.querySelectorAll("#hi") 
   del.addEventListener("click",()=>{
    del.parentElement.remove()
   })
 inp.value=""

        
        let arr =[];
        for (let i = 0; i < document.querySelectorAll(".tasks .task").length +1; i++) {
        let v = document.querySelectorAll(".tasks .task")[i]
                arr.push(v.innerHTML)
                  window.localStorage.setItem(`m${i}`,arr[i]) 

        }


}
})

for (let i = 0; i < document.querySelectorAll(".tasks .task").length; i++) {
    div.className='task'

    
    let del = document.createElement("span")
    del.innerHTML=`delete`
    
    div.innerHTML=window.localStorage.getItem(`m${i}`)
    div.appendChild(del)
   tasks.appendChild(div)
   


}

for (let i = 0; i < 8; i++) {
let fix = document.createElement("div")
fix.className="task"
fix.innerHTML= window.localStorage.getItem(`m${i}`)
tasks.appendChild(fix)

    let deldivs =   document.querySelectorAll("div #hi")
    deldivs.forEach((li)=>{
    li.addEventListener("click",(e)=>{
    e.currentTarget.parentElement.remove()
    window.localStorage.removeItem(`m${i}`)
    })
})
if (!window.localStorage.getItem(`m${i}`)) {
    tasks.removeChild(fix)
}
}