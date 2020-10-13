import {Starter} from "./StarterRender.js"

let start = new Starter()
let oneSecond = setInterval(() => {    
    start.render();
    let pic = document.getElementById('goblin');
    
        if(start.hit === 10){            
            alert('Вы выйграли')
            clearInterval(oneSecond); 
        } 
        else if(start.hit - start.miss < -9){
            alert('привет, это навальный')
            clearInterval(oneSecond); 
        }
        start.miss++
    document.getElementById('goblin').addEventListener('click', (event) => {
        start.hit++        
        pic.parentElement.removeChild(pic)
    }) 
    
    
}, 1000)