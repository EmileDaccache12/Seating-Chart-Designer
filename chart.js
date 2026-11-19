document.addEventListener("DOMContentLoaded", function() {
    // VARIABLES
    const chart = document.getElementById("seating-chart");

    const width = document.getElementById("width");
    const height = document.getElementById("height");

    const clear = document.getElementById("clear-chart");
    const lock = document.getElementById("lock");

    window.isLocked = false;

    //-------------------------------------------------------------//

    // CHART ASPECT RATIO

    function updateChart() {
        if (window.isLocked) return;

        const columns = Number(width.value.replace("w", ""));
        const rows = Number(height.value.replace("h", ""));

        chart.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        chart.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

        chart.innerHTML = "";

        for (let index = 1; index <= columns * rows; index++) {
            const cell = document.createElement("div");

            cell.classList.add("cells");
            chart.appendChild(cell);
        }
    }

    width.addEventListener("change", updateChart);
    height.addEventListener("change", updateChart);

    updateChart();

    //-------------------------------------------------------------//

    // CELL CANCELING

    chart.addEventListener("click", function(event) {
        if (window.isLocked) return;

        const cells = event.target;
        if (cells.innerHTML != "") return;

        if (cells.classList.contains("cells")) {
            if (cells.style.backgroundColor !== "rgb(220, 0, 0)" || cells.textContent !== "")
                cells.style.backgroundColor = "rgb(220, 0, 0)";
            else cells.style.backgroundColor = "lightblue";
        }
    });

    //-------------------------------------------------------------//

    // CUSTOM INPUT

    chart.addEventListener("dblclick", function(event) {
        if (window.isLocked) return;

        const cells = event.target;
        if (cells.style.backgroundColor === "rgb(220, 0, 0)")
            cells.style.backgroundColor = "lightblue";

        if (cells.classList.contains("cells")) {
            const newText = prompt("Enter new cell text:", cells.textContent);

            if (newText !== null) {
                cells.textContent = newText;
            }
        }
    });

    //--------------------------------------------------------------//

    // CLEAR CHART

    clear.addEventListener("click", function() {
        if (window.isLocked) {
            alert("Chart is locked!");
            return;
        }

        const cells = chart.querySelectorAll(".cells");

        cells.forEach(function(cell) {
            cell.innerHTML = "";
            cell.style.backgroundColor = "lightblue";
        });
    });

    //--------------------------------------------------------------//

    // LOCK CHART

    lock.addEventListener("click", function() {
        window.isLocked = !window.isLocked;

        lock.innerHTML = window.isLocked ? "<b>Unlock Layout</b>" : "<b>Lock Layout</b>";

        const cells = chart.querySelectorAll(".cells");
        chart.style.backgroundColor = "rgb(255, 255, 192)";

        cells.forEach(function(cell) {
            if (window.isColored) {
                if (window.isLocked) {
                    chart.style.backgroundColor = "rgb(255, 255, 192)";
                    if (cell.style.backgroundColor === "rgb(220, 0, 0)") {
                        cell.style.backgroundColor = "rgb(172, 215, 229)";
                    }
                    else {
                        cell.style.backgroundColor = "lightblue";
                    }
                }
                else {
                    if (cell.style.backgroundColor === "rgb(172, 215, 229)") {
                        cell.style.backgroundColor = "rgb(220, 0, 0)";
                    }
                    else {
                        cell.style.backgroundColor = "lightblue";
                    }
                }
            }
            else {
                if (window.isLocked) {
                    chart.style.backgroundColor = "rgb(233, 233, 233)";
                    if (cell.style.backgroundColor === "rgb(220, 0, 0)") {
                        cell.style.backgroundColor = "rgb(221, 221, 221)";
                    }
                    else {
                        cell.style.backgroundColor = "rgb(222, 222, 222)";
                    }
                }
                else {
                    if (cell.style.backgroundColor === "rgb(221, 221, 221)") {
                        cell.style.backgroundColor = "rgb(220, 0, 0)";
                    }
                    else {
                        cell.style.backgroundColor = "lightblue";
                    }
                }
            }
        });
    });
});