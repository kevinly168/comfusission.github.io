const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const NoBtn = document.querySelector(".No-btn");

yesBtn.addEventListener("click", ()=> {
    question.innerHTML ="បោះ​គេយាយ​";
    gif.src="https://gifdb.com/images/high/cheerful-guy-s-wow-i9xa40th6hzeb4cs.gif"
})
NoBtn.addEventListener("mouseover", () => {
    const noBtnRect = NoBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    NoBtn.style.left = randomX + "px";
    NoBtn.style.top = randomY + "px";
});

