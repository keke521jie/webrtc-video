import type { Meta, StoryObj } from "@storybook/react";
import VideoPlay from "./Video";
import React from "react";
import react from "../../assets/react.svg";
import { Story } from "@storybook/blocks";

// 创建一个包裹组件的 decorator
const withWrapper = (Story: any) => (
  <div style={{ width: "800px", height: "500px" }}>
    <Story />
  </div>
);

const meta = {
  title: "COMPONENTS/VideoPlay",
  component: VideoPlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [withWrapper], // 添加 decorator
  args: {},
} satisfies Meta<typeof VideoPlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "GK1237954341113422",
    url: "https://nvp.hswl007.com/api/wvp/play/webrtc?deviceId=GK1237954341113422&channelId=GK1237954341113422",
    logo: <img style={{ width: "30%" }} src={react}></img>,
    title: "webrtc-play",
    headers: {
      Authorization: "token 18f9819a9a0d5ab9009249367a155a0a",
    },
    muted:true
  },
};
