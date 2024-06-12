"use strict";(self.webpackChunkpizza_buratino=self.webpackChunkpizza_buratino||[]).push([[601],{9:(e,t,i)=>{i.r(t),i.d(t,{default:()=>E});var s=i(43),a=i(213);var c=i(579);const r=e=>{let{width:t=512,height:i=512,className:s}=e;return(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",xmlnsXlink:"http://www.w3.org/1999/xlink",width:t,height:i,x:"0",y:"0",viewBox:"0 0 512 512",xmlSpace:"preserve",className:s,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"M0 102.4c0-14.138 11.462-25.6 25.6-25.6h460.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H25.6C11.462 128 0 116.537 0 102.4zm486.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H25.6C11.462 384 0 395.462 0 409.6c0 14.137 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z",fill:"white",opacity:"1","data-original":"#000000",className:""})})})};var l=i(3),n=i(866);const o={item:"PizzaItem_item__w4e3R",image:"PizzaItem_image__CM9lH",containerImg:"PizzaItem_containerImg__-DZFH",overlay:"PizzaItem_overlay__1b9Ty",pizzaComposition:"PizzaItem_pizzaComposition__qMgxR",weightAndPrice:"PizzaItem_weightAndPrice__n59wu",nameDishes:"PizzaItem_nameDishes__4quAt",containerForButtonToOrder:"PizzaItem_containerForButtonToOrder__7ldrZ",toOrder:"PizzaItem_toOrder__fJ-hP",clicked:"PizzaItem_clicked__sIAjo",weightAndPriceButton:"PizzaItem_weightAndPriceButton__-iC68",active:"PizzaItem_active__o4erl",priceFromWeight:"PizzaItem_priceFromWeight__joLDG",message:"PizzaItem_message__ymDwu",fadeInOut:"PizzaItem_fadeInOut__E6ogr",burgerButton:"PizzaItem_burgerButton__5s7OM",quantityControl:"PizzaItem_quantityControl__uurnO",quantityButton:"PizzaItem_quantityButton__1nuEm",cartItem:"PizzaItem_cartItem__XEgap",showOrderDetails:"PizzaItem_showOrderDetails__ZLK3Z",imageGrid:"PizzaItem_imageGrid__RfyMW",totalQuantity:"PizzaItem_totalQuantity__YgLZ1"};var d=i(105);const h=e=>{let{pizza:t}=e;const i=(0,l.wA)(),a=(0,l.d4)((e=>e.cart.items)),h=""!==t["weight-small"]?"weight-small":"weight",[m,g]=(0,s.useState)(h),p=a.filter((e=>e.name===t.name)),x=p.reduce(((e,t)=>e+t.quantity),0),[u,w]=(0,s.useState)(!1),[j,v]=(0,s.useState)(null),[_,f]=(0,s.useState)(!1),z=(0,l.d4)((e=>(0,n.rk)(e))),y=(e,t)=>""!==e&&0!==t,b=e=>{switch(e){case"weight-small":return"\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0443";case"weight-average":return"\u0441\u0435\u0440\u0435\u0434\u043d\u044e";case"weight-big":return"\u0432\u0435\u043b\u0438\u043a\u0443";case"weight-mega":return"\u043c\u0435\u0433\u0430";default:return""}};return(0,c.jsxs)("div",{className:o.item,children:[(0,c.jsxs)("div",{className:o.containerImg,children:[(0,c.jsx)("img",{src:t.img,alt:t.name,className:o.image}),(0,c.jsx)("div",{className:o.overlay,children:(0,c.jsx)("p",{className:o.pizzaComposition,children:t.composition})})]}),(0,c.jsx)("h3",{className:o.nameDishes,children:t.name}),(0,c.jsxs)("div",{className:o.weightAndPrice,children:[y(t["weight-small"],t["price-small"])&&(0,c.jsxs)("div",{className:o.weightAndPriceButton,children:[(0,c.jsxs)("button",{className:"weight-small"===m?o.active:"",onClick:()=>g("weight-small"),children:[(0,c.jsx)("p",{children:"\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430:"})," ",(0,c.jsx)("p",{children:t["weight-small"]})]}),(0,c.jsxs)("p",{className:o.priceFromWeight,children:[t["price-small"]," ",(0,c.jsx)(d.A,{width:11,height:11})]})]}),y(t["weight-average"],t["price-average"])&&(0,c.jsxs)("div",{className:o.weightAndPriceButton,children:[(0,c.jsxs)("button",{className:"weight-average"===m?o.active:"",onClick:()=>g("weight-average"),children:[(0,c.jsx)("p",{children:"\u0441\u0435\u0440\u0435\u0434\u043d\u044f:"})," ",(0,c.jsx)("p",{children:t["weight-average"]})]}),(0,c.jsxs)("p",{className:o.priceFromWeight,children:[t["price-average"]," ",(0,c.jsx)(d.A,{width:11,height:11})]})]}),y(t["weight-big"],t["price-big"])&&(0,c.jsxs)("div",{className:o.weightAndPriceButton,children:[(0,c.jsxs)("button",{className:"weight-big"===m?o.active:"",onClick:()=>g("weight-big"),children:[(0,c.jsx)("p",{children:"\u0432\u0435\u043b\u0438\u043a\u0430:"})," ",(0,c.jsx)("p",{children:t["weight-big"]})]}),(0,c.jsxs)("p",{className:o.priceFromWeight,children:[t["price-big"]," ",(0,c.jsx)(d.A,{width:11,height:11})]})]}),y(t["weight-mega"],t["price-mega"])&&(0,c.jsxs)("div",{className:o.weightAndPriceButton,children:[(0,c.jsxs)("button",{className:"weight-mega"===m?o.active:"",onClick:()=>g("weight-mega"),children:[(0,c.jsx)("p",{children:"\u043ce\u0433a:"})," ",(0,c.jsx)("p",{children:t["weight-mega"]})]}),(0,c.jsxs)("p",{className:o.priceFromWeight,children:[t["price-mega"]," ",(0,c.jsx)(d.A,{width:11,height:11})]})]}),y(t.weight,t.price)&&(0,c.jsxs)("div",{className:o.weightAndPriceButton,children:[(0,c.jsxs)("button",{className:"weight"===m?o.active:"",onClick:()=>g("weight"),children:[(0,c.jsx)("p",{children:"\u0432\u0430\u0433\u0430:"})," ",(0,c.jsx)("p",{children:t.weight})]}),(0,c.jsxs)("p",{className:o.priceFromWeight,children:[t.price," ",(0,c.jsx)(d.A,{width:11,height:11})]})]})]}),(0,c.jsxs)("div",{className:o.containerForButtonToOrder,children:[(0,c.jsx)("button",{className:o.toOrder,onClick:()=>{const e=m.replace("weight","price"),s=t[e],a=t[m];i((0,n.Mr)({id:t.id+m,name:t.name,weight:m,weightNumber:a,price:s}));const r=b(m),l=(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:"\u0412\u0438 \u0434\u043e\u0434\u0430\u043b\u0438:"}),(0,c.jsxs)("p",{children:[r," '",t.name,"' - ",s," ",(0,c.jsx)(d.A,{width:11,height:11})]}),(0,c.jsxs)("p",{children:["\u0421\u0443\u043c\u0430 \u0432\u0430\u0448\u043e\u0433\u043e \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f: ",z+s," ",(0,c.jsx)(d.A,{width:11,height:11})]})]});v(l),w(!0),setTimeout((()=>w(!1)),8e3)},children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"}),p.length>0&&(0,c.jsx)("button",{className:o.burgerButton,onClick:()=>{f(!_)},children:(0,c.jsx)(r,{width:18,height:18})})]}),u&&(0,c.jsx)("div",{className:o.message,children:j}),_&&p.length>0&&(0,c.jsxs)("div",{className:o.showOrderDetails,children:[(0,c.jsx)("p",{children:"\u0412\u0438 \u0434\u043e\u0434\u0430\u043b\u0438:"}),(0,c.jsx)("div",{className:o.imageGrid,children:p.map((e=>(0,c.jsxs)("div",{className:o.cartItem,children:[(0,c.jsxs)("p",{children:[e.name," - ",b(e.weight)," - ",e.weightNumber]}),(0,c.jsxs)("div",{className:o.quantityControl,children:[(0,c.jsx)("button",{className:o.quantityButton,onClick:()=>i((0,n.xh)(e)),children:"-"}),(0,c.jsx)("p",{children:e.quantity}),(0,c.jsx)("button",{className:o.quantityButton,onClick:()=>i((0,n.Zd)(e)),children:"+"})]}),(0,c.jsxs)("p",{children:[e.price," ",(0,c.jsx)(d.A,{width:11,height:11})]}),(0,c.jsxs)("p",{children:["\u0412\u0441\u044c\u043e\u0433\u043e: ",e.totalPrice," ",(0,c.jsx)(d.A,{width:11,height:11})]})]},e.id)))}),(0,c.jsx)("div",{className:o.totalAmount,children:(0,c.jsxs)("p",{children:["\u0421\u0443\u043c\u0430 \u0434\u043e \u0441\u043f\u043b\u0430\u0442\u0438: ",z," ",(0,c.jsx)(d.A,{width:11,height:11})]})})]}),x>0&&(0,c.jsx)("div",{className:o.totalQuantity,children:(0,c.jsxs)("p",{children:["\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c: ",x]})})]})},m="Category_subTitle__AOgNK",g=e=>{let{category:t,pizzas:i}=e;return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{className:m,children:t}),(0,c.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:i.map((e=>(0,c.jsx)(h,{pizza:e},e.id)))})]})},p="ImagesSlider_sliderContainer__wCue2",x="ImagesSlider_slider__cBs3D",u="ImagesSlider_slide__e80Mv",w=e=>{let{images:t,interval:i=3e3}=e;const[a,r]=(0,s.useState)(1),l=(0,s.useRef)(null),n=[t[t.length-1],...t,t[0]];return(0,s.useEffect)((()=>{const e=setInterval((()=>{r((e=>e+1))}),i);return()=>clearInterval(e)}),[i]),(0,s.useEffect)((()=>{a===n.length-1?setTimeout((()=>{l.current&&(l.current.style.transition="none",r(1),setTimeout((()=>{l.current&&(l.current.style.transition="transform 0.5s ease-in-out")}),50))}),500):0===a&&setTimeout((()=>{l.current&&(l.current.style.transition="none",r(n.length-2),setTimeout((()=>{l.current&&(l.current.style.transition="transform 0.5s ease-in-out")}),50))}),500)}),[a,n.length]),(0,c.jsx)("div",{className:p,children:(0,c.jsx)("div",{ref:l,className:x,style:{transform:"translateX(-".concat(100*a,"%)")},children:n.map(((e,t)=>(0,c.jsx)("div",{className:u,children:(0,c.jsx)("img",{src:e,alt:"Slide ".concat(t)})},t)))})})},j=i.p+"static/media/web_papa_jon_tree_pizza_53-grn_1514_300.86c82ee15501a0cb95ee.jpg",v=i.p+"static/media/week_offer_delivery_page_1414_300_papa-dzhon.aa7a799f23450523512d.jpg",_=i.p+"static/media/deliveryC.ae4097aabbdbf9873c81.jpg",f=i.p+"static/media/web_-50_na_drugu_1314_300B.d62ce78ee72dcdb6ae86.jpg",z=e=>{let{width:t}=e;const i={width:t||"100px"};return(0,c.jsxs)("svg",{viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:[(0,c.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"violet"}),(0,c.jsx)("text",{x:"50%",y:"52%",textAnchor:"middle",alignmentBaseline:"middle",fontSize:"140",fill:"white",fontFamily:"Arial, Helvetica, sans-serif",fontWeight:"bold",children:"ALL"})]})},y=e=>{let{width:t}=e;const i={width:t||"100px"};return(0,c.jsxs)("svg",{id:"\u0421\u043b\u043e\u0439_1",viewBox:"0 0 419.6 420",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:[(0,c.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"green"}),(0,c.jsx)("path",{d:"M49.8,279.1c30.7-75.1,76.9-135.4,157.6-162.5c-16.5-2.5-33-0.4-49.2,4.4c-31,9.2-57,27-80.7,48.4c-28.1,25.3-51.4,54.4-71.4,86.4c-0.9,1.4-1.7,2.7-3.8,4c-0.7-8.2-1.7-16.3-2-24.5c-2.8-60.6,11-116.3,49.3-164.6c27.8-35,64.5-55.5,107.6-65.1c34.8-7.8,69.8-6.6,104.8-1.5c30,4.4,59.8,9.6,89.8,13.7c21.9,3,43.9,2.5,65.5-3.1c0.5-0.1,1,0,2.2,0c-1.6,7.9-3.1,15.7-4.7,23.4c-9.1,41.9-21.1,82.9-40.3,121.4c-17.6,35.4-40.6,66.4-73.4,89.4c-29.6,20.7-62.8,31.7-98.2,36.5c-39.9,5.4-79.8,3.7-119.6-0.6c-10.7-1.2-21.4-2.5-32.2-3.8C50.7,280.4,50.3,279.8,49.8,279.1z",transform:"translate(107,145) scale(0.50)"})]})},b=e=>{let{width:t}=e;const i={width:t||"100px"};return(0,c.jsx)("svg",{viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:(0,c.jsxs)("g",{fill:"white",children:[(0,c.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"gray"}),(0,c.jsx)("path",{d:"M60.1 83.8c2 0 3.6.2 4.8.7 1.3.5 2.3 1.2 3.1 2.1.8.9 1.4 2.1 1.7 3.6.4 1.5.5 3.4.5 5.8v19.4c0 1.3.2 2.4.5 3.1.3.8.8 1.3 1.4 1.6.7.3 1.6.5 2.7.5v1.5c-4.8-.2-7.9-.3-9.5-.3-1.5 0-4.6.1-9.4.3v-1.5c1 0 1.8-.2 2.3-.5.6-.3 1-.8 1.2-1.6.2-.8.4-1.8.4-3.1V92.9c0-2-.3-3.5-1-4.5-.6-1-1.8-1.5-3.5-1.5-1.3 0-2.5.4-3.6 1.1-1.1.7-2 1.7-2.6 3-.6 1.3-.9 2.7-.9 4.2v20c0 1.3.1 2.4.4 3.1.3.8.7 1.3 1.2 1.6.6.3 1.3.5 2.3.5v1.5c-4.4-.2-7.4-.3-8.9-.3s-4.8.1-9.9.3v-1.5c1.1 0 2.1-.2 2.7-.5.7-.3 1.1-.8 1.4-1.6.3-.8.4-1.8.4-3.1V92.6c0-2.2-.3-3.8-1-4.8s-1.9-1.5-3.6-1.5v-1.5c1.5.1 3 .2 4.5.2 4.2 0 7.7-.3 10.5-1v6.5c2.3-4.5 6.2-6.7 11.9-6.7zM89.4 103.1c0 3.2.4 5.8 1.3 7.9.9 2.1 2 3.6 3.5 4.6 1.4 1 2.9 1.5 4.6 1.5 4 0 7.1-1.9 9.5-5.8l1.3.4c-.6 2-1.6 3.8-2.8 5.5-1.3 1.7-2.9 3.1-4.9 4.1-2 1.1-4.2 1.6-6.7 1.6-3.3 0-6.2-.7-8.7-2.1-2.5-1.4-4.4-3.5-5.8-6.4-1.4-2.9-2.1-6.4-2.1-10.7 0-4.4.8-8 2.3-11 1.5-3 3.6-5.2 6.2-6.7s5.7-2.3 9.2-2.3c9 0 13.5 5.3 13.5 16H89.5c-.1.7-.1 1.9-.1 3.4zM99.5 89c-.8-2.5-2.1-3.7-3.8-3.7-1.7 0-3.1 1.1-4.3 3.2-1.1 2.1-1.8 5.4-2.1 9.9h11.3c.1-3.8-.3-6.9-1.1-9.4zM162.6 85c2.4 0 4.2-.1 5.5-.2v1.4c-1 .3-1.9.9-2.7 1.8-.8.9-1.5 2.4-2.1 4.4l-9.6 29.7c-.8-.1-1.6-.1-2.4-.1-.8 0-1.5 0-2.3.1l-9.8-26.7-8 26.7c-.7-.1-1.5-.1-2.3-.1-.8 0-1.5 0-2.4.1l-11.4-31.8c-.9-2.7-2.3-4-4.1-4v-1.5c3.1.3 6.5.4 10.2.4 2.4 0 5.5-.1 9.4-.4v1.5c-1.1 0-1.9 0-2.5.1-.6.1-1.1.3-1.5.6-.4.3-.5.8-.5 1.4 0 .5.1 1.1.4 1.9l6.5 20.4 7.8-26h5.2l9.3 27.5 4.6-14.4c.7-2.1 1-3.9 1-5.5 0-3.7-1.9-5.7-5.7-6v-1.4c2.3 0 4.7.1 7.4.1z",transform:"translate(-38, -40) scale(2.50)"})]})})},N=e=>{let{width:t}=e;const i={width:t||"100px"};return(0,c.jsxs)("svg",{id:"\u0421\u043b\u043e\u0439_1",viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:{fill:"#ffffff",...i},children:[(0,c.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"yellow"}),(0,c.jsx)("path",{d:"M12.1,14.2c4.3,4.5,4.9,9.9,4.3,15.8c3.8-4.8,5.5-10,4.5-15.9c-1-5.8-3.8-10.6-8.8-14.1c2.1,0.1,4,0.4,5.8,1.1c4.7,1.7,8.6,4.6,11.9,8.2c5,5.4,8.5,11.7,10,19c1.1,5.3,0.9,10.5-1.3,15.6c0,0.1-0.1,0.2-0.2,0.5c0.4-0.2,0.7-0.3,0.9-0.4c1.9-1.1,3.2-2.8,4.1-4.8c1.5-3.2,2.1-6.6,1.5-10.1c0-0.1,0-0.2,0-0.5c0.2,0.2,0.3,0.3,0.3,0.4c2.6,4.1,4,8.5,4,13.4c0,11.9-9.3,23.2-21.1,25c-9.7,1.4-18.1-1.6-24-9.7C-1.1,50.6-1.2,43,3.2,35.4c1.3-2.3,3.1-4.3,4.6-6.4c1.1-1.6,2.2-3.1,3.1-4.8c1.6-2.9,1.9-6.1,1.2-9.3c0-0.1-0.1-0.2-0.1-0.4C12,14.4,12,14.4,12.1,14.2z",fill:"red",transform:"translate(112,70) scale(4)"})]})},C=e=>{let{width:t}=e;const i={width:t||"100px"};return(0,c.jsxs)("svg",{viewBox:"0 0 419.6 419.6",preserveAspectRatio:"xMidYMid meet",style:i,children:[(0,c.jsx)("circle",{cx:"209.8",cy:"209.8",r:"209.8",fill:"gray"}),(0,c.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:"white",transform:"translate(95.0, 105.0) scale(10)"})]})},I="Home_iconsAndSlider__9KrPQ",A="Home_icons__9MTaM",P="Home_buttonIcons__qvTJw",k="Home_mainTitleFromFilter__bEp3X",B="ScrollToTopButton_scrollToTopButton__pQS8g",S="ScrollToTopButton_hidden__wdPXz",M=e=>{let{onClick:t}=e;const[i,a]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=()=>{a(window.scrollY>0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,c.jsx)("button",{className:"".concat(B," ").concat(i?"":S),onClick:t,children:"Scroll to Top"})};var T=i(421);const O={control:(e,t)=>({...e,border:"1px solid #d3a27f",borderRadius:"10px",boxShadow:t.isFocused?"0 0 0 1px #d3a27f":"none","&:hover":{borderColor:"brown"}}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(e,t)=>({...e,transition:"all .3s ease",transform:t.selectProps.menuIsOpen?"rotate(0)":"rotate(-180deg)",color:"brown",cursor:"pointer"}),menu:e=>({...e,border:"1px solid #d3a27f",background:"white",borderRadius:"10px"}),option:(e,t)=>({...e,color:t.isSelected?"white":"black",backgroundColor:t.isSelected?"#d3a27f":"white","&:hover":{backgroundColor:"#d3a27f",color:"white",cursor:"pointer"},"&:focus":{backgroundColor:"#d3a27f",color:"white"}}),menuList:e=>({...e,"&::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none"})},F=e=>(0,c.jsx)(T.Ay,{...e,styles:O,placeholder:"\u041f\u0435\u0440\u0435\u0445\u0456\u0434 \u0434\u043e \u0440\u043e\u0437\u0434\u0456\u043b\u0456\u0432 \u0431\u043b\u044e\u0434..."}),E=()=>{const e=[j,v,_,f],[t,i]=(0,s.useState)([]),[r,l]=(0,s.useState)([]),[n,o]=(0,s.useState)(!1),[d,h]=(0,s.useState)(!0),[m,p]=(0,s.useState)([]),[x,u]=(0,s.useState)(null),B=[{value:"",label:"All"},...Array.from(new Set(r.map((e=>e.categories)))).map(((e,t)=>({value:"category-".concat(t),label:e})))],S=(e,t)=>{u(t),p([e])},T=(0,s.useCallback)((async()=>{o(!0);try{const e=await(async e=>{const{data:t}=await a.A.get("https://65e77cfb53d564627a8ee5a5.mockapi.io/api/v1/pizza-buratino?page=".concat(e,"&limit=9"));return t})(Math.ceil(t.length/9+1));0===e.length?h(!1):i((t=>[...t,...e].filter(((e,t,i)=>t===i.findIndex((t=>t.id===e.id)))).sort(((e,t)=>e.level-t.level))))}catch(e){console.error("Error fetching pizzas:",e)}finally{o(!1)}}),[t.length]);(0,s.useEffect)((()=>{T()}),[T]),(0,s.useEffect)((()=>{const e=new IntersectionObserver((e=>{e[0].isIntersecting&&!n&&d&&T()}));return e.observe(document.querySelector("#loadMore")),()=>e.disconnect()}),[n,d,T]);const O=(0,s.useCallback)((()=>{const e=t.filter((e=>0===m.length||m.every((t=>{switch(t){case"vegetarian":return!0===e.vegetarian;case"new":return!0===e.new;case"spicy":return!0===e.spicy;case"popular":return!0===e.popular;default:return!0}}))));l(e)}),[t,m]);(0,s.useEffect)((()=>{O()}),[O,m]);return(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h1",{children:"PIZZA BURATINO"}),(0,c.jsxs)("div",{className:I,children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:A,children:[(0,c.jsx)("div",{className:P,"data-description":"\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0435",onClick:()=>S("vegetarian","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0435"),children:(0,c.jsx)(y,{width:"50px"})}),(0,c.jsx)("div",{className:P,"data-description":"\u041d\u043e\u0432\u0438\u043d\u043a\u0430",onClick:()=>S("new","\u041d\u043e\u0432\u0438\u043d\u043a\u0430"),children:(0,c.jsx)(b,{width:"50px"})}),(0,c.jsx)("div",{className:P,"data-description":"\u0413\u043e\u0441\u0442\u0440\u0435",onClick:()=>S("spicy","\u0413\u043e\u0441\u0442\u0440\u0435"),children:(0,c.jsx)(N,{width:"50px"})}),(0,c.jsx)("div",{className:P,"data-description":"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0435",onClick:()=>S("popular","\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0435"),children:(0,c.jsx)(C,{width:"50px"})}),(0,c.jsx)("div",{className:P,"data-description":"\u0423c\u0435",onClick:()=>S("","\u0412\u0441\u0456 \u043d\u0430\u0448\u0456 \u0441\u043c\u0430\u043a\u043e\u043b\u0438\u043a\u0438 \u0434\u043b\u044f \u0412\u0430\u0441 \u0448\u0430\u043d\u043e\u0432\u043d\u0456)"),children:(0,c.jsx)(z,{width:"50px"})})]}),(0,c.jsx)(F,{className:"selectCategories",options:B,onChange:e=>{const t=null===e||void 0===e?void 0:e.value;if(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}}})]}),(0,c.jsx)(w,{images:e,interval:3e3})]}),x&&(0,c.jsx)("h2",{className:k,children:x}),(0,c.jsxs)("div",{children:[Array.from(new Set(r.map((e=>e.level)))).sort(((e,t)=>e-t)).map(((e,t)=>{var i,s;return(0,c.jsx)("div",{id:"category-".concat(t),children:(0,c.jsx)(g,{category:null!==(i=null===(s=r.find((t=>t.level===e)))||void 0===s?void 0:s.categories)&&void 0!==i?i:"",pizzas:r.filter((t=>t.level===e))})},e)})),(0,c.jsx)("div",{id:"loadMore",style:{height:"1px"}}),n&&(0,c.jsx)("p",{children:"Loading more pizzas..."}),!d&&(0,c.jsx)("p",{children:"No more pizzas to load."})]}),!n&&(0,c.jsx)(M,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}})]})}}}]);
//# sourceMappingURL=601.765d490e.chunk.js.map