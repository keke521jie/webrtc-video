import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import VideoList, { PlayerHandle } from "./VideoList";
import React, { useRef } from "react";
import react from "../../assets/react.svg";
import { Source, DocsContainer } from "@storybook/addon-docs";
import { Story } from "@storybook/blocks";

// 创建一个包裹组件的 decorator
const withWrapper = (Story: any) => <Story />;

const meta = {
  title: "COMPONENTS/VideoList",
  component: VideoList,
  parameters: {
    layout: "centered",
    docs: {
      container: DocsContainer,
      page: () => (
        <>
          <h1>VideoList 视频列表组件</h1>
          <p>展示多个视频，每个视频实例独立维护:</p>
          <h3>例子：</h3>
          <Story />
          <Source
            code={`() => {
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
            }`}
            language="jsx"
          />
          <h3>参数说明：</h3>
          <ul>
            <li>
              <strong>count:</strong> 屏幕数量，可选值为 1、4、9、16
            </li>
            <li><strong>{`loadingState:ReactNode`}</strong>loading态</li>
            <li>
              <strong>{`videoUpdate:(videoObj)=>void`}</strong>{" "}
              该函数是在点击某个video实例时候组件帮你调用的，你可以在该函数体内获取到video的一些信息进行操作
            </li>
            <li>
              <strong>logo:ReactNode</strong> 显示在组件中的 logo
            </li>
            <li>
              <strong>title:string</strong> 组件的标题
            </li>
            <li>
              <strong>headers:object</strong> 请求头信息
            </li>
            <li>
              <strong>ref:</strong>{" "}
              组件的引用,传入后可以获得组件实例暴露的三个方法分别为
              <br />
              <ul>
                <li>
                  <strong>{`play:(url:string,deviceCode:string)=>void`}</strong>
                  url:传入发起请求的url地址,deviceCode:用于手机video播放的设备信息
                </li>
                <li>
                  <strong>{`getCurInfo:()=>VideoObj`}</strong>
                  返回当前选中的video实例信息
                </li>
                <li>
                  <strong>{`clearVideoList:()=>void`}</strong>
                  清理列表保存的视频数据
                </li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [withWrapper], // 添加 decorator
} satisfies Meta<typeof VideoList>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  // args: {
  //   count: 4,
  //   logo: <img style={{ width: "30%" }} src={react}></img>,
  //   title: "webrtc-play",
  //   headers: {
  //     Authorization: "token 18f9819a9a0d5ab9009249367a155a0a",
  //   },
  // },
  render: (args) => {
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
                    `https://nvp.hswl007.com/api/wvp/play/webrtc?deviceId=${device}&channelId=${device}`,
                    device
                  );
                }}
                style={liStyle}
                key={device}
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
    );
  },
};
