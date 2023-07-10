
const rarrows = document.querySelectorAll(".rarrow");
const movieLists = document.querySelectorAll(".movie-list");


rarrows.forEach((rarrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    rarrow.addEventListener("click", function () {
        clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)"
            clickCounter = 0;
        }
    });

});

const larrows = document.querySelectorAll(".larrow");
const lmovieLists = document.querySelectorAll(".movie-list");


larrows.forEach((larrow, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let lclickCounter = 0;
    const imageItem = lmovieLists[i].querySelectorAll("img").length;
    larrow.addEventListener("click", function () {
        lclickCounter++;
    if (imageItem - (4 + lclickCounter) + (4 - widthRatio) >= 0) {
            lmovieLists[i].style.transform = `translateX(${
                lmovieLists[i].computedStyleMap().get("transform")[0].x.value + 300
            }px)`;
        }else{
            lmovieLists[i].style.transform = "translateX(0)"
            lclickCounter = 0;
        }
    });

});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.sidebar,.sidebar i,.navbar,.toggle-ball,.profile-text-container i,.profile-text-container a,.movie-list-filter select,.footer-main,.toggle,.footer-i,.footer-list-item,.toggle-ball")

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"))
})