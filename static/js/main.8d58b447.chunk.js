(this["webpackJsonpfcc-drum-machine"]=this["webpackJsonpfcc-drum-machine"]||[]).push([[0],[,,,,function(e,r,a){e.exports=a(13)},,,,,function(e,r,a){},function(e,r,a){},function(e,r,a){},function(e,r,a){},function(e,r,a){"use strict";a.r(r);var t=a(0),n=a.n(t),c=a(3),o=a.n(c),m=(a(9),a(10),a(1));a(11);function i(e){var r=e.drumDisplay;return n.a.createElement("div",{id:"display"},r)}var d=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];a(12);function s(){var e=Object(t.useState)("Press Any Button"),r=Object(m.a)(e,2),a=r[0],c=r[1],o=Object(t.useState)(),s=Object(m.a)(o,2),u=s[0],l=s[1];Object(t.useEffect)((function(){document.addEventListener("keydown",p)}));var p=function(e){d.forEach((function(r){r.keyCode===e.keyCode&&(k(r.keyTrigger,r.id),l(e.keyCode),setTimeout((function(){l("")}),100))}))},k=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Press Any Button",a=document.getElementById(e);a.currentTime=0,a.play(),c(r)};return n.a.createElement("div",{className:"drum-container"},n.a.createElement(i,{drumDisplay:a}),n.a.createElement("div",{className:"drum-buttons-container"},d.map((function(e){return n.a.createElement("button",{className:e.keyCode===u?"drum-pad drum-pad-pressed":"drum-pad",onClick:function(){return k(e.keyTrigger,e.id)},id:e.keyCode,key:e.keyCode},n.a.createElement("audio",{className:"clip",id:e.keyTrigger,src:e.url}),e.keyTrigger)}))),n.a.createElement("a",{className:"github-link",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/yusufcmlt/fcc-drum-machine"},"  "))}var u=function(){return n.a.createElement("div",{id:"drum-machine",className:"App"},n.a.createElement("h1",{className:"drum-h1"},"Drum Machine"),n.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8d58b447.chunk.js.map