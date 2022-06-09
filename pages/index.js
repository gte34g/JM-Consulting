const cardIcon = document.querySelector(".card__container");
const cardDesc = document.querySelector(".card__description");
const cardActiveContent = document.querySelector(".card__description-hidden");


cardIcon.addEventListener('click', () => {
    cardDesc.classList.toggle("card__description-hidden");
});
 