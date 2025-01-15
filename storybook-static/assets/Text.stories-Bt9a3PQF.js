import{j as G}from"./jsx-runtime-CZmXTeUy.js";import{c as J,a as K,S as Q}from"./utils-CjEWjJmQ.js";import{r as U}from"./index-eCxJ45ll.js";const W=K("text-foreground",{variants:{variant:{h1:"scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",h2:"scroll-m-20 pb-2 text-3xl font-semibold tracking-tight",h3:"scroll-m-20 text-2xl font-semibold tracking-tight",h4:"scroll-m-20 text-xl font-semibold tracking-tight",p:"leading-7 [&:not(:first-child)]:mt-6",lead:"text-xl text-muted-foreground",large:"text-lg font-semibold",small:"text-sm font-medium leading-none",muted:"text-sm text-muted-foreground"}},defaultVariants:{variant:"p"}}),X={h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",lead:"p",large:"div",small:"small",muted:"p"},d=U.forwardRef(({className:I,variant:c,as:O,asChild:z,...B},D)=>{const F=z?Q:O??(c?X[c]:void 0)??"div";return G.jsx(F,{className:J(W({variant:c,className:I})),ref:D,...B})});d.displayName="Text";d.__docgenInfo={description:"",methods:[],displayName:"Text",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},as:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'div'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'p'"},{name:"literal",value:"'small'"},{name:"literal",value:"'div'"}]},description:""}},composes:["VariantProps"]};const ee={title:"Atoms/Text",component:d,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["h1","h2","h3","h4","p","small"]},as:{control:{type:"select"},options:["h1","h2","h3","h4","h5","p"]}},parameters:{layout:"centered"}},e={args:{variant:"h1",children:"Heading 1"}},a={args:{variant:"h2",children:"Heading 2"}},r={args:{as:"h3",variant:"h3",children:"Heading 3"}},t={args:{as:"h4",variant:"h4",children:"Heading 4"}},s={args:{variant:"p",children:"Paragraph text"}},n={args:{variant:"lead",children:"Lead text"}},o={args:{variant:"large",children:"Large text"}},l={args:{variant:"small",children:"Small text"}},i={args:{variant:"muted",children:"Muted text"}};var m,p,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
}`,...(h=(p=e.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var v,f,H;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    as: 'h3',
    variant: 'h3',
    children: 'Heading 3'
  }
}`,...(H=(f=r.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,y,L;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    as: 'h4',
    variant: 'h4',
    children: 'Heading 4'
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var b,T,M;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'p',
    children: 'Paragraph text'
  }
}`,...(M=(T=s.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var P,k,E;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'lead',
    children: 'Lead text'
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var _,j,N;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'large',
    children: 'Large text'
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var V,q,w;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    children: 'Small text'
  }
}`,...(w=(q=l.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var C,R,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'muted',
    children: 'Muted text'
  }
}`,...(A=(R=i.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const ae=["H1","H2","H3","H4","P","Lead","Large","Small","Muted"];export{e as H1,a as H2,r as H3,t as H4,o as Large,n as Lead,i as Muted,s as P,l as Small,ae as __namedExportsOrder,ee as default};
