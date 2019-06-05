// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Form2 from "../Form/Form1.js";

// class CommentPage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       feedback: {
//         fullname: "",
//         city: "",
//         // reviewdate: newDate(),
//         reviewdate: "",
//         tradeid: "",
//         rating: "",
//         comments: ""
//       }
//     };
//   }

//   handleChange = e => {
//     const { fullname, value } = e.target;

//     this.setState(prevState => ({
//       feedback: { ...prevState.feedback, [fullname]: value }
//     }));
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.setState(prevState => ({
//       feedback: { fullname: "", city: "", tradeid: "", rating: "", comments: "" }
//     }));
//   };
  
//   render() {

//     console.log(this.state.feedback);
//     return (

//         <div className="App">
//         <Form2
//           handleChange={this.handleChange}
//           feedback={this.state.feedback}
//           handleSubmit={this.handleSubmit}
//         />
        
//         <div className="post-container">
//           <div>
//             {this.state.feedback.map((feedback, index) => (
//               <div key={index}>
//                 <div className="post">
//                   <div className="post__fullname">{feedback.name}</div>
//                   <div className="post__city">{feedback.city}</div>
//                   <div className="post__tradeid">{feedback.tradeid}</div>
//                   <div className="post__rating">{feedback.rating}</div>
//                   <div className="post__comments">{feedback.comments}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
      
// const rootElement = document.getElementById("root");
// ReactDOM.render(<CommentPage />, rootElement);
// export default CommentPage;

// //          <div id="PersonComments"> 
// //         <Form2
// //           handleChange={this.handleChange}
// //           feedback={this.state.feedback}
// //           handleSubmit={this.handleSubmit}
// //         />
         
            
// //             <div className="person">
// //             <div>
// //             {this.state.feedback.map((feedback, index) => (
// //                  <li key={index}>
// //                 <span className="person__fullname">{feedback.fullname}</span>
// //                 <span className="person__serviceid">{feedback.tradeid}</span> 
// //                 <span className="person__city">{feedback.city}</span>
// //                 <span className="person__comments">{feedback.comments}</span>
// //                 <span className="person__rating">{feedback.rating}</span>
// //              ))}
// //              </div>
// //              </div>
// //              </div>
// //     );
// //   }
// // }

