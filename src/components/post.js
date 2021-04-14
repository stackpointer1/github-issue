import React from "react";


const Post = ({ state }) => {
  return (
    <div className="list">
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            {item.title}
            <span> </span>
            {item.labels.map((temp, index) => (
              <span
                id={index}
                key={temp.id}
                style={{
                  color: `white`,
                fontSize: 25
                }}
              >
                {temp.name}
             
                <span> </span>
              </span>
            ))}
          </li>
        ))}
        <br />
      </ul>
    </div>
  );
};
export default Post;

