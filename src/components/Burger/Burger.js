import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngedients/BurgerIngredient';
const burger = (props) => {
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;