function generatePassword() {
  const passwordLength = document.getElementById("password-length-input").value;
  const hasSmall = document.getElementById("small-checkbox").checked;
  const hasCapital = document.getElementById("capital-checkbox").checked;
  const hasNumbers = document.getElementById("numbers-checkbox").checked;
  const hasSymbols = document.getElementById("symbols-checkbox").checked;
  const error = document.getElementById("error");
  const resultContainer = document.getElementById("result-container");
  const generatedPassword = document.getElementById("generated-password");
  const viewPasswordIcon = document.getElementById("view-password");
  const hidePasswordIcon = document.getElementById("hide-password");
  const copyPassword = document.getElementById("copy-password");

  if (passwordLength == "" || Number(passwordLength) < 4) {
    error.textContent = "Password length must be at least 4 characters long";
    return;
  } else if (!hasSmall && !hasCapital && !hasNumbers && !hasSymbols) {
    error.textContent = "Please check at least one conditon";
  } else {
    error.textContent = "";
    const CHARSETS = {
      lowercase: "a-z",
      uppercase: "A-Z",
      numbers: "0-9",
      symbols: "-!$%^&*()_+|~=`{}\\[\\]:\";'<>?,./",
    };
    const checkedOptions = {
      lowercase: hasSmall,
      uppercase: hasCapital,
      numbers: hasNumbers,
      symbols: hasSymbols,
    };

    let newRegex = "";

    if (checkedOptions.lowercase) newRegex += CHARSETS.lowercase;
    if (checkedOptions.uppercase) newRegex += CHARSETS.uppercase;
    if (checkedOptions.numbers) newRegex += CHARSETS.numbers;
    if (checkedOptions.symbols) newRegex += CHARSETS.symbols;
    newRegex = new RegExp(`[${newRegex}]{${Number(passwordLength)}}`);

    let newPassword = new RandExp(newRegex).gen();
    let hiddenPassword = () => "*".repeat(newPassword.length);
    resultContainer.style.display = "flex";

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
