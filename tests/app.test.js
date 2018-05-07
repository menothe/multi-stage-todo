import React from 'react';
import { AddTaskLabel } from '../components/AddTaskLabel';
import { AddTaskDialogue } from '../components/AddTaskDialogue';
import { Column } from '../components/Column';
import { TaskCard } from '../components/TaskCard';
import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render AddTaskLabel correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<AddTaskLabel />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should render AddTaskDialogue correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<AddTaskDialogue visible={undefined}/>);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should render Column correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Column />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should render TaskCard correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<TaskCard />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
