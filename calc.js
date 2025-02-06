var inputscreen = document.getElementById('value-screen')
function screenfunctoion (value){
inputscreen.value += value
}

function emptyscreen (){
    inputscreen.value = "";
}

function resultfunction (){
    let result = eval(inputscreen.value)
    inputscreen.value = result
}