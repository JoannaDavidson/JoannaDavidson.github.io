var aboutMe = document.getElementById("page-container__about")
var portfolio = document.getElementById("page-container__portfolio")
var resume = document.getElementById("page-container__resume")

function aboutMeUnhide() {
    aboutMe.classList.remove("hide");
    aboutMe.classList.add("content_section");
    portfolio.classList.add("hide");
    resume.classList.add("hide");
}

function portfolioUnhide() {
    portfolio.classList.remove("hide");
    portfolio.classList.add("content_section");
    aboutMe.classList.add("hide");
    resume.classList.add("hide");
}

function resumeUnhide() {
    resume.classList.remove("hide");
    resume.classList.add("content_section");
    portfolio.classList.add("hide");
    aboutMe.classList.add("hide");
}

function on() {
    document.getElementById("querulous").style.display = "block";
}

function off() {
    document.getElementById("querulous").style.display = "none";
}

