document.addEventListener("DOMContentLoaded", function() {
    const chart = document.getElementById("seating-chart");
    const randomize = document.getElementById("randomize");

    randomize.addEventListener("click", function() {
        if (window.isLocked) {
            alert("Chart is locked!");
            return;
        }

        const cells = [...chart.querySelectorAll(".cells")];

        const inputs = [...document.querySelectorAll(".inputs")].filter(function(input) {
            return input.value.trim() !== "";
        });

        // CLEAR ALL CELLS
        cells.forEach(function(cell) {
            cell.textContent = "";
        });

        // AVAILABLE CELLS
        const availableCells = cells.filter(function(cell) {
            return cell.textContent === "" &&
                   cell.style.backgroundColor !== "rgb(220, 0, 0)";
        });

        if (inputs.length > availableCells.length) {
            alert("Not enough cells!");
            return;
        }

        // RANDOMIZE
        inputs.forEach(function(input) {
            const random = Math.floor(Math.random() * availableCells.length);
            const cell = availableCells.splice(random, 1)[0];

            cell.textContent = input.value;
            cell.dataset.randomized = "true";
        });
    });
});