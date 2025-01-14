import{j as c}from"./jsx-runtime-BjgbQsUx.js";import{s as R,w as C,e as u}from"./index-BsVblSul.js";import"./index-D2MAbzvX.js";const D="_button_19r2f_1",j="_disabled_19r2f_20",d={button:D,disabled:j};function I({type:i="button",onClick:e,disabled:l=!1,children:t}){return c.jsx("button",{"data-testid":"Button",type:i,onClick:e,disabled:l,className:`${d.button} ${l?d.disabled:""}`,children:t})}I.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const P={title:"Components/Button",component:I,tags:["autodocs"],parameters:{layout:"centered"}},n={args:{children:"Primary Button",type:"button",disabled:!1}},a={args:{children:"Disabled Button",type:"button",disabled:!0}},s={args:{children:c.jsxs(c.Fragment,{children:[c.jsx("span",{role:"img","aria-label":"Search",children:"🔍"})," ","Search"]}),type:"button",disabled:!1}},o={args:{children:"Test Button",type:"button",onClick:()=>console.log("Button clicked!")},play:async({canvasElement:i})=>{const e=R(console,"log"),t=C(i).getByTestId("Button");await u(t).toBeInTheDocument(),t.click(),await u(e).toHaveBeenCalledWith("Button clicked!"),e.mockRestore()}},r={args:{children:"Submit",type:"submit"}};var m,p,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    type: 'button',
    disabled: false
  }
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,g,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    type: 'button',
    disabled: true
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var B,f,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <>
                <span role="img" aria-label="Search">
                    🔍
                </span>{' '}
                Search
            </>,
    type: 'button',
    disabled: false
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var v,T,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Test Button',
    type: 'button',
    onClick: () => console.log('Button clicked!')
  },
  play: async ({
    canvasElement
  }) => {
    const consoleSpy = spyOn(console, 'log');
    const canvas = within(canvasElement);
    const element = canvas.getByTestId('Button');
    await expect(element).toBeInTheDocument();
    element.click();
    await expect(consoleSpy).toHaveBeenCalledWith('Button clicked!'); // Проверяем вызов
    consoleSpy.mockRestore();
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,x,_;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Submit',
    type: 'submit'
  }
}`,...(_=(x=r.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const W=["Primary","Disabled","WithIcon","InteractionTest","SubmitButton"];export{a as Disabled,o as InteractionTest,n as Primary,r as SubmitButton,s as WithIcon,W as __namedExportsOrder,P as default};
