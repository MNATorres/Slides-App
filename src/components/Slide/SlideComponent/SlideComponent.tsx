import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer } from 'react-konva';
// import ImageKonva from './ImageKonva/ImageKonva';
import styles from './styles.module.scss';
// import { useCurrentSlide } from 'components/DigitalBook/hooks/useCurrentSlide';
// import TextKonva from './TextKonva/TextKonva';
import { v4 as uuid } from 'uuid';
import { Box, Stack } from '@mui/material';
import color from "./../../../utils/MuiColors";


export default function SlideComponent() {
//   const {
//     setCurrentDraft,
//     currentDraft,
//     selectedSlideIndex,
//     selectedIdText,
//     selectShapeText,
//     editTextMode
//   } = useCurrentSlide();
  const [selectedIdImg, selectShapeImg] = useState(null);
  const divRef = useRef(null);
  const [stageDimensions, setStageDimensions] = useState({
    width: 0,
    height: 0
  });
  const textTareaRef = useRef(null);
  const [text, setText] = useState('');
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

//   const handleStageClick = e => {
//     if (editTextMode) {
//       const stage = e.target.getStage();
//       const position = stage.getPointerPosition();
//       setClickPosition({
//         x: position.x,
//         y: position.y - 5
//       });
//       textTareaRef.current.focus();
//     }
//     setText('');
//   };

//   const handleTextEntry = () => {
//     if (text.length === 0 || text.trim() === '') return;
//     const x = parseFloat(textTareaRef.current.style.left);
//     const y = parseFloat(textTareaRef.current.style.top);

//     setCurrentDraft(prevDraft => {
//       const updatedDraft = [...prevDraft];
//       if (updatedDraft[selectedSlideIndex] && updatedDraft[selectedSlideIndex].texts) {
//         const txts = [...updatedDraft[selectedSlideIndex].texts];
//         txts.push({
//           x: x,
//           y: y,
//           text: text,
//           id: uuid(),
//           fontSize: 120,
//           draggable: true,
//           width: 600,
//           fontStyle: 'normal',
//           align: 'left',
//           id: uuid(),
//           lineHeight: 1,
//           fill: '#f84852',
//           stroke: 'purple',
//           strokeWidth: 4
//         });
//         updatedDraft[selectedSlideIndex].texts = txts;
//       }
//       return updatedDraft;
//     });
//   };

//   useEffect(() => {
//     if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
//       setStageDimensions({
//         width: divRef.current.offsetWidth,
//         height: divRef.current.offsetHeight
//       });
//     }
//   }, []);

//   const checkDeselectImg = e => {
//     const clickedOnEmpty = e.target === e.target.getStage();
//     if (clickedOnEmpty) {
//       selectShapeImg(null);
//       selectShapeText(null);
//     }
//   };

//   console.log(currentDraft);

//   const handleChangeImages = (i, newAttrs) => {
//     setCurrentDraft(prevDraft => {
//       const updatedDraft = [...prevDraft];
//       if (updatedDraft[selectedSlideIndex] && updatedDraft[selectedSlideIndex].images) {
//         const img = [...updatedDraft[selectedSlideIndex].images];
//         console.log(img);
//         if (i >= 0 && i < img.length) {
//           img[i] = {
//             ...img[i],
//             ...newAttrs
//           };
//           updatedDraft[selectedSlideIndex].images = img;
//         }
//       }
//       return updatedDraft;
//     });
//   };

//   const handleChangeText = (i, newAttrs) => {
//     setCurrentDraft(prevDraft => {
//       const updatedDraft = [...prevDraft];
//       if (updatedDraft[selectedSlideIndex] && updatedDraft[selectedSlideIndex].texts) {
//         const txts = [...updatedDraft[selectedSlideIndex].texts];
//         if (i >= 0 && i < txts.length) {
//           txts[i] = {
//             ...txts[i],
//             ...newAttrs
//           };
//           updatedDraft[selectedSlideIndex].texts = txts;
//         }
//       }
//       return updatedDraft;
//     });
//   };

  return (
    <Stack
    //   className={!editTextMode ? styles.containerWhiteboardComponent : styles.editingText}
      ref={divRef}
      width={'100%'}
      height={'80vh'}
      justifyItems={'center'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stage
        width={stageDimensions.width}
        height={stageDimensions.height}
        style={{ height: '90%', width: '80%', border: `1px solid ${color.discretBorder}`, boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.66)'}}
        // onMouseDown={checkDeselectImg}
        // onTouchStart={checkDeselectImg}
        // className={styles.containerStage}
        // onClick={handleStageClick}
      >
        {/* <Layer>
          {currentDraft[selectedSlideIndex].images.map((img, i) => {
            return (
              <ImageKonva
                stageDimensions={stageDimensions}
                divRef={divRef}
                setStageDimensions={setStageDimensions}
                src={img.imageUrl}
                key={i}
                shapeProps={img}
                isSelected={img.id === selectedIdImg}
                onSelect={() => {
                  selectShapeImg(img.id);
                }}
                onChange={newAttrs => {
                  handleChangeImages(i, newAttrs);
                }}
              />
            );
          })}
        </Layer>

        <Layer>
          {currentDraft[selectedSlideIndex].texts.map((txt, i) => {
            return (
              <TextKonva
                key={i}
                textProps={txt}
                isSelected={txt.id === selectedIdText}
                onSelect={() => {
                  selectShapeText(txt.id);
                }}
                onChange={newAttrs => {
                  handleChangeText(i, newAttrs);
                }}
              />
            );
          })}
        </Layer> */}
      </Stage>
      {/* {editTextMode && (
        <textarea
          ref={textTareaRef}
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={handleTextEntry}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleTextEntry();
              setText('');
            }
          }}
          className={styleInput}
          style={{
            left: `${clickPosition.x}px`,
            top: `${clickPosition.y}px`
          }}
        />
      )} */}
    </Stack>
  );
}
