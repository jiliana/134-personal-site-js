const addBtn = document.getElementById('add-btn');
const dialog = document.getElementById('dialog');
const form = document.getElementById('form');
const cancelBtn = document.getElementById('cancel');
const blogList = document.getElementById('bloglist');

var blogArray = JSON.parse(localStorage.getItem('blogArray'));

displayBlogArray();

addBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    dialog.close();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const date = document.getElementById('dateInput').value;
    const summary = document.getElementById('summaryInput').value;


    if (form.hasAttribute('data-index')) {
        // EDIT
        // edit blog element at index = (data-index)

        
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
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';

        editBtn.addEventListener('click', () => {
            document.getElementById('titleInput').value = blog.title;
            document.getElementById('dateInput').value = blog.date;
            document.getElementById('summaryInput').value = blog.summary;

            // target the element at index when submitting form
            dialog.setAttribute('data-index', index);
            dialog.showModal();
        });

        deleteBtn.addEventListener('click', () => {
            // delete element at index
            blogArray.splice(index, 1);
            localStorage.setItem('blogArray', JSON.stringify(blogArray));
            displayBlogArray();
        });

        li.appendChild(h2);
        li.appendChild(date);
        li.appendChild(p);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        blogList.appendChild(li);
    });

}



