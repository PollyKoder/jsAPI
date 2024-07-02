const mainPage = document.getElementById("mainDOM");

const headlinePush = document.createElement("h1");
headlinePush.innerHTML = "API Cat breeds listed below";
mainPage.appendChild(headlinePush);

async function catBreeds() {
    //Collecting the api link
    //const li = document.createElement("li");
    const response = await fetch("https://catfact.ninja/breeds");
    console.log(response);

    //instructing js on what and how much information we want from the link, or the arrays available within the link
    const breedCat = await response.json()
    for ( let i = 0; i<25; i++) {
        let text = breedCat.data[i].breed; 
        //Making a p element to push/append the collected data into the html
        const paragraph = document.createElement("p");
        paragraph.innerHTML = text;
        mainPage.appendChild(paragraph);
        //data is now successfully pushed
    }
    console.log(breedCat);
    
    //breedCat = textContent(catBreeds.data.breed);
    
    
};

catBreeds();


const footer = document.getElementById("footerDOM");
const footerText = document.createElement("h5");
footerText.innerHTML = "Page made by Polly H. Riviera";
footer.appendChild(footerText);