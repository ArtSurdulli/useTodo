import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import { type } from "@testing-library/user-event/dist/type";

function Todo({
  task,
  setTask,
  onClick,
  currentDate,
  setCurrentDate,
  dueDate,
  setDueDate,
  description,
  setDescription,
  modal,
  setModal,
  fullDate,
}) {
  function openModal() {
    setModal(!modal);
  }

  return (
    <>
      {modal ? (
        <div
          className="fixed z-20 w-2/4 top-10 left-1/2 transform -translate-x-1/2 
          border-2 backdrop-blur-md bg-gradient-to-b from-slate-950/50 to-gray-950/50 border-violet-800 border-solid p-5 rounded-3xl text-sky-300 flex flex-col w-xlg gap-5"
          //   onBlur={() => setModal(false)}
        >
          <Button type="secondary" onClick={() => setModal(false)}>
            Close
          </Button>
          <Card type="slate">
            <label htmlFor="title">Todo Title</label>
            <input
              type="title"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="text-sky-300  bg-transparent h-fit text-md p-1 md:px-1 md:py-2 rounded-lg outline-none placeholder:text-sky-300 placeholder:font-bold font-bold"
            />
          </Card>

          <Card type="slate">
            <label htmlFor="description">Todo Description</label>
            <textarea
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-sky-300  bg-transparent h-fit text-md p-1 md:px-1 md:py-2 rounded-lg outline-none placeholder:text-sky-300 placeholder:font-bold font-bold"
              rows="4"
            />
          </Card>

          <Card type="slate">
            <label htmlFor="expdate">Due date</label>
            <input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="text-sky-300  bg-transparent h-fit text-md p-1 md:px-1 md:py-2 rounded-lg outline-none placeholder:text-sky-300 placeholder:font-bold font-bold accent-sky-300"
              min={fullDate}
            />
          </Card>

          <input
            type="datetime-local"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            className="hidden"
          />

          <Button type="primary" onClick={onClick}>
            Add
          </Button>
        </div>
      ) : (
        <Button type="secondary" onClick={openModal}>
          Add a Todo
        </Button>
      )}

      {modal && (
        <div
          onClick={() => setModal(false)}
          className="modal-overlay absolute bg-slate-950/30 top-0 left-0 right-0 bottom-0 z-10"
        ></div>
      )}
    </>
  );
}

export default Todo;
