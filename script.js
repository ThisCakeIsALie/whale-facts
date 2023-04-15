const factText = document.getElementById("fact-text");
const factButton = document.getElementById("fact-button");

factButton.addEventListener("click", () => {
    fetch("whale_facts.json")
        .then(response => response.json())
        .then(data => {
            const randomFact = data[Math.floor(Math.random() * data.length)];
            factText.innerText = randomFact;
        })
        .catch(error => {
            console.error("Error fetching whale facts:", error);
            factText.innerText = "An error occurred while fetching whale facts. Please try again.";
        });
});
