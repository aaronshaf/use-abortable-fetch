var n=require("react"),r=n.useState,t=n.useEffect,e=n.useLayoutEffect,o=n.useRef;module.exports=function(n){var u=r({data:null,loading:0,error:null,controller:null}),a=u[0],l=u[1],c=o(!1);return e(function(){return c.current=!0,function(){c.current=!1}},[]),t(function(){var r=new AbortController;return l(function(n){return{data:null,loading:n.loading+1,error:null,controller:r}}),function(n,r,t){fetch(n,{signal:r}).then(function(n){return n.ok?Promise.resolve(n):Promise.reject({message:n.statusText,status:n.status})}).then(function(n){return n.json()}).then(function(n){t(function(r){return Object.assign({},r,{data:n,loading:r.loading-1})})}).catch(function(n){var r="AbortError"!==n.name?n:null;t(function(n){return Object.assign({},n,{error:r,loading:n.loading-1})})})}(n,r.signal,function(n){c.current&&l(n)}),function(){return r.abort()}},[n]),{data:a.data,loading:!!a.loading,error:a.error,abort:function(){return a.controller&&a.controller.abort()}}};
//# sourceMappingURL=index.mjs.map
