const addBtn = document.getElementById('add-btn');
const dialog = document.getElementById('dialog');
const form = document.getElementById('form');
const cancelBtn = document.getElementById('cancel');
const blogList = document.getElementById('bloglist');
const deleteDialog = document.getElementById('delete-dialog');
const cancelDeleteBtn = document.getElementById('cancel-delete');
const deleteForm = document.getElementById('delete-form');

// Pre-populate data if local storage is empty
var blogArray = JSON.parse(localStorage.getItem('blogArray')) || [
    {
        title: 'First Blog',
        date: '2023-03-01',
        summary: 'This is the first blog post.'
    },
    {
        title: 'Second Blog',
        date: '2023-03-02',
        summary: 'This is the second blog post.'
    },
    {
        title: 'Third Blog',
        date: '2023-03-02',
        summary: 'This is the third blog post.'
    }
];

// Display the blogs when page is opened
displayBlogArray();

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

function displayBlogArray() {
    blogList.innerHTML = '';

        blogArray.forEach((blog, index) => {
            const li = document.createElement('li');
            const h2 = document.createElement('h2');
            const date = document.createElement('time');
            const p = document.createElement('p');
            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            h2.textContent = blog.title;
            date.textContent = blog.date;
            p.textContent = blog.summary;
            editBtn.innerHTML = `Edit`;
            deleteBtn.innerHTML = `Delete`;

            editBtn.addEventListener('click', () => {
                document.getElementById('titleInput').value = blog.title;
                document.getElementById('dateInput').value = blog.date;
                document.getElementById('summaryInput').value = blog.summary;

                // Target the element at index when submitting form
                dialog.setAttribute('data-index', index);
                dialog.showModal();
            });

            deleteBtn.addEventListener('click', () => {
                // Target the element at index when submitting form
                deleteDialog.setAttribute('data-index', index);
                deleteDialog.showModal();
            });

            // Format blog list element
            li.appendChild(h2);
            li.appendChild(date);
            li.appendChild(p);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);

            blogList.appendChild(li);
        });

}

deleteForm.addEventListener('submit', (event) => {
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



