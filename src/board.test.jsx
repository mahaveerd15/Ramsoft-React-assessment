import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mocking localStorage functions
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// jest.mock('./yourModule'); // Mocking the module for better control over the functions

describe('BoardComponent', () => {
  test('displays board data from localStorage', async () => {
    const testData = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }];
    getBoardData.mockResolvedValue(testData); // Mocking the function response

    render(<BoardComponent />);

    const taskElements = await screen.findAllByText(/Task/);
    expect(taskElements).toHaveLength(2);
  });

  test('adds new task and updates localStorage', async () => {
    const testData = [{ id: 1, title: 'Task 1' }];
    getBoardData.mockResolvedValue(testData);

    render(<BoardComponent />);

    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);

    const newTaskElement = await screen.findByText('New Task');
    expect(newTaskElement).toBeInTheDocument();

    const updatedData = [{ id: 1, title: 'Task 1' }, { id: 2, title: 'New Task' }];
    expect(setBoardData).toHaveBeenCalledWith(updatedData);
  });
});
