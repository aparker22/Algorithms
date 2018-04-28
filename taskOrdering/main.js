require('assert');

let tasks = [
    {"node": "a", "dependents": ["b", "c"]},
    {"node": "b", "dependents": []},
    {"node": "c", "dependents": ["b"]},
    {"node": "d", "dependents": ["a", "e"]},
    {"node": "e", "dependents": ["d"]}
]

let completedTasks = [];

let filterTaskList = (node) => tasks.filter(task => task.node != node)

let findTaskOrder = () => {
    while (tasks.length > 0) {
        tasks.map((task) => {
            if (task.dependents.length === 0) {
                completedTasks.push(task.node);
                tasks = filterTaskList(task.node);  
            } else if (task.dependents.length > 0) {
                if (completedTasks.some(v => task.dependents.includes(v))) {
                    completedTasks.push(task.node);
                    tasks = filterTaskList(task.node);  
                }
                } 
            })
    }
    return completedTasks;
}

console.log(findTaskOrder());
