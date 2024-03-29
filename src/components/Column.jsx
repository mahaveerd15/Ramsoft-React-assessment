import Task from "./Task";
import { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateTaskModal from '../modal/CreateTaskModal';


const Column = (props) => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);


      const openCreateTaskModal = () => {
    setIsCreatingTask(true);
  };

  const closeCreateTaskModal = () => {
    setIsCreatingTask(false);
  };

const handleCreateTask = (title, desc, deadline) => {
    const task = {
      title,
      desc,
      deadline,
      id: new Date().getTime(),
      colId: props.column.id,
    };
    props.update(props.column.id, {
      ...props.column,
      tasks: [...props.column.tasks, task],
    });
    closeCreateTaskModal();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("taskJson");
    const task = JSON.parse(data);
    const fromColumnId = task.colId;
    const toColumnId = props.column.id;

    props.moveTask(task, fromColumnId, toColumnId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpdateTask = (updatedTask) => {
    const tasks = [...props.column.tasks];
    const index = tasks.findIndex((x) => x.id === updatedTask.id);
    tasks[index] = updatedTask;
    props.update(props.column.id, {
      ...props.column,
      tasks
    });
  };

  const handleRemoveTask = (task) => {
    const tasks = props.column.tasks.filter((x) => x.id !== task.id);
    props.update(props.column.id, {
      ...props.column,
      tasks
    });
  };

  const sortColumn = () => {
    
    const sortedarray = props.tasks.slice().sort((a, b) => a.title.localeCompare(b.title));
    props.update(props.column.id, {
      ...props.column,
      sortedarray
    });
  }

   return (
    <Card style={{ width: "400px", height: '100%' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
           <Typography variant="h6">{props.column.title}</Typography>
           <Button variant="contained" color="primary" onClick={sortColumn}>sort</Button>
          <IconButton color="primary" onClick={openCreateTaskModal}>
            <AddIcon />
          </IconButton>
        </div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ padding: '20px 5px 20px 5px' }}
        >
          {props.column.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              updateTask={handleUpdateTask}
              removeTask={handleRemoveTask}
            />
          ))}
        </div>
        <CreateTaskModal
          isOpen={isCreatingTask}
          onClose={closeCreateTaskModal}
          onCreate={handleCreateTask}
        />
      </CardContent>
    </Card>
  );
};

export default Column;
