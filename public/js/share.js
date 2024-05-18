let shareData = {
        title: 'Couple Twibbon',
        text: 'Learn web development on MDN!',
        url: 'https://couples.netlify.app/',
      }

      const btn = document.querySelector('button');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'MDN shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: ' + e
          )
      });
