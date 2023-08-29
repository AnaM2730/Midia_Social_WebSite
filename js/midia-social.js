/// -----SIDEBAR-----
const menuItems = document.querySelectorAll('.menu-item');



/* MENSAGENS */
const messagesNotification = document.querySelector('#mensagens-notificacoes');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

/* TEMA */
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize_tema');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');

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

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize_tema')) {
        themeModal.style.display = 'none';
    }
}


/* fechamento modal */
themeModal.addEventListener('click', closeThemeModal);


theme.addEventListener('click', openThemeModal);


/* FONTES */

/* active do botao de mudar a letra */
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
    let fontSize;
        size.classList.toggle('active');
        

        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
    /* mudar a fonte */
    document.querySelector('html').style.fontSize = fontSize;
    })
    

})


/* MUDAR CORES */
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
    })
})


