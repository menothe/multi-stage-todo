import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


// popup for user to submit a new task
export const AddTaskDialogue = ({ visible, addTask }) => (
  <Dialog modal={true} open={visible}
    actions={[
      <RaisedButton onClick={addTask} label='Add Task' primary={true} style={{ float: 'right', marginBottom: 15 }} />
    ]}
    >
    <TextField id="newTaskName" fullWidth={true} hintText={"Task Name"} />
    <br />
    <TextField id="newTaskDescription" fullWidth={true} hintText={"Task Description"} />
  </Dialog>
);
