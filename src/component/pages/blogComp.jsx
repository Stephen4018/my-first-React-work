import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const BlogComp = () => {
    const [Post, setPosts] = useState([])
    // const [isLoading, setLoading] = useState(false);
    const url = "http://localhost:3000/Post"

    const fetchData = async() => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPosts(data);
    }

    useEffect(() => {
        fetchData();
      }, []);
  return (
    <div>
        <h1>All blog post</h1>
        <div>
            {Post.map((item) => {
                return( 
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                        <p>{item.likes}</p>
                        <p>{item.author}</p>
                        <Link to={`/blogComp/${item.id}`}>Read more</Link>
                    </div>
                )
            })

            }
        </div>

    </div>
  )
}

export default BlogComp