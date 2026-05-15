//mini project 4
const tasks = [];

function addTask(title, priority){
    if (title.length !== 0 && priority.length !== 0){
        const finished = false;
        const task = {title, priority, finished};
        tasks.push(task);
    }

}

function finishTask(title){
    for(const task of tasks){
        if(task.title === title){
            task.finished = true;
        }
    }
}

function listTasks(){
    console.log("Tasks:")
    for(const task of tasks){
        console.log(task.title);
        console.log(task.priority);
        if (task.status){
            console.log("Finished")
        }else {
            console.log("Pending")
        }
    }
}

function listPendingTasks(){
    console.log("Pending Tasks:");
    for(const task of tasks){
        if (!task.status){
            console.log(task.title);
            console.log(task.priority);
            console.log("Pending");
        }
    }
}

addTask("Learn JS", "High");
addTask("Drink Water", "High");
addTask("Brush teeth", "High");
addTask("Walking dog", "Medium");
addTask("Gym", "Low");
addTask("Wash car", "Low");

finishTask("Learn JS");
finishTask("Brush teeth");

listTasks();
listPendingTasks