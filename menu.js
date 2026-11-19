document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");
    const stale = document.getElementById("stale");
    const colored = document.getElementById("colored");
    const section = document.getElementById("section");
    const holder = document.getElementById("holder");

    window.isColored = true;

    // OPEN CLOSE  

    btn.addEventListener("click", function() {
        console.log("clicked");

        section.classList.toggle("active");

        if (section.classList.contains("active")) {
            holder.style.rotate = "180deg";
        }
        else {
            holder.style.rotate = "0deg";
        }
    });

    // THEMES

    colored.style.backgroundColor = "black";

    stale.addEventListener("click" , function() {
        stale.style.backgroundColor = "black";
        colored.style.background = "none";

        window.isColored = false;
    });

    colored.addEventListener("click" , function() {
        colored.style.backgroundColor = "black";
        stale.style.background = "none";

        window.isColored = true;
    });
});