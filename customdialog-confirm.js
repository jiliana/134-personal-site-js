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

const showConfirm = confirmBtn.addEventListener('click', () => {
    dialogConfirm.showModal();
});
const falseConfirm = cancelConfirm.addEventListener('click', () => {
    output.innerText = `Confirm result : false`;
    dialogConfirm.close();
});
const trueConfirm = okConfirm.addEventListener('click', () => {
    output.innerText = `Confirm result : true`;
    dialogConfirm.close();
});

export {
    showConfirm,
    falseConfirm,
    trueConfirm
}