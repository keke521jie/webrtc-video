import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{V as _,r as N}from"./react-BMSCrfNm.js";import"./chunk-HLWAVYOI-D1P0NCG2.js";import{aj as O,ak as A,al as $}from"./index-Dl7mLIU2.js";import"./iframe-C1sKdbXs.js";import"../sb-preview/runtime.js";import"./react-18-CYlqeV5r.js";import"./index-DLC2J04D.js";import"./index-D-8MO0q_.js";import"./index-0wbOH00J.js";import"./index-DrFu-skq.js";const q="_videoList_1q3tx_1",E="_videoItem_1q3tx_6",G="_pickBorder_1q3tx_11",h={videoList:q,videoItem:E,pickBorder:G},c=s.forwardRef(function(o,u){const{count:r,logo:d,title:L,headers:w,videoUpdate:v}=o,[g,m]=s.useState([]),[l,b]=s.useState(-1),S={display:"grid",gridTemplateColumns:`repeat(${Math.sqrt(r)}, 1fr)`,gridTemplateRows:`repeat(${Math.sqrt(r)}, 1fr)`};s.useImperativeHandle(u,()=>({play:R,getCurInfo:y,clearVideoList:C})),s.useEffect(()=>{I()},[r]);const I=()=>{const i=x(),t=k(i);m(t)},x=()=>{const i=[];for(let t=0;t<r;t++)i.push({index:t,url:"",id:`${t}`,deviceCode:""});return i},k=i=>{const t=JSON.parse(localStorage.getItem("videoList"));if(t){const n=t.slice(0,r);return n.forEach(()=>{i.shift()}),[...n,...i]}return i},C=()=>{const i=x();m(i),localStorage.setItem("videoList",JSON.stringify(i))},R=(i,t)=>{m(n=>(n[l].url=i,n[l].deviceCode=t,localStorage.setItem("videoList",JSON.stringify([...n])),[...n]))},y=()=>g[l];return e.jsx("ul",{style:S,className:h.videoList,children:g.map(i=>e.jsx("li",{className:h.videoItem,children:e.jsx(_,{className:i.id===`${l}`?h.pickBorder:void 0,onClick:()=>{b(+i.id),v&&v(y())},id:i.id,url:i.url,logo:d,title:L,headers:w,muted:r!==1})}))})});c.displayName="VideoList";c.__docgenInfo={description:"",methods:[{name:"play",docblock:null,modifiers:[],params:[{name:"url",optional:!1,type:{name:"string"}},{name:"deviceCode",optional:!1,type:{name:"string"}}],returns:null},{name:"getCurInfo",docblock:null,modifiers:[],params:[],returns:{type:{name:"VideoObj"}}},{name:"clearVideoList",docblock:null,modifiers:[],params:[],returns:null}],displayName:"VideoList",props:{count:{required:!0,tsType:{name:"union",raw:"1 | 4 | 9 | 16",elements:[{name:"literal",value:"1"},{name:"literal",value:"4"},{name:"literal",value:"9"},{name:"literal",value:"16"}]},description:"屏幕数量"},videoUpdate:{required:!1,tsType:{name:"signature",type:"function",raw:"(curVideo: VideoObj) => void",signature:{arguments:[{type:{name:"VideoObj"},name:"curVideo"}],return:{name:"void"}}},description:`该函数是在点击某个video实例时候组件帮你调用的，你可以在该函数体内获取到video的一些信息进行操作\r
@param curVideo 组件会将video实例的信息传递给这参数，`}},composes:["Omit"]};const K=p=>e.jsx(p,{}),X={title:"COMPONENTS/VideoList",component:c,parameters:{layout:"centered",docs:{container:O,page:()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"VideoList 视频列表组件"}),e.jsx("p",{children:"展示多个视频，每个视频实例独立维护:"}),e.jsx("h3",{children:"例子："}),e.jsx(A,{}),e.jsx($,{code:`() => {
              const videoRef = useRef<PlayerHandle>(null);
              const liStyle = {
                border: "2px solid #00d8ff",
                display: "inline",
                padding: "5px",
                margin: "5px",
              };
              return (
                <div>
                  <ul style={{ listStyle: "none" }}>
                    {["GK1237954341113422", "GK1237954341113422"].map((device) => {
                      return (
                        <li
                          onClick={() => {
                            videoRef.current?.play(
                              \`https://nvp.hswl007.com/api/wvp/play/webrtc?deviceId=\${device}&channelId=\${device}\`,
                              device
                            );
                          }}
                          style={liStyle}
                        >
                          {device}
                        </li>
                      );
                    })}
                  </ul>
                  <div style={{ width: "800px", height: "500px" }}>
                    <VideoList
                      count={4}
                      logo={<img style={{ width: "30%" }} src={react}></img>}
                      title="webrtc-play"
                      headers={{
                        Authorization: "token 18f9819a9a0d5ab9009249367a155a0a",
                      }}
                      ref={videoRef}
                    ></VideoList>
                  </div>
                </div>
              )
            }`,language:"jsx"}),e.jsx("h3",{children:"参数说明："}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"count:"})," 屏幕数量，可选值为 1、4、9、16"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"loadingState:ReactNode"}),"loading态"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"videoUpdate:(videoObj)=>void"})," ","该函数是在点击某个video实例时候组件帮你调用的，你可以在该函数体内获取到video的一些信息进行操作"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"logo:ReactNode"})," 显示在组件中的 logo"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"title:string"})," 组件的标题"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"headers:object"})," 请求头信息"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ref:"})," ","组件的引用,传入后可以获得组件实例暴露的三个方法分别为",e.jsx("br",{}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"play:(url:string,deviceCode:string)=>void"}),"url:传入发起请求的url地址,deviceCode:用于手机video播放的设备信息"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"getCurInfo:()=>VideoObj"}),"返回当前选中的video实例信息"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"clearVideoList:()=>void"}),"清理列表保存的视频数据"]})]})]})]})]})}},tags:["autodocs"],argTypes:{},decorators:[K]},a={render:p=>{const o=s.useRef(null),u={border:"2px solid #00d8ff",display:"inline",padding:"5px",margin:"5px"};return e.jsxs("div",{children:[e.jsx("ul",{style:{listStyle:"none"},children:["GK1237954341113422","GK1237954341113422"].map(r=>e.jsx("li",{onClick:()=>{var d;(d=o.current)==null||d.play(`https://nvp.hswl007.com/api/wvp/play/webrtc?deviceId=${r}&channelId=${r}`,r)},style:u,children:r},r))}),e.jsx("div",{style:{width:"800px",height:"500px"},children:e.jsx(c,{count:4,logo:e.jsx("img",{style:{width:"30%"},src:N}),title:"webrtc-play",headers:{Authorization:"token 18f9819a9a0d5ab9009249367a155a0a"},ref:o})})]})}};var f,j,V;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  // args: {
  //   count: 4,
  //   logo: <img style={{ width: "30%" }} src={react}></img>,
  //   title: "webrtc-play",
  //   headers: {
  //     Authorization: "token 18f9819a9a0d5ab9009249367a155a0a",
  //   },
  // },
  render: args => {
    const videoRef = useRef<PlayerHandle>(null);
    const liStyle = {
      border: "2px solid #00d8ff",
      display: "inline",
      padding: "5px",
      margin: "5px"
    };
    return <div>\r
        <ul style={{
        listStyle: "none"
      }}>\r
          {["GK1237954341113422", "GK1237954341113422"].map(device => {
          return <li onClick={() => {
            videoRef.current?.play(\`https://nvp.hswl007.com/api/wvp/play/webrtc?deviceId=\${device}&channelId=\${device}\`, device);
          }} style={liStyle} key={device}>\r
                {device}\r
              </li>;
        })}\r
        </ul>\r
        <div style={{
        width: "800px",
        height: "500px"
      }}>\r
          <VideoList count={4} logo={<img style={{
          width: "30%"
        }} src={react}></img>} title="webrtc-play" headers={{
          Authorization: "token 18f9819a9a0d5ab9009249367a155a0a"
        }} ref={videoRef}></VideoList>\r
        </div>\r
      </div>;
  }
}`,...(V=(j=a.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const Y=["Primary"];export{a as Primary,Y as __namedExportsOrder,X as default};
