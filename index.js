var txtEntrada = document.querySelector("#txtEntrada")
var txtSaida = document.querySelector("#txt1")
var txtDescricao = document.querySelector("#txt2")
var imgSaida = document.querySelector("#imgSaida")
var btCriptografar = document.querySelector("#btCriptografar")
var btDescriptografar = document.querySelector("#btDescriptografar")
var btCopiar = document.querySelector("#btCopiar")
var matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
var matrizCod = ["a","ai","e","enter","i","imes","o","ober","u","ufat"]
//a função criptografar foi feita usando uma lógica e a descriptografar foi usada outra lógica...
//...por questões didáticas, mas era possível usar a mesma lógica para as duas funções.
//---------Padrão da criptografia-----------//
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"
function criptografar (){
    var arraySaida = txtEntrada.value.toLowerCase()
    arraySaida = arraySaida.split("")
    var arraySFinal = []
    /*MELHORAR A LÓGICA E TRATAR AS EXCEÇÕES*/
    for (var i = 0; i < arraySaida.length;i++){
        if (arraySaida[i] == matrizCod[0]){
            arraySFinal.push(matrizCod[1])
        }else
        if (arraySaida[i] == matrizCod[2]){
            arraySFinal.push(matrizCod[3])
        }else
        if (arraySaida[i] == matrizCod[4]){
            arraySFinal.push(matrizCod[5])
        }else
        if (arraySaida[i] == matrizCod[6]){
            arraySFinal.push(matrizCod[7])
        }else
        if (arraySaida[i] == matrizCod[8]){
            arraySFinal.push(matrizCod[9])
        }else{
            arraySFinal.push(arraySaida[i])
        }
    }
    var resultado = arraySFinal.join("")
    txtSaida.innerHTML = resultado
    txtDescricao.remove()
    imgSaida.remove()
}
function descriptografar (){
    var txtDescrip = txtEntrada.value.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(txtDescrip.includes(matrizCodigo[i][1])) {
            txtDescrip = txtDescrip.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    txtSaida.innerHTML = txtDescrip
    txtDescricao.remove()
    imgSaida.remove()
}
async function copiarTxtSaida (){
   var txtCopiado = txtSaida.innerHTML
   console.log("txtcopiado",txtCopiado)
   await navigator.clipboard.writeText(txtCopiado)
}
btCriptografar.onclick = criptografar
btDescriptografar.onclick = descriptografar
btCopiar.onclick = copiarTxtSaida