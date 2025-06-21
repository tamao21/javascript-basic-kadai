document.getElementsByTagName("button").addEventListener('click', () => {
  document.getElementsByTagName("h2").textContent = new Date("ボタンをクリックしました");
});