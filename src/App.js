import "./App.css";
import React, { useEffect, useState } from "react";
import Post from "./components/post";
import Pagination from "./components/Pagination";


function App() {
  const [username, setUSername] = useState("facebook");
  const [repo, setRepo] = useState("create-react-app");
  const [state, setState] = useState({
    items: [],
    isLoaded: false
  });
  const[postperpage,setpostperpage]=useState(5);
  const[currentPage,setcurrentPage]=useState(1);
  

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repo}/issues`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setState((prev) => {
          return { ...prev, isLoaded: true, items: json };
        });
      });
  }, [username,repo]);
  let textInput1 = React.createRef();
  let textInput2 = React.createRef();

  const handleUserName = (event) => {
    setUSername(event.target.value);
  };
  const handleRepo=(event)=>{
    setRepo(textInput2.current.value)
  };
  console.log("state is" ,state);
  const indexOfLastPost=currentPage*postperpage;
  const indexofFirstPost=indexOfLastPost-postperpage;
  const currrentPost=state.items.slice(indexofFirstPost,indexOfLastPost)

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div className="App">
      <div className="App-Container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Q92-5JeMg3tibiBXBDijMdMpsRPklFYzfA&usqp=CAU"
          alt="gitlogo"
        />
        
        <h2>github/issue/page </h2>
        
        
        <input
          placeholder="Enter repo name"
          className="input1"
          ref={textInput1}
          onChange={handleUserName}
        />

        <input
          placeholder="Enter reponame here"
          className="input1"
          ref={textInput2}
          />

         
       
      <button onClick={handleRepo}>search</button>
      </div>
      <span>
     <h4 className="userName-container">{username}/
     <span className="repo-ccontainer">
     <b>
     {repo}
     </b>
     </span>
     </h4>
    </span>
    <Post state={currrentPost} />
    <Pagination
        postsperpage={postperpage}
        totalPosts={state.items.length}
        paginate={paginate}
      />
     

       
       
    </div>
  );
}
export default App;