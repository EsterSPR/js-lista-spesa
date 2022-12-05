const list = [
    'Monster Energy',
    'Monster Mango Loco',
    'Monster Ultra White',
    'Monster Pipeline Punch',
    'Monster Rehab',
    'Monster Ultra Red',
    'Monster Nitro',
    'Monster Pacific Punch',
    'Monster The Doctor',
    'Monster Ultra Fiesta'
]

const listContainer = document.querySelector('.shopping-list');

let i = 0;
let element = '';

while(i < list.length){
    let item = list[i];

    element += `<li class="list-item">${item}</li>`;
    listContainer.innerHTML = element;

    i++;
}