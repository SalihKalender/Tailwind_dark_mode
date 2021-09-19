const input = document.querySelector('input')
const toggle = document.querySelector('.toggle-dot')
input.addEventListener('change', function () {
    console.log('Salih')
    html = document.getElementsByTagName('html')[0]
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
    }
    else {
        html.classList.add('dark')
    }
})