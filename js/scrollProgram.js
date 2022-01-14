const program = document.querySelector(".total-program");
const buttonSearchProgram = document.querySelector(".promo__link");

function handleButtonClick() {
   program.scrollIntoView({block: "center", behavior: "smooth"});
};

buttonSearchProgram.addEventListener('click', handleButtonClick);
