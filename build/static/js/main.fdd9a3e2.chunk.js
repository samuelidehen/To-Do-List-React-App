(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{34:function(t,e,n){t.exports=n(62)},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(30),c=n.n(r),l=n(19),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(14),f=n(11),h=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",borderBottom:"1px #ccc dotted",padding:"10px",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:b},"x")))}}]),e}(o.Component),b={color:"#fff",background:"#ff0000",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},y=h,j=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(y,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(o.Component),v=n(31),E=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState(Object(v.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add todo...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function g(){return a.a.createElement("header",{style:O},a.a.createElement("h1",null,"To Do List"),a.a.createElement(m.b,{style:k,to:"/"},"Home")," | ",a.a.createElement(m.b,{to:"/about",style:k},"About"))}var O={background:"#81baff",color:"#fff",textAlign:"center",padding:"10px"},k={color:"#fff",textDecoration:"none"};function x(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is my version of the ToDoList React Crash Course"))}var C=n(15),T=n.n(C),S=(n(61),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.markComplete=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},n.delTodo=function(t){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter((function(e){return e.id!==t})))})}))},n.addTodo=function(t){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})}))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=15").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(m.a,null,a.a.createElement("div",null,a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{addTodo:t.addTodo}),a.a.createElement(j,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(f.a,{path:"/about",component:x}))))}}]),e}(o.Component));c.a.render(a.a.createElement(S,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fdd9a3e2.chunk.js.map