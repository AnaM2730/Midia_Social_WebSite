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
/* MUDA COR DO SITE MODO ESCURO OU CLARO */
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

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


/* remove active cores */
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

/* MUDAR CORES */
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        /* remove active cores */
        changeActiveColorClass();

        if (color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

/* TEMAS BACKGROUND */
let lightColorlightness;
let whiteColorlightness;
let darkColorlightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorlightness);
    root.style.setProperty('--white-color-lightness',whiteColorlightness);
    root.style.setProperty('--dark-color-lightness',darkColorlightness);
}

/* COR BRANCA */
Bg1.addEventListener('click', () => {
    darkColorlightness = '10%';
    whiteColorlightness = '100%';
    lightColorlightness = '100%';
    /* add active */
    Bg1.classList.add('active');
    /* remove active */
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
    /* remove customização */
    windows.location.reload();
});

/* AZUL ESCURO */
Bg2.addEventListener('click', () => {
    darkColorlightness = '95%';
    whiteColorlightness = '20%';
    lightColorlightness = '15%';

    /* add active */
    Bg2.classList.add('active');
    /* remove active */
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

/* PRETO */
Bg3.addEventListener('click', () => {
    darkColorlightness = '95%';
    whiteColorlightness = '10%';
    lightColorlightness = '0%';

    /* add active */
    Bg3.classList.add('active');
    /* remove active */
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});