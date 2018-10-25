(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),l=(n(15),n(1)),c=n(2),s=n(4),u=n(3),m=n(5),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:h.container},this.props.children)}}]),t}(r.a.Component),h={container:{maxWidth:700,margin:"0 auto",marginBottom:20}},d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{style:b.title},this.props.children)}}]),t}(r.a.Component),b={title:{fontFamily:"'Lato', sans-serif",fontSize:20,textAlign:"center",letterSpacing:2,position:"relative",marginBottom:10}},f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{style:g.title},this.props.children)}}]),t}(r.a.Component),g={title:{fontFamily:"'Lato', sans-serif",fontSize:14,letterSpacing:0,textAlign:"justify",lineHeight:2}},y="rgb(0, 127, 76)",j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("a",{style:w.title,href:this.props.href,target:this.props.target},this.props.children)}}]),t}(r.a.Component),w={title:{fontFamily:"'Lato', sans-serif",fontSize:14,letterSpacing:0,color:y}},O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{style:v.profileImage,src:this.props.src,alt:this.props.alt})}}]),t}(r.a.Component),v={profileImage:{width:100,height:100,borderRadius:100,margin:"0 auto",display:"block",border:"1px solid ".concat(y)}},k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{style:E.container},this.props.items.map(function(t,n){return r.a.createElement("li",{style:E.item,key:n},e.props.render(t))}))}}]),t}(r.a.Component),E={container:{maxWidth:700,margin:"0 auto",marginBottom:20,paddingLeft:20},item:{listStyle:"circle outside"}},I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h2",{style:C.subtitle},this.props.children)}}]),t}(r.a.Component),C={subtitle:{fontFamily:"'Lato', sans-serif",fontSize:18,position:"relative",letterSpacing:2,marginTop:20,marginBottom:20}},S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{style:B.container},r.a.createElement("div",{style:B.stripDetail}),this.props.children)}}]),t}(r.a.Component),B={container:{position:"relative",paddingLeft:30,paddingRight:20,marginBottom:10},stripDetail:{background:y,height:"100%",width:3,position:"absolute",left:0}},D=n(8),x=n.n(D),L=n(9),A=n.n(L),J=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{style:P.arrow,src:this.props.open?x.a:A.a,onClick:this.props.onClick,alt:"arrow"})}}]),t}(r.a.Component),P={arrow:{width:20,position:"absolute",right:0,cursor:"pointer",padding:5,borderRadius:20}},z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(I,null,this.props.title," ",r.a.createElement(J,{open:this.state.open,onClick:function(){return e.setState({open:!e.state.open})}})," "),this.state.open?r.a.createElement(S,null,this.props.children):null)}}]),t}(r.a.Component),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:R.separator})}}]),t}(r.a.Component),R={separator:{width:"20%",marginLeft:"40%",marginBottom:30,height:2,background:y}},W=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{style:_.title},this.props.children)}}]),t}(r.a.Component),_={title:{fontFamily:"'Lato', sans-serif",fontSize:14,letterSpacing:0,textAlign:"center",lineHeight:2}},H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(O,{src:"./images/profile.png",alt:"Profile Image"}),r.a.createElement(d,null,"R\xf4mulo Massaroth de Farias"),r.a.createElement(F,null),r.a.createElement(f,null,"Location: Curitiba, Paran\xe1 - Brazil ",r.a.createElement("br",null),"Address: Rua. Dr. Carlos Bruno Breithaupt, 198, 06 ",r.a.createElement("br",null),"Phones: +55 (41) 99674-0951 | +55 (41) 336576-45 ",r.a.createElement("br",null),"E-mail: ",r.a.createElement(j,{href:"email:romulodefarias@gmail.com"},"romulodefarias@gmail.com")),r.a.createElement(z,{title:"Javascript and I"},r.a.createElement(f,null,"My journey with JavaScript began in 2011 developing small websites and silly games, all done in the academy. I really liked to develop and I wanted more. So I ingressed a Full Stack Developer course, focused on PHP, JavaScript with JQuery and MySQL. After this course, I made some freelances (one blog and two landing pages) all using PHP and JavaScript with JQuery."),r.a.createElement(f,null,"In 2013 I got hired by a small company from Curitiba called WDS. It was my first interaction with a big projects and I learned a lot about the real world. All my work were done using JQuery."),r.a.createElement(f,null,"In 2015 I joined an agency called ",r.a.createElement(j,{href:"https://polvo.com.br/",target:"_blank"},"Polvo"),". There I participated in many projects and the best part of it was the freedom to use new technologies. There I worked with JQuery, Vue.js, Angular 1, Angular 2 and React. I developed some easy projects such as blogs, and more complex ones as e-commerce and specialist systems. The projects which I most contributed to will be listed below."),r.a.createElement(f,null,"During this period I started to get more involved in the open source world. Actually, I have never made a useful pull request to a repository, but I was always reading about, trying to contribute on ",r.a.createElement(j,{href:"https://stackoverflow.com/users/5294057/r%C3%B4mulo-m-farias",target:"_blank"},"StackOverflow")," threads, developing some projects on my own and pushing it to my ",r.a.createElement(j,{href:"https://github.com/romulets",target:"_blank"},"GitHub"),"."),r.a.createElement(f,null,"Since the beginning of  2018, I am working at ",r.a.createElement(j,{href:"https://www.contabilizei.com.br/",target:"_blank"},"Contabilizei")," where we do some pretty cool stuff. We are a company of accountancy, which is pretty complicated in Brazil. The main frontend framework here is Vue.js. Our problems always rely on user experience. How do make such a complicated thing as accountancy easier? It's a hard thing to do."),r.a.createElement(f,null,"At the same time, I'm implementing a logistics project called Delivr. It's my Bachelor's Conclusion Work. The frontend is all implemented on React and the mobile is React Native.")),r.a.createElement(z,{title:"React Projects"},r.a.createElement(k,{items:[{name:"Prata Fina: Jewels E-commerce",link:"https://www.pratafina.com.br/",linkDesc:"e-commerce"},{name:"ChatHub: Chat for github projects",link:"https://github.com/romulets/ChatHub",linkDesc:"code"},{name:"Wso2 Example: Frontend development of this example",link:"https://github.com/romulets/wso2is-example/tree/master/src/main/resources/web-client",linkDesc:"code"},{name:"Delivr Web: Logistcs system frontend",link:"https://bitbucket.org/delivrdeliveries/delivr-front/src",linkDesc:"code"},{name:"Delivr Mobile: Logistcs system mobile",link:"https://bitbucket.org/delivrdeliveries/delivr-mobile/src/master/",linkDesc:"code"}],render:function(e){return r.a.createElement(f,null,e.name," - ",r.a.createElement(j,{href:e.link,target:"_blank"},e.linkDesc))}})),r.a.createElement(F,null),r.a.createElement(W,null,r.a.createElement(j,{href:"https://github.com/romulets",target:"_blank"},"Github")," | ",r.a.createElement(j,{href:"https://stackoverflow.com/users/5294057/r%C3%B4mulo-m-farias",target:"_blank"},"StackOverflow")," | ",r.a.createElement(j,{href:"https://www.linkedin.com/in/romulomfarias/?locale=en_US",target:"_blank"},"LinkedIn")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n.p+"static/media/down-arrow.d51c4cbd.svg"},9:function(e,t,n){e.exports=n.p+"static/media/right-arrow.1ee4c3ee.svg"}},[[10,2,1]]]);
//# sourceMappingURL=main.6b48b1b9.chunk.js.map