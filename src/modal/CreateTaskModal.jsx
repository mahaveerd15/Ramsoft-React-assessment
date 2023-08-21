import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Typography, TextField, Button, Box } from '@mui/material';

const CreateTaskModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleCreate = () => {
    if (title && desc && deadline) {
      onCreate(title, desc, deadline);
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
        <Typography variant="h5" gutterBottom>
          Create New Task
        </Typography>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Description"
          fullWidth
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          margin="normal"
          multiline
        />
        <TextField
          label="Deadline"
          fullWidth
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreate}
          disabled={!title || !desc || !deadline}
        >
          Create Task
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateTaskModal;
