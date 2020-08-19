(this["webpackJsonpreact-employeedirectory"]=this["webpackJsonpreact-employeedirectory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(22),a(2)),s=a(3),i=a(5),m=a(4),u=a(16),h=a.n(u),d=function(){return h.a.get("https://randomuser.me/api/?results=100")},E=(a(40),function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("h4",{className:"lead"},"Use searchbox to filter and sort by employee.")))}),p=function(e){return r.a.createElement("tbody",null,e.results.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.medium,alt:"profilePicture"})),r.a.createElement("td",null," ",e.name.first),r.a.createElement("td",null," ",e.name.last),r.a.createElement("td",null," ",e.email),r.a.createElement("td",null," ",e.phone),r.a.createElement("td",null,e.location.country))})))},f=function(e){return r.a.createElement("div",null,r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Photo"),r.a.createElement("th",{scope:"col"},"First Name",r.a.createElement("span",{onClick:e.handleSort},r.a.createElement("i",{id:"name",className:e.class}))),r.a.createElement("th",{scope:"col"},"Last Name",r.a.createElement("span",{onClick:e.handleSort},r.a.createElement("i",{id:"name",className:e.class}))),r.a.createElement("th",{scope:"col"},"Email",r.a.createElement("span",{onClick:e.handleSort},r.a.createElement("i",{id:"email",className:e.class}))),r.a.createElement("th",{scope:"col"},"Phone",r.a.createElement("span",{onClick:e.handleSort},r.a.createElement("i",{id:"phone",className:e.class}))),r.a.createElement("th",{scope:"col"},"Office Location",r.a.createElement("span",{onClick:e.handleSort},r.a.createElement("i",{id:"location",className:e.class}))))),r.a.createElement(p,{results:e.results})))},b=function(e){return r.a.createElement("form",{className:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Search Employee:"),r.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"search",list:"names",type:"text",className:"form-control",placeholder:"Name",id:"name"}),r.a.createElement("button",{type:"submit",onClick:e.handleSort,className:"btn btn-dark"},"Sort A-Z")))},y=(a(41),function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))}),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("section",{class:"Footer-Bottom"},"\xa9 2020 Carmen Obied"))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:[],search:"",ascending:"",location:""},e.handleInputChange=function(t){t.preventDefault(),e.setState({search:t.target.value.toLowerCase()})},e.handleSort=function(t){t.preventDefault();var a=e.state.ascending;!1===a||""===a?e.handleSortAZ():!0===a?e.handleSortZA():!0===a&&e.handleSortLocation()},e.handleSortAZ=function(){e.setState({results:e.state.results.sort((function(e,t){return e.name.first.localeCompare(t.name.first)})),ascending:!0})},e.handleSortZA=function(){e.setState({results:e.state.results.sort((function(e,t){return t.name.first.localeCompare(e.name.first)})),ascending:!1})},e.loadEmployees=function(){d().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadEmployees()}},{key:"render",value:function(){var e=this,t=this.state.results.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search)}));return r.a.createElement(y,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},r.a.createElement(E,null)),r.a.createElement(b,{handleSort:this.handleSort,handleInputChange:this.handleInputChange}),r.a.createElement(f,{results:t}),r.a.createElement(v,null)))}}]),a}(n.Component),S=(a(42),function(){return r.a.createElement(g,null)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.05392ea0.chunk.js.map