(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredients_BreadBottom__wtQXh",BreadTop:"BurgerIngredients_BreadTop__3M2jF",Seeds1:"BurgerIngredients_Seeds1__p7_n-",Seeds2:"BurgerIngredients_Seeds2__1nv0c",Meat:"BurgerIngredients_Meat__1ylfY",Cheese:"BurgerIngredients_Cheese__3qWpp",Salad:"BurgerIngredients_Salad__nySHS",Bacon:"BurgerIngredients_Bacon__3HC-C"}},,,,,function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},,function(e,t,n){e.exports={SideDrawer:"Sidedrawer_SideDrawer__2XUSO",Open:"Sidedrawer_Open__1XS7f",Close:"Sidedrawer_Close__3bqV-"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2bfj1",DesktopOnly:"Toolbar_DesktopOnly__3ulkV"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ",Ingreds:"Order_Ingreds__1zLaK"}},,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__2WLOk"}},function(e,t,n){e.exports=n.p+"static/media/burger.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__15odU"}},,function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Overlay_Modal__2O0A4"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__36R7w"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},,,function(e,t,n){e.exports=n(90)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=(n(67),n(3)),l=n(4),u=n(6),s=n(5),d=n(7),p=function(e){return e.children},h=n(46),m=n.n(h),g=n(28),f=n.n(g),b=n(47),E=n.n(b),v=n(48),_=n.n(v),O=function(e){return r.a.createElement("div",{className:_.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:E.a,alt:"BurgerLogo"}))},y=n(49),C=n.n(y),k=n(16),S=n(29),I=n.n(S),j=function(e){return r.a.createElement("li",{className:I.a.NavigationItem},r.a.createElement(k.b,{activeClassName:I.a.active,exact:e.exact,to:e.link},e.children))},T=function(e){return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(j,{link:"/",exact:!0},"Burger Builder"),e.isAuth?r.a.createElement(j,{link:"/orders"},"Orders"):null,e.isAuth?r.a.createElement(j,{link:"/logout"},"Logout"):r.a.createElement(j,{link:"/auth"},"Login"))},N=n(51),w=n.n(N),A=function(e){return r.a.createElement("div",{onClick:e.drawerToggleClicked,className:w.a.DrawerToggle})},B=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(A,{drawerToggleClicked:e.drawerToggleClicked}),r.a.createElement(O,{height:"80%"}),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(T,{isAuth:e.isAuth})))},D=n(8),R=n(22),H=n.n(R),L=n(53),x=n.n(L),U=function(e){return e.show?r.a.createElement("div",{className:x.a.Backdrop,onClick:e.backdropClicked}):null},F=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),r.a.createElement(p,null,r.a.createElement(U,{show:e.open,backdropClicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement(O,{height:"11%"}),r.a.createElement("nav",null,r.a.createElement(T,{isAuth:e.isAuth}))))},P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.SideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.ToggleDrawer=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(B,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.ToggleDrawer}),r.a.createElement(F,{open:this.state.showSideDrawer,closed:this.SideDrawerClosedHandler,isAuth:this.props.isAuthenticated}),r.a.createElement("main",{className:m.a.Content},this.props.children))}}]),t}(a.Component),M=Object(D.b)((function(e){return{isAuthenticated:e.auth.token}}))(P),q=n(61),G=n(54),z=n.n(G),W=n(15),V=n.n(W),Y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:V.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:V.a.BreadTop},r.a.createElement("div",{className:V.a.Seeds1}),r.a.createElement("div",{className:V.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:V.a.Meat});break;case"bacon":e=r.a.createElement("div",{className:V.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:V.a.Salad});break;case"cheese":e=r.a.createElement("div",{className:V.a.Cheese});break;default:e=null}return e}}]),t}(a.Component),X=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(q.a)(Array(e.ingredients[t])).map((function(e,n){return r.a.createElement(Y,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please add some ingredients")),r.a.createElement("div",{className:z.a.Burger},r.a.createElement(Y,{type:"bread-top"}),t,r.a.createElement(Y,{type:"bread-bottom"}))},J=n(33),K=n.n(J),Q=n(23),$=n.n(Q),Z=function(e){return r.a.createElement("div",{className:$.a.BuildControl},r.a.createElement("div",{className:$.a.Label},e.label),r.a.createElement("button",{className:$.a.Less,onClick:e.removed},"Less"),r.a.createElement("button",{className:$.a.More,onClick:e.added},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return r.a.createElement("div",{className:K.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),ee.map((function(t){return r.a.createElement(Z,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)}})})),r.a.createElement("button",{className:K.a.OrderButton,disabled:!e.purhasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},ne=n(55),ae=n.n(ne),re=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(U,{show:this.props.show,backdropClicked:this.props.purchaseCancelled}),r.a.createElement("div",{className:ae.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),oe=n(34),ie=n.n(oe),ce=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[ie.a.Button,ie.a[e.type]].join(" "),onClick:e.clicked},e.children)},le=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.props.ingredients[t])}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(ce,{type:"Danger",clicked:function(){return e.props.buyerAction("cancel")}},"Cancel"),r.a.createElement(ce,{type:"Success",clicked:function(){return e.props.buyerAction("checkout")}},"Buy Now"))}}]),t}(a.Component),ue=n(56),se=n.n(ue),de=function(){return r.a.createElement("div",{className:se.a.Loader},"Loading...")},pe=function(e,t){return function(n){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfrimedHandler=function(){t.setState({error:null})},t}return Object(d.a)(a,n),Object(l.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(re,{show:this.state.error,purchaseCancelled:this.errorConfrimedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)},he=n(26),me=n.n(he),ge=me.a.create({baseURL:"https://react-burger-35338.firebaseio.com/"}),fe=n(1),be=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},Ee=function(){return localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},ve=function(e){return function(t){setTimeout((function(){t(Ee())}),1e3*e)}},_e=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Oe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={purchasing:!1},n.purchasingHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.setReturnPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelledHandler=function(){n.setState({purchasing:!1})},n.buyerActionHandler=function(e){switch(e){case"cancel":n.purchaseCancelledHandler();break;case"checkout":n.props.onCheckoutInit(),n.props.history.push("/checkout");break;default:return null}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchasable",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=null,t=this.props.error?r.a.createElement("p",null,"Ingredients cannot be fetched"):r.a.createElement(de,null);return this.props.ings&&(t=r.a.createElement(p,null,r.a.createElement(X,{ingredients:this.props.ings}),r.a.createElement(te,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,price:this.props.price,purhasable:this.updatePurchasable(this.props.ings),ordered:this.purchasingHandler,isAuth:this.props.isAuthenticated})),e=r.a.createElement(le,{buyerAction:this.buyerActionHandler,ingredients:this.props.ings,price:this.props.price})),r.a.createElement(p,null,r.a.createElement(re,{show:this.state.purchasing,purchaseCancelled:this.purchaseCancelledHandler},e),t)}}]),t}(a.Component),ye=Object(D.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,purchased:e.order.purchsed,isAuthenticated:e.auth.token,building:e.burgerBuilder.building}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){ge.get("https://react-burger-35338.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onCheckoutInit:function(){return e({type:"CHECKOUT_INIT"})},setReturnPath:function(t){return e(_e(t))}}}))(pe(Oe,ge)),Ce=n(57),ke=n.n(Ce),Se=function(e){return r.a.createElement("div",{className:ke.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(X,{ingredients:e.ingredients})),r.a.createElement(ce,{type:"Danger",clicked:e.CheckoutCancelled},"Cancel"),r.a.createElement(ce,{type:"Success",clicked:e.CheckoutContinued},"Buy Now"))},Ie=n(17),je=n(58),Te=n.n(je),Ne=n(20),we=n.n(Ne),Ae=function(e){var t=null,n=[we.a.InputElement];switch(!e.isvalid&&e.shouldvalidate&&e.touched&&n.push(we.a.Invalid),e.elementtype){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementconfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementconfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementconfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:we.a.InputElement},e.elementconfig,{value:e.value}))}return r.a.createElement("div",{className:we.a.Input},r.a.createElement("label",{className:we.a.Label},e.label),t)},Be=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n},De=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementtype:"input",elementconfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementtype:"input",elementconfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipcode:{elementtype:"input",elementconfig:{type:"text",placeholder:"zip code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementtype:"input",elementconfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementtype:"input",elementconfig:{type:"email",placeholder:"Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliverymethod:{elementtype:"select",elementconfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},validation:{required:!1},valid:!0,value:"cheapest"}},formIsValid:!1},n.orderSubmitHandler=function(e){e.preventDefault(),n.props.onLoading();var t={};for(var a in n.state.orderForm)t[a]=n.state.orderForm[a].value;var r={ingredientes:n.props.ings,price:n.props.price.toFixed(2),orderData:t};n.props.onOrderBurger(r,n.props.token)},n.onInputChangedHandler=function(e,t){var a=Object(fe.a)({},n.state.orderForm),r=Object(fe.a)({},a[t]);r.value=e.target.value,r.valid=Be(r.value,r.validation),r.touched=!0;var o=!0;for(var i in a)o=a[i].valid&&o;a[t]=r,n.setState({orderForm:a,formValid:o})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=r.a.createElement("form",{onSubmit:this.orderSubmitHandler},t.map((function(t){return r.a.createElement(Ae,{key:t.id,elementtype:t.config.elementtype,elementconfig:t.config.elementconfig,value:t.config.value,isvalid:t.config.valid,shouldvalidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.onInputChangedHandler(n,t.id)}})})),r.a.createElement(ce,{type:"Success",disabled:!this.state.formValid},"ORDER NOW"));return this.props.loading&&(a=r.a.createElement(de,null)),r.a.createElement("div",{className:Te.a.ContactData},r.a.createElement("h1",null,"Enter Contact Details"),a)}}]),t}(a.Component),Re=Object(D.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_INIT"}),ge.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n({type:"PURCHASE_BURGER_FAIL",error:e})}))}}(t,n))},onLoading:function(){return e({type:"PURCHASE_BURGER_INIT"})}}}))(pe(De,ge)),He=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).CheckoutCancelledHandler=function(){n.props.history.goBack()},n.CheckoutContinuedHander=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=r.a.createElement(Ie.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?r.a.createElement(Ie.a,{to:"/"}):null;e=r.a.createElement("div",null,t,r.a.createElement(Se,{ingredients:this.props.ings,CheckoutCancelled:this.CheckoutCancelledHandler,CheckoutContinued:this.CheckoutContinuedHander}),r.a.createElement(Ie.b,{path:this.props.match.path+"/contact-data",component:Re}))}return e}}]),t}(a.Component),Le=Object(D.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(He),xe=n(35),Ue=n.n(xe),Fe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return r.a.createElement("span",{className:Ue.a.Ingreds}," ",e.name," (",e.amount,")")}));return r.a.createElement("div",{className:Ue.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,e.price)))},Pe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token)}},{key:"render",value:function(){var e=r.a.createElement(de,null);return this.props.loading||(e=this.props.orders.map((function(e){return r.a.createElement(Fe,{ingredients:e.ingredientes,price:e.price,key:e.id})}))),r.a.createElement("div",null,e)}}]),t}(a.Component),Me=Object(D.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token}}),(function(e){return{onFetchOrders:function(t){return e(function(e){return function(t){t({type:"FETCH_ORDERS_START"});var n=[];ge.get("/orders.json?auth="+e).then((function(e){for(var a in e.data)n.push(Object(fe.a)({},e.data[a],{id:a}));t({type:"FETCH_ORDERS_SUCCESS",orders:n})})).catch((function(e){var n;t({type:"FETCH_ORDERS_FAIL",error:n})}))}}(t))}}}))(pe(Pe,ge)),qe=n(14),Ge=n(59),ze=n.n(Ge),We=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={authForm:{email:{elementtype:"input",elementconfig:{type:"text",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementtype:"input",elementconfig:{type:"password",placeholder:"Your Password"},value:"",validation:{required:!0,minLength:7},valid:!1,touched:!1}},isSignUp:!0},n.onInputChangedHandler=function(e,t){var a=Object(fe.a)({},n.state.authForm,Object(qe.a)({},t,Object(fe.a)({},n.state.authForm[t],{value:e.target.value,touched:!0,valid:Be(e.target.value,n.state.authForm[t].validation)})));n.setState({authForm:a})},n.onsubmitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.authForm.email.value,n.state.authForm.password.value,n.state.isSignUp)},n.switchMode=function(){n.setState((function(e){return{isSignUp:!e.isSignUp}}))},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.building||"/"===this.props.authRedirectPath||this.props.setReturnRoute("/")}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.authForm)t.push({id:n,config:this.state.authForm[n]});var a=t.map((function(t){return r.a.createElement(Ae,{key:t.id,elementtype:t.config.elementtype,elementconfig:t.config.elementconfig,value:t.config.value,isvalid:t.config.valid,shouldvalidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.onInputChangedHandler(n,t.id)}})}));this.props.loading&&(a=r.a.createElement(de,null));var o=null;this.props.error&&(o=r.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=r.a.createElement(Ie.a,{to:this.props.authRedirectPath})),r.a.createElement("div",{className:ze.a.Auth},i,o,r.a.createElement("form",{onSubmit:this.onsubmitHandler},a,r.a.createElement(ce,{type:"Success"},"SUBMIT")),r.a.createElement(ce,{type:"Danger",clicked:this.switchMode},"SWITCH TO ",this.state.isSignUp?"SIGN IN":"SIGN UP"))}}]),t}(a.Component),Ve=Object(D.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:e.auth.token,building:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(function(e,t,n){return function(a){a({type:"AUTH_START"});var r="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByq5J5WoJqX6SnjN67dCHrQaLTJFHxHkE";n||(r="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByq5J5WoJqX6SnjN67dCHrQaLTJFHxHkE");var o={email:e,password:t,returnSecureToken:!0};me.a.post(r,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expiryDate",t),localStorage.setItem("userId",e.data.localId),a(be(e.data.idToken,e.data.localId)),a(ve(e.data.expiresIn))})).catch((function(e){a(function(e){return{type:"AUTH_FAIL",error:e}}(e.response.data.error))}))}}(t,n,a))},setReturnRoute:function(t){return e(_e(t))}}}))(We),Ye=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogOut()}},{key:"render",value:function(){return r.a.createElement(Ie.a,{to:"/"})}}]),t}(a.Component),Xe=Object(D.b)(null,(function(e){return{onLogOut:function(){return e(Ee)}}}))(Ye),Je=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoLogin()}},{key:"render",value:function(){var e=r.a.createElement(Ie.d,null,r.a.createElement(Ie.b,{path:"/auth",component:Ve}),r.a.createElement(Ie.b,{path:"/",exact:!0,component:ye}),r.a.createElement(Ie.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(Ie.d,null,r.a.createElement(Ie.b,{path:"/checkout",component:Le}),r.a.createElement(Ie.b,{path:"/orders",component:Me}),r.a.createElement(Ie.b,{path:"/auth",component:Ve}),r.a.createElement(Ie.b,{path:"/logout",component:Xe}),r.a.createElement(Ie.b,{path:"/",exact:!0,component:ye}),r.a.createElement(Ie.a,{to:"/"}))),r.a.createElement("div",null,r.a.createElement(M,null,e))}}]),t}(a.Component),Ke=Object(Ie.g)(Object(D.b)((function(e){return{isAuthenticated:e.auth.token}}),(function(e){return{onTryAutoLogin:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expiryDate")),a=localStorage.getItem("userId");n<=new Date?e(Ee()):(e(be(t,a)),e(ve((n.getTime()-(new Date).getTime())/1e3)))}else e(Ee())}))}}}))(Je));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe=n(18),$e=n(60),Ze={ingredients:null,totalPrice:4,error:!1,building:!1},et={salad:.4,bacon:.7,cheese:.3,meat:.2},tt=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_INGREDIENT":return Object(fe.a)({},n,{ingredients:Object(fe.a)({},n.ingredients,(e={},Object(qe.a)(e,a.ingredientName,n.ingredients[a.ingredientName]+1),Object(qe.a)(e,"building",!0),e)),totalPrice:n.totalPrice+et[a.ingredientName]});case"REMOVE_INGREDIENT":return Object(fe.a)({},n,{ingredients:Object(fe.a)({},n.ingredients,(t={},Object(qe.a)(t,a.ingredientName,n.ingredients[a.ingredientName]-1),Object(qe.a)(t,"building",!0),t)),totalPrice:n.totalPrice-et[a.ingredientName]});case"SET_INGREDIENTS":return Object(fe.a)({},n,{ingredients:a.ingredients,error:!1,totalPrice:4,building:!1});case"FETCH_INGREDIENTS_FAILED":return Object(fe.a)({},n,{error:!0});default:return n}},nt={orders:[],loading:!1,purchased:!1},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECKOUT_INIT":return Object(fe.a)({},e,{purchased:!1});case"PURCHASE_BURGER_INIT":return Object(fe.a)({},e,{loading:!0});case"PURCHASE_BURGER_SUCCESS":var n=Object(fe.a)({},t.orderData,{id:t.id});return Object(fe.a)({},e,{loading:!1,purchased:!0,order:e.order.concat(n)});case"PURCHASE_BURGER_FAIL":return Object(fe.a)({},e,{loading:!1});case"FETCH_ORDERS_START":return Object(fe.a)({},e,{loading:!0});case"FETCH_ORDERS_SUCCESS":return Object(fe.a)({},e,{orders:t.orders,loading:!1});case"FETCH_ORDERS_FAIL":return Object(fe.a)({},e,{loading:!1});default:return e}},rt={token:null,userId:null,loading:!1,error:!1,authRedirectPath:"/"},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_REDIRECT_PATH":return Object(fe.a)({},e,{authRedirectPath:t.path});case"AUTH_START":return Object(fe.a)({},e,{loading:!0,error:!1});case"AUTH_SUCCESS":return Object(fe.a)({},e,{token:t.idToken,userId:t.userId,error:!1,loading:!1});case"AUTH_FAIL":return Object(fe.a)({},e,{token:null,loading:!1,error:t.error});case"AUTH_LOGOUT":return Object(fe.a)({},e,{token:null,userId:null});default:return e}},it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Qe.d,ct=Object(Qe.c)({burgerBuilder:tt,order:at,auth:ot}),lt=Object(Qe.e)(ct,it(Object(Qe.a)($e.a))),ut=r.a.createElement(D.a,{store:lt},r.a.createElement(k.a,null,r.a.createElement(Ke,null)));i.a.render(ut,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[62,1,2]]]);
//# sourceMappingURL=main.ef46f9ec.chunk.js.map