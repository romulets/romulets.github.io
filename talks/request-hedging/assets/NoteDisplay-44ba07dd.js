import{d,e as n,w as s,f as r,t as a,o as l,_ as c}from"./index-cd1afbbd.js";const u=["innerHTML"],m=["textContent"],v=["textContent"],f=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const t=p;return(e,o)=>e.noteHtml?(l(),n("div",{key:0,class:s(["prose overflow-auto outline-none",t.class]),onClick:o[0]||(o[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,u)):e.note?(l(),n("div",{key:1,class:s(["prose overflow-auto outline-none",t.class]),onClick:o[1]||(o[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(l(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",t.class]),onClick:o[2]||(o[2]=i=>e.$emit("click"))},[r("p",{textContent:a(t.placeholder||"No notes.")},null,8,v)],2))}}),y=c(f,[["__file","/Users/romulo/.nvm/versions/node/v18.18.2/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{y as N};
