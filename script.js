const  panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {      /*when click happens, they will do the function*/
        removeActiveClasses()
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
    panel.classList.remove('active');
    });

};