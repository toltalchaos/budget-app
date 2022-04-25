import React from 'react';
import '../../assets/hamburgers.css'
import BurgerButton from '../bits/burger-button';
import styled from 'styled-components'
import  {MAIN_COLOR, MAIN_COLOR_LIGHT, SECOND_COLOR, SECOND_COLOR_LIGHT, THIRD_COLOR} from '../../assets/const-values';

const HEADERSECTION = styled.section`
color: ${SECOND_COLOR};
background-color: ${MAIN_COLOR};
border-radius: 0 0 1rem 1rem;
h1{
    margin: 0;
}
div{
    padding: 0.5rem;
    margin: auto;
    background-color: ${MAIN_COLOR};
    display: flex;
    justify-content: end;

}
li{
    min-height: 1.5rem;
    min-width:30vw;
}
position: relative;
text-align: center;
.navdeck{
    font-size: 2rem;
    background-color: ${MAIN_COLOR};
    right: 0;
    left: auto;
    border-radius: 1rem 0 1rem 1rem;
    button{size:1rem;}
    ul{
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: flex-end;
        li{
        width: 100%;
        list-style: none;
        padding: 0.25rem 0.5rem;
        margin: 0.05rem 0.5rem;
        background-color: ${MAIN_COLOR_LIGHT};
        border-radius: 1rem ;
        vertical-align: middle;
        }
    }
}
.menu-incomes:hover{
    cursor: pointer;
}
.incomes{
    padding: 0.5rem;
}

.income-input{
    width: 5rem;
    border-radius: 0.5rem;
}

`

const HeaderSection = (props) => {
    function handleMenuClick(event){
                let menu = document.getElementsByClassName('navdeck')[0]
                if (menu.classList.contains('hide-me')){
                    menu.classList.remove('hide-me')}
                    else{
                    menu.classList.add('hide-me')}
    }
    function handleIncomesClick(event){
        console.log(event)
                let menu = document.getElementsByClassName('incomes')[0]
                if (menu.classList.contains('hide-me')){
                    menu.classList.remove('hide-me')}
                    else{
                    menu.classList.add('hide-me')}
    }
    
    return (<HEADERSECTION>
        <h1>BudgetMaker</h1>
        <div onClick={handleMenuClick}><BurgerButton loc='menu'/></div>
        <section className='navdeck hide-me'>
            <ul>
                <li>
                    <a href={`/404`}><p>404</p></a>
                </li>
                <li> <a href={`/`}><p>home</p></a></li>
                <li >
                    <p className='menu-incomes' onClick={handleIncomesClick}>Incomes <BurgerButton loc='income'/> <br/><br/></p>
                    <ul className='incomes navdeck hide-me'>
                        <input type="number" className='income-input' min={1} max={9}/>
                    </ul>
                </li>
            </ul>
        </section>

    </HEADERSECTION>);
}
 
export default HeaderSection;