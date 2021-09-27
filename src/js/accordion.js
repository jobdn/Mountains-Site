document.querySelectorAll('.card-accordion__title').forEach(title => {
    title.addEventListener('click', function(event) {
        const parent = this.parentNode;
        parent.classList.toggle('card-accordion_active');
    })
})