// used in <TaskCard /> to render label for user action
export const typeActionLookup = {
  'todo': 'start',
  'in-progress': 'finish',
  'complete': 'archive'
}

// used in progressTask() to lookup next state
export const nextTypeLookup = {
  'todo': 'in-progress',
  'in-progress': 'complete',
  'complete': 'archive'
}
