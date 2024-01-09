import React, { useState } from "react";

export default function AudioApp(
  props: Readonly<{
    audioRef: string;
    maxWidth?: string;
  }>
) {
  const PLAYING_COLOR = "#32677F";
  const HOVER_COLOR = "#277B89";
  const DEFAULT_COLOR = "#4696a9";

  const [playing, setPlaying] = useState(false);
  const reference = React.useRef<HTMLAudioElement | null>(null);
  const [audioControls, setAudioControls] = useState(
    Array.from({ length: 37 }, () => ({ played: false, color: DEFAULT_COLOR }))
  );
  let hoveredElement = -1;
  const [currentPos, setCurrentPos] = useState(0);

  const playPauseAudio = () => {
    if (reference.current) {
      if (playing) {
        reference.current?.pause();
      } else {
        reference.current?.play();
      }
      setPlaying(!playing);
      handleProgress();
    }
  };

  const handleProgress = () => {
    if (reference.current) {
      const duration = reference.current.duration;
      const splitsDuration = duration / audioControls.length;
      let i = currentPos;
      setTimeout(() => {
        if (reference.current) {
          if (reference.current.duration === reference.current.currentTime) {
            const controls = [...audioControls];
            for (const element of controls) {
              element.played = false;
            }
            reference.current?.pause();
            reference.current.currentTime = 0;
            setPlaying(false);
            updateColors(controls);
          } else if (reference.current?.currentTime >= i * splitsDuration) {
            audioControls[i].played = true;
            i += 1;
            setCurrentPos(i);
            while (reference.current?.currentTime > i * splitsDuration) {
              audioControls[i].played = true;
              i += 1;
              setCurrentPos(i);
            }
            updateColors(audioControls);
          }
        }
        handleProgress();
      }, splitsDuration * 1000);
    }
  };

  const seekAudio = (pos: number) => {
    if (reference.current) {
      const duration = reference.current.duration;
      const splitsValue = duration / 37;
      reference.current.currentTime = splitsValue * pos;
      const controls = [...audioControls];
      if (pos >= currentPos) {
        for (let i = currentPos; i <= pos; i++) {
          controls[i].played = true;
        }
      } else {
        for (let i = currentPos; i >= pos; i--) {
          controls[i].played = false;
        }
      }
      setCurrentPos(pos);
      updateColors(controls);
      if (!playing) {
        playPauseAudio();
      }
    }
  };

  const handleHover = (pos: number, isHover: boolean) => {
    hoveredElement = isHover ? pos : -1;
    updateColors(audioControls);
  };

  const updateColors = (controls: { played: boolean; color: string }[]) => {
    const updatedControls = [...controls];
    for (const element of updatedControls) {
      if (element.played && element.color !== PLAYING_COLOR) {
        element.color = PLAYING_COLOR;
      } else if (!element.played && element.color !== DEFAULT_COLOR) {
        element.color = DEFAULT_COLOR;
      }
    }
    if (hoveredElement !== -1) {
      updatedControls[hoveredElement].color = HOVER_COLOR;
    }
    setAudioControls(updatedControls);
  };

  return (
    <>
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 415.3 112"
        style={{ width: props.maxWidth }}
      >
        <g id="Capa_1">
          <rect
            width="415.3"
            height="112"
            rx="23.92"
            ry="23.92"
            style={{
              fill: "#d4d5d5",
              strokeWidth: "0px",
            }}
          />
          {/* PLAY BUTTON */}
          {!playing && (
            <path
              id="play"
              d="M45.76,38.99v34.04c0,2.25,2.56,3.54,4.37,2.2l23.29-17.2c1.49-1.1,1.48-3.34-.02-4.42l-23.29-16.84c-1.81-1.31-4.34-.02-4.34,2.22Z"
              style={{
                fill: "#32677f",
                strokeWidth: "0px",
              }}
              onClick={() => {
                playPauseAudio();
              }}
            />
          )}
          <path
            d="M56.9,87.57c-17.4,0-31.56-14.16-31.56-31.56s14.16-31.56,31.56-31.56,31.56,14.16,31.56,31.56-14.16,31.56-31.56,31.56ZM56.9,28.16c-15.36,0-27.85,12.49-27.85,27.85s12.49,27.85,27.85,27.85,27.85-12.49,27.85-27.85-12.49-27.85-27.85-27.85Z"
            style={{
              fill: "#32677f",
              strokeWidth: "0px",
            }}
          />
          ;{/* PAUSE BUTTON */}
          {playing && (
            <g id="pause_group">
              <rect
                x="38.32"
                y="36.82"
                width="38"
                height="39"
                style={{
                  fill: "#d4d5d5",
                  strokeWidth: "0px",
                }}
                onClick={() => {
                  playPauseAudio();
                }}
              />
              <line
                id="pause_1"
                x1="47.32"
                y1="42.95"
                x2="47.32"
                y2="69.82"
                style={{
                  fill: "none",
                  stroke: "#32677f",
                  strokeLinecap: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: "8px",
                }}
                onClick={() => {
                  playPauseAudio();
                }}
              />
              <line
                id="pause_2"
                x1="67.32"
                y1="42.95"
                x2="67.32"
                y2="69.82"
                style={{
                  fill: "none",
                  stroke: "#32677f",
                  strokeLinecap: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: "8px",
                }}
                onClick={() => {
                  playPauseAudio();
                }}
              />
            </g>
          )}
          <g id="part_37">
            <path
              d="M394.02,55.95c0,4.21.1,8.43-.08,12.64-.04.92-.93,2.42-1.68,2.59-1.93.43-1.96-1.17-1.96-2.59.01-8.43,0-16.85,0-25.28,0-1.26-.13-2.62,1.71-2.7,2.01-.09,2,1.3,2,2.72,0,4.21,0,8.43,0,12.64Z"
              style={{ fill: audioControls[36].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(36);
              }}
              onMouseEnter={() => {
                handleHover(36, true);
              }}
              onMouseLeave={() => {
                handleHover(36, false);
              }}
            />
          </g>
          <g id="part_36">
            <path
              d="M385.9,55.95c0,6.42.08,12.85-.07,19.26-.02,1.05-.92,2.84-1.62,2.96-2.11.35-1.96-1.51-1.96-2.95,0-12.84,0-25.69,0-38.53,0-1.44-.14-3.29,1.97-2.96.71.11,1.6,1.91,1.62,2.96.15,6.42.07,12.84.08,19.26Z"
              style={{ fill: audioControls[35].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(35);
              }}
              onMouseEnter={() => {
                handleHover(35, true);
              }}
              onMouseLeave={() => {
                handleHover(35, false);
              }}
            />
          </g>
          <g id="part_35">
            <path
              d="M374.16,55.64c0-7.28-.05-14.56.06-21.84.01-.96.61-2.54,1.28-2.76,2.02-.65,2.33.9,2.32,2.51-.01,6.99,0,13.99,0,20.98,0,7.76.01,15.52-.01,23.28,0,1.38.37,3.22-1.81,3.19-2.12-.03-1.83-1.82-1.83-3.22-.01-7.38,0-14.75,0-22.13Z"
              style={{ fill: audioControls[34].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(34);
              }}
              onMouseEnter={() => {
                handleHover(34, true);
              }}
              onMouseLeave={() => {
                handleHover(34, false);
              }}
            />
          </g>
          <g id="part_34">
            <path
              d="M369.74,56.24c0,7.96.01,15.92,0,23.88,0,1.47.43,3.46-1.89,3.43-2.09-.03-1.76-1.88-1.76-3.28,0-16.21-.02-32.42.04-48.63,0-1.03.28-2.41.97-3.01,1.24-1.09,2.62.09,2.63,2.29.03,8.44.01,16.88.01,25.32Z"
              style={{ fill: audioControls[33].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(33);
              }}
              onMouseEnter={() => {
                handleHover(33, true);
              }}
              onMouseLeave={() => {
                handleHover(33, false);
              }}
            />
          </g>
          <g id="part_33">
            <path
              d="M361.67,56.24c0,9.38,0,18.77,0,28.15,0,.76.18,1.64-.13,2.26-.32.66-1.13,1.5-1.72,1.51-.58,0-1.34-.86-1.71-1.51-.29-.52-.11-1.31-.11-1.98,0-19.15,0-38.3,0-57.45,0-.57-.18-1.27.08-1.7.43-.72,1.15-1.28,1.75-1.91.6.63,1.64,1.21,1.72,1.9.24,2.08.12,4.2.12,6.31,0,8.14,0,16.28,0,24.42Z"
              style={{ fill: audioControls[32].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(32);
              }}
              onMouseEnter={() => {
                handleHover(32, true);
              }}
              onMouseLeave={() => {
                handleHover(32, false);
              }}
            />
          </g>
          <g id="part_32">
            <path
              d="M353.59,56.28c0,11.11,0,22.22,0,33.33,0,.77.2,1.64-.1,2.27-.32.66-1.12,1.48-1.73,1.5-.58.02-1.41-.8-1.73-1.45-.31-.62-.13-1.5-.13-2.26,0-22.32,0-44.63,0-66.95,0-.38,0-.77,0-1.15.02-1.43-.17-3.29,1.92-3,.71.1,1.68,1.91,1.69,2.95.12,11.59.08,23.18.08,34.77Z"
              style={{ fill: audioControls[31].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(31);
              }}
              onMouseEnter={() => {
                handleHover(31, true);
              }}
              onMouseLeave={() => {
                handleHover(31, false);
              }}
            />
          </g>
          <g id="part_31">
            <path
              d="M345.53,55.92c0,11.21,0,22.41,0,33.62,0,.77.21,1.67-.12,2.26-.41.71-1.23,1.42-1.99,1.58-.38.08-1.11-1-1.51-1.66-.21-.36-.07-.94-.07-1.41,0-22.89,0-45.79,0-68.68,0-.57-.15-1.25.09-1.7.32-.6.99-1.46,1.46-1.43.7.05,1.62.64,1.94,1.26.36.69.2,1.68.2,2.54,0,11.21,0,22.41,0,33.62Z"
              style={{ fill: audioControls[30].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(30);
              }}
              onMouseEnter={() => {
                handleHover(30, true);
              }}
              onMouseLeave={() => {
                handleHover(30, false);
              }}
            />
          </g>
          <g id="part_30">
            <path
              d="M333.73,55.8c0-9.4,0-18.8,0-28.2,0-.86-.12-1.79.18-2.56.23-.59,1-1.32,1.55-1.34.56-.02,1.41.64,1.67,1.21.33.74.25,1.68.25,2.54.01,18.99.01,37.99,0,56.98,0,.76.15,1.64-.17,2.26-.33.66-1.16,1.49-1.74,1.47-.58-.02-1.32-.92-1.63-1.6-.29-.65-.12-1.51-.12-2.27,0-9.5,0-18.99,0-28.49Z"
              style={{ fill: audioControls[29].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(29);
              }}
              onMouseEnter={() => {
                handleHover(29, true);
              }}
              onMouseLeave={() => {
                handleHover(29, false);
              }}
            />
          </g>
          <g id="part_29">
            <path
              d="M325.64,55.65c0-8.05-.01-16.11.01-24.16,0-1.39-.29-3.32,1.87-3.03.71.1,1.71,1.89,1.71,2.92.11,16.39.11,32.79,0,49.18,0,1.02-1.04,2.81-1.75,2.89-2.15.25-1.83-1.67-1.83-3.06-.02-8.25,0-16.49,0-24.74Z"
              style={{ fill: audioControls[28].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(28);
              }}
              onMouseEnter={() => {
                handleHover(28, true);
              }}
              onMouseLeave={() => {
                handleHover(28, false);
              }}
            />
          </g>
          <g id="part_28">
            <path
              d="M317.52,55.63c0-7.18-.02-14.36.01-21.54,0-1.37-.33-3.25,1.83-3.2,2.05.05,1.83,1.85,1.83,3.26,0,14.55,0,29.1,0,43.65,0,1.44.15,3.22-1.9,3.2-2.13-.02-1.76-1.89-1.76-3.27-.03-7.37-.01-14.74-.01-22.11Z"
              style={{ fill: audioControls[27].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(27);
              }}
              onMouseEnter={() => {
                handleHover(27, true);
              }}
              onMouseLeave={() => {
                handleHover(27, false);
              }}
            />
          </g>
          <g id="part_27">
            <path
              d="M309.42,55.65c0-6.33-.08-12.65.07-18.97.03-1.05.93-2.84,1.65-2.95,2.13-.35,1.95,1.57,1.96,2.97.02,12.84.05,25.69-.06,38.53,0,1.04-.95,2.83-1.67,2.95-2.15.35-1.93-1.56-1.94-2.96-.03-6.52-.01-13.03-.01-19.55Z"
              style={{ fill: audioControls[26].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(26);
              }}
              onMouseEnter={() => {
                handleHover(26, true);
              }}
              onMouseLeave={() => {
                handleHover(26, false);
              }}
            />
          </g>
          <g id="part_26">
            <path
              d="M301.29,55.93c0-4.2-.1-8.41.08-12.61.04-.93.94-2.44,1.67-2.6,1.92-.4,1.96,1.23,1.95,2.63,0,8.41.05,16.82-.08,25.23-.01.91-.94,2.43-1.68,2.59-1.93.41-1.95-1.23-1.94-2.63,0-4.2,0-8.41,0-12.61Z"
              style={{ fill: audioControls[25].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(25);
              }}
              onMouseEnter={() => {
                handleHover(25, true);
              }}
              onMouseLeave={() => {
                handleHover(25, false);
              }}
            />
          </g>
          <g id="part_25">
            <path
              d="M293.21,56.2c0-2.97-.13-5.94.09-8.89.06-.8,1.2-1.52,1.85-2.27.58.73,1.65,1.45,1.67,2.2.14,5.83.14,11.67,0,17.51-.02.73-1.14,1.43-1.75,2.15-.62-.79-1.7-1.54-1.77-2.37-.23-2.76-.08-5.54-.08-8.32Z"
              style={{ fill: audioControls[24].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(24);
              }}
              onMouseEnter={() => {
                handleHover(24, true);
              }}
              onMouseLeave={() => {
                handleHover(24, false);
              }}
            />
          </g>
          <g id="part_24">
            <path
              d="M285.08,55.81c0-2.68-.15-5.37.08-8.02.08-.96,1.1-1.83,1.69-2.74.64.87,1.8,1.72,1.83,2.6.17,5.54.17,11.09,0,16.63-.03.88-1.2,1.73-1.84,2.6-.59-.92-1.6-1.79-1.68-2.75-.23-2.75-.08-5.54-.08-8.31Z"
              style={{ fill: audioControls[23].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(23);
              }}
              onMouseEnter={() => {
                handleHover(23, true);
              }}
              onMouseLeave={() => {
                handleHover(23, false);
              }}
            />
          </g>
          <g id="part_23">
            <path
              d="M280.65,55.95c0,2.77.16,5.55-.09,8.3-.08.91-1.18,1.73-1.82,2.59-.58-.82-1.65-1.62-1.67-2.45-.15-5.63-.15-11.27,0-16.9.02-.83,1.1-1.63,1.69-2.44.63.86,1.73,1.69,1.81,2.6.24,2.75.09,5.53.09,8.3Z"
              style={{ fill: audioControls[22].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(22);
              }}
              onMouseEnter={() => {
                handleHover(22, true);
              }}
              onMouseLeave={() => {
                handleHover(22, false);
              }}
            />
          </g>
          <g id="part_22">
            <path
              d="M272.55,55.7c0,4.31.1,8.61-.08,12.91-.04.92-.95,2.41-1.68,2.56-1.94.4-1.93-1.23-1.92-2.63.01-8.42.01-16.84,0-25.26,0-1.28-.09-2.6,1.73-2.68,2.05-.08,1.94,1.38,1.94,2.75,0,4.11,0,8.23,0,12.34Z"
              style={{ fill: audioControls[21].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(21);
              }}
              onMouseEnter={() => {
                handleHover(21, true);
              }}
              onMouseLeave={() => {
                handleHover(21, false);
              }}
            />
          </g>
          <g id="part_21">
            <path
              d="M264.45,55.65c0,6.52.08,13.04-.07,19.56-.02,1.04-.93,2.83-1.64,2.95-2.1.34-1.97-1.52-1.97-2.96,0-12.85,0-25.7,0-38.55,0-1.47-.06-3.28,2-2.95.7.11,1.59,1.92,1.61,2.97.15,6.33.07,12.66.08,18.99Z"
              style={{ fill: audioControls[20].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(20);
              }}
              onMouseEnter={() => {
                handleHover(20, true);
              }}
              onMouseLeave={() => {
                handleHover(20, false);
              }}
            />
          </g>
          <g id="part_20">
            <path
              d="M256.35,55.93c0,7.38,0,14.75,0,22.13,0,1.32.2,3.11-1.74,2.85-.75-.1-1.83-1.82-1.84-2.81-.12-14.75-.12-29.51,0-44.26,0-1,1.05-2.73,1.81-2.85,1.93-.3,1.78,1.47,1.78,2.81,0,7.38,0,14.75,0,22.13Z"
              style={{ fill: audioControls[19].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(19);
              }}
              onMouseEnter={() => {
                handleHover(19, true);
              }}
              onMouseLeave={() => {
                handleHover(19, false);
              }}
            />
          </g>
          <g id="part_19">
            <path
              d="M248.28,55.94c0,8.06.01,16.11-.01,24.17,0,1.46.47,3.45-1.88,3.42-2.11-.03-1.77-1.86-1.77-3.27,0-16.21-.02-32.41.04-48.62,0-1.03.29-2.4.98-3.01,1.2-1.07,2.63.14,2.63,2.28.03,8.34.01,16.69.01,25.03Z"
              style={{ fill: audioControls[18].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(18);
              }}
              onMouseEnter={() => {
                handleHover(18, true);
              }}
              onMouseLeave={() => {
                handleHover(18, false);
              }}
            />
          </g>
          <g id="part_18">
            <path
              d="M240.21,56.3c0,9.29,0,18.58,0,27.87,0,.77.21,1.65-.09,2.27-.36.73-1.18,1.24-1.8,1.85-.58-.65-1.28-1.22-1.7-1.96-.25-.44-.07-1.12-.07-1.7,0-19.06,0-38.12,0-57.17,0-.57-.19-1.27.06-1.7.47-.79,1.2-1.43,1.83-2.13.59.74,1.32,1.41,1.72,2.24.26.54.06,1.32.06,1.99,0,9.48,0,18.96,0,28.44Z"
              style={{ fill: audioControls[17].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(17);
              }}
              onMouseEnter={() => {
                handleHover(17, true);
              }}
              onMouseLeave={() => {
                handleHover(17, false);
              }}
            />
          </g>
          <g id="part_17">
            <path
              d="M232.13,55.98c0,11.22,0,22.45,0,33.67,0,.86.14,1.81-.18,2.55-.24.57-1.11,1.19-1.7,1.18-.57,0-1.4-.68-1.63-1.25-.3-.75-.16-1.7-.16-2.56,0-22.45,0-44.9,0-67.35,0-.67-.21-1.47.07-1.98.4-.72,1.17-1.24,1.78-1.84.6.63,1.35,1.17,1.74,1.91.28.53.07,1.32.07,1.99,0,11.22,0,22.45,0,33.67Z"
              style={{ fill: audioControls[16].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(16);
              }}
              onMouseEnter={() => {
                handleHover(16, true);
              }}
              onMouseLeave={() => {
                handleHover(16, false);
              }}
            />
          </g>
          <g id="part_16">
            <path
              d="M220.36,55.66c0-7.96-.02-15.92.01-23.88,0-1.45-.46-3.47,1.89-3.42,2.06.04,1.79,1.86,1.79,3.28,0,16.21.02,32.41-.04,48.62,0,1.03-.3,2.41-.99,3.01-1.29,1.11-2.64-.19-2.64-2.58-.02-8.34,0-16.69,0-25.03Z"
              style={{ fill: audioControls[15].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(15);
              }}
              onMouseEnter={() => {
                handleHover(15, true);
              }}
              onMouseLeave={() => {
                handleHover(15, false);
              }}
            />
          </g>
          <g id="part_15">
            <path
              d="M212.29,55.96c0-7.38-.01-14.76,0-22.13,0-1.3-.22-3.13,1.74-2.84.77.11,1.86,1.83,1.87,2.82.12,14.75.12,29.51,0,44.26,0,1-1.07,2.72-1.85,2.84-1.96.31-1.76-1.51-1.76-2.82-.02-7.38,0-14.76,0-22.13Z"
              style={{ fill: audioControls[14].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(14);
              }}
              onMouseEnter={() => {
                handleHover(14, true);
              }}
              onMouseLeave={() => {
                handleHover(14, false);
              }}
            />
          </g>
          <g id="part_14">
            <path
              d="M204.18,55.99c0-14.01,0-28.02,0-42.03,0-.86-.17-1.8.11-2.57.25-.67,1.02-1.57,1.58-1.58.61-.02,1.47.75,1.82,1.39.33.61.16,1.5.16,2.26,0,28.3,0,56.61,0,84.91,0,.67.2,1.47-.09,1.98-.42.73-1.2,1.24-1.83,1.84-.57-.63-1.37-1.17-1.65-1.91-.29-.75-.1-1.7-.1-2.57,0-13.91,0-27.83,0-41.74Z"
              style={{ fill: audioControls[13].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(13);
              }}
              onMouseEnter={() => {
                handleHover(13, true);
              }}
              onMouseLeave={() => {
                handleHover(13, false);
              }}
            />
          </g>
          <g id="part_13">
            <path
              d="M199.77,55.78c0,11.21,0,22.41,0,33.62,0,.86.17,1.82-.15,2.55-.29.65-1.17,1.42-1.79,1.42-.56,0-1.33-.87-1.62-1.53-.29-.65-.1-1.51-.1-2.27,0-22.41,0-44.82,0-67.24,0-.57-.18-1.25.05-1.7.42-.81,1.1-1.49,1.66-2.22.65.77,1.82,1.53,1.86,2.33.18,4.49.09,9,.09,13.5,0,7.18,0,14.37,0,21.55Z"
              style={{ fill: audioControls[12].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(12);
              }}
              onMouseEnter={() => {
                handleHover(12, true);
              }}
              onMouseLeave={() => {
                handleHover(12, false);
              }}
            />
          </g>
          <g id="part_12">
            <path
              d="M187.98,55.94c0-9.39,0-18.77,0-28.16,0-.86-.15-1.81.17-2.55.28-.66,1.11-1.52,1.67-1.51.59.01,1.39.87,1.67,1.54.31.74.17,1.69.17,2.55,0,18.77,0,37.54,0,56.31,0,.29.1.63-.02.85-.59,1.13-1.23,2.22-1.85,3.33-.6-1.12-1.72-2.23-1.73-3.35-.14-9.67-.08-19.34-.08-29.02Z"
              style={{ fill: audioControls[11].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(11);
              }}
              onMouseEnter={() => {
                handleHover(11, true);
              }}
              onMouseLeave={() => {
                handleHover(11, false);
              }}
            />
          </g>
          <g id="part_11">
            <path
              d="M179.88,55.94c0-7.85,0-15.7,0-23.55,0-.77-.2-1.64.09-2.27.34-.73,1.14-1.24,1.74-1.84.61.61,1.41,1.13,1.76,1.86.3.63.1,1.5.1,2.27,0,15.7,0,31.4,0,47.11,0,.77.2,1.64-.1,2.27-.36.73-1.17,1.24-1.78,1.84-.6-.61-1.39-1.13-1.73-1.86-.29-.63-.08-1.5-.08-2.27,0-7.85,0-15.7,0-23.55Z"
              style={{ fill: audioControls[10].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(10);
              }}
              onMouseEnter={() => {
                handleHover(10, true);
              }}
              onMouseLeave={() => {
                handleHover(10, false);
              }}
            />
          </g>
          <g id="part_10">
            <path
              d="M175.45,55.7c0,7.37.01,14.74-.01,22.11,0,1.4.2,3.33-1.86,3.09-.73-.09-1.74-2.06-1.75-3.18-.12-14.55-.08-29.1-.07-43.65,0-1.42-.17-3.32,1.87-3.08.72.09,1.72,2.05,1.74,3.17.16,7.18.08,14.36.08,21.54Z"
              style={{ fill: audioControls[9].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(9);
              }}
              onMouseEnter={() => {
                handleHover(9, true);
              }}
              onMouseLeave={() => {
                handleHover(9, false);
              }}
            />
          </g>
          <g id="part_9">
            <path
              d="M163.67,55.96c0-6.42-.07-12.84.08-19.26.02-1.05.91-2.85,1.62-2.97,2.09-.35,2,1.51,2,2.94.01,12.84.02,25.68,0,38.52,0,1.41.15,3.31-1.97,2.96-.72-.12-1.63-1.9-1.65-2.93-.15-6.42-.08-12.84-.08-19.26Z"
              style={{ fill: audioControls[8].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(8);
              }}
              onMouseEnter={() => {
                handleHover(8, true);
              }}
              onMouseLeave={() => {
                handleHover(8, false);
              }}
            />
          </g>
          <g id="part_8">
            <path
              d="M159.24,55.98c0,4.21.1,8.42-.08,12.61-.04.92-.95,2.43-1.68,2.58-1.91.39-1.94-1.23-1.94-2.64.01-8.41-.05-16.83.08-25.24.01-.9.95-2.41,1.68-2.57,1.95-.41,1.93,1.25,1.94,2.63,0,4.21,0,8.41,0,12.62Z"
              style={{ fill: audioControls[7].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(7);
              }}
              onMouseEnter={() => {
                handleHover(7, true);
              }}
              onMouseLeave={() => {
                handleHover(7, false);
              }}
            />
          </g>
          <g id="part_7">
            <path
              d="M151.1,56.24c0,2.68.16,5.36-.09,8.02-.09.92-1.18,1.74-1.81,2.61-.59-.82-1.67-1.63-1.69-2.47-.15-5.63-.15-11.27,0-16.91.02-.83,1.11-1.63,1.7-2.44.63.86,1.72,1.69,1.8,2.6.24,2.85.09,5.73.09,8.59Z"
              style={{ fill: audioControls[6].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(6);
              }}
              onMouseEnter={() => {
                handleHover(6, true);
              }}
              onMouseLeave={() => {
                handleHover(6, false);
              }}
            />
          </g>
          <g id="part_6">
            <path
              d="M143,55.92c0,2.77.15,5.55-.09,8.3-.08.92-1.16,1.75-1.78,2.63-.6-.81-1.71-1.6-1.73-2.43-.15-5.63-.15-11.27,0-16.9.02-.84,1.1-1.65,1.7-2.47.63.85,1.73,1.67,1.81,2.57.24,2.75.09,5.53.09,8.3Z"
              style={{ fill: audioControls[5].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(5);
              }}
              onMouseEnter={() => {
                handleHover(5, true);
              }}
              onMouseLeave={() => {
                handleHover(5, false);
              }}
            />
          </g>
          <g id="part_5">
            <path
              d="M134.91,55.97c0,2.87.14,5.75-.09,8.6-.06.8-1.19,1.52-1.83,2.28-.59-.73-1.67-1.45-1.69-2.19-.14-5.83-.14-11.66,0-17.49.02-.73,1.14-1.43,1.75-2.15.62.78,1.7,1.53,1.77,2.36.22,2.85.08,5.73.09,8.6Z"
              style={{ fill: audioControls[4].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(4);
              }}
              onMouseEnter={() => {
                handleHover(4, true);
              }}
              onMouseLeave={() => {
                handleHover(4, false);
              }}
            />
          </g>
          <g id="part_4">
            <path
              d="M126.82,55.94c0,8.15,0,16.3,0,24.45,0,1.42.26,3.22-1.88,3.16-2.08-.07-1.79-1.86-1.79-3.28,0-16.21-.02-32.41.04-48.62,0-1.03.29-2.4.98-3.02,1.18-1.08,2.63.14,2.63,2.28.04,8.34.01,16.69.01,25.03Z"
              style={{ fill: audioControls[3].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(3);
              }}
              onMouseEnter={() => {
                handleHover(3, true);
              }}
              onMouseLeave={() => {
                handleHover(3, false);
              }}
            />
          </g>
          <g id="part_3">
            <path
              d="M118.75,56.03c0,7.28,0,14.56,0,21.84,0,1.41.23,3.3-1.88,3.03-.71-.09-1.7-1.89-1.71-2.92-.11-14.65-.08-29.31-.07-43.96,0-1.43-.2-3.17,1.93-3.13,1.94.04,1.73,1.68,1.73,3.01,0,7.37,0,14.75,0,22.12Z"
              style={{ fill: audioControls[2].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(2);
              }}
              onMouseEnter={() => {
                handleHover(2, true);
              }}
              onMouseLeave={() => {
                handleHover(2, false);
              }}
            />
          </g>
          <g id="part_2">
            <path
              d="M110.66,55.94c0,6.52,0,13.04,0,19.56,0,1.42-.05,3.04-1.94,2.68-.72-.14-1.64-1.73-1.65-2.66-.11-13.04-.07-26.08-.08-39.12,0-1.42.06-3.04,1.95-2.68.71.13,1.62,1.72,1.64,2.67.14,6.52.08,13.04.08,19.56Z"
              style={{ fill: audioControls[1].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(1);
              }}
              onMouseEnter={() => {
                handleHover(1, true);
              }}
              onMouseLeave={() => {
                handleHover(1, false);
              }}
            />
          </g>
          <g id="part_1">
            <path
              d="M102.6,56.1c0,2.77.14,5.56-.08,8.31-.07.85-1.1,1.63-1.7,2.44-.63-.77-1.79-1.53-1.82-2.31-.16-5.73-.16-11.48,0-17.21.02-.78,1.19-1.53,1.83-2.29.59.82,1.61,1.6,1.68,2.46.21,2.85.08,5.73.08,8.6Z"
              style={{ fill: audioControls[0].color, strokeWidth: "0px" }}
              onClick={() => {
                seekAudio(0);
              }}
              onMouseEnter={() => {
                handleHover(0, true);
              }}
              onMouseLeave={() => {
                handleHover(0, false);
              }}
            />
          </g>
        </g>
      </svg>
      <audio
        src={props.audioRef}
        preload="true"
        controls={false}
        ref={reference}
      ></audio>
    </>
  );
}
