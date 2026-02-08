# Password Generator 🔒

A simple and interactive JavaScript password generator that creates secure passwords based on user-selected criteria. Users can choose to include lowercase letters, uppercase letters, numbers, and symbols. The project focuses on DOM manipulation, event handling, and string logic.

## Features ✨

- Generate random passwords instantly
- Customizable character options:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Symbols
- Dynamic UI updates using JavaScript
- Clean and beginner-friendly code structure
- Copy-to-clipboard functionality

## Key Concepts Used 🧩

- DOM selection `document.getElementById()`
- Event Handling `.addEventListener()` `.click()`
- Reading and updating values `.value` `.checked` `.textContent`
- Conditional logic `if / else`
- Styling with JavaScript `style.display`
- Regular expressions `RegExp` `RandExp`
- String manipulation `.replaceAll()` `.repeat`

## Programming Languages Used 🛠️

- HTML
- CSS
- JavaScript

## Dependencies 📦

- **randexp.js (v0.5.3)** – Used to generate random strings based on regular expressions

## Screenshot 📸

![Screenshot of the Password Generator interface](img/js-password-generator-screenshot.png)

## Planned Features 🚀

- Popup notifications for user feedback:
  - Error messages (e.g., no character type selected)
  - Password generated successfully
  - Password copied to clipboard
- Improved password logic to ensure:
  - At least one character from each selected option is included
