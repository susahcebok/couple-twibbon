let clickButton = document.getElementById("click");
      let fileInput = document.getElementById("divide-right-img");
      fileInput.addEventListener("change", function () {
         
         // check if the file is selected or not
         if (fileInput.files.length == 0) {
            clickButton.disabled = true;
            clickButton.opacity = 0.3;
         } else {
            clickButton.disabled = false;
            clickButton.style.opacity = 1;
         }
      });
