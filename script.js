async function main() {
    const factText = document.getElementById("fact-text");
    const body = document.querySelector("body");

    const WHALE_FACTS = await fetch("whale_facts.json").then(response => response.json());

    async function showRandomFact() {
        factText.style.opacity = 0;

        // Wait for the opacity to transition to 0
        await new Promise(resolve => setTimeout(resolve, 500));

        factText.style.opacity = 1;
        factText.innerText = WHALE_FACTS[Math.floor(Math.random() * WHALE_FACTS.length)];
    }

    // When clicked, show a random whale fact
    body.addEventListener("click", async (event) => {
        if (event.target !== factText && event.target.id !== "click-info") {
            await showRandomFact();
        }
    });

    // When the page loads, show a random whale fact
    factText.innerText = WHALE_FACTS[Math.floor(Math.random() * WHALE_FACTS.length)];
}

main();
