import {useEffect, useState} from "react";

export const Posts = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data=>{
        // id, title, userId, body
        console.log(data);
    })
}