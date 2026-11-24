
document.addEventListener("DOMContentLoaded", function() {

    // STUDENT NAMES

    // G10A
    const A = [
        "null"
    ];

    // G10B
    const B = [
        "null"
    ];

    // G10C
    const C = [
        "Emile Daccache",
        "Yorgo Tannous",
        "Andrew Soueidi",
        "Adam Hmedeh",
        "mohamad El Hakim",
        "Hassan Jaber",
        "Hassan Noureddin",
        "Mohammad Sukkarieh",
        "Leonard Shalouhi",
        "Cila Al Hajj",
        "Natalia Hteit",
        "Crissel Mirza",
        "Alina Fawwaz",
        "Hussein Sabra",
        "Hussein Sheib",
        "Martin Haddad",
        "Jawad El Sabeh"
    ];

    const nameList = document.getElementById("name-list");

    const G10A = document.getElementById("A");
    const G10B = document.getElementById("B");
    const G10C = document.getElementById("C");

    //------------------------------------------------------------//

    // LOAD NAMES

    function loadNames(names) {
        nameList.innerHTML = "";

        names.forEach(function(name) {
            window.createNameInput(name);
        });

        window.checkLimit();
    }

    //------------------------------------------------------------//

    // A

    G10A.addEventListener("click", function() {
        loadNames(A);
    });

    // B

    G10B.addEventListener("click", function() {
        loadNames(B);
    });

    // C

    G10C.addEventListener("click", function() {
        loadNames(C);
    });

});
