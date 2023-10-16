import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

function TodoCard({ todo, removeTodo }) {
  const [collapse, setCollapse] = useState(true);

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const deadlineDate = Date.parse(todo.dueDate);
  const todayDate = Date.parse(todo.currentDate);

  const differenceDays = Math.floor((deadlineDate - todayDate) / _MS_PER_DAY);

  const difDays = msToTime(deadlineDate - todayDate);
  console.log(difDays);

  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days";
  }

  // function getYoutubeLikeToDisplay(millisec) {
  //   let seconds = (millisec / 1000).toFixed(0);
  //   let minutes = Math.floor(seconds / 60);
  //   let hours = "";
  //   if (minutes > 59) {
  //     hours = Math.floor(minutes / 60);
  //     hours = hours >= 10 ? hours : "0" + hours;
  //     minutes = minutes - hours * 60;
  //     minutes = minutes >= 10 ? minutes : "0" + minutes;
  //   }

  //   seconds = Math.floor(seconds % 60);
  //   seconds = seconds >= 10 ? seconds : "0" + seconds;
  //   if (hours != "") {
  //     return hours + ":" + minutes + ":" + seconds;
  //   }
  //   return minutes + ":" + seconds;
  // }

  // const differenceDays = getYoutubeLikeToDisplay(deadlineDate - todayDate);

  return (
    <li
      key={todo.id}
      className="w-full flex flex-col items-start justify-between rounded-3xl shadow-md shadow-slate-950/30 pb-10 p-3 backdrop-blur-sm bg-slate-900/50 gap-5 relative 
      group md:p-5 md:pb-16"
    >
      <Card type="blue" width="100%">
        <div className="flex flex-col gap-3 items-start justify-between w-full lg:flex-row lg:items-center">
          <h3 className="font-bold text-3xl font-mono capitalize">
            {todo.task}
          </h3>
          <div className="flex  gap-2 flex-col items-start md:items-center md:flex-row md:gap-5">
            <p className="text-md">
              <strong className="mx-1 text-violet-400 text-lg">
                {difDays}
              </strong>
              left
            </p>
            <p className="text-md">
              Deadline:
              <strong className="mx-1 text-violet-400 text-lg">
                {todo.dueDate}
              </strong>
            </p>
          </div>
        </div>
      </Card>

      <div className="w-full flex justify-center items-center transition-all">
        {collapse ? (
          <span
            className="p-2 cursor-pointer absolute bottom-0 text-3xl  transition-all ease-linear duration-150 hover:scale-150 hover:text-slate-950 group-hover:animate-bounce"
            onClick={() => setCollapse(!collapse)}
          >
            <BsChevronCompactDown />
          </span>
        ) : (
          <div className="flex flex-col w-full items-center ">
            <div className="flex w-full justify-between flex-col items-end gap-5">
              {todo.description.length > 0 && (
                <div className="text-md flex flex-col gap-2 w-full">
                  <Card type="blue">
                    Description:
                    <p className="text-xl mb-5">{todo.description}</p>
                  </Card>
                </div>
              )}
              <div className="text-md flex flex-col gap-2 w-full">
                <Card type="blue">
                  Details:
                  <p className="text-md">
                    Todo date added:
                    <strong className="mx-1 text-violet-400 text-lg">
                      {todo.currentDate}
                    </strong>
                  </p>
                  <p className="text-md">
                    Todo date deadline:
                    <strong className="mx-1 text-violet-400 text-lg">
                      {todo.dueDate}
                    </strong>
                  </p>
                  <p className="text-md">
                    <strong className="mx-1 text-violet-400 text-lg">
                      {differenceDays}
                    </strong>
                    days left
                  </p>
                </Card>
              </div>
              <Button
                width="fit-content"
                type="secondary"
                onClick={() => removeTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
            <span
              className="p-2 cursor-pointer absolute bottom-0 text-3xl  transition-all ease-linear duration-150 hover:scale-150 hover:text-slate-950 "
              onClick={() => setCollapse(!collapse)}
            >
              <BsChevronCompactUp />
            </span>
          </div>
        )}
      </div>
    </li>
  );
}

export default TodoCard;
