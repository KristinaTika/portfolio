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
   } else {
       mail.classList.add("fly");
       valMsg.classList.remove('show');
       valMsg.classList.add('hide');
       name.value = "";
       email.value = "";
       msg.value = "";
       setTimeout(() => mail.classList.remove("fly"), 5400);
   }
});
