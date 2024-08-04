import React from "react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "../styles/VideoList.module.scss";
import Video, { VideoProps } from "../video-player/Video";

export interface VideoListProps extends Omit<VideoProps, "id" | "url"> {
  /**
   * 屏幕数量
   */
  count: 1 | 4 | 9 | 16;
  /**
   * 该函数是在点击某个video实例时候组件帮你调用的，你可以在该函数体内获取到video的一些信息进行操作
   * @param curVideo 组件会将video实例的信息传递给这参数，
   */
  videoUpdate?: (curVideo: VideoObj) => void; // 负责给父组件当前选中的播放实例
}

export interface VideoObj {
  index: number;
  url: string;
  id: string;
  deviceCode: string;
}

export interface PlayerHandle {
  play: (url: string, deviceCode: string) => void;
  getCurInfo: () => VideoObj;
  clearVideoList: () => void;
}

const VideoList = forwardRef(function VideoList(
  props: VideoListProps,
  ref: React.ForwardedRef<PlayerHandle>
) {
  const { count, logo, title, headers, videoUpdate } = props;
  const [videoListArr, setVideoListArr] = useState<VideoObj[]>([]);
  const [curVideo, setCurVideo] = useState(-1);
  const videoListStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${Math.sqrt(count)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(count)}, 1fr)`,
  };

  useImperativeHandle(ref, () => {
    return {
      play,
      getCurInfo,
      clearVideoList,
    };
  });

  useEffect(() => {
    init();
  }, [count]);

  const init = () => {
    // 初始化数据
    const newVideoListArr = createVideoList(); // 创建数据
    const resVideoListArr = recoverVideoList(newVideoListArr); // 恢复数据
    setVideoListArr(resVideoListArr);
  };

  const createVideoList = (): VideoObj[] => {
    // 创建初始数据
    const newVideoListArr: VideoObj[] = [];
    for (let i = 0; i < count; i++) {
      newVideoListArr.push({
        index: i,
        url: "",
        id: `${i}`,
        deviceCode: "",
      });
    }
    return newVideoListArr;
  };

  const recoverVideoList = (newVideoList: VideoObj[]): VideoObj[] => {
    // 恢复数据
    const preVideoList = JSON.parse(
      localStorage.getItem("videoList") as string
    );
    if (preVideoList) {
      // 存在记录则恢复
      const videoList = preVideoList.slice(0, count);
      videoList.forEach(() => {
        newVideoList.shift();
      });
      return [...videoList, ...newVideoList];
    }
    // 不存在则返回最新的
    return newVideoList;
  };

  const clearVideoList = () => {
    const newVideoListArr = createVideoList();
    setVideoListArr(newVideoListArr);
    localStorage.setItem("videoList", JSON.stringify(newVideoListArr));
  };

  const play = (url: string, deviceCode: string) => {
    setVideoListArr((state) => {
      state[curVideo].url = url;
      state[curVideo].deviceCode = deviceCode;
      localStorage.setItem("videoList", JSON.stringify([...state]));
      return [...state];
    });
  };

  const getCurInfo = (): VideoObj => {
    return videoListArr[curVideo];
  };
  return (
    <ul style={videoListStyle} className={styles.videoList}>
      {videoListArr.map((video) => {
        return (
          <li className={styles.videoItem}>
            <Video
              className={
                video.id === `${curVideo}` ? styles.pickBorder : undefined
              }
              onClick={() => {
                setCurVideo(+video.id);
                videoUpdate && videoUpdate(getCurInfo());
              }}
              id={video.id}
              url={video.url}
              logo={logo}
              title={title}
              headers={headers}
              muted={count !== 1}
            ></Video>
          </li>
        );
      })}
    </ul>
  );
});
VideoList.displayName = "VideoList";
export default VideoList;
