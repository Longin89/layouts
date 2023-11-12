//FADING FOR GERMANY BUTTON
function fadingGermany() {
  germanyBtn.classList.add('active');
  franceBtn.classList.remove('active');
  englandBtn.classList.remove('active');

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


//FADING FOR FRANCE BUTTON
function fadingFrance() {
  franceBtn.classList.add('active');
  germanyBtn.classList.remove('active');
  englandBtn.classList.remove('active');

  for(let i = 0; i < author.length; i++) {
    author[i].classList.add('invise');
    title[i].classList.add('invise');
    desc[i].classList.add('invise');
    painting[i].classList.add('invise');
    price[i].classList.add('invise');
  }

  setTimeout(() => {
    requestAnimationFrame(() => {
      author.forEach((auths, i) => auths.innerHTML = franceAuthors[i]);
      title.forEach((titles, j) => titles.innerHTML = franceTitles[j]);
      desc.forEach((descs, k) => descs.innerHTML = franceDescs[k]);
      painting.forEach((picture, l) => picture.src = francePainting[l]);
      price.forEach((prices, m) => prices.innerHTML = francePrices[m]);
            
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


//FADING FOR ENGLAND BUTTON
function fadingEngland() {
  englandBtn.classList.add('active');
  germanyBtn.classList.remove('active');
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
      author.forEach((auths, i) => auths.innerHTML = englandAuthors[i]);
      title.forEach((titles, j) => titles.innerHTML = englandTitles[j]);
      desc.forEach((descs, k) => descs.innerHTML = englandDescs[k]);
      painting.forEach((picture, l) => picture.src = englandPainting[l]);
      price.forEach((prices, m) => prices.innerHTML = englandPrices[m]);
            
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

//EVENTS FOR BUTTONS
germanyBtn.addEventListener('click', fadingGermany);
franceBtn.addEventListener('click', fadingFrance);
englandBtn.addEventListener('click', fadingEngland);