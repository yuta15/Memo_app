"use strict"

// classList remove function
function change_classList(changeElementID, changeClass, addOrRemove){
    const changeElement = document.getElementById(changeElementID);
    console.log(changeElement);
    if(addOrRemove == "add"){
        changeElement.classList.add(changeClass);
    } else if (addOrRemove == "remove") {
        changeElement.classList.remove(changeClass);
        console.log(changeElement);
        // console.log(changeElement);
    } else {
        console.log("Please add or remove using this function")
    }
};




// add content display functinon
function Add_items_display(){
    const add_button = document.getElementById("add");
    add_button.addEventListener('click', () => {
        change_classList("add-items", "hide", "remove");
        const back = document.getElementById("Back");
        back.addEventListener('click', () => {
        change_classList("add-items", "hide", "add");
        });
    });
};




// accordinon


// const back = document.getElementById('back');
// back.addEventListener()





Add_items_display();
