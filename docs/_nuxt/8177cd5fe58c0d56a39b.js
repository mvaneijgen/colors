(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{182:function(t,e,o){var content=o(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("e654c06a",content,!0,{sourceMap:!1})},183:function(t,e,o){var content=o(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("90e5f6d0",content,!0,{sourceMap:!1})},184:function(t,e,o){var content=o(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("74fa87f8",content,!0,{sourceMap:!1})},185:function(t,e,o){var map={"./affinity-designer.png":186,"./github-pages.png":187,"./greensock.png":188,"./sketch.png":189,"./vue.png":190,"./wordpress.png":191};function n(t){var e=l(t);return o(e)}function l(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=185},186:function(t,e,o){t.exports=o.p+"img/1665d6e.png"},187:function(t,e,o){t.exports=o.p+"img/0387707.png"},188:function(t,e,o){t.exports=o.p+"img/2444b95.png"},189:function(t,e,o){t.exports=o.p+"img/f8107a5.png"},190:function(t,e,o){t.exports=o.p+"img/06c363d.png"},191:function(t,e,o){t.exports=o.p+"img/afad089.png"},192:function(t,e,o){"use strict";var n=o(182);o.n(n).a},193:function(t,e,o){(e=o(28)(!1)).push([t.i,".component-ToolsUsed>.inner[data-v-44681a72]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-column-gap:15px;grid-row-gap:15px}.component-ToolsUsed>.inner>*[data-v-44681a72]{padding:15px;font-size:16px;line-height:1.4em;color:#fff}.component-ToolsUsed>.inner .contents[data-v-44681a72]{position:relative;z-index:10;width:90%}.component-ToolsUsed>.inner .contents a[data-v-44681a72]{font-size:.7rem;font-weight:700;text-decoration:none;line-height:1rem;text-transform:uppercase}.component-ToolsUsed>.inner img[data-v-44681a72]{position:absolute;-o-object-fit:contain;object-fit:contain;top:0;right:-50px;max-width:150px;-webkit-filter:grayscale(1);filter:grayscale(1);opacity:.2}",""]),t.exports=e},194:function(t,e,o){"use strict";var n=o(183);o.n(n).a},195:function(t,e,o){(e=o(28)(!1)).push([t.i,".component-CallToAction[data-v-e21de66c]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-column-gap:15px;grid-row-gap:15px}@media (max-width:767px){.component-CallToAction[data-v-e21de66c]{grid-template-columns:repeat(auto-fill,minmax(100%,1fr))}}.alloy-cards[data-v-e21de66c]{border-radius:5px}.alloy-cards.cta[data-v-e21de66c]{background-color:#344;margin-bottom:15px;color:#fff}.alloy-cards.cta>.inner[data-v-e21de66c]{padding:15px}.alloy-cards.cta strong[data-v-e21de66c]{display:block}.alloy-cards.cta .btn[data-v-e21de66c]{display:inline-block;background-color:#1d2727;border-color:#1d2727}.alloy-cards[data-cta-type=cta--alt][data-v-e21de66c]{background-color:#0ba}.alloy-cards[data-cta-type=cta--alt] .btn[data-v-e21de66c]{background-color:#00887c;border-color:#00887c}",""]),t.exports=e},196:function(t,e,o){"use strict";var n=o(184);o.n(n).a},197:function(t,e,o){(e=o(28)(!1)).push([t.i,".banana[data-v-56d07684]{position:absolute;bottom:10px;right:15px;width:40px;cursor:pointer}",""]),t.exports=e},198:function(t,e,o){"use strict";o.r(e);var n={name:"ToolsUsed",data:function(){return{tools:this.$store.state.Default.toolsUsed}},methods:{imageLink:function(image){return o(185)("./".concat(image))}}},l=(o(192),o(4)),r=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component-ToolsUsed"},[t._m(0),t._v(" "),o("p"),t._v(" "),o("div",{staticClass:"inner"},t._l(t.tools,(function(e,n){return o("div",{key:n,staticClass:"alloy-cards alloy-items alloy-items--tools"},[o("div",{staticClass:"contents"},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.about))]),t._v(" "),o("a",{attrs:{href:e.url,target:"_blank"}},[t._v("View")])]),t._v(" "),o("img",{attrs:{src:t.imageLink(e.image),alt:e.title}})])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alloy-content alloy-text-light"},[e("h2",[this._v("Here are some tools that have been used in the creation of this site.")])])}],!1,null,"44681a72",null).exports,c={name:"SpecialThanks",data:function(){return{people:this.$store.state.Default.specialThanks}}},d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component-SpecialThanks"},[o("h3",[t._v("Special thanks to!")]),t._v(" "),o("ul",t._l(t.people,(function(e,n){return o("li",{key:n},[e.url?o("a",{attrs:{target:"_blank",href:e.url}},[t._v("\n        "+t._s(e.name)+"\n        "),e.realname?o("small",[t._v("("+t._s(e.realname)+")")]):t._e()]):[t._v("\n        "+t._s(e.name)+"\n        "),e.realname?o("small",[t._v("("+t._s(e.realname)+")")]):t._e()]],2)})),0)])}),[],!1,null,null,null).exports,v={name:"CallToAction",data:function(){return{title:"CallToAction",callToActions:this.$store.state.Default.callToActions}}},h=(o(194),{transition:"page-alt",data:function(){return{todos:this.$store.state.Default.todos,banana:!0}},components:{ToolsUsed:r,SpecialThanks:d,CallToAction:Object(l.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"component-CallToAction"},t._l(t.callToActions,(function(e,n){return o("div",{key:n,staticClass:"alloy-cards cta",attrs:{"data-cta-type":e.type}},[o("div",{staticClass:"inner"},[o("p",[o("strong",[t._v(t._s(e.title))]),t._v(" "),o("span",[t._v(t._s(e.description))])]),t._v(" "),e.url?o("nuxt-link",{staticClass:"btn btn--small",attrs:{to:e.url}},[t._v(t._s(e.cta))]):t._e()],1)])})),0)}),[],!1,null,"e21de66c",null).exports},methods:{foundBanana:function(){this.banana=!1;this.$store.commit("Notifications/addNotification",{title:"You've found a banana!",content:"I hope you're proud of yourself...",image:"",type:"",timer:6e3})}}}),f=(o(196),Object(l.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page"},[o("div",{staticClass:"alloy-page alloy-page--content alloy-page--about"},[o("div",{staticClass:"alloy-conttent alloy-text-light"},[o("section",[o("div",{staticClass:"alloy-col"},[o("h3",[t._v("What is this?")]),t._v(" "),o("p",[t._v("PC part picker, but for longboards.")]),t._v(" "),o("p",[t._v("Build & share your (dream) setup, too get feedback or just to show the world how awesome it is.")]),t._v(" "),o("SpecialThanks"),t._v(" "),o("CallToAction")],1),t._v(" "),o("div",{staticClass:"alloy-col"},[o("h3",[t._v("Road map")]),t._v(" "),o("p",[t._v("Projects are never done! Therefore you’ll get to peek behind the scenes. This is my todo list:")]),t._v(" "),o("ul",t._l(t.todos,(function(e,n){return o("li",{key:n},[t._v(t._s(e.name))])})),0),t._v(" "),o("h4",[t._v("Want to help?")]),t._v(" "),o("p",[t._v("Are you a Vue.js/Nuxt or Javascript developer?")]),t._v(" "),o("nuxt-link",{staticClass:"btn btn--small",attrs:{to:"/contact"}},[t._v("Shoot me a message")]),t._v(" "),o("h4",[t._v("This site is hosted on Github Pages")]),t._v(" "),o("p",[t._v("If you're looking for the source code or if you’re just interested to see how it's build you can take a look at the repository.")]),t._v(" "),o("a",{staticClass:"btn btn--small",attrs:{href:this.$store.state.Default.repo}},[t._v("Github repo")])],1),t._v(" "),o("h1",[t._v("Contact")]),t._v(" "),o("p",[t._v("\n          This site is entirely build and designed by me (\n          "),o("a",{attrs:{target:"_blank",href:this.$store.state.Default.me.url}},[t._v("Mitchel van Eijgen")]),t._v(" ). The code can be found in the\n          "),o("a",{attrs:{target:"_blank",href:"https://github.com/mvaneijgen/longboardsetup"}},[t._v("Github repository")]),t._v(", it's also being hosted on Github, with the help of\n          "),o("a",{attrs:{target:"_blank",href:"//pages.github.com"}},[t._v("Github Pages")]),t._v(".\n        ")]),t._v(" "),o("p",{domProps:{innerHTML:t._s(this.$store.state.Default.description)}}),t._v(" "),o("p",[t._v("\n          You can send me a message via\n          "),o("a",{attrs:{href:"mailto:"+this.$store.state.Default.me.email},domProps:{innerHTML:t._s(this.$store.state.Default.me.email)}}),t._v(" or contact me via any social network mentioned below here.\n        ")])]),t._v(" "),o("section",[o("ToolsUsed")],1),t._v(" "),o("section",[o("SpecialThanks")],1),t._v(" "),o("section",[o("h2",[t._v("Help others by submitting products and complete the database of longboard products")]),t._v(" "),o("p",[t._v("All items from the site are scraped from different resources and the list is by no means complete. There are multiple older decks or different variations that are not yet present in the current collection. If you are a longboard dealer (or enthusiastic) and are looking to add multiple products at once, please contact me through one of the options below.")]),t._v(" "),o("br"),t._v(" "),o("CallToAction")],1)])]),t._v(" "),t.banana?o("div",{staticClass:"banana",on:{click:t.foundBanana}},[o("svg",{attrs:{viewBox:"0 0 27 23",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[o("path",{attrs:{fill:"none",d:"M0 0h27v23H0z"}}),t._v(" "),o("clipPath",{attrs:{id:"a"}},[o("path",{attrs:{d:"M0 0h27v23H0z"}})]),t._v(" "),o("g",{attrs:{"clip-path":"url(#a)"}},[o("path",{attrs:{d:"M22.663 1.384l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z",fill:"#f5d85f"}}),t._v(" "),o("path",{attrs:{d:"M23.556.636a.521.521 0 0 0-.119-.057L21.648.013a.501.501 0 0 0-.646.398l-.403 2.596a.492.492 0 0 0 .013.209s.071.261.14.587c.069.327.128.733.123.909a7.611 7.611 0 0 1-.699 2.879 13.347 13.347 0 0 1-2.966 4.117c-1.474 1.382-3.316 2.421-5.214 3.266-2.002.891-4.15 1.545-6.313 1.8-1.082.128-3.623-.157-3.623-.157a.501.501 0 0 0-.47.209l-.865 1.23a.504.504 0 0 0 .096.676s2.214 1.804 3.602 2.529c1.284.671 2.692 1.382 4.246 1.537 2.06.205 4.107-.304 5.979-.912 1.319-.429 2.512-1.129 3.621-1.866 1.37-.911 2.664-1.966 3.791-3.179.817-.879 1.585-1.858 2.136-2.968a11.888 11.888 0 0 0 1.133-3.702c.09-.687.063-1.39-.07-2.065l-.002-.001c-.147-.741-.481-1.362-.716-1.94-.248-.614-.544-1.166-.751-1.711a30.45 30.45 0 0 1-.523-1.629l.498-1.622a.5.5 0 0 0-.209-.567zm-.893.748l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z"}}),t._v(" "),o("path",{attrs:{d:"M15.051 18.066a.5.5 0 0 0-.506.062l-.363.271a4.756 4.756 0 0 1-2.897.952l-.453-.003a.5.5 0 1 0-.009 1l.453.003a5.76 5.76 0 0 0 3.506-1.152l.363-.271a.501.501 0 0 0-.07-.85l-.024-.012z"}})])])]):t._e()])}),[],!1,null,"56d07684",null));e.default=f.exports}}]);