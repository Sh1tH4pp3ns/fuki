(window.webpackJsonp=window.webpackJsonp||[]).push([[1,5],{286:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(131).default)("f63f5fd4",content,!0,{sourceMap:!1})},287:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(131).default)("032c0977",content,!0,{sourceMap:!1})},309:function(t,e,n){"use strict";n(286)},310:function(t,e,n){var o=n(130)(!1);o.push([t.i,".time[data-v-ef4674d8]{width:8ch;text-align:right}",""]),t.exports=o},317:function(t,e,n){"use strict";n(287)},318:function(t,e,n){var o=n(130)(!1);o.push([t.i,'.disconnected[data-v-4e6521a5]:before{content:"Reconnecting..."}.connected[data-v-4e6521a5]:before{content:"Connected";color:#7cfc00}.connecting[data-v-4e6521a5]:before{content:"Connecting";color:#ff0}.unauthorized[data-v-4e6521a5]:before{content:"Authentication failed";color:red}',""]),t.exports=o},321:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(131).default)("5a19e2fa",content,!0,{sourceMap:!1})},331:function(t,e){},337:function(t,e,n){"use strict";n.r(e);n(199),n(83),n(14),n(26),n(295),n(301),n(27),n(41),n(303),n(80),n(30),n(45),n(40);var o=n(22),r=n(304),c=n(285);n(305),n(25),n(135),n(288),n(79);function d(){d=function(t,e){return new n(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function n(t,o,r){var d=new RegExp(t,o);return e.set(d,r||e.get(t)),Object(c.a)(d,n.prototype)}function m(t,n){var g=e.get(n);return Object.keys(g).reduce((function(e,n){var i=g[n];if("number"==typeof i)e[n]=t[i];else{for(var o=0;void 0===t[i[o]]&&o+1<i.length;)o++;e[n]=t[i[o]]}return e}),Object.create(null))}return Object(r.a)(n,RegExp),n.prototype.exec=function(e){var n=t.exec.call(this,e);return n&&(n.groups=m(n,this)),n},n.prototype[Symbol.replace]=function(n,r){if("string"==typeof r){var c=e.get(this);return t[Symbol.replace].call(this,n,r.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+c[e]})))}if("function"==typeof r){var d=this;return t[Symbol.replace].call(this,n,(function(){var t=arguments;return"object"!=Object(o.a)(t[t.length-1])&&(t=[].slice.call(t)).push(m(t,d)),r.apply(this,t)}))}return t[Symbol.replace].call(this,n,r)},d.apply(this,arguments)}var pattern=d(/^(((\d*)?:)??((\d*)?:))?(\d*)?$/,{hours:3,minutes:5,seconds:6}),m={name:"TimeInput",props:{value:{type:Number,required:!0}},emits:["input","submit"],data:function(){return{textValue:""}},computed:{secondsTotal:function(){var t=pattern.exec(this.textValue).groups,e=t.hours,n=t.minutes,o=t.seconds;return 3600*parseInt(null!=e?e:0)+60*parseInt(null!=n?n:0)+parseInt(null!=o?o:0)}},watch:{value:function(t){t!==this.secondsTotal&&this.formatString(t)},secondsTotal:function(t){this.value!==t&&this.$emit("input",t)}},created:function(){this.formatString(this.value)},methods:{getSelection:function(t){var e=t.target.selectionStart,n=t.target.selectionEnd;return e===n&&t.inputType.startsWith("delete")?"deleteContentBackward"===t.inputType?{start:e-1,end:n}:{start:e,end:n-1}:{start:e,end:n}},validateInput:function(t){var e,n=this.getSelection(t),o=n.start,r=n.end,c=t.target.value.substring(0,o)+(null!==(e=t.data)&&void 0!==e?e:"")+t.target.value.substring(r);pattern.test(c)||t.preventDefault()},formatString:function(t){var e=String(Math.floor(t/3600)).padStart(2,"0");t%=3600;var n=String(Math.floor(t/60)).padStart(2,"0");t%=60;var o=String(t).padStart(2,"0");this.textValue="".concat(e,":").concat(n,":").concat(o)}}},l=(n(309),n(50)),component=Object(l.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],staticClass:"time",attrs:{type:"text"},domProps:{value:t.textValue},on:{beforeinput:t.validateInput,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.formatString(t.secondsTotal)},blur:function(e){return t.formatString(t.secondsTotal)},input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),t._v(" "),t._t("default")],2)}),[],!1,null,"ef4674d8",null);e.default=component.exports},338:function(t,e,n){"use strict";n.r(e);var o=n(322),r={name:"StreamElements",props:{value:{type:String,required:!0}},emits:["event","input"],data:function(){return{socket:o("https://realtime.streamelements.com",{transports:["websocket"],autoConnect:!1}),token:this.value,status:""}},watch:{value:function(t){this.connect(),this.token=t},token:function(t){this.$emit("input",t)}},created:function(){var t=this;this.socket.on("connect",(function(){t.status="connecting",t.socket.emit("authenticate",{method:"jwt",token:t.token})})),this.socket.on("disconnect",(function(){t.status="disconnected"})),this.socket.on("authenticated",(function(){t.status="connected"})),this.socket.on("unauthorized",(function(){t.status="unauthorized"})),this.socket.on("message",(function(data){t.emitEvent("message",data)})),this.socket.on("event",(function(data){t.emitEvent("event",data)})),this.socket.on("event:update",(function(data){t.emitEvent("event:update",data)})),this.socket.on("event:test",(function(data){t.emitEvent("event:test",data)}))},methods:{connect:function(){this.socket.disconnect(),this.socket.connect()},emitEvent:function(t,data){this.$emit("event",t,data)}}},c=(n(317),n(50)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("table",[e("tr",[t._m(0),t._v(" "),e("td",[e("span",{class:t.status})])]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[t._t("default")],2)]),t._v(" "),t._m(1),t._v(" "),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],attrs:{type:"password"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}})])])])])}),[function(){var t=this._self._c;return t("td",[t("b",[this._v("StreamElements")])])},function(){var t=this._self._c;return t("tr",[t("td",[t("b",[this._v("JWT Token:")])])])}],!1,null,"4e6521a5",null);e.default=component.exports},352:function(t,e){},354:function(t,e,n){"use strict";n(321)},355:function(t,e,n){var o=n(130)(!1);o.push([t.i,'.log[data-v-1eea9a8a]{overflow-y:scroll;width:330px;height:200px;border:1px solid #767676;border-radius:2px}.event[data-v-1eea9a8a]{background-color:#3c404b;border-radius:2px;margin:5px}.time[data-v-1eea9a8a]{text-align:right;width:8ch}.controls[data-v-1eea9a8a]{padding-left:10px}.version[data-v-1eea9a8a]{font-size:smaller;color:#7cfc00}.disconnected[data-v-1eea9a8a]:before{content:"Reconnecting..."}.connected[data-v-1eea9a8a]:before{content:"Connected";color:#7cfc00}.connecting[data-v-1eea9a8a]:before{content:"Connecting";color:#ff0}.unauthorized[data-v-1eea9a8a]:before{content:"Authentication failed";color:red}',""]),t.exports=o},381:function(t,e,n){"use strict";n.r(e);n(79),n(40),n(51),n(46),n(14),n(41),n(30),n(68),n(69);var o=n(29),r=(n(25),n(80),n(343),n(84),n(135),n(36),n(35),n(202),n(288),n(382)),c=n(345);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"TheManager",data:function(){var t;return{data:{animate:!0,comboMeter:"",comboPrefix:"+",comboSuffix:"",comboCountPrefix:"",comboCountSuffix:" x Combo!",comboTimerPrefix:"Combo Zeit: ",comboTimerSuffix:"s",comboDelay:60,singleEventDelay:5,seToken:"",obsPassword:"",obsPort:"4455",liveUntilInputName:"",totalStreamTimeInputName:"",counters:{liveSince:{value:0,modifier:0,inputName:""},timeLeft:{value:14400,modifier:14400,inputName:""}},add:{subscriber:{tier1:300,tier2:600,tier3:1500},donation:{needed:1,time:60},cheer:{needed:100,time:60}}},version:null===(t=document.querySelector("html"))||void 0===t?void 0:t.getAttribute("timestamp"),runTimeout:void 0,addTimeout:void 0,lastAdd:0,comboCount:0,comboTimerInterval:void 0,comboTimer:0,tween:14400,running:!1,events:[],obs:new c.a,obsConnected:!1,obsStatus:"Disconnected",obsReconnectTimeout:void 0,obsInputs:[],selectedInput:void 0,stickyCountdown:!1,removeTimeouts:[]}},computed:{liveSince:function(){return this.toTimeString(this.data.counters.liveSince.value)},timeLeft:function(){return this.toTimeString(this.data.animate?Math.floor(this.tween):this.data.counters.timeLeft.value)},comboCountString:function(){var t="".concat(this.data.comboCountPrefix).concat(this.comboCount).concat(this.data.comboCountSuffix);return this.comboCount<=1?t.replaceAll(/./gi," "):t},comboTimerString:function(){var t="".concat(this.data.comboTimerPrefix).concat(this.comboTimer).concat(this.data.comboTimerSuffix);return this.comboCount<=1?t.replaceAll(/./gi," "):t},comboMeter:function(){return"".concat(this.comboCountString,"\n").concat(this.data.comboPrefix).concat(this.toTimeString(this.lastAdd).replace(/^(00:)*/,"")).concat(this.data.comboSuffix,"\n").concat(this.comboTimerString)},comboMeterVisible:function(){var t=this.data.comboDelay-this.comboTimer>this.data.singleEventDelay-1&&this.comboCount<=1;return this.comboTimer>0&&!t},toggleButton:function(){return this.running?"Stop":"Start"},liveUntil:function(){if(this.running){var t=new Date(Date.now()+1e3*this.data.counters.timeLeft.value),e=this.dayIdToString(t.getDay());return"".concat(e,", ").concat(this.pad(t.getDate()),".").concat(this.pad(t.getMonth()+1),". - ").concat(this.pad(t.getHours()),":").concat(this.pad(t.getMinutes()))}return"-"},totalStreamTime:function(){return this.toTimeString(this.data.counters.timeLeft.value+this.data.counters.liveSince.value)}},watch:{data:{handler:function(){window.localStorage.setItem("timerh4pp3ns",JSON.stringify(this.data))},deep:!0},"data.counters.timeLeft.value":function(t){r.a.to(this,{tween:t,duration:this.data.animate?.75:0,ease:"none"})},"data.counters.timeLeft.inputName":function(t){t===this.data.counters.liveSince.inputName&&(this.data.counters.liveSince.inputName=""),t===this.data.comboMeter&&(this.data.comboMeter=""),t===this.data.liveUntilInputName&&(this.data.liveUntilInputName=""),t===this.data.totalStreamTimeInputName&&(this.data.totalStreamTimeInputName=""),this.writeTimeLeft()},"data.counters.liveSince.inputName":function(t){t===this.data.counters.timeLeft.inputName&&(this.data.counters.timeLeft.inputName=""),t===this.data.comboMeter&&(this.data.comboMeter=""),t===this.data.liveUntilInputName&&(this.data.liveUntilInputName=""),t===this.data.totalStreamTimeInputName&&(this.data.totalStreamTimeInputName=""),this.writeLiveSince()},"data.liveUntilInputName":function(t){t===this.data.counters.timeLeft.inputName&&(this.data.counters.timeLeft.inputName=""),t===this.data.counters.liveSince.inputName&&(this.data.counters.liveSince.inputName=""),t===this.data.comboMeter&&(this.data.comboMeter=""),t===this.data.totalStreamTimeInputName&&(this.data.totalStreamTimeInputName=""),this.writeLiveUntil()},"data.totalStreamTimeInputName":function(t){t===this.data.counters.timeLeft.inputName&&(this.data.counters.timeLeft.inputName=""),t===this.data.counters.liveSince.inputName&&(this.data.counters.liveSince.inputName=""),t===this.data.liveUntilInputName&&(this.data.liveUntilInputName=""),t===this.data.comboMeter&&(this.data.comboMeter=""),this.writeTotalStreamTime()},timeLeft:function(){this.writeTimeLeft()},liveSince:function(){this.writeLiveSince()},liveUntil:function(){this.writeLiveUntil()},totalStreamTime:function(){this.writeTotalStreamTime()},running:function(t){var e=this;this.setComboVisibility(this.comboMeterVisible),this.stickyCountdown=!1,t?this.runTimeout=setInterval((function(){var t=Math.max(0,e.data.counters.timeLeft.value-1);t<=0&&(e.stickyCountdown=!0),e.data.counters.timeLeft.value=t,e.data.counters.liveSince.value++}),1e3):clearInterval(this.runTimeout)},"data.comboMeter":function(t){t===this.data.counters.liveSince.inputName&&(this.data.counters.liveSince.inputName=""),t===this.data.counters.timeLeft.inputName&&(this.data.counters.timeLeft.inputName=""),t===this.data.liveUntilInputName&&(this.data.liveUntilInputName=""),this.setComboVisibility(this.comboMeterVisible),this.writeComboMeter()},"data.obsPassword":function(){this.obsConnect()},"data.obsPort":function(){this.obsConnect()},comboMeterVisible:function(t){this.setComboVisibility(t)},comboMeter:function(){this.comboMeterVisible&&this.writeComboMeter()}},mounted:function(){var t=this;this.obs.on("ConnectionClosed",(function(e){t.obsConnected=!1,4009===e.code?t.obsStatus="Error: Check password":1e3!==e.code&&(1006===e.code?t.obsStatus="Error: Check port / server":1001===e.code?t.obsStatus="Error: Server stopping":t.obsStatus="".concat(e," - ").concat(e.code),clearTimeout(t.obsReconnectTimeout),t.obsReconnectTimeout=setTimeout((function(){t.obsConnect()}),5e3))})),this.obs.on("InputNameChanged",(function(e){var n=e.oldInputName,o=e.inputName;t.obsInputs=t.obsInputs.filter((function(i){return i.inputName!==n})),t.obsInputs.push({inputName:o}),n===t.data.counters.liveSince.inputName&&(t.data.counters.liveSince.inputName=o),n===t.data.counters.timeLeft.inputName&&(t.data.counters.timeLeft.inputName=o),n===t.data.comboMeter&&(t.data.comboMeter=o)})),this.obs.on("InputCreated",(function(e){e.inputKind.startsWith("text_")&&t.obsInputs.push(e)})),this.obs.on("ExitStarted",(function(e){t.removeTimeouts.forEach((function(t){clearTimeout(t)}))})),this.obs.on("InputRemoved",(function(e){t.removeTimeouts.push(setTimeout((function(){var n=e.inputName;t.obsInputs=t.obsInputs.filter((function(i){return i.inputName!==n})),n===t.data.counters.liveSince.inputName&&(t.data.counters.liveSince.inputName=""),n===t.data.counters.timeLeft.inputName&&(t.data.counters.timeLeft.inputName=""),n===t.data.comboMeter&&(t.data.comboMeter="")}),250))}));var e=JSON.parse(window.localStorage.getItem("timerh4pp3ns"));e&&(this.data=m(m({},this.data),e)),this.obsConnect()},methods:{dayIdToString:function(t){switch(t){case 0:return"So";case 1:return"Mo";case 2:return"Di";case 3:return"Mi";case 4:return"Do";case 5:return"Fr";case 6:return"Sa"}return""},newEvent:function(t,data){var e=data.listener||data.name,n=data.event||data.data;"tip-latest"===e?this.newTip(n):"cheer-latest"===e?this.newCheer(n):"subscriber-latest"===e&&this.newSub(n)},newSub:function(t){var e=t.name,n=this.getTimeByTier(t.tier),o=n.timeModifier,r=n.tier,c=t.bulkGifted?t.amount:1,d=o*c,m=c>1?"Sub * ".concat(c," (T").concat(r,") - ").concat(e):"Sub (T".concat(r,") - ").concat(e);this.addTimeLeft(d,m)},newTip:function(t){var e=t.name,n=t.amount;if(this.data.add.donation.needed>0){var o=Math.floor(n/this.data.add.donation.needed)*this.data.add.donation.time;this.addTimeLeft(o,"Dono (".concat(n," €) - ").concat(e))}else this.addTimeLeft(0,"Dono (".concat(n," €) - ").concat(e))},newCheer:function(t){var e=t.name,n=t.amount;if(this.data.add.cheer.needed>0){var o=Math.floor(n/this.data.add.cheer.needed)*this.data.add.cheer.time;this.addTimeLeft(o,"Cheer (".concat(n," Bits) - ").concat(e))}else this.addTimeLeft(0,"Cheer (".concat(n," Bits) - ").concat(e))},addTimeLeft:function(t,e){this.stickyCountdown?this.events.unshift("Too late: ".concat(e,": +").concat(this.toTimeString(t).replace(/^(00:)*/,""))):(this.events.unshift("".concat(e,": +").concat(this.toTimeString(t).replace(/^(00:)*/,""))),this.data.counters.timeLeft.value+=t,this.addLastAdd(t))},addLastAdd:function(t){var e=this;this.lastAdd+=t,this.comboCount++,this.comboTimer=this.data.comboDelay,clearInterval(this.comboTimerInterval),this.comboTimerInterval=setInterval((function(){e.comboTimer--,e.comboTimer<=0&&clearInterval(e.comboTimerInterval)}),1e3),clearTimeout(this.addTimeout),this.addTimeout=setTimeout((function(){e.lastAdd=0,e.comboCount=0}),1e3*this.data.comboDelay)},getTimeByTier:function(t){var e=String(t);return"1000"===e||"prime"===e?{timeModifier:this.data.add.subscriber.tier1,tier:"1"}:"2000"===e?{timeModifier:this.data.add.subscriber.tier2,tier:"2"}:"3000"===e?{timeModifier:this.data.add.subscriber.tier3,tier:"3"}:void 0},controlLiveSince:function(t,e){"add"===t?this.data.counters.liveSince.value+=e:"set"===t&&(this.data.counters.liveSince.value=e)},controlTimeLeft:function(t){this.stickyCountdown=!1;var e=this.data.counters.timeLeft.modifier;"add"===t?(this.data.counters.timeLeft.value+=e,this.addLastAdd(e)):"set"===t&&(this.data.counters.timeLeft.value=e,clearTimeout(this.addTimeout),this.lastAdd=0,this.comboCount=0)},reset:function(){this.stickyCountdown=!1,this.data.counters.timeLeft.value=this.data.counters.timeLeft.modifier,this.data.counters.liveSince.value=this.data.counters.liveSince.modifier,clearTimeout(this.addTimeout),this.lastAdd=0,this.comboCount=0,this.comboTimer=0,this.lastAdd=0},setComboVisibility:function(t){var e=this;this.obsConnected&&this.data.comboMeter&&this.obs.call("GetSceneList").then((function(n){n.scenes.map((function(t){return t.sceneName})).forEach((function(n){e.obs.call("GetSceneItemList",{sceneName:n}).then((function(o){o.sceneItems.filter((function(t){return t.sourceName===e.data.comboMeter})).map((function(t){return t.sceneItemId})).forEach((function(o){e.obs.call("SetSceneItemEnabled",{sceneName:n,sceneItemId:o,sceneItemEnabled:t})}))}))}))}))},obsConnect:function(){var t=this;clearTimeout(this.obsReconnectTimeout),this.obsStatus="Connecting...",this.obs.connect("ws://localhost:".concat(this.data.obsPort),this.data.obsPassword,{rpcVersion:1}).then((function(e){clearTimeout(t.obsReconnectTimeout),t.obsStatus="Connected",t.obsConnected=!0,t.obs.call("GetInputList").then((function(e){t.obsInputs=e.inputs.filter((function(i){return i.inputKind.startsWith("text_")})),t.obsInputs.find((function(i){return i.inputName===t.data.counters.liveSince.inputName}))||(t.data.counters.liveSince.inputName=""),t.obsInputs.find((function(i){return i.inputName===t.data.counters.timeLeft.inputName}))||(t.data.counters.timeLeft.inputName=""),t.obsInputs.find((function(i){return i.inputName===t.data.comboMeter}))||(t.data.comboMeter=""),t.writeTimeLeft(),t.writeLiveSince(),t.writeLiveUntil(),t.writeTotalStreamTime(),t.setComboVisibility(t.comboMeterVisible)}))}),(function(){}))},toTimeString:function(t){var e=String(Math.floor(t/3600)).padStart(2,"0");t%=3600;var n=String(Math.floor(t/60)).padStart(2,"0");t%=60;var o=String(t).padStart(2,"0");return"".concat(e,":").concat(n,":").concat(o)},pad:function(t){return String(t).padStart(2,"0")},writeLiveUntil:function(){this.writeToInput(this.data.liveUntilInputName,this.liveUntil)},writeTotalStreamTime:function(){this.writeToInput(this.data.totalStreamTimeInputName,this.totalStreamTime)},writeTimeLeft:function(){this.writeToInput(this.data.counters.timeLeft.inputName,this.timeLeft)},writeLiveSince:function(){this.writeToInput(this.data.counters.liveSince.inputName,this.liveSince)},writeComboMeter:function(){this.writeToInput(this.data.comboMeter,this.comboMeter)},writeToInput:function(t,text){this.obsConnected&&t&&this.obs.call("SetInputSettings",{inputName:t,inputSettings:{read_from_file:!1,text:text}})}}},v=(n(354),n(50)),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"padding-bottom":"20px"}},[e("table",[e("tr",[e("td",[t._v("\n        Time left:\n      ")]),t._v(" "),e("td",{staticClass:"time"},[t._v("\n        "+t._s(t.timeLeft)+"\n      ")]),t._v(" "),e("td",{staticClass:"controls"},[e("time-input",{model:{value:t.data.counters.timeLeft.modifier,callback:function(e){t.$set(t.data.counters.timeLeft,"modifier",e)},expression:"data.counters.timeLeft.modifier"}},[e("button",{on:{click:function(e){return t.controlTimeLeft("add")}}},[t._v("\n            Add\n          ")]),t._v(" "),e("button",{on:{click:function(e){return t.controlTimeLeft("set")}}},[t._v("\n            Set\n          ")])])],1)]),t._v(" "),e("tr",[e("td",[t._v("\n        Live since:\n      ")]),t._v(" "),e("td",{staticClass:"time"},[t._v("\n        "+t._s(t.liveSince)+"\n      ")]),t._v(" "),e("td",{staticClass:"controls"},[e("time-input",{on:{submit:t.controlLiveSince},model:{value:t.data.counters.liveSince.modifier,callback:function(e){t.$set(t.data.counters.liveSince,"modifier",e)},expression:"data.counters.liveSince.modifier"}},[e("button",{on:{click:function(e){t.data.counters.liveSince.value+=t.data.counters.liveSince.modifier}}},[t._v("\n            Add\n          ")]),t._v(" "),e("button",{on:{click:function(e){t.data.counters.liveSince.value=t.data.counters.liveSince.modifier}}},[t._v("\n            Set\n          ")])])],1)]),t._v(" "),e("tr",[e("td",{attrs:{colspan:"3"}},[t._v("\n        Combo:\n        "),t.comboMeterVisible?[t.comboCount>1?[e("small",[t._v(t._s(t.comboMeter))])]:[t._v("\n            "+t._s(t.comboMeter)+"\n          ")]]:t.comboTimer>0?[t._v("\n          "+t._s(t.comboTimer)+"s\n        ")]:[t._v("\n          -\n        ")]],2)]),t._v(" "),e("tr",[e("td",[t._v("\n        Total time:\n      ")]),t._v(" "),e("td",{staticClass:"time"},[t._v("\n        "+t._s(t.totalStreamTime)+"\n      ")])]),t._v(" "),e("tr",[e("td",[t._v("\n        Live until:\n      ")]),t._v(" "),e("td",{attrs:{colspan:"2"}},[t._v("\n        "+t._s(t.liveUntil)+"\n      ")])]),t._v(" "),e("tr",[e("td",[e("button",{on:{click:function(e){t.running=!t.running}}},[t._v("\n          "+t._s(t.toggleButton)+"\n        ")])]),t._v(" "),e("td"),t._v(" "),e("td",[t.running?t._e():[e("button",{on:{click:t.reset}},[t._v("\n            Reset\n          ")])]],2)])]),t._v(" "),e("hr"),t._v(" "),e("stream-elements",{on:{event:t.newEvent},model:{value:t.data.seToken,callback:function(e){t.$set(t.data,"seToken",e)},expression:"data.seToken"}},[e("b",[t._v("Events ("+t._s(t.events.length)+"):")]),t._v(" "),e("div",{staticClass:"log"},t._l(t.events,(function(n,o){return e("div",{key:"event-".concat(o),staticClass:"event"},[t._v("\n        "+t._s(n)+"\n      ")])})),0)]),t._v(" "),e("hr"),t._v(" "),e("table",[t._m(0),t._v(" "),e("tr",[e("td",[t._v("\n        T1:\n      ")]),t._v(" "),e("td",[e("time-input",{model:{value:t.data.add.subscriber.tier1,callback:function(e){t.$set(t.data.add.subscriber,"tier1",e)},expression:"data.add.subscriber.tier1"}})],1),t._v(" "),e("td",[t._v("Need:")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.add.donation.needed,expression:"data.add.donation.needed"}],staticStyle:{width:"8ch"},attrs:{type:"number",min:"1"},domProps:{value:t.data.add.donation.needed},on:{input:function(e){e.target.composing||t.$set(t.data.add.donation,"needed",e.target.value)}}})]),t._v(" "),e("td",[t._v("Need:")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.add.cheer.needed,expression:"data.add.cheer.needed"}],staticStyle:{width:"8ch"},attrs:{type:"number",min:"1"},domProps:{value:t.data.add.cheer.needed},on:{input:function(e){e.target.composing||t.$set(t.data.add.cheer,"needed",e.target.value)}}})])]),t._v(" "),e("tr",[e("td",[t._v("\n        T2:\n      ")]),t._v(" "),e("td",[e("time-input",{model:{value:t.data.add.subscriber.tier2,callback:function(e){t.$set(t.data.add.subscriber,"tier2",e)},expression:"data.add.subscriber.tier2"}})],1),t._v(" "),e("td",[t._v("Time:")]),t._v(" "),e("td",[e("time-input",{model:{value:t.data.add.donation.time,callback:function(e){t.$set(t.data.add.donation,"time",e)},expression:"data.add.donation.time"}})],1),t._v(" "),e("td",[t._v("Time:")]),t._v(" "),e("td",[e("time-input",{model:{value:t.data.add.cheer.time,callback:function(e){t.$set(t.data.add.cheer,"time",e)},expression:"data.add.cheer.time"}})],1)]),t._v(" "),e("tr",[e("td",[t._v("\n        T3:\n      ")]),t._v(" "),e("td",[e("time-input",{model:{value:t.data.add.subscriber.tier3,callback:function(e){t.$set(t.data.add.subscriber,"tier3",e)},expression:"data.add.subscriber.tier3"}})],1)])]),t._v("\n\n  Animate Time Left: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.animate,expression:"data.animate"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.data.animate)?t._i(t.data.animate,null)>-1:t.data.animate},on:{change:function(e){var n=t.data.animate,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&t.$set(t.data,"animate",n.concat([null])):c>-1&&t.$set(t.data,"animate",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.data,"animate",r)}}}),t._v(" "),e("hr"),t._v(" "),e("table",[e("tr",[t._m(1),t._v(" "),e("td",[t._v("\n        "+t._s(t.obsStatus)+"\n      ")])]),t._v(" "),t._m(2),t._v(" "),e("tr",[e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.obsPassword,expression:"data.obsPassword"}],attrs:{type:"password"},domProps:{value:t.data.obsPassword},on:{input:function(e){e.target.composing||t.$set(t.data,"obsPassword",e.target.value)}}})]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.obsPort,expression:"data.obsPort"}],attrs:{type:"number",min:"0",max:"65535"},domProps:{value:t.data.obsPort},on:{input:function(e){e.target.composing||t.$set(t.data,"obsPort",e.target.value)}}})])])]),t._v(" "),t.obsConnected?e("table",[t._m(3),t._v(" "),e("tr",[e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.counters.timeLeft.inputName,expression:"data.counters.timeLeft.inputName"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data.counters.timeLeft,"inputName",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:""}}),t._v(" "),t._l(t.obsInputs,(function(input,n){return e("option",{key:"tl-input-".concat(n)},[t._v("\n            "+t._s(input.inputName)+"\n          ")])}))],2)]),t._v(" "),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.counters.liveSince.inputName,expression:"data.counters.liveSince.inputName"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data.counters.liveSince,"inputName",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:""}}),t._v(" "),t._l(t.obsInputs,(function(input,n){return e("option",{key:"ls-input-".concat(n)},[t._v("\n            "+t._s(input.inputName)+"\n          ")])}))],2)])]),t._v(" "),t._m(4),t._v(" "),e("tr",[e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.liveUntilInputName,expression:"data.liveUntilInputName"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"liveUntilInputName",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:""}}),t._v(" "),t._l(t.obsInputs,(function(input,n){return e("option",{key:"ls-input-".concat(n)},[t._v("\n            "+t._s(input.inputName)+"\n          ")])}))],2)]),t._v(" "),e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.totalStreamTimeInputName,expression:"data.totalStreamTimeInputName"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"totalStreamTimeInputName",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:""}}),t._v(" "),t._l(t.obsInputs,(function(input,n){return e("option",{key:"ls-input-".concat(n)},[t._v("\n            "+t._s(input.inputName)+"\n          ")])}))],2)])])]):t._e(),t._v(" "),t.obsConnected?e("div",[e("hr"),t._v(" "),e("b",[t._v("Combo-Meter:")]),t._v(" "),e("br"),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.data.comboMeter,expression:"data.comboMeter"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.data,"comboMeter",e.target.multiple?n:n[0])}}},[e("option",{attrs:{value:""}}),t._v(" "),t._l(t.obsInputs,(function(input,n){return e("option",{key:"cm-input-".concat(n)},[t._v("\n        "+t._s(input.inputName)+"\n      ")])}))],2),t._v(" "),e("table",[e("tr",[e("td",[t._v("\n          Single event cooldown:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.singleEventDelay,expression:"data.singleEventDelay"}],attrs:{type:"range",min:"1",max:"10",step:"1"},domProps:{value:t.data.singleEventDelay},on:{__r:function(e){return t.$set(t.data,"singleEventDelay",e.target.value)}}}),t._v(" "+t._s(t.data.singleEventDelay)+" s\n        ")])]),t._v(" "),e("tr",[e("td",[t._v("\n          Combo cooldown:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.comboDelay,expression:"data.comboDelay"}],attrs:{type:"range",min:"1",max:"120",step:"1"},domProps:{value:t.data.comboDelay},on:{__r:function(e){return t.$set(t.data,"comboDelay",e.target.value)}}}),t._v(" "+t._s(t.data.comboDelay)+" s\n        ")])]),t._v(" "),e("tr",[e("td",[t._v("\n          Combo count prefix:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.comboCountPrefix,expression:"data.comboCountPrefix"}],domProps:{value:t.data.comboCountPrefix},on:{input:function(e){e.target.composing||t.$set(t.data,"comboCountPrefix",e.target.value)}}})])]),t._v(" "),e("tr",[e("td",[t._v("\n          Combo count suffix:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.comboCountSuffix,expression:"data.comboCountSuffix"}],domProps:{value:t.data.comboCountSuffix},on:{input:function(e){e.target.composing||t.$set(t.data,"comboCountSuffix",e.target.value)}}})])]),t._v(" "),e("tr",[e("td",[t._v("\n          Added time prefix:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.comboPrefix,expression:"data.comboPrefix"}],domProps:{value:t.data.comboPrefix},on:{input:function(e){e.target.composing||t.$set(t.data,"comboPrefix",e.target.value)}}})])]),t._v(" "),e("tr",[e("td",[t._v("\n          Added time suffix:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.comboSuffix,expression:"data.comboSuffix"}],domProps:{value:t.data.comboSuffix},on:{input:function(e){e.target.composing||t.$set(t.data,"comboSuffix",e.target.value)}}})])]),t._v(" "),e("tr",[e("td",[t._v("\n          Combo timer prefix:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.comboTimerPrefix,expression:"data.comboTimerPrefix"}],domProps:{value:t.data.comboTimerPrefix},on:{input:function(e){e.target.composing||t.$set(t.data,"comboTimerPrefix",e.target.value)}}})])]),t._v(" "),e("tr",[e("td",[t._v("\n          Combo timer suffix:\n        ")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.comboTimerSuffix,expression:"data.comboTimerSuffix"}],domProps:{value:t.data.comboTimerSuffix},on:{input:function(e){e.target.composing||t.$set(t.data,"comboTimerSuffix",e.target.value)}}})])])]),t._v(" "),t._m(5)]):t._e(),t._v(" "),e("br"),t._v("\n  Version: "),e("span",{staticClass:"version"},[t._v(t._s(t.version))])],1)}),[function(){var t=this,e=t._self._c;return e("tr",[e("td",{attrs:{colspan:"2"}},[e("b",[t._v("Sub:")])]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("b",[t._v("Donation:")])]),t._v(" "),e("td",{attrs:{colspan:"2"}},[e("b",[t._v("Cheer:")])])])},function(){var t=this._self._c;return t("td",[t("b",[this._v("OBS Websocket")])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[e("b",[t._v("Password:")])]),t._v(" "),e("td",[e("b",[t._v("Port:")])])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[e("b",[t._v("Time left:")])]),t._v(" "),e("td",[e("b",[t._v("Live since:")])])])},function(){var t=this,e=t._self._c;return e("tr",[e("td",[e("b",[t._v("Live until:")])]),t._v(" "),e("td",[e("b",[t._v("Total time:")])])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"340px"}},[e("small",[t._v("Combo-Meter shows all added time during the cooldown period. If time is added during cooldown, the cooldown is reset. Preview next to Total time.")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("If the cooldown runs out, the OBS input will be disabled (invisible), when a new combo starts it will be enabled (visible).")]),t._v(" "),e("br"),t._v(" "),e("small",[t._v("This will trigger the input's animations. For example: Slide-In on enable, Fade-Out on disable.")])])}],!1,null,"1eea9a8a",null);e.default=component.exports;installComponents(component,{TimeInput:n(337).default,StreamElements:n(338).default})}}]);