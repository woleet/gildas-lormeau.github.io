var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):$jscomp.arrayIterator(a)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};
$jscomp.polyfill=function(a,c,b,e){if(c){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in b||(b[d]={});b=b[d]}a=a[a.length-1];e=b[a];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function c(){this.batch_=null}function b(a){return a instanceof d?a:new d(function(f,b){f(a)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;c.prototype.asyncExecute=function(a){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(a);return this};c.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var e=$jscomp.global.setTimeout;c.prototype.asyncExecuteFunction=function(a){e(a,
0)};c.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(k){this.asyncThrow_(k)}}}this.batch_=null};c.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var d=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(h){b.reject(h)}};d.prototype.createResolveAndReject_=
function(){function a(a){return function(f){c||(c=!0,a.call(b,f))}}var b=this,c=!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};d.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof d)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};d.prototype.resolveToNonPromiseObj_=function(a){var b=
void 0;try{b=a.then}catch(h){this.reject_(h);return}"function"==typeof b?this.settleSameAsThenable_(b,a):this.fulfill_(a)};d.prototype.reject_=function(a){this.settle_(2,a)};d.prototype.fulfill_=function(a){this.settle_(1,a)};d.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};d.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=
0;a<this.onSettledCallbacks_.length;++a)g.asyncExecute(this.onSettledCallbacks_[a]);this.onSettledCallbacks_=null}};var g=new c;d.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};d.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};d.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(m){f(m)}}:
b}var e,f,g=new d(function(a,b){e=a;f=b});this.callWhenSettled_(c(a,e),c(b,f));return g};d.prototype.catch=function(a){return this.then(void 0,a)};d.prototype.callWhenSettled_=function(a,b){function c(){switch(d.state_){case 1:a(d.result_);break;case 2:b(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?g.asyncExecute(c):this.onSettledCallbacks_.push(c)};d.resolve=b;d.reject=function(a){return new d(function(b,c){c(a)})};d.race=function(a){return new d(function(c,
d){for(var e=$jscomp.makeIterator(a),f=e.next();!f.done;f=e.next())b(f.value).callWhenSettled_(c,d)})};d.all=function(a){var c=$jscomp.makeIterator(a),e=c.next();return e.done?b([]):new d(function(a,d){function f(b){return function(c){g[b]=c;h--;0==h&&a(g)}}var g=[],h=0;do g.push(void 0),h++,b(e.value).callWhenSettled_(f(g.length-1),d),e=c.next();while(!e.done)})};return d},"es6","es3");$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,c){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var b=0,e={next:function(){if(b<a.length){var d=b++;return{value:c(d,a[d]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};$jscomp.polyfill("Array.prototype.keys",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a){return a})}},"es6","es3");
(function(a,c,b,e){var d=a.createElement(c);a=a.getElementsByTagName(c)[0];d.id=b;d.src=e;a.parentNode.insertBefore(d,a)})(document,"script","file-hasher-widget","dist/file-hasher-widget.js");var apiEndpoint="https://api.woleet.io/v1",appEndpoint="https://app.woleet.io/api",RECEIPT_VERIFICATION_URL="https://share.woleet.io/api/receipt/verify",fileChecked={},payload={},proofVerifierConfig={},proofsData={};
function hashCalculated(a,c,b){document.getElementById("file-hasher").style.display="none";fileChecked={widgetId:a,hash:c,file:b};document.getElementById("dropzone").style.display="none";initVerifier(c)}
function hashingStarted(){document.getElementById("dropzone-content").style.display="none";setTimeout(function(){document.getElementById("loading").style.display="block"},100);document.getElementById("file-hasher").style.pointerEvents="none";document.getElementById("file-hasher").style.maxHeight="400px"}
function initVerifier(a){Promise.all([getAnchorIds(a,!1),getAnchorIds(a,!0)]).then(function(a){var b=[].concat(a[0].content,a[1].content),c=[];0===b.length?setTimeout(function(){document.getElementById("loading").style.display="none";document.getElementById("no-proof-content").style.display="block"},500):(b.forEach(function(a){c.push(getReceiptByAnchorId(a))}),Promise.all(c).then(function(a){proofsPromises=getSignatureProofs(a,b);Promise.all(proofsPromises).then(function(a){showProofs(a);proofsData=
a})}))})}function getAnchorIds(a,c){var b={size:1E3};(void 0===c?0:c)?b.signedHash=a:b.hash=a;var e=new URL(apiEndpoint+"/anchorids");Object.keys(b).forEach(function(a){return e.searchParams.append(a,b[a])});return new Promise(function(a){var b=new XMLHttpRequest;b.open("GET",e.href);b.send();b.onreadystatechange=function(c){4==b.readyState&&200==b.status&&a(JSON.parse(b.responseText))}})}
function getSignatureProofs(a,c){proofs=[];i=0;a.forEach(function(a){a.apiException||(proofs.push(verifyReceipt(a,RECEIPT_VERIFICATION_URL,c[i],i)),i++)});return proofs}function getReceiptByAnchorId(a){return new Promise(function(c){var b=new XMLHttpRequest;b.open("GET",appEndpoint+"/receipt/"+a);b.send();b.onreadystatechange=function(a){4==b.readyState&&200==b.status?c(JSON.parse(b.responseText)):4==b.readyState&&202==b.status&&c(JSON.parse(b.responseText))}})}
function renderingTransactionLink(a){link=document.getElementById("viewTransactionLink");link.href=transactionViewUl+a}function showProofs(a){var c=document.getElementById("verifierWidgetTemplate").innerHTML;tempProofs={proofs:a};a=Mustache.render(c,tempProofs);document.getElementById("verifierWidgetTemplate").innerHTML=a;setTimeout(function(){document.getElementById("verifierWidgetTemplate").style="display: block";document.getElementById("loading").style.display="none"},2E3)}
function downloadProof(a){a=proofsData[a].receipt;saveObjectAs(a,a.targetHash+"_receipt.json")}
function saveObjectAs(a,c,b){b=void 0===b?"application/json;charset=utf-8":b;a=JSON.stringify(a,null,4);b=new Blob([a],{type:b});if(window.navigator&&window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(b,c);else{var e=document.createElement("a"),d=URL.createObjectURL(b);e.href=d;e.download=c;document.body.appendChild(e);e.click();setTimeout(function(){document.body.removeChild(e);window.URL.revokeObjectURL(d)},0)}}
function verifyReceipt(a,c,b,e){return new Promise(function(d,g){var f=new XMLHttpRequest;f.open("post",c);f.setRequestHeader("Content-Type","application/json");f.onload=function(){if(200===f.status)try{proof=JSON.parse(f.response);var c=new Date(proof.timestamp);d({proof:JSON.parse(f.response),receipt:a,anchorId:b,dateSigned:c.toDateString(),index:e})}catch(k){d(f.response)}else g(Error(f.status))};f.onerror=function(){g(Error("Network Error"))};f.send(JSON.stringify(a));var l=setTimeout(function(){clearTimeout(l);
g("Timed out in 2000ms.")},2E3)})}function showDetails(a){elm=document.getElementById(a);elm.classList.toggle("show")};