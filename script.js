let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
  tabPanes[i].addEventListener("click",function(){
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    tabPanes[i].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}

function myFunction (){
  let a = document.getElementById("myInput");
  let b = document.getElementById("hide1");
  let c = document.getElementById("hide2");

  if(a.type === "password"){
      a.type = "text";
      b.style.display = "block";
      c.style.display = "none";
  }
  else{
      a.type = "password";
      b.style.display = "none";
      c.style.display = "block";
  }
}

function eyeFunction (){
  let m = document.getElementById("myinput");
  let n = document.getElementById("hide3");
  let o = document.getElementById("hide4");

  if(m.type === "password"){
      m.type = "text";
      n.style.display = "block";
      o.style.display = "none";
  }
  else{
      m.type = "password";
      n.style.display = "none";
      o.style.display = "block";
  }
}
