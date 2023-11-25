  //FADING FUNCTION

function toFade(buttOn, buttOff1, buttOff2, painting, authors, titles, descs, prices) {
  buttOn.classList.add('active');
  buttOff1.classList.remove('active');
  buttOff2.classList.remove('active');

  for(let i = 0; i < authorField.length; i++) {
    paintingField[i].classList.add('invise');
    authorField[i].classList.add('invise');
    titleField[i].classList.add('invise');
    descField[i].classList.add('invise');
    priceField[i].classList.add('invise');
  }

  setTimeout(() => {
    paintingField.forEach((picture, l) => picture.src = painting[l]);
    authorField.forEach((auths, i) => auths.innerHTML = authors[i]);
    titleField.forEach((title, j) => title.innerHTML = titles[j]);
    descField.forEach((desc, k) => desc.innerHTML = descs[k]);
    priceField.forEach((price, m) => price.innerHTML = prices[m]);
  }, 500);

  setTimeout(() => {
    requestAnimationFrame(() => {         
        for(let i = 0; i < authorField.length; i++) {
          paintingField[i].src.onload = paintingField[i].classList.remove('invise');
          authorField[i].classList.remove('invise');
          titleField[i].classList.remove('invise');
          descField[i].classList.remove('invise');
          priceField[i].classList.remove('invise');

          authorField[i].classList.add('fade');
          titleField[i].classList.add('fade');
          descField[i].classList.add('fade');
          paintingField[i].src.onload = paintingField[i].classList.add('fade');
          priceField[i].classList.add('fade');
        }
    });
  }, 750);
}

  //EVENTS FOR BUTTONS

germanyBtn.addEventListener('click', function(){
  toFade(germanyBtn, franceBtn, englandBtn, germanyPainting, germanyAuthors, germanyTitles, germanyDescs, germanyPrices);
});

franceBtn.addEventListener('click', function() {
  toFade(franceBtn, germanyBtn, englandBtn, francePainting, franceAuthors, franceTitles, franceDescs, francePrices);
});

englandBtn.addEventListener('click', function() {
  toFade(englandBtn, germanyBtn, franceBtn, englandPainting, englandAuthors, englandTitles, englandDescs, englandPrices);
});