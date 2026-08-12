const loading =
document.getElementById("loading");

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

const musicText =
document.getElementById("musicText");

const openPortal =
document.getElementById("openPortal");

const finalUniverse =
document.getElementById("finalUniverse");


/* =========================
   LOADING
========================= */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.classList.add("hide");

    },1300);

});


/* =========================
   MUSIC
========================= */

let playing = false;

musicBtn.addEventListener("click",async()=>{

    if(!playing){

        try{

            await music.play();

            playing = true;

            musicBtn.classList.add("playing");

            musicText.textContent =
            "PLAYING";

        }catch(e){

            musicText.textContent =
            "TAP AGAIN";

        }

    }else{

        music.pause();

        playing = false;

        musicBtn.classList.remove(
            "playing"
        );

        musicText.textContent =
        "MUSIC";

    }

});


/* =========================
   FINAL PORTAL
========================= */

openPortal.addEventListener("click",()=>{

    finalUniverse.classList.add("show");

    document.body.style.overflow =
    "hidden";

    createFinalStars();

});


/* =========================
   LIGHTWEIGHT STARS
========================= */

function createFinalStars(){

    for(let i=0;i<16;i++){

        const star =
        document.createElement("span");

        star.textContent =
        Math.random()>.5
        ? "✦"
        : "·";

        star.style.position =
        "fixed";

        star.style.left =
        Math.random()*100+"vw";

        star.style.top =
        Math.random()*100+"vh";

        star.style.color =
        "#bba8e4";

        star.style.fontSize =
        (5+Math.random()*8)+"px";

        star.style.opacity="0";

        star.style.transition =
        "opacity 1s ease";

        star.style.pointerEvents =
        "none";

        finalUniverse.appendChild(star);

        setTimeout(()=>{

            star.style.opacity=".7";

        },300+Math.random()*1200);

        setTimeout(()=>{

            star.style.opacity="0";

        },3200);

        setTimeout(()=>{

            star.remove();

        },4500);

    }

}


/* =========================
   ESC
========================= */

document.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Escape"){

        finalUniverse.classList.remove(
            "show"
        );

        document.body.style.overflow="";

    }

});