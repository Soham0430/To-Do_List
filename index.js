const addTaskBtn = document.querySelector(".input button");
const taskContainer = document.querySelector(".taskcontainer");

addTaskBtn.addEventListener("click", (evt) => {
    const newTask = document.createElement("div");
    const taskText = document.querySelector(".input input");
    newTask.className = 'task';
    newTask.innerHTML = '<p>' + taskText.value + '</p><i style="color: 1a027c; width="3vh" class="delete-btn fa-solid fa-delete-left"></i>';

    taskContainer.appendChild(newTask);
    taskText.value = '';

    saveData();
});

taskContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
        saveData();
    } else if (target.tagName === 'P') {
        target.style.textDecoration = 'line-through';
        target.style.color = '#7d7089';

        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

function showData() {
    taskContainer.innerHTML = localStorage.getItem("data");
}

showData();
