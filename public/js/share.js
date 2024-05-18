let shareData = {
        title: 'Couple Twibbon',
        text: 'Web Generated Couple Pictures',
        url: 'https://couples.netlify.app/',
      }

      const btn = document.querySelector('span');
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
