import React from 'react';
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "../styles/Video.module.scss";
import { RequestUrl } from "./handle/RequestUrl";
import { Play } from "./handle/Play";
export interface VideoProps {
  /**
   * 播放器logo
   */
  logo?: React.ReactNode;
  /**
   * 播放器的title
   */
  title?: string;
  /**
   * id video组件的id后面，后面可以用于获取video实例
   */
  id: string;
  /**
   * 发请求的地址，传入一个地址组件内部会自动发起请求播放视频
   */
  url: string;
  /**
   * 播放时候的loading态，传入一个ReactNode默认为 "加载中..." 字样
   */
  loadingState?: React.ReactNode;
  /**
   * 请求头用于发起请求时候携带一些东西，比如token
   */
  headers?: any;
  /**
   * 点击时候调用的方法
   */
  onClick?: () => void;
  /**
   * 类名
   */
  className?: string;
  /**
   * 是否静音播放
   */
  muted?: boolean;
}

export interface VideoImperativeHandle {
  play: (url: string, headers: any) => void;
}

const VideoPlay =  forwardRef(function Video(props: VideoProps, ref) {
  const { id, url, headers, onClick, className, loadingState, muted } = props;
  const [isPlay, setIsPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  useImperativeHandle(
    ref,
    (): VideoImperativeHandle => {
      return {
        play,
      };
    },
    []
  );

  useEffect(() => {
    play(url, headers);
  }, [url]);

  useEffect(() => {
    // 销毁播放实例
    return () => {
      webrtcPlayer && webrtcPlayer.close();
      webrtcPlayer = null;
    };
  }, []);

  const play = async (url: string, headers = {}) => {
    if (url.trim() === "") {
      webrtcPlayer && webrtcPlayer.close();
      webrtcPlayer = null;
      setIsPlay(false);
      return;
    }
    setLoading(true);
    const webrtc = await RequestUrl({ url, headers: headers });
    if (webrtc.url) {
      webrtcPlayer = Play({
        url: webrtc.url,
        id,
        onSuccess: () => {
          setIsPlay(true);
          setLoading(false);
        },
      });
    }else{
      play(url, headers);
    }
  };
  let webrtcPlayer: any = null;

  return (
    <div
      onClick={() => {
        onClick && onClick();
      }}
      className={`${styles.video} ${className}`}
    >
      {!isPlay && (
        <div className={styles.logoMask}>
          {loading ? (
            <div className={styles.loading}>{loadingState ?? "加载中..."}</div>
          ) : (
            <div className={styles.logoContainer}>
              <div className={styles.logo}>{props.logo}</div>
              <div className={styles.title}>{props.title}</div>
            </div>
          )}
        </div>
      )}
      <div className={styles.videoContainer}>
        <video
          autoPlay
          controls
          className={styles.videoImp}
          id={props.id}
          muted={muted}
        ></video>
      </div>
    </div>
  );
});
VideoPlay.displayName = "VideoPlay"
export default VideoPlay
