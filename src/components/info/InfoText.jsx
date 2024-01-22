import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoText = ({header, p, icon}) => {
  return (
    <div>
        <FontAwesomeIcon icon={icon} />
        <h3>{header}</h3>
        <p>{p}</p>
    </div>
  )
}

export default InfoText