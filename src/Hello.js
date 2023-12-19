// export default function Hello (){
//     return <h1> Hello React</h1>
// }
// export default function Hello() {
//     return (
//       // 这不起作用！
//       <>
//         <h1>海蒂·拉玛的待办事项2222</h1>
//         <img 
//           src="https://i.imgur.com/yXOvdOSs.jpg" 
//           alt="Hedy Lamarr" 
//           className="photo"
//         />
//         <ul>
//           <li>发明一种新式交通信333号灯</li>
//           <li>排练一个电影场景</li>
//           <li>改进频谱技术</li>
//         </ul>
//       </>
//     )
//   }
// export default function Hello() {
//     return (
//       <>
//         <h1>海蒂·拉玛的待办事项</h1>
//         <img 
//           src="https://i.imgur.com/yXOvdOSs.jpg" 
//           alt="Hedy Lamarr" 
//         />
//         <ul>
//           <li>发明一种新式交通信号灯</li>
//           <li>排练一个电影场景</li>
//           <li>改进频谱技术</li>
//         </ul>
//       </>
//     );
//   }

export default function Hello() {
    return (
      <>
        <div className="intro">
          <h1>欢迎来到我的站点！</h1>
        </div>
        <p className="summary">
          你可以在这里了解我的想法。
          <br /><br />
          <b>还有科学家们的{person}<i>照片</i>！</b>
        </p>
    </>
    );
  }
//   export default function Hello() {
//     return (
//       <div>
//         <div className="intro">
//           <h1>欢迎来到我的站点！</h1>
//         </div>
//         <p className="summary">
//           你可以在这里了解我的想法。
//           <br /><br />
//           <b>还有科学家们的<i>照片</i></b>！
//         </p>
//       </div>
//     );
//   }