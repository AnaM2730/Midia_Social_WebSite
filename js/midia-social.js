/// -----SIDEBAR-----
const menuItems = document.querySelectorAll('.menu-item');



/* MENSAGENS */
const messagesNotification = document.querySelector('#mensagens-notificacoes');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

/* TEMA */
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')


/// -----SIDEBAR-----
/* REMOVE ACTIVE CLASS FROM MENU ITEMS */
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notificacoes-count').style.display ='none'
        }
    })
})


/* ------CHAT---- */
/* PESQUISA CHAT */
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}


/* MENSAGENS */
messageSearch.addEventListener('keyup', searchMessage);


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notificacoes-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})




/* ----TEMA------ CUSTOMIZAÇÃO */

