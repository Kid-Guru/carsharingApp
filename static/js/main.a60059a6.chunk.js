(this["webpackJsonpcarsharing-app"]=this["webpackJsonpcarsharing-app"]||[]).push([[0],{22:function(e,t,n){e.exports={burgerBtn:"BurgerButton_burgerBtn__3cHF5",burgerBtn__element:"BurgerButton_burgerBtn__element__3Yonb",burgerBtn_active:"BurgerButton_burgerBtn_active__1ltCX",ligth:"BurgerButton_ligth__3Aa_g",dark:"BurgerButton_dark__1Apvu"}},28:function(e,t,n){e.exports={footer:"Footer_footer__7dIj9",footer__copyright:"Footer_footer__copyright__24AUT",footer__phone:"Footer_footer__phone__Z4Uwk"}},34:function(e,t,n){e.exports={button:"Button_button__2lUo3",button__fullWidth:"Button_button__fullWidth__1TNGN"}},49:function(e,t,n){e.exports={languageBtn:"LanguageButton_languageBtn__2knop"}},7:function(e,t,n){e.exports={container:"Carousel_container__3-1j8",carousel:"Carousel_carousel__18mDK",carousel__track:"Carousel_carousel__track__2kBa5",carousel__slide:"Carousel_carousel__slide__370v-",slide:"Carousel_slide__2gmg_",slide__wrapper:"Carousel_slide__wrapper__myuAs",slide__title:"Carousel_slide__title__3BSBT",slide__offer:"Carousel_slide__offer__3tKyA",slide__btnDetails:"Carousel_slide__btnDetails__Qa-t_",arrow:"Carousel_arrow__1_unl",dots:"Carousel_dots__3paql",dots__item:"Carousel_dots__item__3-Nck",dots__item_active:"Carousel_dots__item_active__12eTJ"}},81:function(e,t,n){},82:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},9:function(e,t,n){e.exports={main:"MainPage_main__3vXkd",main__section:"MainPage_main__section__2ercg",wrapper:"MainPage_wrapper__1Wkti",wrapper_button:"MainPage_wrapper_button__192qk",hero:"MainPage_hero__3napi",hero__title:"MainPage_hero__title__n7Mzk",hero__offer:"MainPage_hero__offer__3cNB6",title:"MainPage_title__1VXBc",title__black:"MainPage_title__black__2FR4R",title__accent:"MainPage_title__accent__10T8s",main__section_content:"MainPage_main__section_content__22ZXS",main__section_slider:"MainPage_main__section_slider__3fwkN"}},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n(4),c=n(26),i=n(47),s=n(1),l=n.n(s),o=n(25),u=n.n(o),d=n(5),b=n(6),j=n(14),_=n.n(j),p=n(18),O=n.n(p),f=n(27),m=n(97),h=n(48),v=n.n(h).a.create({baseURL:"".concat("https://cors-anywhere.herokuapp.com/").concat("http://api-factory.simbirsoft1.com/api/"),headers:{"X-Api-Factory-Application-Id":"5e25c641099b810b946c5d5b"}}),x=function(){return v.get("db/city/")},g=function(){return v.get("db/point/")},C=function(){return v.get("db/car/")},N=Object(m.a)("TOGGLE_MENU"),y=Object(m.a)("TOGGLE_LANGUAGE"),w=(Object(m.a)("SET_STEP_ORDER"),Object(m.a)("SET_CITIES")),S=Object(m.a)("SET_POINTS"),E=Object(m.a)("SET_CARS"),k=Object(m.a)("SET_ORDER_CITY"),P=Object(m.a)("SET_ORDER_POINT"),I=Object(m.a)("RESET_ORDER_POINT"),B=Object(m.a)("SET_CURRENT_STEP_ORDER"),R=Object(m.a)("SET_MODEL_STEP_STATUS"),L=function(){return function(e){e((function(e,t){var n=t().order,r=n.cityOrder,a=n.pointOrder;r.isValid&&a.isValid?e(R({modelStepStatus:"available"})):e(R({modelStepStatus:"blocked"}))}))}},M=function(e){return function(t,n){var r=n().order.steps;"available"===r[r.map[e]]&&t(B({currentStep:e}))}},T=n(22),F=n.n(T),A=n(0),V={ligth:F.a.ligth,dark:F.a.dark},D=function(e){var t=e.theme,n=Object(a.c)(),r=Object(a.d)((function(e){return e.stateUI.sidebarActive})),c=_()(F.a.burgerBtn,V[t],Object(b.a)({},F.a.burgerBtn_active,r));return Object(A.jsx)("button",{className:c,type:"button",onClick:function(){return n(N())},children:Object(A.jsx)("span",{className:F.a.burgerBtn__element})})};D.defaultProps={theme:"ligth"};var U=D,H=n(49),Z=n.n(H),q=function(){var e=Object(a.c)(),t=Object(a.d)((function(e){return e.stateUI})),n=t.currentLang,r=t.availableLang;return Object(A.jsx)("button",{className:Z.a.languageBtn,type:"button",onClick:function(){var t=n+1;r.length===t&&(t=0),e(y({currentLang:t}))},children:r[n]})},W=(n(81),function(){return Object(A.jsxs)("aside",{className:"sideBar",children:[Object(A.jsx)("div",{children:Object(A.jsx)(U,{theme:"ligth"})}),Object(A.jsx)("div",{children:Object(A.jsx)(q,{})})]})}),X=n(34),G=n.n(X),J=function(e){var t=e.text,n=e.onClickHandle,r=e.isDisabled,a=e.isFullWidth,c=_()(G.a.button,Object(b.a)({},G.a.button__fullWidth,a));return Object(A.jsx)("button",{className:c,disabled:r,type:"button",onClick:n,children:t})};J.defaultProps={text:"\u0442\u0435\u043a\u0441\u0442",onClickHandle:function(){},isDisabled:!1,isFullWidth:!1};var z,K=J,Y=(n(82),function(){return Object(A.jsxs)("div",{className:"header",children:[Object(A.jsx)("div",{className:"header__btnCol",children:Object(A.jsx)(U,{theme:"dark"})}),Object(A.jsxs)("div",{className:"header__textCol",children:[Object(A.jsx)("div",{className:"header__logo",children:"Need for drive"}),Object(A.jsx)("div",{className:"s.header__city city",children:Object(A.jsx)("span",{className:"city__name",children:"\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a"})})]})]})}),Q=n(28),$=n.n(Q),ee=function(){return Object(A.jsxs)("footer",{className:$.a.footer,children:[Object(A.jsx)("div",{className:$.a.footer__copyright,children:"\xa9 2016-2021 \xabNeed for drive\xbb"}),Object(A.jsx)("a",{className:$.a.footer__phone,href:"tel:+74952342244",children:"8 (495) 234-22-44"})]})},te=n(21),ne=n(50);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ce(e,t){var n=e.title,r=e.titleId,a=ae(e,["title","titleId"]);return s.createElement("svg",re({width:10,height:20,viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,z||(z=s.createElement("path",{d:"M9 1L1 10L9 19",stroke:"#EEEEEE",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var ie,se=s.forwardRef(ce);n.p;function le(){return(le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ue(e,t){var n=e.title,r=e.titleId,a=oe(e,["title","titleId"]);return s.createElement("svg",le({width:10,height:20,viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,ie||(ie=s.createElement("path",{d:"M1 1L9 10L1 19",stroke:"#EEEEEE",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var de,be=s.forwardRef(ue),je=(n.p,n(7)),_e=n.n(je),pe=1,Oe=function(){var e,t=Object(a.d)((function(e){return e.main.carouselData})),n=Object(s.useState)(0),r=Object(te.a)(n,2),c=r[0],i=r[1],l={left:function(e){return 1===e?t.length:e-1},rigth:function(e){return e===t.length?1:e+1}},o=function(e){return function(){var t=l[e](pe);pe=t,i(-100*(t-1))}},u=function(e,t){return _()(_e.a.dots__item,Object(b.a)({},_e.a.dots__item_active,e+1===t))};return Object(A.jsxs)("div",{className:_e.a.container,children:[Object(A.jsx)("div",{className:_e.a.carousel,children:Object(A.jsx)("div",{className:_e.a.carousel__track,style:{transform:"translateX(".concat(c,"%)")},children:(e=t,e.map((function(e){return Object(A.jsx)("div",{className:"".concat(_e.a.carousel__slide," ").concat(_e.a.slide),style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(".concat(e.imgSRC,")")},children:Object(A.jsxs)("div",{className:_e.a.slide__wrapper,children:[Object(A.jsx)("h2",{className:_e.a.slide__title,children:e.title}),Object(A.jsx)("p",{className:_e.a.slide__offer,children:e.offer}),Object(A.jsx)("button",{className:_e.a.slide__btnDetails,type:"button",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})]})},e.id)})))})}),Object(A.jsx)("button",{type:"button",className:"".concat(_e.a.arrow," ").concat(_e.a.arrow__left),onClick:o("left"),children:Object(A.jsx)(se,{})}),Object(A.jsx)("button",{type:"button",className:"".concat(_e.a.arrow," ").concat(_e.a.arrow__rigth),onClick:o("rigth"),children:Object(A.jsx)(be,{})}),Object(A.jsx)("div",{className:_e.a.dots,children:t.map((function(e,t){return Object(A.jsx)("div",{className:u(t,pe)},Object(ne.uniqueId)())}))})]})},fe=n(9),me=n.n(fe),he=function(){var e=Object(d.g)();return Object(A.jsxs)("div",{className:me.a.main,children:[Object(A.jsxs)("section",{className:"".concat(me.a.main__section," ").concat(me.a.main__section_content),children:[Object(A.jsx)(Y,{}),Object(A.jsxs)("div",{className:me.a.wrapper,children:[Object(A.jsxs)("div",{className:me.a.hero,children:[Object(A.jsxs)("h1",{className:"".concat(me.a.hero__title," ").concat(me.a.title),children:[Object(A.jsx)("span",{className:me.a.title__black,children:"\u041a\u0430\u0440\u0448\u0435\u0440\u0438\u043d\u0433"}),Object(A.jsx)("span",{className:me.a.title__accent,children:"Need for drive"})]}),Object(A.jsx)("p",{className:me.a.hero__offer,children:"\u041f\u043e\u043c\u0438\u043d\u0443\u0442\u043d\u0430\u044f \u0430\u0440\u0435\u043d\u0434\u0430 \u0430\u0432\u0442\u043e \u0442\u0432\u043e\u0435\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430"})]}),Object(A.jsx)("div",{className:me.a.wrapper_button,children:Object(A.jsx)(K,{text:"\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClickHandle:function(){return e.push("/order")}})})]}),Object(A.jsx)(ee,{})]}),Object(A.jsx)("section",{className:"".concat(me.a.main__section," ").concat(me.a.main__section_slider),children:Object(A.jsx)(Oe,{})})]})};n(87);function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ge(e,t){var n=e.title,r=e.titleId,a=xe(e,["title","titleId"]);return s.createElement("svg",ve({width:32,height:32,viewBox:"0 0 32 32",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,de||(de=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM10.7144 14.5343C9.11157 15.2341 7.46472 15.9532 5.95883 16.7826L5.95873 16.7828C5.17241 17.3585 6.21758 17.7657 7.19803 18.1476C7.35391 18.2084 7.50814 18.2685 7.65313 18.3285C7.77377 18.3656 7.89647 18.4047 8.02079 18.4443C9.11124 18.7917 10.3272 19.1791 11.3858 18.5963C13.1248 17.5973 14.766 16.4424 16.4059 15.2883C16.9432 14.9102 17.4803 14.5322 18.0207 14.1598C18.046 14.1436 18.0746 14.1251 18.1058 14.1048C18.5662 13.8064 19.6016 13.1353 19.2186 14.06C18.313 15.0504 17.3429 15.9272 16.3676 16.8087C15.7103 17.4027 15.0506 17.999 14.4066 18.6336C13.8457 19.0894 13.2633 20.0059 13.8914 20.644C15.3379 21.6567 16.8071 22.6449 18.2755 23.6325C18.7533 23.9538 19.231 24.2752 19.7079 24.5972C20.516 25.2425 21.779 24.7206 21.9567 23.7123C22.0357 23.2485 22.115 22.7847 22.1944 22.3208C22.6328 19.7578 23.0713 17.1938 23.4587 14.6223C23.5113 14.219 23.571 13.8156 23.6307 13.4121C23.7755 12.434 23.9204 11.4547 23.9656 10.4714C23.849 9.49009 22.6592 9.70585 21.997 9.9265C18.5935 11.2216 15.224 12.6126 11.8679 14.0282C11.4877 14.1967 11.1023 14.3649 10.7144 14.5343Z"})))}var Ce,Ne=s.forwardRef(ge);n.p;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Se(e,t){var n=e.title,r=e.titleId,a=we(e,["title","titleId"]);return s.createElement("svg",ye({width:32,height:32,viewBox:"0 0 32 32",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,Ce||(Ce=s.createElement("path",{d:"M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z"})))}var Ee,ke,Pe,Ie=s.forwardRef(Se);n.p;function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Le(e,t){var n=e.title,r=e.titleId,a=Re(e,["title","titleId"]);return s.createElement("svg",Be({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?s.createElement("title",{id:r},n):null,Ee||(Ee=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM12.4822 7.51824C13.3924 7.47682 13.6833 7.46668 16.0008 7.46668H15.9981C18.3164 7.46668 18.6062 7.47682 19.5164 7.51824C20.4248 7.55984 21.0453 7.70366 21.5893 7.91469C22.1511 8.13247 22.6258 8.42403 23.1004 8.8987C23.5751 9.37301 23.8667 9.84911 24.0853 10.4104C24.2951 10.9529 24.4391 11.573 24.4818 12.4815C24.5227 13.3917 24.5333 13.6826 24.5333 16.0001C24.5333 18.3176 24.5227 18.6078 24.4818 19.518C24.4391 20.4261 24.2951 21.0464 24.0853 21.5891C23.8667 22.1502 23.5751 22.6263 23.1004 23.1006C22.6263 23.5753 22.1509 23.8676 21.5898 24.0855C21.0469 24.2965 20.4261 24.4404 19.5176 24.482C18.6074 24.5234 18.3174 24.5335 15.9997 24.5335C13.6824 24.5335 13.3917 24.5234 12.4815 24.482C11.5732 24.4404 10.9529 24.2965 10.41 24.0855C9.84909 23.8676 9.37299 23.5753 8.89886 23.1006C8.42436 22.6263 8.1328 22.1502 7.91467 21.589C7.70382 21.0464 7.56 20.4263 7.51822 19.5178C7.47697 18.6076 7.46666 18.3176 7.46666 16.0001C7.46666 13.6826 7.47733 13.3915 7.51804 12.4813C7.55893 11.5732 7.70293 10.9529 7.91449 10.4102C8.13316 9.84911 8.42472 9.37301 8.89939 8.8987C9.3737 8.4242 9.8498 8.13265 10.411 7.91469C10.9536 7.70366 11.5737 7.55984 12.4822 7.51824Z"})),ke||(ke=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.2353 9.00445C15.3839 9.00422 15.5438 9.00429 15.7164 9.00437L16.0008 9.00445C18.2792 9.00445 18.5493 9.01263 19.449 9.05352C20.281 9.09156 20.7326 9.23059 21.0334 9.34739C21.4316 9.50206 21.7155 9.68695 22.014 9.98562C22.3127 10.2843 22.4976 10.5687 22.6526 10.967C22.7694 11.2674 22.9086 11.719 22.9465 12.551C22.9874 13.4505 22.9963 13.7208 22.9963 15.9981C22.9963 18.2755 22.9874 18.5457 22.9465 19.4453C22.9084 20.2773 22.7694 20.7288 22.6526 21.0293C22.4979 21.4275 22.3127 21.7111 22.014 22.0096C21.7153 22.3082 21.4318 22.4931 21.0334 22.6478C20.7329 22.7651 20.281 22.9038 19.449 22.9418C18.5494 22.9827 18.2792 22.9916 16.0008 22.9916C13.7222 22.9916 13.4522 22.9827 12.5526 22.9418C11.7206 22.9034 11.269 22.7644 10.968 22.6476C10.5698 22.4929 10.2854 22.3081 9.98669 22.0094C9.68802 21.7107 9.50313 21.427 9.34811 21.0286C9.23131 20.7281 9.09211 20.2766 9.05424 19.4446C9.01335 18.545 9.00517 18.2748 9.00517 15.996C9.00517 13.7172 9.01335 13.4484 9.05424 12.5488C9.09228 11.7168 9.23131 11.2653 9.34811 10.9645C9.50278 10.5662 9.68802 10.2818 9.98669 9.98313C10.2854 9.68446 10.5698 9.49957 10.968 9.34455C11.2688 9.22721 11.7206 9.08854 12.5526 9.05032C13.3398 9.01476 13.6449 9.0041 15.2353 9.00232V9.00445ZM20.5559 10.4213C19.9905 10.4213 19.5319 10.8795 19.5319 11.445C19.5319 12.0103 19.9905 12.469 20.5559 12.469C21.1212 12.469 21.5799 12.0103 21.5799 11.445C21.5799 10.8797 21.1212 10.421 20.5559 10.421V10.4213ZM11.6185 16.0001C11.6185 13.58 13.5806 11.6179 16.0006 11.6178C18.4207 11.6178 20.3824 13.58 20.3824 16.0001C20.3824 18.4202 18.4209 20.3815 16.0008 20.3815C13.5807 20.3815 11.6185 18.4202 11.6185 16.0001Z"})),Pe||(Pe=s.createElement("path",{d:"M16.0008 13.1556C17.5717 13.1556 18.8453 14.4291 18.8453 16.0001C18.8453 17.571 17.5717 18.8446 16.0008 18.8446C14.4298 18.8446 13.1563 17.571 13.1563 16.0001C13.1563 14.4291 14.4298 13.1556 16.0008 13.1556Z"})))}var Me=s.forwardRef(Le),Te=(n.p,function(){var e=Object(a.d)((function(e){return e.stateUI.sidebarActive})),t=_()("menu",{menu__active:e});return Object(A.jsxs)("div",{className:t,children:[Object(A.jsxs)("div",{className:"menu__side-col",children:[Object(A.jsx)("div",{className:"burgerBtn",children:Object(A.jsx)(U,{theme:"ligth"})}),Object(A.jsx)("div",{className:"languageBtn",children:Object(A.jsx)(q,{})})]}),Object(A.jsx)("div",{className:"menu__content",children:Object(A.jsxs)("div",{className:"menu__content--wrapper",children:[Object(A.jsxs)("ul",{className:"list",children:[Object(A.jsx)("li",{className:"list__item",children:"\u041f\u0410\u0420\u041a\u041e\u0412\u041a\u0410"}),Object(A.jsx)("li",{className:"list__item",children:"\u0421\u0422\u0420\u0410\u0425\u041e\u0412\u041a\u0410"}),Object(A.jsx)("li",{className:"list__item",children:"\u0411\u0415\u041d\u0417\u0418\u041d"}),Object(A.jsx)("li",{className:"list__item",children:"\u041e\u0411\u0421\u041b\u0423\u0416\u0418\u0412\u0410\u041d\u0418\u0415"})]}),Object(A.jsxs)("div",{className:"social",children:[Object(A.jsx)("a",{href:"#",className:"social__link",children:Object(A.jsx)(Ne,{})}),Object(A.jsx)("a",{href:"#",className:"social__link",children:Object(A.jsx)(Ie,{})}),Object(A.jsx)("a",{href:"#",className:"social__link",children:Object(A.jsx)(Me,{})})]})]})}),Object(A.jsx)("div",{className:"menu__empty-col"})]})}),Fe=function(e){return e.order.cities.map((function(e){return{item:e.name,id:e.id}}))},Ae=function(e){if(0===e.order.points.length)return[];var t=e.order.cityOrder;return e.order.points.filter((function(e){return e.cityId.id===t.id})).map((function(e){return{item:e.address,id:e.id}}))},Ve=function(e){var t=e.order.steps.currentStep;return e.order.steps.map[t]},De=function(e){var t=e.order.steps,n=t.currentStep,r=t.map;if(n===r.length)return!0;var a=r[n+1];return"available"===e.order.steps[a]},Ue=function(e){var t=e.order,n=t.cityOrder,r=t.pointOrder;return r.isValid?"".concat(n.value," ").concat(r.value):n.isValid?"".concat(n.value):null},He=function(e){var t=e.order.cityOrder;return Ae(e).map((function(e){return{fullAdress:"".concat(t.value," ").concat(e.item),adress:e.item,id:e.id}}))},Ze=function(e){var t=e.order,n=t.cityOrder,r=t.pointOrder,a=!0===(n.isValid&&r.isValid);return{city:n.value,adress:r.value,isFullfilled:a}},qe=(n(88),{setNewStepOrder:M}),We=Object(a.b)((function(e){return{steps:e.order.steps,currentStep:Ve(e)}}),qe)((function(e){var t=e.steps,n=e.currentStep,r=e.setNewStepOrder,a=function(e){return _()({breadcrumbs__item:!0,breadcrumbs__item_available:"available"===t[e],breadcrumbs__item_active:e===n,breadcrumbs__item_disable:"blocked"===t[e]})};return Object(A.jsx)("div",{className:"breadcrumbs",children:Object(A.jsx)("div",{className:"breadcrumbs__container",children:Object(A.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(A.jsx)("li",{className:a("location"),children:Object(A.jsx)("button",{onClick:function(){return r(0)},className:"breadcrumbs__btn",type:"button",children:"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"})}),Object(A.jsx)("li",{className:a("model"),children:Object(A.jsx)("button",{onClick:function(){return r(1)},className:"breadcrumbs__btn",type:"button",children:"\u041c\u043e\u0434\u0435\u043b\u044c"})}),Object(A.jsx)("li",{className:a("extra"),children:Object(A.jsx)("button",{onClick:function(){return r(2)},className:"breadcrumbs__btn",type:"button",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"})}),Object(A.jsx)("li",{className:a("total"),children:Object(A.jsx)("button",{onClick:function(){return r(3)},className:"breadcrumbs__btn",type:"button",children:"\u0418\u0442\u043e\u0433\u043e"})})]})})})})),Xe=n(29),Ge=["54.314192","48.403123"],Je=function(e){var t=e.center,n=e.points,r=e.selectPoint,a=Object(s.useState)(null),c=Object(te.a)(a,2),i=c[0],l=c[1],o=Object(s.useState)(Ge),u=Object(te.a)(o,2),d=u[0],b=u[1],j=Object(s.useState)([null]),_=Object(te.a)(j,2),p=_[0],O=_[1];return Object(s.useEffect)((function(){i&&(t?i.geocode(t).then((function(e){var t=e.geoObjects.get(0).geometry.getCoordinates();b(t)})):b(Ge))}),[t,i]),Object(s.useEffect)((function(){if(i){var e=n.map((function(e){return i.geocode(e.fullAdress)}));Promise.all(e).then((function(e){return e.map((function(e){return e.geoObjects.get(0).geometry.getCoordinates()}))})).then((function(e){return O(e)}))}}),[n,i]),Object(A.jsx)(Xe.c,{query:{apikey:"2106c918-2fec-450a-b18f-d2a580f03f17"},children:Object(A.jsx)(Xe.a,{state:{center:d,zoom:12},onLoad:function(e){return l(e)},modules:["geocode"],width:"100%",height:"100%",children:p.map((function(e,t){return Object(A.jsx)(Xe.b,{geometry:e,options:{preset:"islands#circleIcon",iconColor:"#0EC261"},onClick:function(){return r(n[t].adress)}},e)}))})})},ze=(n(89),{getCitiesRequest:function(){return function(){var e=Object(f.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,r=n.data.data,t(w({cities:r}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getPointsRequest:function(){return function(){var e=Object(f.a)(O.a.mark((function e(t){var n,r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,r=n.data.data,a=r.filter((function(e){return null!==e.cityId})),t(S({points:a}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},updateCityField:function(e){return function(t,n){var r=n().order.cities.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})),a=!!r,c=r?r.id:null;t(k({cityOrder:{value:e,id:c,isValid:a}})),t(I())}},updatePointField:function(e){return function(t,n){var r=n().order.points.find((function(t){return t.address.toLowerCase()===e.toLowerCase()})),a=!!r,c=r?r.id:null;t(P({pointOrder:{value:e,id:c,isValid:a}})),t(L())}}}),Ke=Object(a.b)((function(e){return{cities:Fe(e),points:Ae(e),cityOrder:e.order.cityOrder,pointOrder:e.order.pointOrder,centerMap:Ue(e),pointsMap:He(e)}}),ze)((function(e){var t=e.getCitiesRequest,n=e.getPointsRequest,r=e.cities,a=e.points,c=e.cityOrder,i=e.pointOrder,l=e.centerMap,o=e.pointsMap,u=e.updateCityField,d=e.updatePointField;Object(s.useEffect)((function(){t(),n()}),[t,n]);return Object(A.jsxs)("div",{className:"locationStep",children:[Object(A.jsxs)("div",{className:"locationStep__form form",children:[Object(A.jsxs)("div",{className:"field",children:[Object(A.jsxs)("label",{className:"label",htmlFor:"city",children:[Object(A.jsx)("span",{className:"label-text",children:"\u0413\u043e\u0440\u043e\u0434"}),Object(A.jsx)("input",{className:"input",type:"text",id:"city",placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434",list:"cityList",autoComplete:"off",name:"city",value:c.value,onChange:function(e){return u(e.target.value)}})]}),Object(A.jsx)("datalist",{className:"datalist",id:"cityList",children:r.map((function(e){return Object(A.jsx)("option",{value:e.item,"aria-label":e.item},e.id)}))}),c.value?Object(A.jsx)("button",{className:"clearBtn",type:"button",onClick:function(){return u("")},children:"\u2716"}):null]}),Object(A.jsxs)("div",{className:"field",children:[Object(A.jsxs)("label",{className:"label",htmlFor:"point",children:[Object(A.jsx)("span",{className:"label-text",children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(A.jsx)("input",{className:"input",type:"text",id:"point",placeholder:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0432\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0443\u043d\u043a\u0442",list:"pointList",autoComplete:"off",name:"point",value:i.value,onChange:function(e){return d(e.target.value)}})]}),Object(A.jsx)("datalist",{className:"datalist",id:"pointList",children:i.value.length>=0&&a.map((function(e){return Object(A.jsx)("option",{value:e.item,"aria-label":e.item},e.id)}))}),i.value?Object(A.jsx)("button",{className:"clearBtn",type:"button",onClick:function(){return d("")},children:"\u2716"}):null]})]}),Object(A.jsx)("div",{className:"locationStep__map",children:Object(A.jsx)(Je,{center:l,points:o,selectPoint:d})})]})})),Ye=(n(90),{getCarsRequest:function(){return function(){var e=Object(f.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:n=e.sent,r=n.data.data,t(E({cars:r}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}),Qe=Object(a.b)((function(){return{}}),Ye)((function(e){var t=e.getCarsRequest;return Object(s.useEffect)((function(){t()}),[t]),Object(A.jsxs)("div",{className:"modelStep",children:[Object(A.jsxs)("div",{className:"modelStep__filter",children:[Object(A.jsxs)("label",{className:"radioInput",htmlFor:"all",children:[Object(A.jsx)("input",{className:"radioInput__input",id:"all",type:"radio",name:"modelFilter"}),Object(A.jsx)("span",{className:"radioInput__text",children:"\u0412\u0441\u0435 \u043c\u043e\u0434\u0435\u043b\u0438"})]}),Object(A.jsxs)("label",{className:"radioInput",htmlFor:"cheap",children:[Object(A.jsx)("input",{className:"radioInput__input",id:"cheap",type:"radio",name:"modelFilter"}),Object(A.jsx)("span",{className:"radioInput__text",children:"\u042d\u043a\u043e\u043d\u043e\u043c"})]}),Object(A.jsxs)("label",{className:"radioInput",htmlFor:"premium",children:[Object(A.jsx)("input",{className:"radioInput__input",id:"premium",type:"radio",name:"modelFilter"}),Object(A.jsx)("span",{className:"radioInput__text",children:"\u041f\u0440\u0435\u043c\u0438\u0443\u043c"})]})]}),Object(A.jsx)("div",{className:"modelStep__cars",children:Object(A.jsxs)("div",{className:"carCard",children:[Object(A.jsx)("h5",{className:"carCard__title",children:"ELANTRA"}),Object(A.jsx)("p",{className:"carCard__price",children:"10 000 - 32 000 \u20bd"}),Object(A.jsx)("img",{src:"",alt:"",className:"card__pic"})]})})]})})),$e=(n(91),["\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u043e\u0434\u0435\u043b\u044c","\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e","\u0418\u0442\u043e\u0433\u043e","\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"]),et={setNewStepOrder:M},tt=Object(a.b)((function(e){return{currentStepOrder:e.order.steps.currentStep,isNextStepAvailable:De(e),locationStep:Ze(e)}}),et)((function(e){var t=e.currentStepOrder,n=e.isNextStepAvailable,r=e.setNewStepOrder,a=e.locationStep;return Object(A.jsxs)("div",{className:"total",children:[Object(A.jsx)("h4",{className:"total__title",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"}),Object(A.jsx)("div",{className:"total__order",children:a.isFullfilled&&Object(A.jsxs)("p",{className:"total__item",children:[Object(A.jsx)("span",{className:"total__item-title",children:"\u041f\u0443\u043d\u043a\u0442 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(A.jsxs)("span",{className:"total__item-value_container",children:[Object(A.jsx)("span",{className:"total__item-value",children:a.city}),Object(A.jsx)("span",{className:"total__item-value",children:a.adress})]})]})}),Object(A.jsx)(K,{text:$e[t],isFullWidth:!0,isDisabled:!n,onClickHandle:function(){return r(t+1)}})]})})),nt=(n(92),function(){var e=Object(a.d)((function(e){return e.order.steps.currentStep}));return Object(A.jsxs)("div",{className:"page",children:[Object(A.jsx)("div",{className:"container container-header",children:Object(A.jsx)(Y,{})}),Object(A.jsx)(We,{}),Object(A.jsx)("div",{className:"container container-order",children:Object(A.jsxs)("div",{className:"order",children:[Object(A.jsxs)("div",{className:"order__step order__col",children:[0===e?Object(A.jsx)(Ke,{}):null,1===e?Object(A.jsx)(Qe,{}):null]}),Object(A.jsx)("div",{className:"order__total order__col",children:Object(A.jsx)(tt,{})})]})})]})});n(93);var rt,at,ct=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(W,{}),Object(A.jsx)(Te,{}),Object(A.jsxs)(d.d,{children:[Object(A.jsx)(d.b,{path:"/main",render:function(){return Object(A.jsx)(he,{})}}),Object(A.jsx)(d.b,{path:"/order",render:function(){return Object(A.jsx)(nt,{})}}),Object(A.jsx)(d.b,{path:"/",render:function(){return Object(A.jsx)(d.a,{to:"/main"})}})]})]})},it=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},st=n(3),lt=n(96),ot=(rt={},Object(b.a)(rt,N,(function(e){return Object(st.a)(Object(st.a)({},e),{},{sidebarActive:!e.sidebarActive})})),Object(b.a)(rt,y,(function(e,t){var n=t.payload.currentLang;return Object(st.a)(Object(st.a)({},e),{},{currentLang:n})})),rt),ut=Object(lt.a)(ot,{sidebarActive:!1,currentLang:0,availableLang:["\u0420\u0443\u0441","Eng"]}),dt={carouselData:[{title:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430",offer:"\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0439\u0442\u0435 \u043c\u0430\u0448\u0438\u043d\u0443 \u043d\u0430 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u0445 \u043f\u0430\u0440\u043a\u043e\u0432\u043a\u0430\u0445 \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u043d\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u044f \u041f\u0414\u0414, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442\u0430\u0445.",imgSRC:n.p+"static/media/img_1.ed2d522f.png",id:1},{title:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430",offer:"\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",imgSRC:n.p+"static/media/img_2.2030dc1d.png",id:2},{title:"\u0411\u0435\u043d\u0437\u0438\u043d",offer:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0431\u0430\u043a \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0437\u0430\u043f\u0440\u0430\u0432\u043a\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0437\u0430 \u043d\u0430\u0448 \u0441\u0447\u0451\u0442",imgSRC:n.p+"static/media/img_3.d48fb794.png",id:3},{title:"\u041e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",offer:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0435\u0436\u0435\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u0422\u041e",imgSRC:n.p+"static/media/img_4.d6a2ffb2.png",id:4}]},bt=Object(lt.a)({},dt),jt=(at={},Object(b.a)(at,w,(function(e,t){var n=t.payload.cities;return Object(st.a)(Object(st.a)({},e),{},{cities:n})})),Object(b.a)(at,S,(function(e,t){var n=t.payload.points;return Object(st.a)(Object(st.a)({},e),{},{points:n})})),Object(b.a)(at,E,(function(e,t){var n=t.payload.cars;return Object(st.a)(Object(st.a)({},e),{},{cars:n})})),Object(b.a)(at,k,(function(e,t){var n=t.payload.cityOrder;return Object(st.a)(Object(st.a)({},e),{},{cityOrder:n})})),Object(b.a)(at,P,(function(e,t){var n=t.payload.pointOrder;return Object(st.a)(Object(st.a)({},e),{},{pointOrder:n})})),Object(b.a)(at,I,(function(e){return Object(st.a)(Object(st.a)({},e),{},{pointOrder:{value:"",id:null,isValid:!1}})})),Object(b.a)(at,B,(function(e,t){var n=t.payload.currentStep;return Object(st.a)(Object(st.a)({},e),{},{steps:Object(st.a)(Object(st.a)({},e.steps),{},{currentStep:n})})})),Object(b.a)(at,R,(function(e,t){var n=t.payload.modelStepStatus;return Object(st.a)(Object(st.a)({},e),{},{steps:Object(st.a)(Object(st.a)({},e.steps),{},{model:n})})})),at),_t=Object(lt.a)(jt,{steps:{status:{location:"filling",model:"blank",extra:"blank",total:"blank"},location:"available",model:"blocked",extra:"blocked",total:"blocked",currentStep:0,map:["location","model","extra","total"]},cities:[],points:[],cars:[],cityOrder:{value:"",id:null,isValid:!1},pointOrder:{value:"",id:null,isValid:!1}}),pt=Object(r.c)({main:bt,order:_t,stateUI:ut}),Ot=(n(94),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d),ft=Object(r.e)(pt,Ot(Object(r.a)(i.a)));u.a.render(Object(A.jsx)(l.a.StrictMode,{children:Object(A.jsx)(c.a,{children:Object(A.jsx)(a.a,{store:ft,children:Object(A.jsx)(ct,{})})})}),document.getElementById("root")),it()}},[[95,1,2]]]);
//# sourceMappingURL=main.a60059a6.chunk.js.map