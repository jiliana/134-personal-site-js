import {
    addBtn,
    dialog,
    form,
    cancelBtn,
    blogList,
    deleteDialog,
    cancelDeleteBtn,
    deleteForm
} from "/blog-const.js";
import { displayBlogArray } from "/blog-display.js";
import { blogArray } from "/blog-array.js";

// Display the blogs when page is opened
displayBlogArray();

// -------------------
// Event Listeners
// -------------------
const addOrEditEvent = form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const date = document.getElementById('dateInput').value;
    const summary = document.getElementById('summaryInput').value;


    if (dialog.hasAttribute('data-index')) {
        // EDIT
        // Edit blog element at index = (data-index)
        const index = dialog.getAttribute('data-index');
        blogArray[index].title = title;
        blogArray[index].date = date;
        blogArray[index].summary = summary;
    }
    else {
        // ADD
        // Add blog element to array
        blogArray.push({
            title: title,
            date: date,
            summary: summary
        })
    }

    if (dialog.hasAttribute('data-index')) {
        dialog.removeAttribute('data-index');
    }

    // Update local storage and display
    localStorage.setItem('blogArray', JSON.stringify(blogArray));
    displayBlogArray();
    dialog.close();

});

const addEvent = addBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
});

const cancelEvent = cancelBtn.addEventListener('click', () => {
    if (dialog.hasAttribute('data-index')) {
        dialog.removeAttribute('data-index');
    }
    dialog.close();
});

const cancelDeleteEvent = cancelDeleteBtn.addEventListener('click', () => {
    if (deleteDialog.hasAttribute('data-index')) {
        deleteDialog.removeAttribute('data-index');
    }
    deleteDialog.close();
});

const deleteEvent = deleteForm.addEventListener('submit', (event) => {
    event.preventDefault;

    // Delete element at index
    if (deleteDialog.hasAttribute('data-index')) {
        const index = deleteDialog.getAttribute('data-index');
        blogArray.splice(index, 1);
    }

    if (deleteDialog.hasAttribute('data-index')) {
        deleteDialog.removeAttribute('data-index');
    }

    // Update local storage and display
    localStorage.setItem('blogArray', JSON.stringify(blogArray));
    displayBlogArray();
    deleteDialog.close();
});


