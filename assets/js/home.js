window.onscroll = function() {
    // this is to make the page stable 
    window.scrollTo(0, 0);
}

// initially the cursor for delete button is set to not allowed because no task is selected to dlt
$('#deleteButton')[0].style.cursor = "not-allowed";



/******************************************************************************************* 
          cut the date given by the database, bcz, it is of some different format 
**************************************************************************************** */
// select all the dates and store it in dateStrings
var dateStrings = document.querySelectorAll('.taskDueDateDiv span');
// console.log(dateString);
for (let dateString of dateStrings) {
    // cut the string using substring function
    dateString.innerText = dateString.innerText.substring(0, 15);
    // console.log(dateString.innerText.substring(0, 15));
}





/******************************************************************************************* 
                             Giving color to categories
                             personal :rgb(178,73,38)
                             work :rgb(156,0,175)
                             school : rgb(242,167,0)
                             cleaning :rgb(93,65,44)
                             others :rgb(1,1,1)
**************************************************************************************** */
var categories = $('.taskCategoryDiv');
for (var category of categories) {
    switch (category.innerText) {
        case "Personal":
            category.style.backgroundColor = "rgb(178,73,38)";
            break;
        case "Work":
            category.style.backgroundColor = "rgb(156,0,175)";
            break;
        case "School":
            category.style.backgroundColor = "rgb(242,167,0)";
            break;
        case "Cleaning":
            category.style.backgroundColor = "rgb(93,65,44)";
            break;
        case "Other":
            category.style.backgroundColor = "rgb(1,1,1)";
            break;
    }
}




/******************************************************************************************* 
                    disable buttons when no task is selected to delete
**************************************************************************************** */
function disableTheButton(buttonToDisable) {
    // function to disable the button , accepting DOM object as argument
    buttonToDisable.disabled = true;
    buttonToDisable.style.cursor = "not-allowed"; // change the cursor to not allowed
};

function enableTheButton(buttonToEnable) {
    // function to enable the button , accepting DOM object as argument
    buttonToEnable.disabled = false;
    buttonToEnable.style.cursor = "pointer"; // change the cursor to pointer
};





/******************************************************************************************* 
                                Highlight the selected task
Concept used : every checkbox have their values which is the id of the task from the database
these values are the ids of the task div 
when the checkbox is clicked , check if the checkbox is checked or not , 
and then add or remove the highlight class accordingly 
**************************************************************************************** */
// document.querySelectorAll('[name="tasksToDelete"]') selects all the checkboxes
for (let inputCheckbox of document.querySelectorAll('[name="tasksToDelete"]')) {
    let checkboxValue = inputCheckbox.getAttribute('value');

    // add click event listner to the checkboxes
    inputCheckbox.addEventListener('click', function() {
        if (inputCheckbox.checked == true) {
            // add class to highlight the task when it is checked
            document.getElementById(checkboxValue).classList.add("highlightTheTask");
        } else {
            // remove class when unchecked
            document.getElementById(checkboxValue).classList.remove("highlightTheTask");
        }

        // below code it to enable and disable the delete button
        /* concept::::when a checkbox is clicked, it is checked if there is any checked box
                    if there will be any checked box, then button will be enabled else diabled
                    console.log($("#deleteForm input:checkbox:checked").length);
        */
        if ($("#deleteForm input:checkbox:checked").length > 0) {
            // this function is defined above
            enableTheButton($('#deleteButton')[0]);
        } else if ($("#deleteForm input:checkbox:checked").length == 0) {
            disableTheButton($('#deleteButton')[0]);
        }
    });
}




/******************************************************************************************* 
                    changing the height of task list div on window resizing
                    because its overflow is hidden
**************************************************************************************** */
function resizeTaskListDiv() {
    // calculating the height all three top divs
    var headingHeight = document.getElementById('heading').getBoundingClientRect().height;
    var descriptionHeigth = document.getElementById('desciptionDiv').getBoundingClientRect().height;
    var cdHeight = document.getElementById('categoryDateDiv').getBoundingClientRect().height;
    // calculating the height of main
    var mainHeight = document.getElementById('main').getBoundingClientRect().height;
    // console.log(`mainHeight : ${mainHeight} \n headingHeight : ${headingHeight} \n descriptionHeigth : ${descriptionHeigth} \n cdHeight : ${cdHeight}`)
    // console.log(mainHeight);
    // console.log(headingHeight + descriptionHeigth + cdHeight);
    document.getElementById('tasks').style.height = (mainHeight - (headingHeight + descriptionHeigth + cdHeight) - 70) + 'px';
};
// event listners
window.onload = resizeTaskListDiv;
window.onresize = resizeTaskListDiv;




/******************************************************************************************* 
                Check if all the fields are properly filled while adding task
**************************************************************************************** */
function checkDetailFields(event) {
    // this function is called when the add button is clicked

    // first check if the description is added
    if ($('#description')[0].value.trim() == "") {
        window.alert('Add a Description');
        event.preventDefault(); // prevent the default behaviour of submit button
    } else {
        // if the description is added then check if category is added
        if ($('#category')[0].value == "Choose a category") {
            window.alert('Choose a Category');
            event.preventDefault();
        } else {
            // if category is added then check if due date is added
            if ($('#date')[0].value.trim() == "") {
                window.alert('Enter Due Date');
                event.preventDefault();
            }
        }
    }

}

// adding event listner on add button
$('#addButton')[0].addEventListener('click', checkDetailFields);