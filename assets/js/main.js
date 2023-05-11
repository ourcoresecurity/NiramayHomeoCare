function toggle()
{

  document.querySelector(".cancel").style.display='block';
  const navbar=document.querySelector('.navbar');
  const ul=navbar.querySelector('ul');
  ul.style.display=ul.style.display==='block'? 'none':'block';
  document.querySelector(".menubars").style.display='none';
}
function cancel()
{
  document.querySelector(".menubars").style.display='block';
  const navbar=document.querySelector('.navbar');
  const ul=navbar.querySelector('ul');
  ul.style.display=ul.style.display==='block'? 'none':'block';
  document.querySelector(".cancel").style.display='none';
}