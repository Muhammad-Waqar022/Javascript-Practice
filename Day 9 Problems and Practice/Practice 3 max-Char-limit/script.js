const textArea=document.getElementById("textarea");
const update=document.getElementById("update")
const message=document.getElementById("max-message");

textArea.addEventListener("input", () => {
    // Limit to 100 characters first
    textArea.value = textArea.value.slice(0, 100);
    
    let length = textArea.value.length;
    update.innerHTML = length;

    if (length === 100) {
        message.style.display = "block";
        message.innerText = "Max limit reached!";
    } else {
        message.style.display = "none";
    }
});
