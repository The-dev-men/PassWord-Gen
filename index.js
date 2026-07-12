const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("randomPassword1")
let password2 = document.getElementById("randomPassword2")

function randomNumber() {
        let randomCharactersPicker = Math.floor( Math.random() * characters.length )
        return characters[randomCharactersPicker]
}
    


function generatePassword() {
    
    let password = ""
    for (let c = 0; c < 16; c++) {
        
        password += randomNumber()
        
    }
    password1.textContent = password
    password2.textContent = password
    return password
    
    
}
   
    
    
  
    

      