function activatePromptBox() {
    const commentInputElement = document.getElementsByClassName("comments")[0].children[0];
    const userComment = prompt("Please add comment!");

    commentInputElement.value = userComment;
    commentInputElement.dispatchEvent(new Event('change'));
}
