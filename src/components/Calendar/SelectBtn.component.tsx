import React from 'react'
import styled from "styled-components"

interface ISelectBtnProps {
    title: string,
    action: Function
}

const Button = styled.span`
    margin: 5px;
    padding: 5px;
    font-weight: 500;

    &:hover{
        font-weight: 700;
    }
`

const SelectBtn: React.FC<ISelectBtnProps> = ({ 
   title, action 
}) => {

    const handleClick = ( ) => {
        action()
    }

    return(
      <Button className="change-btn"
        onClick={handleClick}>
        {title}
      </Button>
    );
}

export default SelectBtn