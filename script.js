const mainPage = document.getElementById("mainDOM");

const headlinePush = document.createElement("h1");
headlinePush.innerHTML = "API Cat breeds listed below";
mainPage.appendChild(headlinePush);

async function catBreeds() {
    const response = await fetch("https://catfact.ninja/breeds");
    console.log(response);

    const breedCat = response.json()
    //const paragraph = document.createElement("p");
    breedCat.textContent(catBreeds.data.current_page);
    mainPage.appendChild(breedCat);
    
};

catBreeds();