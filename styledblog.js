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
import { displayBlogArray } from "/styledblog-display.js";
import { blogArray } from "/blog-array.js";

// Display the blogs when page is opened
displayBlogArray();

// -------------------
// Event Listeners
// -------------------
addBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    if (dialog.hasAttribute('data-index')) {
        dialog.removeAttribute('data-index');
    }
    dialog.close();
});

cancelDeleteBtn.addEventListener('click', () => {
    if (deleteDialog.hasAttribute('data-index')) {
        deleteDialog.removeAttribute('data-index');
    }
    deleteDialog.close();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const date = document.getElementById('dateInput').value;
    const summary = document.getElementById('summaryInput').value;


    if (dialog.hasAttribute('data-index')) {
        // EDIT
        // edit blog element at index = (data-index)
        const index = dialog.getAttribute('data-index');
        blogArray[index].title = title;
        blogArray[index].date = date;
        blogArray[index].summary = summary;
    }
    else {
        // ADD
        // add blog element to array
        blogArray.push({
            title: title,
            date: date,
            summary: summary
        })
    }

    if (dialog.hasAttribute('data-index')) {
        dialog.removeAttribute('data-index');
    }

    // save array to local storage
    localStorage.setItem('blogArray', JSON.stringify(blogArray));

    displayBlogArray();

    dialog.close();

});


deleteForm.addEventListener('submit', (event) => {
    event.preventDefault;

    // delete element at index
    if (deleteDialog.hasAttribute('data-index')) {
        const index = deleteDialog.getAttribute('data-index');
        blogArray.splice(index, 1);
    }

    if (deleteDialog.hasAttribute('data-index')) {
        deleteDialog.removeAttribute('data-index');
    }

    localStorage.setItem('blogArray', JSON.stringify(blogArray));
    displayBlogArray();
    deleteDialog.close();
});



