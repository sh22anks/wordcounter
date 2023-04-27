document.querySelector('textarea').addEventListener('input',function(){
  var x=document.querySelector('textarea').value.length;
  document.querySelector('span').innerHTML=x;
})
