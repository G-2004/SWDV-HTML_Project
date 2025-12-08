function updateTotal() {
    const checkboxes = document.querySelectorAll(".item");
    let total = 0;

    checkboxes.forEach(box => {
        if (box.checked) {
            total += Number(box.value);
        }
    });

    document.getElementById("total").textContent = "$" + total;
}

// Attach event listeners
document.querySelectorAll(".item").forEach(box => {
    box.addEventListener("change", updateTotal);
});