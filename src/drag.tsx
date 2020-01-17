import React, { useState } from 'react'
import styled from "styled-components"

const DropW = styled.div`
    height: 100px;
    width: 150px;
    background-color: red;
    padding: 5px;
`

const DragW = styled.div`
    height: 70px;
    width: 70px;
    background-color: blue;
`

export const Drag = () => {
    const handleDrag = () => {
        console.log('Taken')
    }
    return (
        <DragW draggable onDrag={handleDrag}>
            Draggable
        </DragW>
    )
}


export const Drop = () => {
    const [ set, setSet ] = useState()

    const handleDrop = (event: React.DragEvent) => {
        console.log(event.currentTarget.getBoundingClientRect())
    }

    const handleDragOver = (event: React.DragEvent) => {
        event.preventDefault();
    }

    return (
        <DropW onDrop={(e) => handleDrop(e)}
            onDragOver={(e) => handleDragOver(e)}>
            
        </DropW>
    )
}
