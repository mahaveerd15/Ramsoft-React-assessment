import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Task = (props) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskJson", JSON.stringify(props.task));
  };

  const handleEdit = () => {
    const title = prompt("Title");
    const desc = prompt("Description");
    const deadline = prompt("Deadline");
    const updatedTask = {
      ...props.task,
      title,
      desc,
      deadline
    };
    props.updateTask(updatedTask);
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
        <IconButton
          aria-label="edit"
          onClick={handleEdit}
        >
          <EditIcon />
        </IconButton>
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
