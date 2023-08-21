import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Board from "../components/Board";

describe("Board Component", () => {
  it("should render correctly", () => {
    render(<Board />);
    expect(screen.getByText('Add Column')).toBeInTheDocument();
  });

  // it("should add a new column when 'Add Column' button is clicked", async () => {
  //   render(<Board />);
  //   fireEvent.click(screen.getByText('Add Column'));
  //   const inputPrompt = await screen.findByLabelText('Enter column title');
  //   fireEvent.change(inputPrompt, { target: { value: "New Column Title" } });
  //   fireEvent.click(screen.getByText('OK'));
  //   expect(screen.getByText('New Column Title')).toBeInTheDocument();
  // });

  // it("should update a column's title when edited", async () => {
  //   render(<Board />);
  //   fireEvent.click(screen.getByText("Edit"));
  //   const inputPrompt = await screen.findByLabelText('Enter new column title');
  //   fireEvent.change(inputPrompt, { target: { value: "Updated Column Title" } });
  //   fireEvent.click(screen.getByText('OK'));
  //   expect(screen.getByText("Updated Column Title")).toBeInTheDocument();
  // });

  // it("should remove a task from a column when 'Remove' button is clicked", () => {
  //   render(<Board />);
  //   fireEvent.click(screen.getByText("Remove"));
  //   expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
  // });

  // it("should move a task from one column to another when 'Move' button is clicked", () => {
  //   render(<Board />);
  //   // Simulate drag and drop behavior
  //   fireEvent.dragStart(screen.getByText("Task 1"));
  //   fireEvent.dragOver(screen.getByText("Column 2"));
  //   fireEvent.drop(screen.getByText("Column 2"));
  //   expect(screen.getByText("Task 1")).toBeInTheDocument();
  // });

});
