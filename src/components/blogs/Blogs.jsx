
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [Blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch("blog.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data));
        


    },[])
    return (
        <div className="md:w-2/3">
            <h2 className="text-3xl font-bold">Blogs: {Blogs.length}</h2>
        </div>
    );
};

export default Blogs;