import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='style'>
            <h3>How React Works?</h3>
            <p>React is a JavaScript library that creates a user interface inefficiently way using declarative code. We can build single-page applications or mobile apps by using React. React implements virtual Dom three representation in javaScript.So when it needs to read or write to the DOM, it Will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM. </p>
            <h3>Difference between Props vs Stare?</h3>
            <p>The props and the state decide what data the component will display. Props are states are re-render the component every time they change. Initially, the props and the state can have default values from a parent component.The major difference is we can not change or modify props but state changeable. Props only readable other hands state readable and writeable.</p>
        </div>
    );
};

export default Blog;