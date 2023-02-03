document.getElementById("textbar").addEventListener("keypress", function(event) {
    if (event.key == "Enter")
        addTask(event.target);
});

var activeLi = document.getElementsByClassName("task-text").length;

function updateStatus(){
    if (activeLi <= 0)
    {
        document.getElementById("list-status").innerText = "You have no pending tasks remaining!";
    }
    else
    {
        document.getElementById("list-status").innerText = "The following tasks are pending...";
    }
}

function removeBtnClick(e){
    let parentLi = e.parentNode.parentNode;
    parentLi.remove();
    if (parentLi.firstElementChild.style.textDecoration != "line-through")
        activeLi -= 1;
    updateStatus();
}

function doneBtnClk(e) {
    e.style.visibility = "hidden";
    let parentLi = e.parentNode.parentNode;
    parentLi.firstElementChild.style.textDecoration = "line-through";
    activeLi -= 1;
    updateStatus();
}

function addTask(e) {
    string = document.getElementById("textbar").value;
    if (string != "")
    {
        let ulRef = document.getElementsByClassName("task-list")[0].firstElementChild;
        let newLi = document.createElement("li");
        newLi.className = "flex-style";
        newLi.innerHTML = `
            <div class="task-text active-color">
                ${string}
            </div>
            <div>
                <input type="button" class="btn remove-btn" value="Remove" onclick="removeBtnClick(this)">
                <input type="button" class="btn done-btn" value="Done" onclick="doneBtnClk(this)">
            </div>
        `;
        ulRef.append(newLi);
        document.getElementById("textbar").value = "";
        activeLi += 1;
        updateStatus();
    }
}