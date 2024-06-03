"use strict";

const COPY_TIMEOUT = 1500; // Timeout duration in milliseconds

const copyCodeButtons = document.querySelectorAll(".btn.copy-code");
let timeoutId;

copyCodeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("copied")) {
      // If already copied, clear the timeout and remove the copied class immediately
      clearTimeout(timeoutId);
      btn.classList.remove("copied");
      return;
    }

    const text = btn.previousElementSibling.textContent;

    btn.classList.add("copied");

    copyTextToClipboard(text, btn);
  });
});

function copyTextToClipboard(text, btn) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // Set a timeout to remove the copied class after COPY_TIMEOUT milliseconds
      timeoutId = setTimeout(() => {
        btn.classList.remove("copied");
      }, COPY_TIMEOUT);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
