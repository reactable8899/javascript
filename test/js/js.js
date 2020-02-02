
      var a = document.getElementById('a');
      var b = document.getElementById('b');
      var c = document.getElementById('c');
      var p = document.getElementById('out');
      var resultMin = document.getElementById('resultMin');
      var resultMax = document.getElementById('resultMax');
     var arr = [];
    var btn = document.getElementById('button')
    btn.addEventListener('click', function(){
      arr.push(a.value,b.value,c.value)
      var max = 0, min = arr[0];
      for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
        max = arr[i];
      }
      else if(arr[i] < min){
        min = arr[i];}
      }
resultMax.value = max;
resultMin.value = min;
    })
// var arr = [1,2,1,0,3,4,5]
// var max = 0;
// var min = arr[0];
// for(var i = 0; i < arr.length; i++) {
//       if(arr[i] > max) {
//         max = arr[i]
//       } else if(arr[i] < min) {
//           min = arr[i];
//       }
// }
// console.log(max);
// console.log(min);
