document.addEventListener("DOMContentLoaded", function(){

const  commentInput =document.getElementById("comment");
const commentCounter = document.getElementById("counter");
const commentList =document.querySelector(".comment-box ul");
const uppercaseButton = document.getElementById("uppercase-comment");
const lowercaseButton =document.getElementById("lowercase-comment");

commentInput.addEventListener("input", function() {
    const remainingCharacters = 255 - commentInput.value.trim().length;
    commentCounter.textContent = remainingCharacters;
});

function addComment(text, style) {
    const li = document.createElement("li");
    const paragraph = document.createElement("p");
    paragraph.style.color = style;
    paragraph.style.fontWeight = "bold";
    paragraph.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Borrar";
    deleteButton.addEventListener("click", function() {
        li.remove(); 
    });

    li.appendChild(paragraph);
    li.appendChild(deleteButton); 
    commentList.appendChild(li);
}

document.getElementById("submit-comment").addEventListener("click", function() {
    const commentText = commentInput.value.trim();
    if (commentText.length > 0) {
        addComment(commentText, "green");
        commentInput.value = "";
        commentCounter.textContent = "255";
    }
});

uppercaseButton.addEventListener("click", function(){
    const commentText = commentInput.value.trim().toUpperCase();
    if (commentText.length > 0) {
        addComment(commentText, "green");
        commentInput.value = "";
        commentCounter.textContent = "255";
    }

});

lowercaseButton.addEventListener("click", function(){
    const commentText = commentInput.value.trim().toLowerCase();
        if (commentText.length > 0) {
            addComment(commentText, "green");
            commentInput.value = "";
            commentCounter.textContent = "255";
        }


});


});