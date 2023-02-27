const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');

const dialogAlert = document.getElementById('dialogAlert');
const dialogConfirm = document.getElementById('dialogConfirm');
const dialogPrompt = document.getElementById('dialogPrompt');

const okAlert = document.getElementById('okAlert');

const cancelConfirm = document.getElementById('cancelConfirm');
const okConfirm = document.getElementById('okConfirm');

const inputPrompt = dialogPrompt.querySelector('input');
const cancelPrompt = document.getElementById('cancelPrompt');
const okPrompt = document.getElementById('okPrompt');

const output = document.querySelector('output');

// Alert
alertBtn.addEventListener('click', () => {
    dialogAlert.showModal();
});
okAlert.addEventListener('click', () => {
    dialogAlert.close();
});

// Confirm
confirmBtn.addEventListener('click', () => {
    dialogConfirm.showModal();
});
cancelConfirm.addEventListener('click', () => {
    output.innerText = `Confirm result : false`;
    dialogConfirm.close();
});
okConfirm.addEventListener('click', () => {
    output.innerText = `Confirm result : true`;
    dialogConfirm.close();
});


promptBtn.addEventListener('click', () => {
    inputPrompt.value = "";
    dialogPrompt.showModal();
});
cancelPrompt.addEventListener('click', () => {
    output.innerText = `User didn't enter anything`;
    dialogPrompt.close();
});
okPrompt.addEventListener('click', () => {

    let pure_input = DOMPurify.sanitize(inputPrompt.value);
    if (pure_input != "") {
        output.innerHTML = `Prompt result : ${pure_input}`;
    }
    else {
        output.innerHTML = `User didn't enter anything`;
    }
    dialogPrompt.close();
});

