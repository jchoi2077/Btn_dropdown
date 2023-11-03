const toggleDropdown = () => {

    const btn = document.getElementById('dropdown-btn')
    const btn_menu = document.getElementById('dropdown-menu')
    
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('active');
        btn_menu.classList.toggle('active');
    })

    document.addEventListener('click', (e) => {
        if (!btn_menu.contains(e.target)) {
            btn.classList.remove('active');
            btn_menu.classList.remove('active');
        }
    })
}

document.addEventListener('DOMContentLoaded', toggleDropdown)