import {
    alertBtn,
    confirmBtn,
    promptBtn,
    dialogAlert,
    dialogConfirm,
    dialogPrompt,
    okAlert,
    cancelConfirm,
    okConfirm,
    inputPrompt,
    cancelPrompt,
    okPrompt,
    output
} from "/customdialog-const.js";

const showPrompt = promptBtn.addEventListener('click', () => {
    inputPrompt.value = "";
    dialogPrompt.showModal();
});
const closePrompt = cancelPrompt.addEventListener('click', () => {
    output.innerText = `User didn't enter anything`;
    dialogPrompt.close();
});
const goodPrompt = okPrompt.addEventListener('click', () => {
    let pure_input = DOMPurify.sanitize(inputPrompt.value);
    if (pure_input != "") {
        output.innerHTML = `Prompt result : ${pure_input}`;
    }
    else {
        output.innerHTML = `User didn't enter anything`;
    }
    dialogPrompt.close();
});

export {
    showPrompt,
    closePrompt,
    goodPrompt
}
