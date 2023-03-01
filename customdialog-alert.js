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

const showAlert = alertBtn.addEventListener('click', () => {
    dialogAlert.showModal();
});
const closeAlert = okAlert.addEventListener('click', () => {
    dialogAlert.close();
});

export {
    showAlert,
    closeAlert
}