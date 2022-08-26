(function(){"use strict";var t={512:function(t,e,n){var a=n(963),r=n(252);const s={class:"container"};function o(t,e,n,a,o,i){const l=(0,r.up)("navbar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("div",s,[(0,r.Wm)(c)])],64)}const i={class:"container"},l={class:"nav-wrapper"},c=(0,r.Uk)("Таск Менеджер"),u={class:"right hide-on-med-and-down"},d=(0,r.Uk)("Добавить задачу"),f=(0,r.Uk)("Список задач");function p(t,e,n,a,s,o){const p=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",i,[(0,r._)("div",l,[(0,r.Wm)(p,{to:"/",class:"brand-logo"},{default:(0,r.w5)((()=>[c])),_:1}),(0,r._)("ul",u,[(0,r._)("li",null,[(0,r.Wm)(p,{to:"/",axact:"","active-class":"active"},{default:(0,r.w5)((()=>[d])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(p,{to:"/list","active-class":"active"},{default:(0,r.w5)((()=>[f])),_:1})])])])])}var h={},m=n(744);const v=(0,m.Z)(h,[["render",p]]);var g=v,k={components:{Navbar:g}};const y=(0,m.Z)(k,[["render",o]]);var b=y,w=n(205);(0,w.z)("/Task-Manager-vue-3/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var T=n(201);const _={class:"row"},S={class:"col s6 offset-s3"},O=(0,r._)("h2",null,"Создать задачу",-1),N={class:"input-field"},C=(0,r._)("label",{for:"title"},"Название задачи",-1),x=(0,r._)("span",{class:"helper-text","data-error":"Название задачи не может быть пустым"},null,-1),j={class:"chips",ref:"chips"},A={class:"input-field"},D=(0,r._)("label",{for:"descr"},"Описание задачи",-1),E={type:"text",ref:"datepicker"},I=(0,r._)("button",{type:"submit",class:"btn"},"Добавить задачу",-1);function F(t,e,n,s,o,i){return(0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",S,[O,(0,r._)("form",{onSubmit:e[2]||(e[2]=(0,a.iM)(((...t)=>i.addTask&&i.addTask(...t)),["prevent"]))},[(0,r._)("div",N,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.title=t),id:"title",type:"text",class:"validate",required:""},null,512),[[a.nr,o.title]]),C,x]),(0,r._)("div",j,null,512),(0,r._)("div",A,[(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.descr=t),id:"descr",class:"materialize-textarea"},null,512),[[a.nr,o.descr]]),D]),(0,r._)("input",E,null,512),I],32)])])}var P={name:"HomeView",data(){return{title:"",descr:"",tags:null,date:null}},methods:{addTask(){const t={id:Date.now(),title:this.title,descr:this.descr,status:"active",tags:this.tags.chipsData,date:this.date.date};this.$store.dispatch("addTask",t),this.$router.push("/list")},destroyed(){this.tags&&this.tags.destroy&&this.tags.destroy(),this.date&&this.date.destroy&&this.date.destroy()}},mounted(){this.tags=M.Chips.init(this.$refs.chips,{placeholder:"Добавить тэг"}),this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date,setDefaultDate:!0})}};const U=(0,m.Z)(P,[["render",F]]);var B=U;const J=[{path:"/",name:"home",component:B},{path:"/list",name:"list",component:()=>n.e(871).then(n.bind(n,871))},{path:"/task/:id",name:"task",component:()=>n.e(15).then(n.bind(n,15))}],L=(0,T.p7)({history:(0,T.PO)("/Task-Manager-vue-3/"),routes:J});var W=L,q=n(907),$=(0,q.MT)({state:{tasks:JSON.parse(localStorage.getItem("tasks")||"[]")},getters:{tasks:t=>t.tasks,taskById:t=>e=>t.tasks.find((t=>t.id===e))},mutations:{addTask(t,e){t.tasks.unshift(e),localStorage.setItem("tasks",JSON.stringify(t.tasks))},updateTask(t,{id:e,title:n,descr:a,date:r}){const s=[...t.tasks],o=s.findIndex((t=>t.id===e)),i=s[o];s[o]={...i,title:n,descr:a,date:r},t.tasks=s,localStorage.setItem("tasks",JSON.stringify(t.tasks))},deleteTask(t,e){t.tasks=t.tasks.filter((t=>t.id!==e)),localStorage.setItem("tasks",JSON.stringify(t.tasks))},changeStatus(t,e){const n=t.tasks.findIndex((t=>t.id===e));"active"===t.tasks[n].status?t.tasks[n].status="completed":t.tasks[n].status="active",this.commit("toFilterTasks")},toFilterTasks(t){const e=t.tasks.filter((t=>"active"===t.status)),n=t.tasks.filter((t=>"completed"===t.status));t.tasks=[...e,...n],localStorage.setItem("tasks",JSON.stringify(t.tasks))}},actions:{addTask({commit:t},e){t("addTask",e)},updateTask({commit:t},e){t("updateTask",e)},deleteTask({commit:t},e){t("deleteTask",e)},changeStatus({commit:t},e){t("changeStatus",e)}}});n(58);(0,a.ri)(b).use($).use(W).mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,s){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],r=t[u][1],s=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(i=!1,s<o&&(o=s));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,r,s]}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{15:"23ada0a2",871:"97e21dfb"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{15:"6db6706e",871:"2423eb85"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="task-manager:";n.l=function(a,r,s,o){if(t[a])t[a].push(r);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+s),i.src=a),t[a]=[r];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(p);var r=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/Task-Manager-vue-3/"}(),function(){var t=function(t,e,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var s=function(s){if(r.onerror=r.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=s,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],s=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(s===t||s===e))return r}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){r=o[a],s=r.getAttribute("data-href");if(s===t||s===e)return r}},a=function(a){return new Promise((function(r,s){var o=n.miniCssF(a),i=n.p+o;if(e(o,i))return r();t(a,i,r,s)}))},r={143:0};n.f.miniCss=function(t,e){var n={15:1,871:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise((function(n,a){r=t[e]=[n,a]}));a.push(r[2]=s);var o=n.p+n.u(e),i=new Error,l=function(a){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,r[1](i)}};n.l(o,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,s,o=a[0],i=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(e&&e(a);c<o.length;c++)s=o[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(512)}));a=n.O(a)})();
//# sourceMappingURL=app.0819aecd.js.map