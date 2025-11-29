import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    // autoplay muted
    audio.muted = true;
    audio.volume = 0.1;

    audio.play().catch(() => {
      console.log("Autoplay muted vẫn bị chặn nhưng sẽ bật khi user click.");
    });

    // khi user click lần đầu → bỏ muted và phát nhạc luôn
    const enableAudio = () => {
      audio.muted = false;
      audio.play();
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/TungNgayYeuEm.mp3"
      autoPlay
      loop
    />
  );
};

export default BackgroundMusic;
