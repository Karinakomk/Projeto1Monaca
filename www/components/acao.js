// This is a JavaScript file

 var refrigerante =  600;
  var cerveja = 8;
  var carne = 350;
  var queijo = 3;
  var linguica = 3;

  function somar(){
    var pessoa = document.getElementById('display').value;
      document.getElementById('display1').value=pessoa*refrigerante+"ml";
      document.getElementById('display2').value=pessoa*cerveja+" Latas";
      document.getElementById('display3').value=pessoa*carne+"g";
      document.getElementById('display4').value=pessoa*queijo+"un";
      document.getElementById('display5').value=pessoa*linguica+"un";
  }
