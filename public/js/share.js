let shareData = {
        title: 'Couple Twibbon',
        text: 'Web Generated Couple Pictures',
        url: 'https://couples.netlify.app/',
      }

      const btn = document.querySelector('em');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'Couple Twibbon shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: Share canceled!'
          )
      });
