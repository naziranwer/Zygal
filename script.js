function generateBoxes() {
  const boxNumber = parseInt(document.getElementById("boxNumber").value);
  const body = document.querySelector(".body");

  body.innerHTML = ""; // Clear existing boxes

  if (!isNaN(boxNumber)) {
    const windowHeight = (window.innerHeight - 50) / boxNumber;
    const windowWidth = window.innerWidth / boxNumber;

    for (let i = 0; i < boxNumber; i++) {
      const box = document.createElement("div");
      box.className = "box";
      box.style.width = windowWidth + "px";
      box.style.height = windowHeight + "px";

      box.style.top = i * windowHeight + 50 + "px";
      box.style.right = i * windowWidth + "px";

      body.appendChild(box);
    }
  } else {
    alert("Please enter a valid number.");
  }
}
