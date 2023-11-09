//variables & consts
const germanyAuthors = ["Курт Вернер","Макс Рихтер","Мартин Майер","Герман Беккер","Вульф Бауэр","Вальтер Хартманн"];
const germanyTitles = ['Над городом', 'Птенцы', 'Среди листьев', 'Яркая птица', 'Дятлы', 'Большие воды'];
const germanyDescs = ['Цветная литография (40х60)', 'Холст, масло (50х80)', 'Цветная литография (40х60)', 'Цветная литография (40х60)', 'Бумага, акрил (50х80)', 'Бумага, акрил (50х80)'];
const germanyPainting = ['./assets/jpg/germany/above_the_city.jpg', './assets/jpg/germany/birdies.jpg', './assets/jpg/germany/among_leaves.jpg', './assets/jpg/germany/color_bird.jpg', './assets/jpg/germany/woodpeckers.jpg', './assets/jpg/germany/big_water.jpg'];
const germanyPrices = ['16 000 руб', '14 500 руб', '20 000 руб', '13 000 руб', '20 000 руб', '23 000 руб'];

const franceAuthors = ['Марсель Руссо', 'Анри Селин', 'Франсуа Дюпон', 'Луи Детуш', 'Франсуа Дюпон', 'Пьер Моранж'];


const franceBtn = document.querySelector('.france-button');
const germanyBtn = document.querySelector('.germany-button');
const englandBtn = document.querySelector('.france-button');

const author = document.querySelectorAll('.reproduction__grid-author');
const title = document.querySelectorAll('.reproduction__grid-title');
const desc = document.querySelectorAll('.reproduction__grid-desc');
const painting = document.querySelectorAll('.painting');
const price = document.querySelectorAll('.reproduction__grid-price');

function frm() {
    germanyBtn.classList.add('active');
    franceBtn.classList.remove('active');

    for(let i = 0; i < author.length; i++) {
        author[i].classList.add('invise');
        title[i].classList.add('invise');
        desc[i].classList.add('invise');
        painting[i].classList.add('invise');
        price[i].classList.add('invise');
        }

        setTimeout(() => {
            requestAnimationFrame(() => {
              author.forEach((auths, i) => auths.innerHTML = germanyAuthors[i]);
              title.forEach((titles, j) => titles.innerHTML = germanyTitles[j]);
              desc.forEach((descs, k) => descs.innerHTML = germanyDescs[k]);
              painting.forEach((picture, l) => picture.src = germanyPainting[l]);
              price.forEach((prices, m) => prices.innerHTML = germanyPrices[m]);
              
              for(let i = 0; i < author.length; i++) {
                author[i].classList.remove('invise');
                title[i].classList.remove('invise');
                desc[i].classList.remove('invise');
                painting[i].classList.remove('invise');
                price[i].classList.remove('invise');

                author[i].classList.add('fade');
                title[i].classList.add('fade');
                desc[i].classList.add('fade');
                painting[i].classList.add('fade');
                price[i].classList.add('fade');
              }
            });
          }, 250); 
        }  

germanyBtn.addEventListener('click', frm);