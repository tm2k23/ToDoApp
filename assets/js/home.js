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
                                Highlight the selected task 
**************************************************************************************** */
for (let inputCheckbox of document.querySelectorAll('[name="tasksToDelete"]')) {
    let checkboxValue = inputCheckbox.getAttribute('value');
    inputCheckbox.addEventListener('click', function() {
        if (inputCheckbox.checked == true) {
            console.log('checkbox is checked');
            document.getElementById(checkboxValue).classList.add("highlightTheTask");
        } else {
            document.getElementById(checkboxValue).classList.remove("highlightTheTask");
        }
    });
}