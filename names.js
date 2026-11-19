document.addEventListener("DOMContentLoaded", function() {
    const names = document.getElementById("names");
    const nameList = document.getElementById("name-list");
    const clear = document.getElementById("clear");
    const error = document.getElementById("alert");

    function checkLimit() {
        const cells = [...document.querySelectorAll(".cells")].filter(function(cell) {
            return cell.style.backgroundColor !== "rgb(220, 0, 0)";
        });

        const inputs = document.querySelectorAll(".inputs");

        if (inputs.length > cells.length) {
            error.style.display = "block";
        } else {
            error.style.display = "none";
        }
    }

    window.checkLimit = checkLimit;

    //------------------------------------------------------------//

    // UPDATE NUMBERS

    function updateNumbers() {
        const nameRows = nameList.querySelectorAll(".name-row");

        nameRows.forEach(function(row, index) {
            row.querySelector(".name-number").textContent = index + 1;
        });
    }

    //-----------------------------------------------------------//

    // ENTER NAMES

    function createNameInput() {
        const row = document.createElement("div");
        row.classList.add("name-row");

        const number = document.createElement("span");
        number.classList.add("name-number");

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter name...";
        input.classList.add("inputs");

        const remove = document.createElement("button");
        remove.type = "button";
        remove.textContent = "X";
        remove.classList.add("remove-name");

        // REMOVE NAME
        remove.addEventListener("click", function(event) {
            event.preventDefault();

            row.remove();
            updateNumbers();

            if (nameList.children.length === 0) {
                createNameInput();
            }

            checkLimit();
        });

        //------------------------------------------------------------//

        // CREATE NEXT INPUT ON ENTER

        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter" && input.value.trim() !== "") {
                event.preventDefault();

                const cells = [...document.querySelectorAll(".cells")].filter(function(cell) {
                    return cell.style.backgroundColor !== "rgb(220, 0, 0)";
                });

                const inputs = [...document.querySelectorAll(".inputs")].filter(function(input) {
                    return input.value.trim() !== "";
                });

                if (inputs.length >= cells.length) {
                    error.style.display = "block";
                    return;
                }

                createNameInput();
                nameList.lastElementChild.querySelector("input").focus();
                checkLimit();
            }
        });

        row.appendChild(number);
        row.appendChild(input);
        row.appendChild(remove);

        nameList.appendChild(row);

        updateNumbers();
        checkLimit();
    }

    createNameInput();

    //------------------------------------------------------------//

    // CLEAR

    clear.addEventListener("click", function(event) {
        event.preventDefault();

        nameList.innerHTML = "";
        createNameInput();
        checkLimit();
    });
});