function changeCss () {
  var navElement = document.querySelector("nav");
  if(this.scrollY > 200){
      navElement.style.marginTop=0;
      navElement.style.position="fixed";
      navElement.style.backgroundColor="#FF00FF";
  } 
  //? navElement.style.backgroundColor="#ccc" : "";
  console.log(navElement)
}


window.addEventListener("scroll", changeCss , false);