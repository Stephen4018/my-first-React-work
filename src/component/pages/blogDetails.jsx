import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import UpdateForm from "./updateForm";

const BlogDetails = () => {
  const [Posts, setPosts] = useState([]);

  const [toggle, setToggle] = useState(false);
  
  const handleToggle = () => {
    setToggle(!toggle);
  };


  let { BlogId } = useParams();

  let navigate = useNavigate();

  const url = `http://localhost:3000/post/${BlogId}`;

  const fetchData = async (e) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); //this is done to check the nature of data you've recieved
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deletePost = async () => {
    const res = await fetch(url, {
      method: "DELETE",
    });
    navigate("/blogComp");
  };
  return (
    <div>
      <h1>{Posts.title}</h1>
      <p>{Posts.body}</p>
      <p>{Posts.likes}</p>
      <p>{Posts.author}</p>
      {/* <Link to="/blogComp">back to blogs</Link> */}
      <button onClick={deletePost}>DELETE</button>

      {toggle && 
        (
      <UpdateForm
        id={Posts.id}
        title={Posts.title}
        body={Posts.body}
        likes={Posts.likes}
        author={Posts.author}
      />
      )
    }
    <button onClick={handleToggle}>Edit</button>
    </div>
  );
};

export default BlogDetails;
