(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2],{291:function(t,e,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("39c45de6",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";n(291)},293:function(t,e,n){var r=n(36)((function(i){return i[1]}));r.push([t.i,".nuxt-logo{height:180px}",""]),r.locals={},t.exports=r},294:function(t,e,n){"use strict";n.r(e);n(292);var r=n(15),component=Object(r.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"nuxt-logo",attrs:{viewBox:"0 0 45 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z",fill:"#00DC82"}})])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);n(32);var r=n(9),o=(n(50),n(11),n(88),n(294),{data:function(){return{name:"Team Page",mountains:[]}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.nuxtjs.dev/mountains").then((function(t){return t.json()}));case 2:t.mountains=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Mountain page description"},{hid:"keywords",name:"keywords",content:"vuejs, nuxtjs, seo, meta, sitemap, modules"}]}}}),c=o,l=n(15),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{},[e("h2",[t._v(t._s(t.name))]),t._v(" "),e("div",{staticClass:"flex flex-row"},[e("div",{staticClass:"flex-none mr-6 bg-gray-200 w-1/4 h-auto px-3"},[e("ul",[t.$fetchState.pending?e("p",[t._v("Loading....")]):t.$fetchState.error?e("p",[t._v("Error while fetching mountains")]):e("ul",t._l(t.mountains,(function(n,r){return e("li",{key:r},[t._v("\n            "+t._s(n.title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"grow bg-gray-100 h-auto px-10"},[t("p",{staticClass:"mb-4 text-lg"},[this._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa\n        consequatur dolores dolore eveniet non eaque vero repellat, doloremque\n        rerum iste tempore numquam illo natus vitae delectus eius? Nihil\n        accusantium ducimus culpa veniam fugiat assumenda? Reiciendis sunt\n        temporibus quidem, consequatur incidunt nisi. Unde velit aspernatur,\n        atque exercitationem aperiam fugiat perspiciatis voluptatum?\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);