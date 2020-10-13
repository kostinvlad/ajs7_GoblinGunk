export class Starter {
    constructor(){
        this.hit = 0
        this.miss = 0
        this.face = `<div id="goblin"><img src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png"></div>`        
        this.index = function() {return Math.floor(Math.random() * 16)}                    
    }
    render() {
        let pic = document.getElementById('goblin')
        if(!pic){
            document.getElementById('hit').textContent = `Попаданий: ${this.hit}`            
            document.getElementById(this.index()).innerHTML = this.face
            
        } else {
            pic.parentElement.removeChild(pic)
        }
    }
}