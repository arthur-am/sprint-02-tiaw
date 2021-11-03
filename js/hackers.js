const hackers = [
    {
        id: 1, 
        name: "White Hat",
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        image: "./assets/white-hat.png"
    },
    {
        id: 2, 
        name: "Black Hat",
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        image: "./assets/black-hat.png"
    },
    {
        id: 3, 
        name: "Gray Hat",
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        image: "./assets/gray-hat.png"
    },
    {
        id: 4, 
        name: "Crackers",
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        image: "./assets/crackers.png"
    },
    {
        id: 5, 
        name: "Elite",
        content: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        image: "./assets/elite.png"
    }
];


const createHackers = () => {
    const hackersRow = document.getElementById("hackers-row");
    hackers.forEach(hacker => {
        hackersRow.innerHTML += createHackersCard(hacker);
    });
}

const createHackersCard = (hacker) => {

    return `
    <div class="col-md-12 shadow pt-3 mb-5">
        <div class="row d-flex flex-row align-items-center justify-content-between">
            <div class="col-md-8">
                <div class="card border-0">
                    <div class="card-body" id=${hacker.id}>
                        <h5 class="card-title hackers-title">${hacker.name}</h5>
                        <p class="card-text">${hacker.content}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <img src="${hacker.image}" class="img-fluid p-3" alt="">
            </div>
        </div>
    </div>
    `;

}

createHackers();
