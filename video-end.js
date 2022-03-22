/* global AFRAME */
AFRAME.registerComponent('video-end', {
    init: function () {
      var video=document.querySelector('#video');
      var text=document.querySelector('#text');
      var btn1=document.querySelector('#btn1');
      var videoSphere=document.querySelector('#videoSphere')
      video.addEventListener('ended',function(){
          videoSphere.removeAttribute("play-on-click");
        text.setAttribute('text','value'," ");
        btn1.setAttribute('color',"blue");
        btn1.setAttribute('position',"0 0 -2");
        btn1.addEventListener('click',function(){
         video.play();

        });
        btn2.setAttribute('color',"purple");
        btn2.setAttribute('position',"-1 0 -2");
        btn2.addEventListener('click',function(){
            window.location = "https://google.com";

        })
        


      });
    },
});