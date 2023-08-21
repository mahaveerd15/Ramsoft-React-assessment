import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Typography, TextField, Button, Box, IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const EditTaskModal = ({ isOpen, onClose, task, onSave }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDesc, setEditedDesc] = useState(task.desc);
  const [editedDeadline, setEditedDeadline] = useState(task.deadline);

  const handleUpdate = () => {
    if (editedTitle && editedDesc && editedDeadline) {
      onSave({
        ...task,
        title: editedTitle,
        desc: editedDesc,
        deadline: editedDeadline,
      });
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '-15px' }}>
          <IconButton onClick={onClose}>
            <CancelIcon />
          </IconButton>
        </div>
        <Typography variant="h5" gutterBottom>
          Edit Task
        </Typography>
        <TextField
          label="Title"
          fullWidth
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          fullWidth
          value={editedDesc}
          onChange={(e) => setEditedDesc(e.target.value)}
          margin="normal"
          multiline
        />
        <TextField
          label="Deadline"
          fullWidth
          value={editedDeadline}
          onChange={(e) => setEditedDeadline(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          disabled={!editedTitle || !editedDesc || !editedDeadline}
        >
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default EditTaskModal;
