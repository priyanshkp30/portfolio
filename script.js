const button=document.getElementById("themeToggle");
button.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  button.textContent=document.body.classList.contains("light")?"☀":"☾";
});