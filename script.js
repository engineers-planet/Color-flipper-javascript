const colors = ["#007bff", "#6610f2", "#6f42c1", "#e83e8c", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#007bff"];

const colorDiv = document.getElementById("color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    colorDiv.textContent = "Color: " + randomColor;
});
