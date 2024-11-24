document.getElementById('generateButton').addEventListener('click', () => {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);

    if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
        document.getElementById('result').textContent = 'Please enter valid minimum and maximum values!';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('result').textContent = `Random Number: ${randomNumber}`;
    document.getElementById('result').style.background = 'linear-gradient(45deg, #7e57c2, #42a5f5)';
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(registration => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch(err => {
        console.log("Service Worker registration failed:", err);
      });
  });
}
