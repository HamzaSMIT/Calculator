function putNumber(num) {
    var input = document.getElementById("number")
    input.value += num

}


function answer() {
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}

function clearInput() {
    document.getElementById("number").value = ""
  }


  
  function clearLastChar() {
    var input = document.getElementById("number")
    input.value = input.value.slice(0, -1)
  }