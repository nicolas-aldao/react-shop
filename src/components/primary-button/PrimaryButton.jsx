import React from 'react';
import '../primary-button/PrimaryButton.scss'

const PrimaryButton = ({title, classesAdded, type, onClick, children}) => {
    let classes = "primary-button " + classesAdded;
    //classes.push(className)
    return (
        <button type={type} className={classes} onClick={onClick}>
          {children}
          {title}
        </button>
    );
}

export default PrimaryButton;