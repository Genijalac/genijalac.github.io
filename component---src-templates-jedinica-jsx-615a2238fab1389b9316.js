webpackJsonp([0x1c9fc5c1fe3f0c00],{"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(r[s]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"./node_modules/style-loader/addStyles.js":function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(u(r.parts[s],t))}else{for(var a=[],s=0;s<r.parts.length;s++)a.push(u(r.parts[s],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],l=o[2],i=o[3],u={css:a,media:l,sourceMap:i};n[s]?n[s].parts.push(u):t.push(n[s]={id:s,parts:[u]})}return t}function s(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",s(e,t),t}function i(e){var t=document.createElement("link");return t.rel="stylesheet",s(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var s=v++;n=y||(y=l(t)),r=c.bind(null,n,s,!1),o=c.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=i(t),r=f.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=d.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=j(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,g=[];e.exports=function(e,t){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var s=[],a=0;a<n.length;a++){var l=n[a],i=p[l.id];i.refs--,s.push(i)}if(e){var u=o(e);r(u,t)}for(var a=0;a<s.length;a++){var i=s[a];if(0===i.refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete p[i.id]}}}};var j=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},"./src/components/URL.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),i=r(l),u=n("./node_modules/gatsby-link/index.js"),c=r(u),d=function(e){function t(){return o(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.to.toLowerCase().replace(/ž/g,"z").replace(/š/g,"s").replace(".","-").replace(/č/g,"c").replace(/ć/g,"c").replace(/đ/g,"d").replace(/(\.\s+|\s+|\.)/g,"-");return i.default.createElement(c.default,{className:this.props.className,to:e},this.props.children)},t}(l.Component);t.default=d,e.exports=t.default},"./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/templates/cjeline.module.scss":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,"",""])},"./src/templates/cjeline.module.scss":function(e,t,n){var r=n("./node_modules/css-loader/index.js?modules&minimize&importLoaders=1!./node_modules/sass-loader/index.js!./src/templates/cjeline.module.scss");"string"==typeof r&&(r=[[e.id,r,""]]);n("./node_modules/style-loader/addStyles.js")(r,{});r.locals&&(e.exports=r.locals)},'./node_modules/babel-loader/lib/index.js?{"plugins":["D:/Code/Genijalac/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","D:/Code/Genijalac/node_modules/babel-plugin-add-module-exports/lib/index.js","D:/Code/Genijalac/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["D:/Code/Genijalac/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"D:/Code/Genijalac/node_modules/babel-preset-stage-0/lib/index.js","D:/Code/Genijalac/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/jedinica.jsx':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n("./node_modules/react/react.js"),i=r(l),u=n("./node_modules/gatsby-link/index.js"),c=r(u),d=n("./src/components/URL.jsx"),f=r(d),p=n("./src/templates/cjeline.module.scss"),m=(r(p),function(e){function t(){return o(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function(){var e=document.querySelectorAll("math");console.log(e),e.forEach(function(e){var t=!e.attributes.inline;katex.render(e.innerHTML,e,{displayMode:t})})},t.prototype.render=function(){var e=this.props.data.markdownRemark;"https://www.youtube.com/embed/"+e.frontmatter.video+"?rel=0&amp;showinfo=0";return i.default.createElement("div",null,i.default.createElement("div",{className:"container content"},i.default.createElement("h2",null," ",e.frontmatter.title),i.default.createElement("div",{className:"breadcrumbs"},i.default.createElement("span",null,i.default.createElement(c.default,{to:"/"},"Naslovna")," "),i.default.createElement("span",null,"/ ",i.default.createElement(c.default,{to:"/"+e.frontmatter.razred+"/"},"Matematika ",e.frontmatter.razred)," "),"/ ",i.default.createElement(f.default,{to:"/"+e.frontmatter.razred+"/"+e.frontmatter.cjelina+"/"},e.frontmatter.cjelina)),i.default.createElement("div",null," ",i.default.createElement("small",null,"Type: ",e.frontmatter.type," /  VideoID: ",e.frontmatter.video," ")," "),i.default.createElement("div",null,i.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))))},t}(i.default.Component));t.default=m;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-jedinica-jsx-615a2238fab1389b9316.js.map