import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
       <header style = {headerStyle}>
           <h1>To Do List</h1>
           <Link style={linkStyle} to='/'>Home</Link> | <Link to='/about' style={linkStyle}>About</Link> 
       </header>
    )
}

const headerStyle = {
    background: '#81baff',
    color :'#fff',
    textAlign : 'center',
    padding : '10px'
}

const linkStyle ={
    color:'#fff',
    textDecoration: 'none'
}
