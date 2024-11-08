const education = document.querySelector('.finance');
const medicine = document.querySelector('.medicine');
const finance = document.querySelector('.finance');
const HTTP = "http://127.0.0.1:5500/pages/"
education.addEventListener("click", () => {
    location.href = HTTP + "education.html"
});

finance.addEventListener("click", () => {
    location.href = HTTP + "finance.html"
});

medicine.addEventListener("click", () => {
    location.href = HTTP + "medicine.html"
});
