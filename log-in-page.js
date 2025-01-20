const signinBtn = document.querySelector(".signin-btn");
const signupBtn = document.querySelector(".signup-btn");

const formPage = document.querySelector(".form-page");
const body = document.querySelector("body");

signupBtn.addEventListener("click", () => {
    console.log("a");
    gsap.to(formPage, {
        // left: "50%",
        ease: "power4.out",
        keyframes: [
            {width: "50%", left: "0%"},
            {width: "100%"},
            {width: "50%", left: "50%"}
        ]
    });

    body.style.backgroundColor = "#009366";
    
    gsap.to(".signin-form", {
        delay: 0,
        left: "-100%",
    });
    
    gsap.to(".signup-form", {
        delay: 0.4,
        left: "0%",
    });
});

signinBtn.addEventListener("click", () => {
    console.log("b");
    gsap.to(formPage, {
        // left: "0%",
        ease: "power4.out",
        keyframes: [
            {left: "50%"},
            {left: "0%", width: "100%"},
            {width: "50%", left: "0%"}
        ]
    });
    
    body.style.backgroundColor = "#011627";
    
    gsap.to(".signin-form", {
        delay: 0.2,
        left: "0%"
    });
    
    gsap.to(".signup-form", {
        delay: 0,
        left: "100%"
    });
});