(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(15),l=n.n(i),o=n(7),d=(n(28),n(2)),s=(n(29),n(20)),m=n(21),u=n(16),f=n(17),p=n(22),j=n(19),h=(n(30),[{id:1,name:"apple-tree",image:"apple-tree.png"},{id:2,name:"bee",image:"bee.png"},{id:3,name:"butterfly",image:"butterfly.png"},{id:4,name:"fence",image:"fence.png"},{id:5,name:"flower",image:"flower.png"},{id:6,name:"ladybug",image:"ladybug.png"},{id:7,name:"mushroom",image:"mushroom.png"},{id:8,name:"plant",image:"plant.png"}]),b=(n(31),function(e){var t=e.id,n=e.folder,a=e.name,r=e.image,i=e.handleClick;return Object(c.jsx)("div",{className:"card-preview",onClick:i,"data-id":"".concat(t),children:Object(c.jsx)("img",{alt:a,src:"../../assets/".concat(n,"/").concat(r)})})}),g=(n(32),function(){return Object(c.jsxs)("div",{className:"winner",children:[Object(c.jsx)("span",{children:"You win!"}),Object(c.jsx)(o.b,{to:"/",children:" New game"})]})}),O=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).componentDidMount=function(){if("garden"===c.state.folder){var e=c.shuffleCards(h.concat(h));c.setState({cards:e})}},c.shuffleCards=function(e){var t,n,c;for(c=e.length-1;c>0;c--)t=Math.floor(Math.random()*(c+1)),n=e[c],e[c]=e[t],e[t]=n;return e},c.clickCard=function(e){var t=e.target;("IMG"===e.target.nodeName&&(t=t.parentElement),t.classList.add("flipped"),2===document.querySelectorAll(".flipped").length)?document.querySelectorAll(".flipped")[0].getAttribute("data-id")===document.querySelectorAll(".flipped")[1].getAttribute("data-id")&&(document.querySelectorAll(".flipped").forEach((function(e){e.classList.add("done")})),document.querySelectorAll(".flipped").forEach((function(e){e.classList.remove("flipped")}))):document.querySelectorAll(".flipped").length>2&&(document.querySelectorAll(".flipped").forEach((function(e){e.classList.remove("flipped")})),t.classList.add("flipped"));c.checkWinner()},c.checkWinner=function(){document.querySelectorAll(".done").length===document.querySelectorAll(".card-preview").length&&(console.log("winner!"),c.setState({winner:!0}))},c.state={folder:e.folder,cards:[],winner:!1},c}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.folder,a=t.cards,r=t.winner;return Object(c.jsxs)("div",{className:"card-collection",children:[a.map((function(t,a){var r=t.id,i=Object(m.a)(t,["id"]);return Object(c.jsx)(b,Object(s.a)({folder:n,handleClick:e.clickCard,id:r},i),a)})),r?Object(c.jsx)(g,{}):""]})}}]),n}(r.a.Component),x=(n(38),function(){return Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("h1",{children:"Card Game"}),Object(c.jsx)(O,{folder:"garden"})]})}),w=(n(39),function(){return Object(c.jsxs)("div",{className:"homepage",children:[Object(c.jsx)("h1",{children:"Choose a game"}),Object(c.jsx)(o.b,{to:"/game",children:Object(c.jsxs)("div",{className:"card-game",children:[Object(c.jsx)("img",{src:"../../assets/garden/flower.png"}),Object(c.jsx)("span",{children:"Card Game - Garden"})]})}),Object(c.jsxs)("p",{className:"flaticon",children:["Icons made by ",Object(c.jsx)("a",{href:"http://www.freepik.com/",title:"Freepik",children:"Freepik"})," from ",Object(c.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:" www.flaticon.com"})]})]})});var v=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:w}),Object(c.jsx)(d.a,{exact:!0,path:"/game",component:x})]})})};l.a.render(Object(c.jsx)(o.a,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3a1b2a8d.chunk.js.map