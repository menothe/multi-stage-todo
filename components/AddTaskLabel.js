import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


// label on left hand of screen to trigger <AddTaskDialogue />
export const AddTaskLabel = ({ showAddTaskDialogue }) => (
  <div className={'column addTask'}>
    <h3>Add Task</h3>
    <FloatingActionButton onClick={showAddTaskDialogue} mini={true} style={{ marginLeft: 10 }}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
)
