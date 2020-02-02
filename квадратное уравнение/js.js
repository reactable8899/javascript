var a = document.getElementById('inputA')
var b = document.getElementById('inputB')
var c = document.getElementById('inputC')
var x1 = document.getElementById('inputX1')
var x2 = document.getElementById('inputX2')
var btn = document.getElementById('button')
var d = 0;
btn.addEventListener('click', function(){
d = b.value * b.value - 4*a.value*c.value;
x1.value = ((-b.value)-(Math.sqrt(d)))/(2*a.value);
x2.value = ((-b.value)+(Math.sqrt(d)))/(2*a.value);
})
