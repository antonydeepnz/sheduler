import React from 'react'
import styled from "styled-components"

interface ISelectBtnProps {
    title: string,
    action: Function
}

const Button = styled.span`

`

// const SelectBtn: React.FC<ISelectBtnProps> = ({ 
//     title, action 
// }) => {
//     return(
//       <Button className="change-btn"
//         onClick={action}>
//         {title}
//       </Button>
//     );
// }

// export default SelectBtn