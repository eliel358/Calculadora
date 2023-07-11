
function insert(key){
    valor_input = document.getElementById("screen").value
    ultimo_char = valor_input.slice(-1)
    
    document.getElementById("screen").value  = valor_input + key
}
function calc(){
    valor_input =  document.getElementById("screen").value
    screen = eval(valor_input)
    
    console.log(screen)
    document.getElementById("screen").value = screen
}
function back(){
    screen = document.getElementById('screen').value;
    document.getElementById("screen").value = screen.substring(0, screen.length -1);
}
function clean(){
    document.getElementById("screen").value = ""
}
function negative(){
    screen = document.getElementById('screen').value;
    x = screen*2
    document.getElementById('screen').value = screen - x;
}
document.addEventListener('keydown',(event)=>{

    if (event.key == "Backspace"){
        back()
    }
    
    if (event.key == "%"){
        insert("%")
    }
    if (event.key == "/"){
        insert("/")
    }
    if (event.key == "7"){
        insert("7")
    }
    if (event.key == "8"){
        insert("8")
    }
    if (event.key == "9"){
        insert("9")
    }
    if (event.key == "*"){
        insert("*")
    }
    if (event.key == "4"){
        insert("4")
    }
    if (event.key == "5"){
        insert("5")
    }
    if (event.key == "6"){
        insert("6")
    }
    if (event.key == "-"){
        insert("-")
    }
    if (event.key == "1"){
        insert("1")
    }
    if (event.key == "2"){
        insert("2")
    }
    if (event.key == "3"){
        insert("3")
    }
    if (event.key == "+"){
        insert("+")
    }
    if (event.key == "0"){
        insert("0")
    }
    if (event.key == "."){
        insert(".")
    }
    if (event.key == "Enter"){
        calc()
    }
})