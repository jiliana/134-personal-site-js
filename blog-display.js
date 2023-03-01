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

import { blogArray } from "/blog-array.js";

export function displayBlogArray() {
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