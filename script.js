
var navMenuanchorTags=document.querySelectorAll('.nav-menu a');
// console.log(navMenuanchorTag);
for(var i=0;i<navMenuanchorTags.length;i++){
    navMenuanchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
    });
}
// var educationSection=document.getElementById('education');
// var corrdinates=educationSection.getBoundingClientRect();
// var current=corrdinates.top;
// var target=corrdinates.y;
// document.addEventListener('click',function(){
//     event.preventDefault;
// })

    // smmoth scrool on click on nav menu anchor tags
    var navMenuanchorTags=document.querySelectorAll('.nav-menu a');
    // console.log(navMenuanchorTag);
    for(var i=0;i<navMenuanchorTags.length;i++){
    navMenuanchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetscectionId=this.textContent.trim().toLowerCase();
        // console.log(targetscectionId);
      
        var scrollInterval=setInterval(function(){
            var targetsectionCoordinates=targetscectionId.getBoundingClientRect();
            if(targetsectionCoordinates.top<=0){
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0,50);
        },50);
    });
    // smooth scrool with another approach of code writing

   }
   
 //skill process animation
   var skillBar=document.querySelectorAll('.skill-procress > div');
    var targetscectionId=document.getElementById('skill-container');
    
    window.addEventListener('scroll',checkScrool);
    var scrooldone=false;//used for fire animation only one

    function initailbartoZero(){
        for(let bar of skillBar){
            bar.style.width=0+'%';
        }
    }
    initailbartoZero();
    function fillbar(){
        for(let bar of skillBar){
        let targetwidth=bar.getAttribute('data-bar-width');
        let currentwidth=0;
        let inter=setInterval(function(){
            if(currentwidth>targetwidth){
                clearInterval();
                return;
            }
                currentwidth++;
                bar.style.width=currentwidth+'%';
        },5);
    }
}

    function checkScrool(){
        //you to check wheather th e skill section is visible or not
        var cordinate=targetscectionId.getBoundingClientRect();
        if(!scrooldone && cordinate.top<window.innerHeight){
            scrooldone=true;
            console.log("visible");
            fillbar();
            // 
        }
        else if(cordinate.top>window.innerHeight){
            scrooldone=false;
            initailbartoZero();
        }
     }

    //  var interval=setInterval(function(){
    //     var height=window.scrollBy(0,50);
    //     var heightcorr=height.getBoundingClientRect();
    //     if(heightcorr.top==cordinate.top){
            
    //     }
    //  },50);

