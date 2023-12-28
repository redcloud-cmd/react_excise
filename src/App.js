/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { css } from "@emotion/react";
const todoList = [
  { title: "开发任务-1", status: "22-05-22 18:15" },
  { title: "开发任务-3", status: "22-05-22 18:15" },
  { title: "开发任务-5", status: "22-05-22 18:15" },
  { title: "测试任务-3", status: "22-05-22 18:15" },
];
const ongoingList = [
  { title: "开发任务-4", status: "22-05-22 18:15" },
  { title: "开发任务-6", status: "22-05-22 18:15" },
  { title: "测试任务-2", status: "22-05-22 18:15" },
];
const doneList = [
  { title: "开发任务-2", status: "22-05-22 18:15" },
  { title: "测试任务-1", status: "22-05-22 18:15" },
];

const Banner = ()=>{
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>我的看板</h1>
    </header>
  )
}

const KanbanBoard = ({ children }) => {
  return <main className="kanban-board">{children}</main>;
};

const KanbanColumn = ({ children, className ,title}) => {
  const combinedClassName = `kanban-column ${className}`;
  return (<section className={combinedClassName}>
    <h2>{title}</h2>
    <ul>{children}</ul>
  </section>);
};

const KanbanCard = ({ title, status }) => {
  return (
    <li className="kanban-card">
      <div className="card-title">{title}</div>
      <div className="card-status">{status}</div>
    </li>
  );
};
const KanbanNewCard = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(e)
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(e, "hanseleKeyDowns");
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
    console.log(title);
    todoList.unshift({ title: title, status: new Date().toDateString() });
    setShowAdd(false);
  };
  return (
    <div className="App">
      <Banner></Banner>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>我的看板</h1>
      </header> */}
      <KanbanBoard>
        <KanbanColumn className="column-todo" title={
          <>
           待处理 <button onClick={handleAdd}    disabled={showAdd}>&#8853; 添加新卡片</button>
          </>
        
        }>
          {/* <h2>
            待处理
            <button onClick={handleAdd}>⊕添加新卡片</button>
          </h2> */}
          {/* <ul> */}
          {showAdd && <KanbanNewCard onSubmit={handleSubmit}/>}
            {todoList.map((item, index) => {
              return <KanbanCard {...item} key={index}></KanbanCard>;
            })}
          {/* </ul> */}
        </KanbanColumn>
        <KanbanColumn className="column-ongoing" title='进行中'>
          {/* <section className='kanban-column column-ongoing'> */}
          {/* <h2>进行中</h2>
          <ul> */}
            {ongoingList.map((item) => {
              return <KanbanCard {...item}></KanbanCard>;
            })}
          {/* </ul> */}
        </KanbanColumn>
        <KanbanColumn className="column-done" title='已完成'>
          {/* <section className='kanban-column '> */}
          {/* <h2>已完成</h2>
          <ul> */}
            {doneList.map((item) => {
              return <KanbanCard {...item}></KanbanCard>;
            })}
          {/* </ul> */}
        </KanbanColumn>
      </KanbanBoard>
    </div>
  );
}

export default App;
