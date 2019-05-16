// const trash = "https://image.flaticon.com/icons/svg/1214/1214428.svg";

// Add an event listener to the #add-task input field
// Only addTask if there is text in the input
// Remove the task text in the input once its added

document.getElementById('add-task').addEventListener('click', function() {
    let taskValue = document.getElementById('task-value').value;
    if (taskValue) addTask(taskValue);
    document.getElementById('task-value').value = '';
})

////// TASK FUNCTIONS

// Create a function addTask

const addTask = taskValue => {
    let task = document.createElement('li');
    task.classList.add('task');
    task.classList.add('fill');
    task.draggable = true;
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);

    let taskContent = document.createElement('div');
    taskContent.classList.add("task-content");
    taskContent.innerText = taskValue;

    let trash = document.createElement('div');
    trash.classList.add('trash');
    trash.innerText = "X";
    trash.addEventListener('click', removeTask);


    task.appendChild(taskContent);
    task.appendChild(trash);

    let tasks = document.getElementById('tasks-added');
    tasks.prepend(task);
  }


// Create a function removeTask

const removeTask = (event) => {
    let task = event.target.parentNode;
    task.remove();
}

////// DRAG & DROP

// Create a variable task to store the selected task
let task;

// Add an event listener dragstart to task

const dragStart = (event) => {
    console.log("START")
    event.target.className += ' hold';
    task = event.target;
    setTimeout(() => (event.target.className = "invisible"), 0);

}


// Create a dragEnd function

const dragEnd = () => {
    console.log("END")
    event.target.className = 'task fill';
}

// Create dropzones by selecting .dropzone


// Add eventlisteners to each dropzone


// Create a function dragEnter


// Create a function dragOver


// Create a function dragLeave


// Create a function dragLeave


// Create a function dragDrop














