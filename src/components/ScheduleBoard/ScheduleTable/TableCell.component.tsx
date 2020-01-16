import React from 'react'
import styled, { keyframes } from "styled-components"

interface ITableCellProps {
    color: string,
    height: number
}

const rotate = keyframes`
0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`

const TableCell = styled.td<ITableCellProps>`
    color: ${props => props.color};
    font-size: 15px; 
    padding: 5px;
    width: 150px;
    height: ${props => props.height}px;
    
    &:hover {
        color: blue;
        animation: ${rotate} 0.3s linear;
    }
`

const TC: React.FC<ITableCellProps> = ({ color, height }) => {
    return (
        <TableCell color={color} height={height}>
            dsfsdfdsfsdfdsfdsfdsfds
        </TableCell>
    )
}

// const TableCell = styled(TC)` 
//     font-size: 25px; 
//     padding: 5px;
//     width: 150px;
//     height: 30px;
// `



export default TC