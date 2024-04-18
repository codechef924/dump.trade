import{a5 as f}from"./entry.0b904d76.js";const i=r=>{if(r=f(r),Array.isArray(r))return!!r.length;if(r==null)return!1;if(r===!1)return!0;if(r instanceof Date)return!isNaN(r.getTime());if(typeof r=="object"){for(let t in r)return!0;return!1}return!!String(r).length};function a(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return n=>(n=f(n),!i(n)||t.every(x=>(x.lastIndex=0,x.test(n))))}a(/^[a-zA-Z]*$/);a(/^[a-zA-Z0-9]*$/);a(/^\d*(\.\d+)?$/);const s=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;a(s);function d(r){return typeof r=="string"&&(r=r.trim()),i(r)}var c={$validator:d,$message:"Value is required",$params:{type:"required"}};const u=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;a(u);function m(r){return t=>!i(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+f(r)}function z(r){return{$validator:m(r),$message:t=>{let{$params:e}=t;return`The minimum value allowed is ${e.min}`},$params:{min:r,type:"minValue"}}}function $(r){return t=>!i(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+f(r)}var g=r=>({$validator:$(r),$message:t=>{let{$params:e}=t;return`The maximum value allowed is ${e.max}`},$params:{max:r,type:"maxValue"}});a(/(^[0-9]*$)|(^-[0-9]+$)/);a(/^[-]?\d*(\.\d+)?$/);export{g as a,z as m,c as r};
