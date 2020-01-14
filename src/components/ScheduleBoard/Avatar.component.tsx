import React from 'react'

export interface IAvatarProps {
    name: string,
    speciality: string,
    src: string
}

const Avatar: React.FC<IAvatarProps> = ({ name, src, speciality }) => {
    return (
        <div className="scheduler-avatar">
            <img src={src} alt=""/>
            <p>{name}</p>
            <p>{speciality}</p>
        </div>
    )
}

export default Avatar
