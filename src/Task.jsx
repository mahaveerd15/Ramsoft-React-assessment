import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import EditTaskModal from './modal/EditTaskModal';

const Task = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.task.title);
  const [editedDesc, setEditedDesc] = useState(props.task.desc);
  const [editedDeadline, setEditedDeadline] = useState(props.task.deadline);
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskJson", JSON.stringify(props.task));
  };

 const openEditModal = () => {
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const updatedTask = {
      ...props.task,
      title: editedTitle,
      desc: editedDesc,
      deadline: editedDeadline,
    };
    props.updateTask(updatedTask);
    closeEditModal();
  };


  const handleRemove = () => {
    const remove = window.confirm("Remove task?");
    if (remove) {
      props.removeTask(props.task);
    }
  };

  return (
    <Card
      draggable={true}
      onDragStart={handleDragStart}
      className="task-card"
      style={{marginBottom: 10}}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {props.task.title} - ({props.task.deadline})
        </Typography>
        <Typography variant="body1" paragraph>
          {props.task.desc}
        </Typography>
        <IconButton aria-label="edit" onClick={openEditModal}>
          <EditIcon />
        </IconButton>
        <EditTaskModal
          isOpen={isEditing}
          onClose={closeEditModal}
          task={props.task}
          onSave={handleSaveEdit}
        />
        <IconButton
          aria-label="delete"
          onClick={handleRemove}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};


export default Task;
