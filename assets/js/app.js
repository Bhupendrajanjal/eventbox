var cl = console.log;
const selectColor = document.getElementById("selectColor")

const allDivs =[...document.querySelectorAll('.all')] 
//QuerySelectors always run with nodelist//




const onColorchange=(eve)=>{
    // cl(eve.target.value)
    let getClass=eve.target.value;
    cl(getClass)
    // allDivs.classList.add('d-none')
    allDivs.forEach(div=>{
        div.classList.add('d-none')
    })
    const showDiv =[...document.getElementsByClassName(getClass)] 
    cl(showDiv)
    showDiv.forEach(div=>{
        div.classList.remove('d-none')
    })
    
}


selectColor.addEventListener("change",onColorchange)



