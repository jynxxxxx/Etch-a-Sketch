// Initial grid creation
let block=[];
let blockcount=16;

document.documentElement.style.setProperty('--blockcount', blockcount);

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

    //create click and drag event
    const fillblocks = document.querySelectorAll('.block');
    let isMouseDown = false;
    document.addEventListener('mousedown', function(event) {
        if (event.button === 0) {
            isMouseDown = true;
        }
    });

    document.addEventListener('mouseup', function(event) {
        if (event.button === 0) {
            isMouseDown = false;
        }
    });
    
    // Create fill event with pressed left mouse button
    fillblocks.forEach(fillblock => {
        fillblock.addEventListener('mouseover', () => {
            if (isMouseDown) {
                fillblock.classList.add('fill');
            };
        });
    });
}

function removeFill() {
    const fillblocks = document.querySelectorAll('.block');
    fillblocks.forEach(fillblock => {
    fillblock.classList.remove('fill');
    });
}

// Change from button to slider
// Update on slider value
const slider = document.getElementById("area");
const sliderValue = document.getElementById("sliderValue");
sliderValue.textContent = slider.value + "x" + slider.value;
slider.oninput = function() {
    sliderValue.textContent = slider.value + "x" + slider.value;

    const newBlockCount = parseInt(slider.value);

    blockcount = newBlockCount;
    console.log(`Block count updated to: ${blockcount}`);
    //reset CSS property
    document.documentElement.style.setProperty('--blockcount', blockcount);
    createGrid()
};


//create clear function
const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', () => {
    removeFill();
    createGrid();
});


// Add reset all button
const resetbtn = document.querySelector('#reset');
resetbtn.addEventListener('click', () => {
    removeFill();
    slider.value = 16;
    sliderValue.textContent = slider.value + "x" + slider.value;
    blockcount = 16;
    document.documentElement.style.setProperty('--blockcount', blockcount);
    document.documentElement.style.setProperty('--pencolor', 'black');
    createGrid();
});

//Pen Color Input from HTML
const colorInput = document.getElementById('pencolor');
    document.documentElement.style.setProperty('--pencolor', 'black');
    colorInput.addEventListener('change', function () {
    document.documentElement.style.setProperty('--pencolor', colorInput.value);
    createGrid();
  });





