import React from 'react';
import { TaskCard } from './TaskCard';

export const Column = ({ label, tasks, state, progressTask }) => (
  <div className={'column'}>
    <h3>{label}</h3>
    {tasks && tasks.filter(t => t.state === state).map((t, i) => (
      <TaskCard state={t.state} progressTask={progressTask} key={i} name={t.taskName} id={t.id} description={t.taskDescription} />
    ))}
  </div>
);
