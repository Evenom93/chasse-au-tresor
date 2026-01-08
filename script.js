// ===== PAGE 1: Password popup =====
if (document.getElementById("enterBtn")) {
  document.getElementById("enterBtn").addEventListener("click", () => {
    const password = prompt("Enter the password:");
    if (password === "letmein") { // <-- change this password manually
      window.location.href = "countdown.html";
    } else {
      alert("Incorrect password!");
    }
  });
}

// ===== PAGE 2: Countdown =====
if (document.getElementById("countdown")) {
  let timeLeft = 10; // seconds
  const timer = document.getElementById("countdown");

  const interval = setInterval(() => {
    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(interval);
      window.location.href = "info.html";
    }
  }, 1000);
}

// ===== PAGE 3: Accordion =====
if (document.querySelectorAll(".accordion-title").length > 0) {
  const titles = document.querySelectorAll(".accordion-title");
  titles.forEach(title => {
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      content.style.display = (content.style.display === "block") ? "none" : "block";
    });
  });
}
