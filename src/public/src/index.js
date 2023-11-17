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
    const add_button = document.getElementById("add-button");
    add_button.addEventListener("click",() => {
        const add_item = document.getElementById("add-items");
        add_item.classList.toggle("hide");
    });
};

    
function open_close(){
    const accordion_class = document.getElementsByClassName("accordion-header");
    for (let id = 0; id < accordion_class.length; id++){
        accordion_class[id].addEventListener("click", ()=>{
            const accordion_content = document.getElementById(`${id}-content`);
            accordion_content.classList.toggle("open");
        });
    };
}



open_close();
Add_items_display();