import { useState } from "react";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, taskIndex) =>
            taskIndex === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleInputChange = (e) => setNewTask(e.target.value);

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, {text: newTask, completed: false}]);
            setNewTask('');
        }
    };

    const clearTasksList = () => setTasks([]);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>To Do List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? 'task-completed' : ''}>
                        <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(index)} />
                        {task.text}
                    </li>
                ))}
            </ul>
            <div style={{ marginTop: '20px' }}>
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter a new task" />
                <br />
                <button type="button" onClick={addTask} style={{marginTop: '10px'}}>Add Task</button>
            </div>

            {tasks.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <button type="button" onClick={clearTasksList}>Clear Tasks List</button>
                </div>
            )}
        </div>
    );
};

export default ToDo;