//ENGLAND
const englandAuthors = ['Пол Смит', 'Джон Уайт', 'Джим Уотсон', 'Юджин Зиллион', 'Эрик Гиллман', 'Альфред Барр'];
const englandTitles = ['Дикий зверь', 'Скалистый берег', 'Река и горы', 'Белый попугай', 'Ночная рыба', 'Рыжий кот'];
const englandDescs = ['Акварель, бумага (50х80)', 'Цветная литография (40х60)', 'Акварель, бумага (50х80)', 'Цветная литография (40х60)', 'Бумага, акрил (50х80)', 'Цветная литография (40х60)'];
const englandPainting = ['./assets/jpg/england/beast.jpg', './assets/jpg/england/rocks.jpg', './assets/jpg/england/river.jpg', './assets/jpg/england/parrot.jpg', './assets/jpg/england/night_fish.jpg', './assets/jpg/england/cat.jpg'];
const englandPrices = ['19 500 руб', '17 500 руб', '20 500 руб', '15 500 руб', '12 500 руб', '21 000 руб'];
const englandBtn = document.querySelector('.england-button');


//FRANCE
const franceAuthors = ['Марсель Руссо', 'Анри Селин', 'Франсуа Дюпон', 'Луи Детуш', 'Франсуа Дюпон', 'Пьер Моранж'];
const franceTitles = ['Охота Амура', 'Дама с собачкой', 'Процедура', 'Роза', 'Птичья трапеза', 'Пейзаж с рыбой'];
const franceDescs = ['Холст, масло (50х80)', 'Акрил, бумага (50х80)', 'Цветная литография (40х60)', 'Бумага, акрил (50х80)', 'Птичья Цветная литография (40х60)', 'Цветная литография (40х60)'];
const francePainting = ['./assets/jpg/france/hunt.jpg', './assets/jpg/france/lady.jpg', './assets/jpg/france/procedure.jpg', './assets/jpg/france/rose.jpg', './assets/jpg/france/dining.jpg', './assets/jpg/france/fish.jpg'];
const francePrices = ['14 500 руб', '16 500 руб', '20 000 руб', '12 000 руб', '22 500 руб', '20 000 руб'];
const franceBtn = document.querySelector('.france-button');


//GERMANY
const germanyAuthors = ["Курт Вернер","Макс Рихтер","Мартин Майер","Герман Беккер","Вульф Бауэр","Вальтер Хартманн"];
const germanyTitles = ['Над городом', 'Птенцы', 'Среди листьев', 'Яркая птица', 'Дятлы', 'Большие воды'];
const germanyDescs = ['Цветная литография (40х60)', 'Холст, масло (50х80)', 'Цветная литография (40х60)', 'Цветная литография (40х60)', 'Бумага, акрил (50х80)', 'Бумага, акрил (50х80)'];
const germanyPainting = ['./assets/jpg/germany/above_the_city.jpg', './assets/jpg/germany/birdies.jpg', './assets/jpg/germany/among_leaves.jpg', './assets/jpg/germany/color_bird.jpg', './assets/jpg/germany/woodpeckers.jpg', './assets/jpg/germany/big_water.jpg'];
const germanyPrices = ['16 000 руб', '14 500 руб', '20 000 руб', '13 000 руб', '20 000 руб', '23 000 руб'];
const germanyBtn = document.querySelector('.germany-button');


//GRID FIELDS
const author = document.querySelectorAll('.reproduction__grid-author');
const title = document.querySelectorAll('.reproduction__grid-title');
const desc = document.querySelectorAll('.reproduction__grid-desc');
const painting = document.querySelectorAll('.painting');
const price = document.querySelectorAll('.reproduction__grid-price');