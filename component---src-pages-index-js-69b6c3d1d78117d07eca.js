"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{704:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(721),s=a(785),r=a(294),o=function(){return{x:Math.floor(10*Math.random()),y:Math.floor(10*Math.random())}},i=function(){return(0,s.Z)(Array(10)).map((function(e){return(0,s.Z)(Array(10)).map((function(e){return"grid-item"}))}))},c={rows:i(),snake:[o()],food:o(),direction:32,speed:100},l=function(e){(0,n.Z)(a,e);var t=a.prototype;function a(){var t;return(t=e.call(this)||this).moveSnake=function(){var e=(0,s.Z)(t.state.snake),a=Object.assign({},e[e.length-1]);switch(t.state.direction){case 37:a.y+=-1;break;case 38:a.x+=-1;break;case 39:a.y+=1;break;case 40:a.x+=1;break;default:return}a.x+=10*((a.x<0)-(a.x>=10)),a.y+=10*((a.y<0)-(a.y>=10)),e.push(a),e.shift(),t.setState({snake:e,head:a}),t.update()},t.changeDirection=function(e){var a=e.keyCode,n=t.state.direction;switch(a){case 37:n=39===n?39:37;break;case 39:n=37===n?37:39;break;case 38:n=40===n?40:38;break;case 40:n=38===n?38:40;break;case 32:n=32}t.setState({direction:n})},t.isCollapsed=function(){for(var e=t.state.snake,a=Object.assign({},e[e.length-1]),n=0;n<e.length-3;n++)a.x===e[n].x&&a.y===e[n].y&&(t.setState(c),alert("game over: "+10*e.length))},t.state=c,t}return t.componentDidMount=function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.changeDirection,document.title="snake-game",window.addEventListener("keydown",(function(e){["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code)>-1&&e.preventDefault()}),!1)},t.componentDidUpdate=function(){this.isCollapsed(),this.isEaten()},t.isEaten=function(){var e,t=(0,s.Z)(this.state.snake),a=Object.assign({},t[t.length-1]),n=this.state.food;a.x===n.x&&a.y===n.y&&(t.push(a),this.setState({snake:t,food:o(),speed:(e=this.state.speed,e-10*(e>10))}))},t.update=function(){var e=i();this.state.snake.forEach((function(t){return e[t.x][t.y]="snake"})),e[this.state.food.x][this.state.food.y]="food",this.setState({rows:e})},t.render=function(){var e=this.state.rows.map((function(e,t){return e.map((function(e,a){return r.createElement("div",{name:t+"="+a,className:e})}))}));return r.createElement("div",{className:"snake-container"},r.createElement("div",{className:"grid"},e))},a}(r.Component);function d(){return r.createElement("div",{class:"min-h-screen bg-gray-100 py-6 flex flex-col justify-center mx-auto sm:py-12"},r.createElement("div",{class:""},r.createElement("div",{class:"h-auto py-20 px-10 w-2/3 bg-indigo-500 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl transition-transform"},r.createElement("h1",{class:" font-medium text-white text-4xl tracking-wide"},"Snake Game"),r.createElement("h2",{class:"font-normal tracking-wide text-2xl text-white lg:w-2/5"},'press "space" to pause the game.'),r.createElement("h2",{class:"font-normal tracking-wide text-2xl text-white lg:w-2/5"},'press "arrow keys" to change direction/ unpause.'),r.createElement("div",{class:"grid grid-css grid-rows-2 grid-cols-2 "},r.createElement(l,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-69b6c3d1d78117d07eca.js.map