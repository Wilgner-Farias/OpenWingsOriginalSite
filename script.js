document.querySelector('.promo-button span').addEventListener('click', () => {
    document.querySelector('.promocao').style.opacity = 0
    setInterval(() => {
      document.querySelector('.promocao').style.display = 'none';
    },700);
});

document.querySelector('#whatsapp-logo').addEventListener('click', () => {
  document.querySelector('.whatsapp-escolha').style.opacity = 0;
    document.querySelector('.whatsapp-escolha').style.display = 'block';

    setInterval(() => {
      document.querySelector('.whatsapp-escolha').style.opacity = 1;
    },500);

});

document.querySelector('.whatsapp-escolha .span-area span').addEventListener('click', () => {
    document.querySelector('.whatsapp-escolha').style.display = 'none';
});

document.querySelector('.onlycall').addEventListener('click', () => {
  alert('Somente ligações para : (79) 9 1234-5678');
});

document.querySelector('.question-1').addEventListener('click', () => {
    document.querySelector('.answer-div1').style.opacity = 0;
    document.querySelector('.answer-div1').style.display = 'block';

    setInterval(() => {
      document.querySelector('.answer-div1').style.opacity = 1;
    },500);

});

document.querySelector('#question-btn-1').addEventListener('click', () => {
    document.querySelector('.answer-div1').style.display = 'none';
});

document.querySelector('.question-2').addEventListener('click', () => {
  document.querySelector('.answer-div2').style.opacity = 0;
  document.querySelector('.answer-div2').style.display = 'block';

  setInterval(() => {
    document.querySelector('.answer-div2').style.opacity = 1;
  },500);

});

document.querySelector('#question-btn-2').addEventListener('click', () => {
  document.querySelector('.answer-div2').style.display = 'none';
});

document.querySelector('.question-3').addEventListener('click', () => {
  document.querySelector('.answer-div3').style.opacity = 0;
  document.querySelector('.answer-div3').style.display = 'block';

  setInterval(() => {
    document.querySelector('.answer-div3').style.opacity = 1;
  },500);

});

document.querySelector('#question-btn-3').addEventListener('click', () => {
  document.querySelector('.answer-div3').style.display = 'none';
});

document.querySelector('.question-4').addEventListener('click', () => {
  document.querySelector('.answer-div4').style.opacity = 0;
  document.querySelector('.answer-div4').style.display = 'block';

  setInterval(() => {
    document.querySelector('.answer-div4').style.opacity = 1;
  },500);

});

document.querySelector('#question-btn-4').addEventListener('click', () => {
  document.querySelector('.answer-div4').style.display = 'none';
});

document.querySelector('.question-5').addEventListener('click', () => {
  document.querySelector('.answer-div5').style.opacity = 0;
  document.querySelector('.answer-div5').style.display = 'block';

  setInterval(() => {
    document.querySelector('.answer-div5').style.opacity = 1;
  },500);
  
});

document.querySelector('#question-btn-5').addEventListener('click', () => {
  document.querySelector('.answer-div5').style.display = 'none';
});