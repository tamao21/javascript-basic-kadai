const click_btn = document.getElementById("btn");
const text = document.getElementById("text");

click_btn.addEventListener('click', () => {
  text.textContent = "ボタンをクリックしました";
});
