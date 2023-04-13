require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal, { openModal } from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', function() {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-05-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function fite(a1, a2) {
    a2.health -= a1.damagePerAttack;
    if (a2.health > 0) {
        a1.health -= a2.damagePerAttack;
        if (a1.health > 0) {
            fite(a1, a2);
        } else {
            return a2.toString();
        }
    } else {
        return a1.toString();
    }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    if (firstAttacker === fighter1.toString()) {
        return fite(fighter1, fighter2);
    } else {
        return fite(fighter2, fighter1);
    }
}
