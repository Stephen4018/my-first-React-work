import React from "react";
import {useNavigate } from "react-router-dom";
import  {useState} from "react";



export const FirstForm = () => {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");

  const [author, setAuthor] = useState("");

//   const [likes, setLikes] = useState("0");

  let url = "http://localhost:3000/Post";

  let navigate = useNavigate();

// Handle submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      body: body,
      author: author,
    //   likes: likes,
    //   publishedTIme: new Date().toISOString().substr(0, 16),
    };
    console.log(data);

    await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/blogComp");
  };
  return (
    <div>
      <h1>create a new Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          required
          placeholder="blog title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          name="body"
          required
          placeholder="blog body"
          onChange={(e) => setBody(e.target.value)}
        />

        <input
          type="text"
          name="author"
          required
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button>Publish</button>
      </form>
    </div>
  );
};

export default FirstForm;

//update Form
