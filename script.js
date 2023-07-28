// Initial grid creation
let block=[];
let blockcount=16;

document.documentElement.style.setProperty('--blockcount', blockcount);

let totalblocks = blockcount*blockcount;

for (let i=0; i<totalblocks; i++) {
    block.push("block"+(i+1));
};

createGrid();
    function createGrid(){
        block=[];
        document.querySelector('.sqcontainer').innerHTML = "";
        let totalblocks = blockcount * blockcount;
        for (let i = 0; i < totalblocks; i++) {
        block.push("block" + (i + 1));
        }
    
        //insert that grid into a container div already inside HTML
        block.forEach(function (blockElement) {
        let blockdiv = document.createElement('div');
        blockdiv.classList.add('block');
        let sqcontainer = document.querySelector('.sqcontainer');
        sqcontainer.appendChild(blockdiv);
        });

        //create hover event
        const hovblocks = document.querySelectorAll('.block');
        hovblocks.forEach(hovblock => {
        hovblock.addEventListener("mouseover", () => {
            hovblock.classList.add('hover');
        });
        });


        const resetbtn = document.querySelector('#reset');

        resetbtn.addEventListener('click', () => {
            hovblocks.forEach(hovblock => {
            hovblock.classList.remove('hover');
            });
        });
    }



//update on prompt
const btn = document.querySelector('#boxvalue');

btn.addEventListener('click', () => {
    const userInput = prompt("How many rows do you want?", "Please enter a number between 1 and 100");
    
    const newBlockCount = parseInt(userInput);
    if (!isNaN(newBlockCount) && newBlockCount > 0 && newBlockCount<=100) {
        blockcount = newBlockCount;
        console.log(`Block count updated to: ${blockcount}`);
        //reset CSS property
        document.documentElement.style.setProperty('--blockcount', blockcount);
        createGrid()
    } else {
        alert ("Invalid input. Please enter a number between 1 and 100");
    };
});


