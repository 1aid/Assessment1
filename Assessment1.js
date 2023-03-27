const h1 = document.getElementsByTagName('h1')[0];
h1.style.textAlign = 'center';

const form = document.querySelector('#add-item');
const input = document.querySelector('#item');
const itemList = document.querySelector('#item-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newText = input.value;
    itemList.innerHTML = newText;
    input.value = '';
});

const form2 = document.querySelector('#add-photo-item');
const photoUrlInput = document.querySelector('#photo-url');
const button2 = document.querySelector('#button2');

form2.addEventListener('submit', function(e) {
    e.preventDefault();
    const newImg = document.createElement('img');
    newImg.src = photoUrlInput.value;
    const newContainer = document.createElement('div');
    newContainer.classList.add('photo-container');
    newContainer.appendChild(newImg);
    itemList.appendChild(newContainer);
    photoUrlInput.value = '';
    newContainer.style.margin = '10px';

    const maxWidth = newContainer.offsetWidth - 200;

    input.style.left = (newContainer.offsetWidth / 2 - input.offsetWidth / 2) + 'px';
    input.style.top = (newContainer.offsetHeight / 2 - input.offsetHeight / 2) + 'px';

    input.addEventListener('input', function() {
        const inputLeft = input.getBoundingClientRect().left - newContainer.getBoundingClientRect().left;
        const inputRight = inputLeft + input.offsetWidth;

        if (inputLeft < 0) {
            input.style.left = '0px';
        } else if (inputRight > maxWidth) {
            input.style.left = (maxWidth - input.offsetWidth) + 'px';
        }
    });
});






