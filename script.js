((d) => {
  const $startGame = d.querySelector(".startGame"),
    $addNewWord = d.querySelector(".addNewWord"),
    $saveAndStart = d.querySelector(".saveAndStart"),
    $cancel = d.querySelector(".cancel"),
    $newGame = d.querySelector(".newGame"),
    $desist = d.querySelector(".desist"),
    $letterContainer = d.querySelector(".letterContainer"),
    $letter = d.querySelector(".letter"),
    $input = d.querySelector(".input"),
    $screen1 = d.querySelector(".screen1"),
    $screen2 = d.querySelector(".screen2"),
    $screen3 = d.querySelector(".screen3"),
    $magic = d.querySelector(".magic");

  // Word validation
  function wordValidation(text) {
    if (!text) {
      console.warn("Vacio");
    } else {
      let letters = 0;
      let numbers = 0;
      for (let character of text) {
        if (/[a-z]/g.test(character)) letters++;
        if (/[0-9]/g.test(character)) numbers++;
      }
      if (text.length < 9) {
        if (numbers === 0) {
          if (letters === text.length) {
            let word = text;
            return word;
          } else {
            alert("La palabra debe estar en minuscula y sin acento.");
          }
        } else {
          alert("La palabra no puede contener numeros.");
        }
      } else {
        alert("La palabra no debe contener mas de 8 letras.");
      }
    }
  }

  // Restore everything to start the game
  function reset() {
    const text = "";
    const rightWord = [];
    const wrongLetters = [];
    $letter.innerHTML = ``;
    $letterContainer.innerHTML = ``;
    d.querySelector(".gallow0").classList.add("isActive");
    d.querySelector(".gallow1").classList.remove("isActive");
    d.querySelector(".gallow2").classList.remove("isActive");
    d.querySelector(".gallow3").classList.remove("isActive");
    d.querySelector(".gallow4").classList.remove("isActive");
    d.querySelector(".gallow5").classList.remove("isActive");
    d.querySelector(".gallow6").classList.remove("isActive");
    d.querySelector(".gallow0").classList.remove("none");
    d.querySelector(".gallow1").classList.add("none");
    d.querySelector(".gallow2").classList.add("none");
    d.querySelector(".gallow3").classList.add("none");
    d.querySelector(".gallow4").classList.add("none");
    d.querySelector(".gallow5").classList.add("none");
    d.querySelector(".gallow6").classList.add("none");
  }

  // Screen-1 - Starting screen
  $startGame.addEventListener("click", (e) => {
    $screen1.classList.add("none");
    $screen2.classList.remove("none");
  });

  $addNewWord.addEventListener("click", (e) => {
    $screen1.classList.add("none");
    $screen2.classList.remove("none");
  });

  // Screen-2 - Add word screen. And inner workings of the hangman
  let text = ""; // Word introduced with the input
  $input.addEventListener("input", (e) => {
    text = e.target.value;
  });

  $saveAndStart.addEventListener("click", (e) => {
    if (wordValidation(text) === undefined) {
    } else {
      $screen2.classList.add("none");
      $screen3.classList.remove("none");

      // Space - Create the space with underscore and one class per element
      for (let i = 0; i < text.length; i++) {
        const $p = d.createElement("p");
        $p.classList.add("el" + i);
        $p.textContent = "_";
        $letterContainer.appendChild($p);
      }

      // Letter validation - Letter validation introduced by the keyup
      function letterValidation(letter) {
        if (!letter) {
        } else {
          let letters = 0;
          let numbers = 0;
          if (/[a-z]/g.test(letter)) letters++;
          if (/[0-9]/g.test(letter)) numbers++;
          if (numbers === 0) {
            if (letters === 1) {
              switch (letter) {
                case "Tab":
                  console.warn("No se permite Tab.");
                  break;
                case "CapsLock":
                  console.warn("No se permite CapsLock.");
                  break;
                case "Shift":
                  console.warn("No se permite Shift.");
                  break;
                case "Control":
                  console.warn("No se permite Control.");
                  break;
                case "Alt":
                  console.warn("No se permite Alt.");
                  break;
                case "NumLock":
                  console.warn("No se permite NumLock.");
                  break;
                case "Backspace":
                  console.warn("No se permite Backspace.");
                  break;
                case "Enter":
                  console.warn("No se permite Enter.");
                  break;
                case "ContextMenu":
                  console.warn("No se permite ContextMenu.");
                  break;
                case "Delete":
                  console.warn("No se permite Delete.");
                  break;
                case "Pause":
                  console.warn("No se permite Pause.");
                  break;
                default:
                  return letter;
              }
            } else {
              console.warn("La palabra debe estar en minuscula y sin acento.");
            }
          } else {
            console.warn("El texto no puede contener numeros.");
          }
        }
      }

      // Get all indexes
      function getAllIndexes(arr, val) {
        let indexes = [],
          i;
        for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
        return indexes;
      }

      const rightWord = [];
      const wrongLetters = [];
      // Hanged
      function hanged(word, letter) {
        if (word.includes(letter)) {
          // Group of correct letters
          for (let i = 0; i < getAllIndexes(word, letter).length; i++) {
            // Makes the letters that match the word appear. And add 1 element to the array "rightWord" to later determine the winner in another function
            switch (getAllIndexes(word, letter)[i]) {
              case 0:
                d.querySelector(`.el0`).textContent = word[0];
                if (rightWord.includes(0)) {
                  return;
                } else {
                  rightWord.push(0);
                }
                break;
              case 1:
                d.querySelector(`.el1`).textContent = word[1];
                if (rightWord.includes(1)) {
                  return;
                } else {
                  rightWord.push(1);
                }
                break;
              case 2:
                d.querySelector(`.el2`).textContent = word[2];
                if (rightWord.includes(2)) {
                  return;
                } else {
                  rightWord.push(2);
                }
                break;
              case 3:
                d.querySelector(`.el3`).textContent = word[3];
                if (rightWord.includes(3)) {
                  return;
                } else {
                  rightWord.push(3);
                }
                break;
              case 4:
                d.querySelector(`.el4`).textContent = word[4];
                if (rightWord.includes(4)) {
                  return;
                } else {
                  rightWord.push(4);
                }
                break;
              case 5:
                d.querySelector(`.el5`).textContent = word[5];
                if (rightWord.includes(5)) {
                  return;
                } else {
                  rightWord.push(5);
                }
                break;
              case 6:
                d.querySelector(`.el6`).textContent = word[6];
                if (rightWord.includes(6)) {
                  return;
                } else {
                  rightWord.push(6);
                }
                break;
              case 7:
                d.querySelector(`.el7`).textContent = word[7];
                if (rightWord.includes(7)) {
                  return;
                } else {
                  rightWord.push(7);
                }
                break;
              case 8:
                d.querySelector(`.el8`).textContent = word[8];
                if (rightWord.includes(8)) {
                  return;
                } else {
                  rightWord.push(8);
                }
                break;
            }
          }
        } else {
          // Group of wrong letters
          $letter.innerHTML = `<p>${wrongLetters}</p>`;
          wrongLetters.push(letter);
        }

        // Makeover - Change the img depending on the number of elements in the array "wrongLetters"
        switch (wrongLetters.length) {
          case 0:
            break;
          case 1:
            d.querySelector(".gallow0").classList.remove("isActive");
            d.querySelector(".gallow0").classList.add("none");
            d.querySelector(".gallow1").classList.remove("none");
            d.querySelector(".gallow1").classList.add("isActive");
            break;
          case 2:
            d.querySelector(".gallow1").classList.remove("isActive");
            d.querySelector(".gallow1").classList.add("none");
            d.querySelector(".gallow2").classList.remove("none");
            d.querySelector(".gallow2").classList.add("isActive");
            break;
          case 3:
            d.querySelector(".gallow2").classList.remove("isActive");
            d.querySelector(".gallow2").classList.add("none");
            d.querySelector(".gallow3").classList.remove("none");
            d.querySelector(".gallow3").classList.add("isActive");
            break;
          case 4:
            d.querySelector(".gallow3").classList.remove("isActive");
            d.querySelector(".gallow3").classList.add("none");
            d.querySelector(".gallow4").classList.remove("none");
            d.querySelector(".gallow4").classList.add("isActive");
            break;
          case 5:
            d.querySelector(".gallow4").classList.remove("isActive");
            d.querySelector(".gallow4").classList.add("none");
            d.querySelector(".gallow5").classList.remove("none");
            d.querySelector(".gallow5").classList.add("isActive");
            break;
          case 6:
            d.querySelector(".gallow5").classList.remove("isActive");
            d.querySelector(".gallow5").classList.add("none");
            d.querySelector(".gallow6").classList.remove("none");
            d.querySelector(".gallow6").classList.add("isActive");
            break;
        }

        // Lose - If that is activated when you lose
        if (wrongLetters.length > 5) {
          console.log("Perdiste");
          d.removeEventListener("keyup", keyupFunction);
          $letter.innerHTML = `<p><b>Perdiste</b></p>`;
        }
        // Win - If that is activated when you win
        if (rightWord.length === word.length) {
          console.log("Ganaste");
          d.removeEventListener("keyup", keyupFunction);
          $letter.innerHTML = `<p><b>Ganaste</b></p>`;
        }
      }

      if (screen.width < 768) {
        $magic.addEventListener("keyup", keyupFunction);
      } else {
        d.addEventListener("keyup", keyupFunction);
      }

      // Function that must be integrated in the addEventListener
      function keyupFunction(e) {
        if (letterValidation(e.key) === undefined) {
          return;
        } else {
          hanged(text, e.key);
        }
      }
    }
  });

  $cancel.addEventListener("click", (e) => {
    text = "";
    $input.value = "";
    $screen2.classList.add("none");
    $screen1.classList.remove("none");
  });

  // Screen-3
  $newGame.addEventListener("click", (e) => {
    $input.value = "";
    $screen3.classList.add("none");
    $screen2.classList.remove("none");
    reset();
  });

  $desist.addEventListener("click", (e) => {
    $input.value = "";
    $screen3.classList.add("none");
    $screen1.classList.remove("none");
    reset();
  });
})(document);
