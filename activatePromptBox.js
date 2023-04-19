function activatePromptBox() {
    const userComment = prompt("Please add info!");

    const commentInputElement = document.getElementsByClassName("comments-input")[0].children[0];
    commentInputElement.value = userComment;
    commentInputElement.dispatchEvent(new Event('change'));

    const commentLength = commentInputElement.value.length;
    const saveButton = document.querySelector("button");

    setTimeout(function () {
        if (commentLength > 1) {
            //saveButton.click()
            saveButton.dispatchEvent(new Event("click"));
            saveButton.style.color = 'green'
            setTimeout(function () {
                saveButton.style.color = ""
            }, 5000)
        }
    }, 500)
}
