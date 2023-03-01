alert("Hello, I wish you have a nice day !!!")
function ContactDropDown()
{
    var d = document.getElementById("Contact");
    d.href = "https://www.youtube.com/"
}
function ContactDropNone()
{
    var d = document.getElementById("Contact");
    d.href =""
}
function Popup()
{
    var d = document.getElementById("PopupContent");
    d.style.display =  "block";
}
function Popout()
{
    var d = document.getElementById("PopupContent");
    d.style.display =  "none";
}
function menuOut(){
   var menu = document.getElementById("header-menu-drop")
   if(menu.style.display == "" || menu.style.display == "none") 
   {
    menu.style.display = "block"
    }
    else if(menu.style.display == "block")
    {
        menu.style.display = "none"
    }
}