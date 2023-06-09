document.addEventListener("DOMContentLoaded",() => {
    const output = document.querySelector(".output");
    const textInput = document.querySelector(".text");
    const button = document.querySelector(".button");

    button.addEventListener("click", scrapeWebsite);


    //scrape check handler    
    async function scrapeWebsite() {

        const url = textInput.value;
        console.log(url);
        try {
            // Fetch the HTML content of the website
            const response = await fetch(url);
            const html = await response.text();
        
            // Print the result
            output.innerText = 'Scrape away!';
        } catch (error) {
            output.innerText = 'An error occurred:' + error.message;
        }
    }
    
    // Usage example: scrape a website
});
