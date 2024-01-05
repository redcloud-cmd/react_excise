/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/react";
const todoList = [
  { title: "开发任务-1", status: "2023-05-22 18:15" },
  { title: "开发任务-1", status: "2023-12-29 13:41" },
  { title: "开发任务-3", status: "2023-05-22 18:15" },
  { title: "开发任务-5", status: "2020-05-22 18:15" },
  { title: "测试任务-3", status: "2020-05-22 18:15" },
];
const ongoingList = [
  { title: "开发任务-4", status: "2022-05-22 18:15" },
  { title: "开发任务-6", status: "2022-05-22 18:15" },
  { title: "测试任务-2", status: "2022-05-22 18:15" },
];
const doneList = [
  { title: "开发任务-2", status: "2022-05-22 18:15" },
  { title: "测试任务-1", status: "2022-05-22 18:15" },
];

const Banner = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>我的看板</h1>
    </header>
  );
};

const KanbanBoard = ({ children }) => {
  return <main className="kanban-board">{children}</main>;
};

const KanbanColumn = ({ children, className, title }) => {
  const combinedClassName = `kanban-column ${className}`;
  return (
    <section className={combinedClassName}>
      <h2>{title}</h2>
      <ul>{children}</ul>
    </section>
  );
};

const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const UPDATE_INTERVAL = MINUTE;
const KanbanCard = ({ title, status }) => {
  const [displayTime, setDisplayTime] = useState(status);
  useEffect(() => {
    const updateDisplayTime = () => {
      const timePassed = new Date() - new Date(status);
      // console.log(timePassed,'',status,new Date())
      let relativeTime = "刚刚";
      if (MINUTE <= timePassed && timePassed < HOUR) {
        relativeTime = `${Math.ceil(timePassed / MINUTE)} 分钟前`;
      } else if (HOUR <= timePassed && timePassed < DAY) {
        relativeTime = `${Math.ceil(timePassed / HOUR)} 小时前`;
      } else if (DAY <= timePassed) {
        relativeTime = `${Math.ceil(timePassed / DAY)} 天前`;
      }
      setDisplayTime(relativeTime)
    };
    const intervalId = setInterval(updateDisplayTime,UPDATE_INTERVAL)
    updateDisplayTime();
    return function cleanup(){
      clearInterval(intervalId)
    }
  },[status]);
  return (
        <li className="kanban-card">
          <div className="card-title">{title}</div>
          <div className="card-status">{displayTime}</div>
        </li>
      );
};

// const KanbanCard = ({ title, status }) => {
//   return (
//     <li className="kanban-card">
//       <div className="card-title">{title}</div>
//       <div className="card-status">{status}</div>
//     </li>
//   );
// };
const KanbanNewCard = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(e)
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(title);
    }
  };

  return (
    <li className="kanban-card">
      <h3>添加新卡片</h3>
      <div className="card-title">
        <input
          type="text"
          value={title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
    </li>
  );
};
function App() {
  const kanban_board = {
    flex: 10,
    display: "flex",
    flexRirection: "row",
    gap: "1rem",
    margin: " 0 1rem 1rem",
  };
  const [showAdd, setShowAdd] = useState(false);
  const handleAdd = (e) => {
    setShowAdd(true);
  };
  const handleSubmit = (title) => {
    // console.log(title);
    todoList.unshift({ title: title, status: new Date().toString() });
    setShowAdd(false);
  };
  return (
    <div className="App">
      <Banner></Banner>
      <KanbanBoard>
        <KanbanColumn
          className="column-todo"
          title={
            <>
              待处理{" "}
              <button onClick={handleAdd} disabled={showAdd}>
                &#8853; 添加新卡片
              </button>
            </>
          }
        >
          {showAdd && <KanbanNewCard onSubmit={handleSubmit} />}
          {todoList.map((item, index) => {
            return <KanbanCard {...item} key={index}></KanbanCard>;
          })}
        </KanbanColumn>
        <KanbanColumn className="column-ongoing" title="进行中">
          {ongoingList.map((item) => {
            return <KanbanCard {...item}></KanbanCard>;
          })}
          {/* </ul> */}
        </KanbanColumn>
        <KanbanColumn className="column-done" title="已完成">
          {doneList.map((item) => {
            return <KanbanCard {...item}></KanbanCard>;
          })}
        </KanbanColumn>
      </KanbanBoard>
    </div>
  );
}

export default App;
