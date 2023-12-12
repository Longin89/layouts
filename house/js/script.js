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
    paintingField.forEach((picture, l) => picture.src.onload = painting[l].onload);
    authorField.forEach((auths, i) => auths.innerHTML.onload = authors[i].onload);
    titleField.forEach((title, j) => title.innerHTML.onload = titles[j].onload);
    descField.forEach((desc, k) => desc.innerHTML.onload = descs[k].onload);
    priceField.forEach((price, m) => price.innerHTML.onload = prices[m].onload);
  }, 750);



    setTimeout(() => {         
      for(let i = 0; i < authorField.length; i++) {
        paintingField[i].onload = paintingField[i].classList.remove('invise');
        authorField[i].onload = authorField[i].classList.remove('invise');
        titleField[i].onload = titleField[i].classList.remove('invise');
        descField[i].onload = descField[i].classList.remove('invise');
        priceField[i].onload = priceField[i].classList.remove('invise');
      }
}, 1500)



  setTimeout(() => {
        for(let i = 0; i < authorField.length; i++) {
          paintingField[i].classList.add('fade');
          authorField[i].classList.add('fade');
          titleField[i].classList.add('fade');
          descField[i].classList.add('fade');
          priceField[i].classList.add('fade');
        }
  }, 2500)
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