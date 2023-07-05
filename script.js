
function insert(key){
    valor_input = document.getElementById("resultado").value
    ultimo_char = valor_input.slice(-1)
    
    if(key != "+" && ultimo_char != key || key != "-" && ultimo_char != key){
        document.getElementById("resultado").value  = valor_input + key



    }
    

}
function calcular(){
    valor_input =  document.getElementById("resultado").value
    resultado = eval(valor_input)
    
    console.log(resultado)
    document.getElementById("resultado").value = resultado
}
function back(){
    resultado = document.getElementById('resultado').value;
    document.getElementById("resultado").value = resultado.substring(0, resultado.length -1);
}
function clean(){
    document.getElementById("resultado").value = ""
}