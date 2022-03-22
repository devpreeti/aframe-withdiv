/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
    init: function () {
      var btn1= document.querySelector('#btn1');
      var btn2= document.querySelector('#btn2');
      var video=document.querySelector('#video');
      video.addEventListener('ended',function(){
       btn1.setAttribute('color',"pink");
       btn1.setAttribute('material','opacity',"0.5");
       btn1.addEventListener('click',()=>{
         video.play();
       })
       btn2.setAttribute('color',"purple");
       btn2.setAttribute('material','opacity',"0.5");
       btn2.addEventListener('click',()=>{
         window.location="https://google.com";
       });

      });
    }
    // var video = document.querySelector('#video');
  });