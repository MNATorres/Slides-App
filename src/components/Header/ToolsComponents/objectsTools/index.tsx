import React from 'react'
import SquareTool from './SquareTool'
import ImageTool from './ImageTool'
import TriangleTool from './TriangleTool'
import LineTool from './LineTool'

export default function ObjectsTools() {
  return (
    <React.Fragment>
      <ImageTool />
      <SquareTool />
      <TriangleTool />
      <LineTool />
    </React.Fragment>
  )
}
