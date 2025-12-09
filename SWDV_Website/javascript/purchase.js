function updateTotal() {
    const checkboxes = document.querySelectorAll(".item");
    const selectedItemsDiv = document.getElementById("selectedItems");

    let total = 0;
    selectedItemsDiv.innerHTML = "";

    checkboxes.forEach(box => {
        if (box.checked) {
            total += Number(box.value);

            const img = box.parentElement.querySelector("img");

            if (img) {
                const cloned = img.cloneNode(true);
                cloned.classList.add("selectedItemImage");
                cloned.style.cursor = "pointer";

                cloned.addEventListener("click", () => {
                    box.checked = false;
                    updateTotal();
                });

                selectedItemsDiv.appendChild(cloned);
            }
        }
    });

    document.getElementById("total").textContent = "$" + total;
}

document.querySelectorAll(".item").forEach(box => {
    box.addEventListener("change", updateTotal);
});
