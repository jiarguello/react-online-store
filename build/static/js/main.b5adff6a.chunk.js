(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{31:function(t,e,a){t.exports=a(48)},36:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(26),i=a.n(c),o=(a(36),a(3)),u=a(4),l=a(6),s=a(5),d=a(13),p=a(2),h=a(8),m=a.n(h),f=a(14),b=a(12),v=a(1),y=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Carregando...")}}]),a}(n.Component),E=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.categories,a=t.onClickSelectedCategory;return 0===e?r.a.createElement(y,null):r.a.createElement("div",null,r.a.createElement("p",null,"Categorias:"),e.map((function(t){return r.a.createElement("button",{onClick:function(){return a(t.id)},key:t.id,type:"button","data-testid":"category",value:t.name},t.name)})))}}]),a}(r.a.Component),g=a(18),C=a(19);function O(){var t=Object(g.a)(["\n  background-color: green;\n"]);return O=function(){return t},t}function j(){var t=Object(g.a)(["\n  display: flex;\n"]);return j=function(){return t},t}function k(){var t=Object(g.a)(["\n  background-color: green;\n"]);return k=function(){return t},t}var P=C.a.button(k()),S=C.a.div(j()),x=C.a.input(O()),w=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.onSearchTextChange,a=t.onClickSearch;return r.a.createElement(S,null,r.a.createElement(x,{type:"text",onChange:e,name:"search",placeholder:"Digite aqui seu produto..."}),r.a.createElement(P,{type:"button",onClick:a},"Buscar"))}}]),a}(r.a.Component),q=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.products,a=t.onClick,n=t.cartItens,c=r.a.createElement("span",{"data-testid":"free-shipping"},"Frete Gratis!");return r.a.createElement("div",{className:"pai"},e.map((function(t){var e=t.id,i=t.title,o=t.thumbnail,u=t.price,l=t.category_id,s=t.shipping.free_shipping;return r.a.createElement("div",{className:"product","data-testid":"product",key:e},r.a.createElement("p",null,i),r.a.createElement("img",{src:o,alt:"produto"}),r.a.createElement("p",null,u),s?c:"",r.a.createElement("button",{"data-testid":"product-add-to-cart",type:"button",onClick:function(){return a(e)}},"Comprar"),r.a.createElement(d.b,{to:{pathname:"product-detail/".concat(l,"/").concat(e),state:Object(b.a)(n)},"data-testid":"product-detail-link"},"Ver detalhes"))})))}}]),a}(r.a.Component);function I(){return(I=Object(f.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.mercadolibre.com/sites/MLB/categories",t.abrupt("return",fetch("https://api.mercadolibre.com/sites/MLB/categories").then((function(t){return t.json()})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t,e){return B.apply(this,arguments)}function B(){return(B=Object(f.a)(m.a.mark((function t(e,a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.mercadolibre.com/sites/MLB/search?category=".concat(e,"&q=").concat(a),t.abrupt("return",fetch(n).then((function(t){return t.json()})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var M=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={searchText:"",productsList:[],categories:[],addItem:[]},n.addItemCart=n.addItemCart.bind(Object(v.a)(n)),n.fetchApiSearch=n.fetchApiSearch.bind(Object(v.a)(n)),n.fetchByCategoryId=n.fetchByCategoryId.bind(Object(v.a)(n)),n.handleSearchTextChange=n.handleSearchTextChange.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;(function(){return I.apply(this,arguments)})().then((function(e){return t.setState({categories:e})}))}},{key:"handleSearchTextChange",value:function(t){var e=t.target.value;this.setState({searchText:e})}},{key:"addItemCart",value:function(t){var e=this.state,a=e.productsList,n=e.addItem,r=a.find((function(e){return t===e.id}));r.quantity=1,this.setState({addItem:[].concat(Object(b.a)(n),[r])})}},{key:"fetchByCategoryId",value:function(){var t=Object(f.a)(m.a.mark((function t(e){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e,"");case 2:a=t.sent,this.setState({productsList:a.results});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"fetchApiSearch",value:function(){var t=Object(f.a)(m.a.mark((function t(){var e,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.searchText,t.next=3,T("",e);case 3:(a=t.sent).results.length?this.setState({productsList:a.results,showMessage:!1}):this.setState({showMessage:!0});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.productsList,a=t.showMessage,n=t.categories,c=t.addItem,i=r.a.createElement("p",null,"Nenhum produto foi encontrado");return r.a.createElement("div",null,r.a.createElement(w,{onSearchTextChange:this.handleSearchTextChange,onClickSearch:this.fetchApiSearch}),r.a.createElement(E,{categories:n,onClickSelectedCategory:this.fetchByCategoryId}),a?i:r.a.createElement(q,{products:e,onClick:this.addItemCart,cartItens:c}),r.a.createElement("button",{type:"button"},r.a.createElement(d.b,{to:{pathname:"/shopping-cart",state:c}},"Carrinho",r.a.createElement("span",null,c.length))))}}]),a}(r.a.Component),F=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;Object(o.a)(this,a);var r=(n=e.call(this,t)).props.location.state;return n.state={listOfProducts:Object(b.a)(r),totalPrice:0},n.totalPrice=n.totalPrice.bind(Object(v.a)(n)),n.increaseProductQuantity=n.increaseProductQuantity.bind(Object(v.a)(n)),n.decreaseProductQuantity=n.decreaseProductQuantity.bind(Object(v.a)(n)),n.deleteProduct=n.deleteProduct.bind(Object(v.a)(n)),n.renderEmptyCart=n.renderEmptyCart.bind(Object(v.a)(n)),n.renderTotalPrice=n.renderTotalPrice.bind(Object(v.a)(n)),n.renderCheckoutButton=n.renderCheckoutButton.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.totalPrice()}},{key:"totalPrice",value:function(){var t=this.state.listOfProducts.reduce((function(t,e){return t+e.price*e.quantity}),0);this.setState({totalPrice:t})}},{key:"increaseProductQuantity",value:function(t){var e=this.state.listOfProducts.map((function(e){var a=e.available_quantity;return e.id===t&&a>e.quantity?(e.quantity+=1,e):e}));this.setState({listOfProducts:e}),this.totalPrice()}},{key:"decreaseProductQuantity",value:function(t){var e=this.state.listOfProducts,a=e.find((function(e){return e.id===t}));0!==a.quantity&&(a.quantity-=1),this.setState({listOfProducts:e}),this.totalPrice()}},{key:"deleteProduct",value:function(t){var e=this.state.listOfProducts,a=e.find((function(e){return e.id===t})),n=e.indexOf(a);e.splice(n,1),this.setState({listOfProducts:e}),this.totalPrice()}},{key:"renderEmptyCart",value:function(){return r.a.createElement("section",null,r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"))}},{key:"renderTotalPrice",value:function(){var t=this.state.totalPrice;return r.a.createElement("p",null,"O valor total da compra: R$",t)}},{key:"renderCheckoutButton",value:function(){var t=this.state.listOfProducts;return r.a.createElement("button",{type:"button"},r.a.createElement(d.b,{to:{pathname:"/order-summary",state:t},"data-testid":"checkout-products"},"Revisar Compra"))}},{key:"render",value:function(){var t=this,e=this.state.listOfProducts,a=this.renderEmptyCart();return 0===e.length?a:r.a.createElement("div",null,e.map((function(e){var a=e.title,n=e.thumbnail,c=e.quantity,i=e.id,o=e.price;return r.a.createElement("div",{key:i},r.a.createElement("button",{type:"button",onClick:function(){return t.deleteProduct(i)}},"X"),r.a.createElement("img",{src:n,alt:"foto ".concat(a)}),r.a.createElement("p",{"data-testid":"shopping-cart-product-name"},a),r.a.createElement("div",null,r.a.createElement("button",{type:"button","data-testid":"product-decrease-quantity",onClick:function(){return t.decreaseProductQuantity(i)}},"-"),r.a.createElement("p",{"data-testid":"shopping-cart-product-quantity"},c),r.a.createElement("button",{type:"button","data-testid":"product-increase-quantity",onClick:function(){return t.increaseProductQuantity(i)}},"+"),r.a.createElement("span",null,"R$",o)))})),this.renderTotalPrice(),this.renderCheckoutButton())}}]),a}(r.a.Component),R=a(30),A=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleChange=n.handleChange.bind(Object(v.a)(n)),n.state={email:"",rating:0,comment:""},n}return Object(u.a)(a,[{key:"handleChange",value:function(t,e){this.setState(Object(R.a)({},t,e))}},{key:"render",value:function(){var t=this,e=this.state,a=e.email,n=e.rating,c=e.comment;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"email-input"},"E-mail",r.a.createElement("input",{type:"email",required:!0,placeholder:"E-mail",value:a,onChange:function(e){return t.handleChange("email",e.target.value)}})),r.a.createElement("label",{htmlFor:"rating-input"},"Avalia\xe7\xe3o",r.a.createElement("input",{type:"number",min:0,max:5,step:.1,value:n,onChange:function(e){return t.handleChange("rating",e.target.value)}})),r.a.createElement("label",{htmlFor:"comment-input"},"Coment\xe1rios",r.a.createElement("textarea",{"data-testid":"product-detail-evaluation",placeholder:"Coment\xe1rios",value:c,rows:"5",cols:"20",onChange:function(e){return t.handleChange("comment",e.target.value)}})),r.a.createElement("button",{type:"button"},"Enviar Avalia\xe7\xe3o")))}}]),a}(r.a.Component),L=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(){var t;return Object(o.a)(this,a),(t=e.call(this)).state={product:[],shoppingCart:[]},t.fetchCategory=t.fetchCategory.bind(Object(v.a)(t)),t.addToCart=t.addToCart.bind(Object(v.a)(t)),t.setShoppingCart=t.setShoppingCart.bind(Object(v.a)(t)),t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchCategory(),this.setShoppingCart()}},{key:"setShoppingCart",value:function(){var t=this.props.location.state;t&&this.setState({shoppingCart:Object(b.a)(t)})}},{key:"addToCart",value:function(){var t=this.state,e=t.product,a=t.shoppingCart;e.quantity=1,this.setState({shoppingCart:[].concat(Object(b.a)(a),[e])})}},{key:"fetchCategory",value:function(){var t=Object(f.a)(m.a.mark((function t(){var e,a,n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params,a=e.categoryID,n=e.id,t.next=3,T(a,"");case 3:r=t.sent,c=r.results.find((function(t){return t.id===n})),this.setState({product:c});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.product,a=t.shoppingCart,n=e.title,c=e.thumbnail,i=e.price;return r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("span",{"data-testid":"product-detail-name"},n," ","-"," "),r.a.createElement("span",null,"R$"," ",i)),r.a.createElement("img",{src:c,alt:"product-thumbnail"}),r.a.createElement(A,null),r.a.createElement(d.b,{"data-testid":"shopping-cart-button",to:{pathname:"/shopping-cart",state:a}},"Ir para carrinho"),r.a.createElement("span",{"data-testid":"shopping-cart-size"},a.length),r.a.createElement("button",{type:"button","data-testid":"product-detail-add-to-cart",onClick:this.addToCart},"Adicionar ao Carrinho"))}}]),a}(r.a.Component),Q=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;Object(o.a)(this,a);var r=(n=e.call(this,t)).props.location.state;return n.state={order:Object(b.a)(r),totalPrice:0},n.productsReview=n.productsReview.bind(Object(v.a)(n)),n.buyerInfos=n.buyerInfos.bind(Object(v.a)(n)),n.totalPrice=n.totalPrice.bind(Object(v.a)(n)),n.paymentMethod=n.paymentMethod.bind(Object(v.a)(n)),n}return Object(u.a)(a,[{key:"productsReview",value:function(){var t=this.state,e=t.order,a=t.totalPrice;return r.a.createElement("div",null,r.a.createElement("h1",null,"Revise seus Produtos"),e.map((function(t){var e=t.title,a=t.thumbnail,n=t.quantity,c=t.id,i=t.price;return r.a.createElement("div",{key:c},r.a.createElement("img",{src:a,alt:"foto ".concat(e)}),r.a.createElement("span",null,e),r.a.createElement("span",null,"R$",i*n))})),r.a.createElement("p",null,"Pre\xe7o Total: R$",a))}},{key:"totalPrice",value:function(){var t=this.state.order.reduce((function(t,e){return t+e.price*e.quantity}),0);this.setState({totalPrice:t})}},{key:"buyerInfos",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"name",placeholder:"Nome completo",required:!0}),r.a.createElement("input",{type:"text",name:"CPF","data-testid":"checkout-cpf",placeholder:"CPF",required:!0}),r.a.createElement("input",{type:"email",name:"email","data-testid":"checkout-email",placeholder:"E-mail",required:!0}),r.a.createElement("input",{type:"text",name:"telefone","data-testid":"checkout-phone",placeholder:"Telefone",required:!0}),r.a.createElement("input",{type:"text",name:"CEP","data-testid":"checkout-cep",placeholder:"CEP",required:!0}),r.a.createElement("input",{type:"text",name:"address","data-testid":"checkout-address",placeholder:"Endere\xe7o",required:!0}))}},{key:"paymentMethod",value:function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"boleto"},"Boleto",r.a.createElement("input",{id:"boleto",type:"radio",name:"payment"})),r.a.createElement("label",{htmlFor:"creditcard"},"Cart\xe3o de cr\xe9dito",r.a.createElement("input",{id:"creditcard",type:"radio",name:"payment",value:"visa"}),"Visa",r.a.createElement("input",{id:"creditcard",type:"radio",name:"payment",value:"mastercard"}),"MasterCard",r.a.createElement("input",{id:"creditcard",type:"radio",name:"payment",value:"elo"}),"Elo"))}},{key:"renderForm",value:function(){return r.a.createElement("form",null,this.buyerInfos(),this.paymentMethod(),r.a.createElement("button",{type:"button",onClick:function(){return console.log("XABLAU!")}},"Finalizar a Compra!"))}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,this.productsReview(),this.renderForm())}}]),a}(r.a.Component),D=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:M}),r.a.createElement(p.a,{path:"/shopping-cart",component:F}),r.a.createElement(p.a,{path:"/product-detail/:categoryID/:id",component:L}),r.a.createElement(p.a,{path:"/order-summary",component:Q})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.b5adff6a.chunk.js.map