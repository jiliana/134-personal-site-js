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
        editBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22ZM19.02 3.482C17.08 1.542 15.18 1.492 13.19 3.482L11.98 4.692C11.88 4.792 11.84 4.952 11.88 5.092C12.2625 6.40438 12.9697 7.59912 13.9363 8.56572C14.9029 9.53232 16.0976 10.2395 17.41 10.622C17.4809 10.6452 17.5568 10.6481 17.6293 10.6305C17.7017 10.6128 17.7678 10.5752 17.82 10.522L19.02 9.312C20.01 8.332 20.49 7.382 20.49 6.422C20.5 5.432 20.02 4.472 19.02 3.482ZM15.61 11.53C15.32 11.39 15.04 11.25 14.77 11.09C14.5507 10.9594 14.3371 10.8192 14.13 10.67C13.96 10.56 13.76 10.4 13.57 10.24C13.5088 10.1954 13.4519 10.1452 13.4 10.09C13.07 9.81 12.7 9.45 12.37 9.05C12.34 9.03 12.29 8.96 12.22 8.87C12.12 8.75 11.95 8.55 11.8 8.32C11.6575 8.13192 11.5272 7.93485 11.41 7.73C11.25 7.46 11.11 7.19 10.97 6.91C10.9492 6.86522 10.9288 6.82022 10.909 6.775C10.761 6.442 10.326 6.345 10.069 6.602L4.34 12.331C4.21 12.461 4.09 12.711 4.06 12.881L3.52 16.711C3.42 17.391 3.61 18.031 4.03 18.461C4.39 18.811 4.89 19.001 5.43 19.001C5.55 19.001 5.67 18.991 5.79 18.971L9.63 18.431C9.81 18.401 10.06 18.281 10.18 18.151L15.902 12.43C16.162 12.17 16.063 11.725 15.726 11.58C15.6873 11.5634 15.6486 11.5468 15.61 11.53Z" fill="white"/>
        </svg>
        Edit`;
        deleteBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.03 22H13.99C13.7911 22 13.6003 21.921 13.4597 21.7803C13.319 21.6397 13.24 21.4489 13.24 21.25C13.24 21.0511 13.319 20.8603 13.4597 20.7197C13.6003 20.579 13.7911 20.5 13.99 20.5H21.03C21.2289 20.5 21.4197 20.579 21.5603 20.7197C21.701 20.8603 21.78 21.0511 21.78 21.25C21.78 21.4489 21.701 21.6397 21.5603 21.7803C21.4197 21.921 21.2289 22 21.03 22ZM13.64 16.69C14.03 17.08 14.03 17.71 13.64 18.11L10.66 21.09C10.1257 21.6211 9.41248 21.9339 8.65982 21.9672C7.90716 22.0005 7.16915 21.7519 6.59001 21.27C6.52001 21.21 6.46001 21.15 6.40001 21.09L5.53001 20.22L3.74001 18.43L2.88001 17.57C2.81001 17.5 2.75001 17.43 2.69001 17.36C2.2143 16.7833 1.97025 16.0501 2.00537 15.3033C2.04049 14.5566 2.35227 13.8496 2.88001 13.32L5.86001 10.34C5.95252 10.2473 6.06241 10.1738 6.18338 10.1236C6.30436 10.0734 6.43404 10.0476 6.56501 10.0476C6.69598 10.0476 6.82566 10.0734 6.94663 10.1236C7.06761 10.1738 7.17749 10.2473 7.27001 10.34L13.64 16.69ZM21.12 10.641L16.12 15.641C16.0275 15.7337 15.9176 15.8073 15.7966 15.8574C15.6757 15.9076 15.546 15.9334 15.415 15.9334C15.284 15.9334 15.1544 15.9076 15.0334 15.8574C14.9124 15.8073 14.8025 15.7337 14.71 15.641L8.34001 9.29101C7.95001 8.90101 7.95001 8.27101 8.34001 7.87101L13.34 2.88101C13.9064 2.31895 14.672 2.00356 15.47 2.00356C16.268 2.00356 17.0336 2.31895 17.6 2.88101L21.12 6.39101C21.6819 6.95547 21.9974 7.71953 21.9974 8.51601C21.9974 9.31249 21.6819 10.0765 21.12 10.641Z" fill="white"/>
        </svg>
        Delete`;
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

        li.appendChild(date);
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        blogList.appendChild(li);
    });

}