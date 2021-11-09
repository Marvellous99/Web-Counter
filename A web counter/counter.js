    const color = ["green", "blue", "yellow", "red", "purple"]
    let number = document.getElementById("num")
    //Button reset; This changes the reset button to zero when click//
    const reset = document.getElementById("zero")
    reset.addEventListener("click", function() {
        
       number.textContent ="0"
       let randomN = random()
       number.style.color = color[randomN]
    });
 
    //Button increase; This increase the counter by a value of one when clicked
    const incre = document.getElementById("increase")
    
    incre.addEventListener("click", function(){
        
        let dec = document.getElementById("num").innerHTML
        number.innerHTML = dec
        number.textContent = ++dec;
        //changes teh 
        let randomN = random()
        number.style.color = color[randomN]
    
    })
   
    //Button decrease; This decreases the counter by a value of one when clicked

    const decre = document.getElementById("decrease")

    decre.addEventListener("click", function(){
        let inc = document.getElementById("num").innerHTML
        number.innerHTML = inc
        number.textContent = --inc;
        //changes the colour of the item on the counter 
        let randomN = random()
        number.style.color = color[randomN]
    } )

    //This function generate a random color number for the counter color
    function random(){
       return Math.floor(Math.random()*color.length)
    }
