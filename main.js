const rateElement = document.querySelectorAll(".card__rating div");
const submitButton = document.querySelector('.card__button');
const thanksCard = document.querySelector('.thanks-card');
const ratingCard = document.querySelector('.rating-card')
const ratingSelect = document.querySelector('.rating-select')
let rate = 0;

rateElement.forEach((e) => {
  e.addEventListener("click", () => {
    const active = document.querySelector(".card__rating div.active");
    if (active) {
      active.classList.remove("active");
    }
    e.classList.toggle("active");

    rate = e.innerHTML;
  });
});

submitButton.addEventListener('click',()=>{
  if (rate){
    thanksCard.style.display="flex";
    ratingCard.style.display='none'
    ratingSelect.textContent=`You select ${rate} out of 5`
  }
})
