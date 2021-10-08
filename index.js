let accButton = document.querySelectorAll('.accordion-question ')
accButton.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
        //* affect next sibling element
        item.nextElementSibling.classList.toggle('open')
    })
});