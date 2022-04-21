import React from 'react';
import '../../assets/hamburgers.css'
const BurgerButton = (props) => {
    function handleClick(e){
        console.log(e.target, props.loc)
        let handle = 'hamburger hamburger--spin ' + props.loc
        let burger = document.getElementsByClassName(handle)[0]
        if (burger.classList.contains('is-active'))
            burger.classList.remove('is-active')
        else
            burger.classList.add('is-active')
    }
    return (
        // #is-active for the active state
        //https://github.com/jonsuh/hamburgers#usage
    <button className={"hamburger hamburger--spin " + props.loc} type="button" onClick={handleClick}>
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
    </button>);
}
 
export default BurgerButton;


