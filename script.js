    function nextPage() {
        document.getElementById("welcome-screen").style.display = "none";
        document.getElementById("intro-screen").style.display = "block";
    }

    function showChoices() {
        document.getElementById("intro-screen").style.display = "none";
        document.getElementById("choices-screen").style.display = "block";
    }
    function startFlipping() {

        let kwacha = document.getElementById("kwacha-option").value;

        let tambala = document.getElementById("tambala-option").value;

        if (kwacha.trim() === "" || tambala.trim() === "") {
            alert("Please enter both options!");
            return;
        }
        document.getElementById("first-choice").textContent = kwacha;
        document.getElementById("second-choice").textContent = tambala;
        document.getElementById("choices-screen").style.display = "none";
        document.getElementById("coin-screen").style.display = "block";
        document.getElementById("refresh-button").style.display = "none";
        let result = Math.random() < 0.5 ? "KWACHA" : "TAMBALA";

        let coin = document.getElementById("coin");

        coin.classList.remove("flipping", "heads", "tails");

        void coin.offsetWidth;

        coin.classList.add("flipping");
        if (result === "KWACHA") {
            coin.classList.add("heads");
        } else {
            coin.classList.add("tails");
        }

        setTimeout(function() {
            
        if (result === "KWACHA") {
            document.getElementById("result").textContent = kwacha;
        } else {
            document.getElementById("result").textContent = tambala;
        }
        let refreshButton = document.getElementById("refresh-button");

        refreshButton.style.display = "inline-block";

        refreshButton.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 6000);
}



