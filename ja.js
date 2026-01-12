console.log("hello world");
// hide the side bar
document.querySelector(".cross").style.display = "none";
// using eventlistener hide or display sidebar
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".hm").style.display ="inline";
        document.querySelector(".cross").style.display ="none";
    }
    else{
        document.querySelector(".hm").style.display ="none";
        setTimeout(()=>{
          document.querySelector(".cross").style.display ="inline";
        },500)
        
    }
})