const form = document.querySelector("form");
const submitBtn = document.querySelector('input[type="submit"]');

function updateButton() {
    if (form.checkValidity()) {
        submitBtn.style.background = "#5caebd";   // valid color
    } else {
        submitBtn.style.background = "";        // reset
    }
}

form.addEventListener("input", updateButton);

form.addEventListener("submit", function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        submitBtn.classList.remove("flashInvalid"); // restart animation
        void submitBtn.offsetWidth;                // force reflow
        submitBtn.classList.add("flashInvalid");
    }
});