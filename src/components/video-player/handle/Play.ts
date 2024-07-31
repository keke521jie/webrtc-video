// @ts-nocheck
export const Play = (options: {
  url: string;
  id: string;
  onSuccess?: () => void;
}) => {
  const webrtcPlayer = new ZLMRTCClient.Endpoint({
    element: document.getElementById(options.id), // TML视频元素的ID或引用，用于显示接收到的远程媒体流。通常是一个<video>元素
    debug: true, // 指定是否启用调试模式。如果启用，则会输出调试日志，有助于问题的排查和调试。
    zlmsdpUrl: options.url, //这是一个URL，指向用于SDP（会话描述协议）消息交换的服务器。在WebRTC通信中，SDP消息用于协商媒体流的参数，如编解码器、IP地址和端口等。
    simulecast: false, //指定是否启用多路复用（Simulcast）。多路复用允许同时发送多个分辨率和比特率的视频流，以便客户端可以根据其网络条件和能力选择合适的流。
    useCamera: false, //指定是否使用摄像头作为视频源。如果为false，可能需要使用屏幕共享或其他视频源。
    audioEnable: true, //指定是否启用音频流。
    videoEnable: true, //指定是否启用视频流。
    recvOnly: true, //指定是否仅接收媒体流（即作为接收端）。如果为true，则不会发送本地媒体流到远端。
    usedatachannel: false, //指定是否使用数据通道（DataChannel）。数据通道允许在WebRTC连接上直接发送和接收任意数据。
    //resolution: // 一个对象，指定期望的视频分辨率。包含w（宽度）和h（高度）属性。如果这两个值非零，则用于设置视频流的分辨率。
  });
  webrtcPlayer.on(ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR, (e) => {
    // ICE 协商出错
    console.error("ICE 协商出错");
    eventcallbacK("ICE ERROR", "ICE 协商出错");
  });

  webrtcPlayer.on(ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS, (e) => {
    //获取到了远端流，可以播放
    console.log("播放成功", e.streams);
    options.onSuccess && options.onSuccess();
    eventcallbacK("playing", "播放成功");
  });

  webrtcPlayer.on(
    ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
    (e) => {
      // offer anwser 交换失败
      console.error("offer anwser 交换失败", e);
      eventcallbacK("OFFER ANSWER ERROR ", "offer anwser 交换失败");
      if (e.code == -400 && e.msg == "流不存在") {
        console.log("流不存在");
      }
    }
  );

  webrtcPlayer.on(ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM, (s) => {
    // 获取到了本地流
    eventcallbacK("LOCAL STREAM", "获取到了本地流");
  });

  return webrtcPlayer;
};
