const mail = document.querySelector('.mail-btn');
const msg = document.querySelector('#content');
msg.value = '';
mail.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const valMsg = document.querySelector('.hide');

    if (name.value === "" || email.value === "" || msg.value === "") {
        return valMsg.classList.add('show');
    }
    mail.classList.add("fly");
    valMsg.classList.remove('show');
    valMsg.classList.add('hide');
    name.value = "";
    email.value = "";
    msg.value = "";
    setTimeout(() => mail.classList.remove("fly"), 5400);
});

let i = 0;
let z = 0;
const nameText = "Welcome, I'm Kristina,";
const titleText = " FRONT END DEVELOPER.";
const domText = document.querySelector('p');
const domTitle = document.querySelector('#title');

const typingEffect = () => {
    if( i < nameText.length) {
        domText.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}

typingEffect();

const typingEffect2 = () => {
    if(z < titleText.length) {
        domTitle.innerHTML += titleText.charAt(i);
        z++;
        setTimeout(typingEffect2, 100);
    }
}

typingEffect2();