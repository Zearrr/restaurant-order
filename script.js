function showMenu(menuId) {
    const sections = document.querySelectorAll('.menu');
    sections.forEach(section => section.classList.add('d-none'));
    document.getElementById(menuId).classList.remove('d-none');
}

function addToCart(item, price) {
    alert(`${item} has been added to your cart for ฿${price}`);
}

function searchMenu() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        const title = item.querySelector('.card-title').innerText.toLowerCase();
        item.style.display = title.includes(query) ? '' : 'none';
    });
}

function filterMenu() {
    const filter = document.getElementById('filter').value;
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        const priceText = item.querySelector('.price').innerText.replace('฿', '');
        const price = parseFloat(priceText);
        if (filter === 'below100' && price >= 100) {
            item.style.display = 'none';
        } else if (filter === 'above100' && price < 100) {
            item.style.display = 'none';
        } else {
            item.style.display = '';
        }
    });
}
