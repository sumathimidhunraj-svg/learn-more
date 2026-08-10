const startBtn = document.getElementById("startBtn");
const classSelect = document.getElementById("classSelect");

if (startBtn && classSelect) {

    startBtn.addEventListener("click", function () {

        const selectedClass = classSelect.value;

        if (selectedClass === "") {
            alert("Please choose your class first! 📚");
            return;
        }

        localStorage.setItem(
            "learnMoreClass",
            selectedClass
        );

        window.location.href = "chat.html";
    });
}