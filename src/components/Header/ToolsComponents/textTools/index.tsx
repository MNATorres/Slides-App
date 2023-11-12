import React from 'react'
import AddText from './AddText'
import UnderlinedTool from './UnderlinedTool'
import ItalicTool from './ItalicTool'
import BoldTool from './BoldTool'
import FontTool from './FontTool'
import PencilTool from './PencilTool'
import SizeTool from './SizeTool'

export default function TextTools() {
  return (
    <React.Fragment>
      <AddText />
      <UnderlinedTool />
      <ItalicTool />
      <BoldTool />
      <PencilTool />
      <FontTool />
      <SizeTool />
    </React.Fragment>
  )
}
