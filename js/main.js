$(document).ready(function(){
  //Guardar los datos del input para calcularlos despues
  var inputs= [""];
  //String que guarda el valor del momento
  var totalString;

  //Arreglo de operadores para validar sin el .
  var op1 = ["+", "-", "*", "/"];
  //Arreglo de operadores con el . para validar
  var op2 = ["."];
  //Numeros para validacion
  var nums = [0,1,2,3,4,5,6,7,8,9];

  //Toma el valor del input
  function getValue(input){
    //Busca en el array si hay punto
    if(op2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicat '.'");

    //Busca en el array los operadores
    }else if(inputs.length === 1 && op1.includes(input)===false){
      inputs.push(input);
    //Busca en el array los operadores
    }else if(op1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);

      //Busca los numeros
    }else if(nums.includes(Number(input))){
      inputs.push(input);
    }
    update();
  }
  //Actualiza el input
  function update(){
    totalString = inputs.join("");
    $("#total").html(totalString);
  }
  //Realiza la operacion total
  function getTotal(){
    totalString = inputs.join("");
    $('#total').html(eval(totalString));
  }

  //Botones
  $('a').on('click', function(){
    //console.log(this.id);
    if(this.id==="deleteAll"){
      inputs=[""];
      update();
    }else if (this.id === "delete"){
      inputs.pop();
      update();
    }else if (this.id === "equal"){
      getTotal();
    }else{
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".", "-1")===-1){
        getValue(this.id);
      }else{
        getValue(this.id);
      }
    }
  });
});
