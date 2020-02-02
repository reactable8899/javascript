var a = document.getElementById('Fname');
var b = document.getElementById('Lname')
var c = document.getElementById('Sname')
var d = document.getElementById('birth')
var e = document.getElementById('dataV')
var f = document.getElementById('dataO')
var out = document.getElementById('out')
var arr = [];
otherDate = e.value;
nowDate = f.value;
var btn = document.getElementById('button')
btn.addEventListener('click',function(){
arr.push(a.value,b.value,c.value,d.value,e.value,f.value)
birthday = new Date(d.value)
otherDate=new Date(e.value);
nowDate= new Date(f.value);
nowDay = new Date();
var info = a.value + " " + b.value + " " +c.value;
if(a.value =="" || b.value =="" || c.value ==""){
  alert("поля пустые")
  return 0;
}
var x=0,y=0;
ssol = nowDay.getTime() - birthday.getTime();
pssol = otherDate.getTime() - birthday.getTime();
sol = ssol/(1000*60*60*24*365);
psol = pssol/(1000*60*60*24*365);
if(f.value ==""){
  if(sol<25) x=1;
else if(sol<40) x=2;
else x = 3;
if(psol<25) y=1;
else if(psol<40) y=2;
else y=3;
if(sol>40 && psol>40){
out.value= "паспорт "+ info + " Бессрочный"
return 0;
console.log(sol);
console.log(psol);
}
if(x==y){
  out.value = "паспорт "+ info + " не просрочен"
}
else out.value = "паспорт "+ info + " просрочен"
}
else if(nowDate.getTime() < nowDay.getTime())
out.value = "паспорт "+ info + " просрочен";
else out.value = "паспорт "+ info + " не просрочен"
console.log(x);
console.log(y);
console.log(sol);
console.log(psol);

})
// delta=nowDate.getTime()-otherDate.getTime();
// otvet = delta/1000/60/60/24/365;
// if(nowDate.getTime() < nowDay.getTime()){
//   out.value = "Просрочен";
//   return 0;
// }
// if(otherDate.getTime() < changeDate.getTime()){
// out.value = "Паспорт старый";}
// if(otvet >=10 && otherDate.getTime() > changeDate.getTime() ){
//  out.value = arr +" Паспорт не просрочен";
// }
