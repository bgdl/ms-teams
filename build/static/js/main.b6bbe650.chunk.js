(this["webpackJsonpteams-tab"]=this["webpackJsonpteams-tab"]||[]).push([[0],{584:function(e,t,n){e.exports=n(714)},714:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(68),i=n.n(c),o=n(74),u=n(75),l=n(189),s=n(202),m=n(199),h=n(200),d=n(371),g=n(101),f=n(57);function p(){return f.settings.registerOnSaveHandler((function(e){f.settings.setSettings({contentUrl:window.location.origin,entityId:window.location.origin}),e.notifySuccess()})),f.settings.setValidityState(!0),r.a.createElement("h1",null,"Configure")}var v=n(180),y=n(179),E=n(64),b=n(164),k=n(120),I=n(66);function w(e){return r.a.createElement(b.a,{gap:"gap.medium",styles:{paddingLeft:"5px"}},e.icon&&r.a.createElement(k.a,{align:"center"},e.icon),r.a.createElement(k.a,null,r.a.createElement(I.a,{content:e.title,size:"large",weight:"bold"})))}var C=n(92),O=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).menuWidth=void 0,a.menuWidth=e.menuWidth,a.state={menuItems:e.menuItems,currentKey:e.menuItems.length>0?e.menuItems[0].key:""},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{content:this.renderMenu(),styles:{gridColumn:"span ".concat(this.menuWidth)}}),r.a.createElement(y.a,{content:this.renderContent(),styles:{gridColumn:"span ".concat(12-this.menuWidth)}}))}},{key:"renderMenu",value:function(){return r.a.createElement(C.a,{defaultActiveIndex:0,items:this.formatMenuItems(this.state.menuItems),vertical:!0,pointing:!0,styles:{width:"auto"},onActiveIndexChange:this.menuItemChanged.bind(this)})}},{key:"renderContent",value:function(){var e=this,t=this.state.menuItems.filter((function(t){return t.key===e.state.currentKey}));return 1!==t.length&&console.error("A single item was not found for content with key: ".concat(this.state.currentKey)),t[0].pageContent}},{key:"formatMenuItems",value:function(e){var t,n=[],a=Object(h.a)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value;n.push({key:r.key,content:r.label,icon:r.icon})}}catch(c){a.e(c)}finally{a.f()}return n}},{key:"menuItemChanged",value:function(e,t){var n=t.activeIndex;t.items&&t.items[n]&&this.setState({currentKey:t.items[n].key})}}]),n}(r.a.Component);function S(){return r.a.createElement(v.a,{columns:"repeat(12, 1fr)"},r.a.createElement(y.a,{content:r.a.createElement(w,{title:"Our new Teams app",icon:r.a.createElement(E.TeamsIcon,null)}),styles:{gridColumn:"span 2"}}),r.a.createElement(y.a,{styles:{gridColumn:"span 10"}}),r.a.createElement(O,{menuWidth:2,menuItems:L}))}function j(){return r.a.createElement("button",{onClick:J.Login},"Click to log in")}function T(){return J.StartSignIn(),r.a.createElement("h1",null,"Starting sign in...")}function x(){return J.EndSignIn(),r.a.createElement("h1",null,"Ending sign in...")}var R=[{route:"/configure",component:r.a.createElement(p,null),authenticated:!1},{route:"/auth/login",component:r.a.createElement(j,null),authenticated:!1},{route:"/auth/signinstart",component:r.a.createElement(T,null),authenticated:!1},{route:"/auth/signinend",component:r.a.createElement(x,null),authenticated:!1},{route:"/",component:r.a.createElement(S,null),authenticated:!0}],L=[{key:"home",icon:r.a.createElement(E.GalleryIcon,null),label:"Home",pageContent:r.a.createElement("div",null,r.a.createElement("h1",null,"Home tab"),r.a.createElement("p",null,"Home tab content"))},{key:"other-content",icon:r.a.createElement(E.PresenterIcon,null),label:"Other Tab",pageContent:r.a.createElement("div",null,r.a.createElement("h1",null,"Some other content"),r.a.createElement("p",null,"Something else goes here"))}],U=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"AuthenticatedRoutes",value:function(){return e.RenderRoutes(R)}},{key:"UnauthenticatedRoutes",value:function(){var t,n=R,a=Object(h.a)(n);try{for(a.s();!(t=a.n()).done;){var c=t.value;c.authenticated&&(c.component=r.a.createElement(j,null))}}catch(i){a.e(i)}finally{a.f()}return e.RenderRoutes(n)}},{key:"RenderRoutes",value:function(e){return r.a.createElement(d.a,null,r.a.createElement(g.c,null,e.map((function(e){return r.a.createElement(g.a,{path:e.route,exact:"/"===e.route},e.component)}))))}}]),e}(),A="contrast",W="dark",H="default",P={appId:"ee1a0fd7-06ea-44c0-83d6-b29bbc21e697",cacheLocation:"localStorage",signInStartPage:"auth/signinstart",signInEndPage:"auth/signinend",authenticatedDomains:{"https://graph.microsoft.com":"https://graph.microsoft.com"}},F=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"getTheme",value:function(e){switch(e=e||""){case W:return E.themes.teamsDark;case A:return E.themes.teamsHighContrast;case H:default:return E.themes.teams}}}]),e}(),M=n(162),K=n.n(M),D=n(292),q=n(374),z=new(n.n(q).a)({clientId:P.appId,redirectUri:"".concat(window.location.origin,"/").concat(P.signInEndPage),cacheLocation:P.cacheLocation,endpoints:P.authenticatedDomains,navigateToLoginRequestUrl:!1}),J=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"IsUserLoggedIn",value:function(){var e=z.getCachedUser(),t=z.getCachedToken(P.appId);return!!e&&t.length>0}},{key:"Login",value:function(){var t=Object(D.a)(K.a.mark((function t(){var n;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="",t.prev=1,t.next=4,e.getAccessToken();case 4:n=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:n.length>0&&window.location.replace(window.location.origin);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"StartSignIn",value:function(){z.clearCache(),z.login()}},{key:"EndSignIn",value:function(){z.isCallback(window.location.hash)&&(z.handleWindowCallback(window.location.hash),window.opener&&(z.getCachedUser()?z.acquireToken("https://graph.microsoft.com",(function(e,t){t?f.authentication.notifySuccess(t):e?f.authentication.notifyFailure(e):f.authentication.notifyFailure("UnexpectedFailure")})):microsoftTeams.authentication.notifyFailure(z.getLoginError())))}},{key:"getAccessToken",value:function(){var e=Object(D.a)(K.a.mark((function e(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){f.authentication.authenticate({url:"".concat(window.location.origin,"/").concat(P.signInStartPage),width:600,height:535,successCallback:function(t){e(t)},failureCallback:function(e){t(e)}})})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),B=n(181),G=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={theme:F.getTheme("default"),loggedIn:J.IsUserLoggedIn()},f.initialize(),f.registerOnThemeChangeHandler(a.updateTheme.bind(Object(l.a)(a))),f.getContext((function(e){a.updateTheme(e.theme)})),a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(B.a,{theme:this.state.theme},this.state.loggedIn?r.a.createElement(U.AuthenticatedRoutes,null):r.a.createElement(U.UnauthenticatedRoutes,null))}},{key:"updateTheme",value:function(e){this.setState({theme:F.getTheme(e)})}}]),n}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))}},[[584,1,2]]]);
//# sourceMappingURL=main.b6bbe650.chunk.js.map