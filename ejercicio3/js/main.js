(function() {
    let btn = document.getElementById ('btn-menu');
    let menu = document.getElementById('header');
console.log(btn);
    btn.addEventListener('click', () => {
        menu.style.display = menu.style.display == 'flex' ? 'none' : 'flex';
    })
})();