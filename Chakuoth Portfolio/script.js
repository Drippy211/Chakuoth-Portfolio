// Card animation

const cards = document.querySelectorAll(
  '.skill-box, .project-card, .contact-card'
);

window.addEventListener('scroll', revealCards);

function revealCards(){
  
  cards.forEach(card => {

    let top = card.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(top < screen - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

}

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s ease";

});

revealCards();