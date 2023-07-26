
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
    if (event.key == "Enter"){
        calc()
    }
})