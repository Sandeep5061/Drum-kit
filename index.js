//
// document.querySelectorAll("button").addEventListener("click", handClick);
//
// function handClick() {
//   alert("i got clicked");
// }
var a=document.querySelectorAll("button");
for ( var i=0;i<a.length;i++)
{
  a[i].addEventListener("click",function(){
  var bu=this.innerHTML;
   makesound(bu);
    buttonAnimation(bu);

  });
  }
  //let st=(i+1).toString();
  // function handclicked(){
  //   alert("i got clicked");
  // }

  // var audio = new Audio("sounds/tom-2.mp3");
  // audio.play();
  document.addEventListener("keypress",function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
  });

  function makesound(key)
  {


     switch(key) {
       case "w":
         var tom1 =new Audio("sounds/tom-1.mp3");
         tom1.play();
       break;
       case "a":
          var t2=new Audio("sounds/tom-2.mp3");
          t2.play(); break;
       case "s" :
       var t3 =new Audio("sounds/tom-3.mp3");
       t3.play(); break;
       case "d" :
       var t4 =new Audio("sounds/tom-4.mp3");
       t4.play(); break;
       case "j" :
       var a4 =new Audio("sounds/snare.mp3");
       a4.play(); break;
       case "k" :
       var a5 =new Audio("sounds/crash.mp3");
       a5.play(); break;
       case "l":
       var al=new Audio("sounds/kick-bass.mp3");
       al.play(); break;

       default:console.log(bu);

     }

  }
  function buttonAnimation(currentkey) {
  var activebutton = document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
   setTimeout(function() {
     activebutton.classList.remove("pressed");
   }, 100);
  }
