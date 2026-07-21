const buttons = document.querySelectorAll(".btn");

buttons.forEach((button,index)=>{

    button.style.opacity="0";
    button.style.transform="translateY(30px)";

    setTimeout(()=>{

        button.style.transition=".6s";

        button.style.opacity="1";
        button.style.transform="translateY(0)";

    },250*index);

});
