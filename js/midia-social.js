/// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

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
            document.querySelector('.notifications-popup').
                style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notificacoes-count').style.display ='none'
        }
    })
})


/* MENSAGENS */

