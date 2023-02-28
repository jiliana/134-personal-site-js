const addBtn = document.getElementById('add-btn');
const dialog = document.getElementById('dialog');
const form = document.getElementById('form');
const cancelBtn = document.getElementById('cancel');
const blogList = document.getElementById('bloglist');
const deleteDialog = document.getElementById('delete-dialog');
const cancelDeleteBtn = document.getElementById('cancel-delete');
const deleteForm = document.getElementById('delete-form');

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

                // target the element at index when submitting form
                dialog.setAttribute('data-index', index);
                dialog.showModal();
            });

            deleteBtn.addEventListener('click', () => {
                // target the element at index when submitting form
                deleteDialog.setAttribute('data-index', index);
                deleteDialog.showModal();
            });
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



