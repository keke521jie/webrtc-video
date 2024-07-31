import React from 'react';
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import styles from "./style/Video.module.scss";
import { RequestUrl } from "./handle/RequestUrl";
import { Play } from "./handle/Play";
export interface VideoProps {
  logo?: React.ReactNode;
  title?: string;
  id: string;
  url: string;
  loadingState?: React.ReactNode;
  headers?: any;
  onClick?: () => void;
  className?: string;
  muted?: boolean;
}

export interface VideoImperativeHandle {
  play: (url: string, headers: any) => void;
}

export default forwardRef(function Video(props: VideoProps, ref) {
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
          muted
        ></video>
      </div>
    </div>
  );
});
