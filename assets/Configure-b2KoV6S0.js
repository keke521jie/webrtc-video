import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as s}from"./index-Dl7mLIU2.js";import"./index-DJO9vBfz.js";import"./iframe-C1sKdbXs.js";import"../sb-preview/runtime.js";import"./index-DLC2J04D.js";import"./index-D-8MO0q_.js";import"./index-0wbOH00J.js";import"./index-DrFu-skq.js";function r(n){const t={code:"code",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"快速开始"}),`
`,e.jsxs("div",{className:"webrtc-video",children:[e.jsx(t.h1,{id:"基于webrtc的播放器",children:"基于WebRtc的播放器"}),e.jsx(t.hr,{}),e.jsx(t.h3,{id:"注意",children:"注意"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// video有关的组件都依赖于 ZLMRTCClient.js 首先应该在index.html中引入

<script type="text/javascript" src="http://my.zsyou.top/2024/ZLMRTCClient.js"><\/script>

// video有关的标签默认宽高等于父组件宽高，需要在外层包裹一个有宽高的容器 
<div style={width:"800px",height:"500px"}>
    <VideoPlay
        headers={{
            Authorization: 'token ******************'
        }}
        id="*********************"
        logo={<img src="/src/assets/react.svg" style={{width: '30%'}}/>}
        muted
        title="webrtc-play"
        url="https://nvp.hswl007.com/api/wvp/play/webrtc?deviceId=GK1237954341113422&channelId=GK1237954341113422"
    />
</div>
`})}),e.jsx(t.hr,{}),e.jsx(t.h3,{id:"安装",children:"安装"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`// 使用喜欢的包管理器安装
npm i webrtc-video
cnpm i webrtc-video
yarn add webrtc-video
`})}),e.jsx(t.p,{children:"然后就可以在项目中使用了"})]}),`
`,e.jsx("style",{})]})}function u(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{u as default};
