function generatePassword() {
  const passwordLength = document.getElementById("password-length-input").value;
  const includeLowercase = document.getElementById("small-checkbox").checked;
  const includeUppercase = document.getElementById("capital-checkbox").checked;
  const includeNumbers = document.getElementById("numbers-checkbox").checked;
  const includeSymbols = document.getElementById("symbols-checkbox").checked;
  const resultContainer = document.getElementById("result-container");
  const generatedPassword = document.getElementById("generated-password");
  const viewPasswordIcon = document.getElementById("view-password");
  const hidePasswordIcon = document.getElementById("hide-password");
  const copyPassword = document.getElementById("copy-password");

  if (passwordLength == "" || Number(passwordLength) < 4) {
    showPopup(false, "Password length must be at least 4 characters long.");
    return;
  } else if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    showPopup(false, "Please check at least one conditon.");
  } else {
    const CHARSETS = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "-!$%^&*()_+|~=`{}[]:\";'<>?,./",
    };
    const checkedOptions = {
      lowercase: includeLowercase,
      uppercase: includeUppercase,
      numbers: includeNumbers,
      symbols: includeSymbols,
    };

    let selectedCharSets = [];

    if (checkedOptions.lowercase) selectedCharSets.push(CHARSETS.lowercase);
    if (checkedOptions.uppercase) selectedCharSets.push(CHARSETS.uppercase);
    if (checkedOptions.numbers) selectedCharSets.push(CHARSETS.numbers);
    if (checkedOptions.symbols) selectedCharSets.push(CHARSETS.symbols);

    let passwordChars = [];
    for (const charSet of selectedCharSets) {
      passwordChars.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }

    const allChars = selectedCharSets.join("");

    while (passwordChars.length < Number(passwordLength)) {
      passwordChars.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    for (let i = passwordChars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordChars[i], passwordChars[j]] = [
        passwordChars[j],
        passwordChars[i],
      ];
    }

    const newPassword = passwordChars.join("");
    const hiddenPassword = () => "*".repeat(newPassword.length);
    console.log("newPassword: ", newPassword);
    resultContainer.style.display = "flex";
    showPopup(true, "Password Generated!");

    viewPasswordIcon.addEventListener("click", () => {
      generatedPassword.textContent = newPassword;
      viewPasswordIcon.style.display = "none";
      hidePasswordIcon.style.display = "block";
    });

    hidePasswordIcon.addEventListener("click", () => {
      generatedPassword.innerText = hiddenPassword();
      viewPasswordIcon.style.display = "block";
      hidePasswordIcon.style.display = "none";
      hidePasswordIcon.classList.remove("display-none");
      copyPassword.classList.remove("display-none");
    });

    copyPassword.addEventListener("click", () => {
      navigator.clipboard.writeText(newPassword);
      console.log("Password Copied");
    });

    hidePasswordIcon.click();
  }
}

function showPopup(isSucess, message) {
  const popUp = document.querySelector(".pop-up");
  const popUpTitle = document.querySelector(".pop-up-title");
  const success = document.getElementById("success");
  const warning = document.getElementById("warning");
  if (isSucess) {
    popUp.style.backgroundColor = "#c6ffbf";
    success.style.color = "#00ff00";
    success.style.display = "block";
    warning.style.display = "none";
  } else {
    popUp.style.backgroundColor = "#fff8bf";
    warning.style.color = "#ffe100";
    warning.style.display = "block";
    success.style.display = "none";
  }
  popUp.style.display = "flex";
  popUp.style.animationName = "slide-left";
  popUpTitle.textContent = message;

  setTimeout(() => {
    popUp.style.animationName = "slide-right";
    setTimeout(() => {
      popUp.style.display = "none";
    }, 700);
  }, 4000);
}
