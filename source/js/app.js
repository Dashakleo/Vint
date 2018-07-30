'use strict';
import {createLodger, loadLodgers, getLodgers} from './lodgers.js'
import {generateLodgerDOM, renderLodgers} from "./views.js";
import {setFilters, resetFilters} from './filters.js';


//local-storage
loadLodgers();
renderLodgers();

document.querySelector('#addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    createLodger(e.target.elements);
    renderLodgers();
});

document.querySelector('#lodgerClose').addEventListener('click', () => {
    document.querySelector('.person_active').classList.remove('person_active');
    document.querySelector('.information-block').style.display = 'block';
    document.querySelector('.lodger-block').style.display = 'none';
});

document.querySelector('#timeOfDay').addEventListener('change', (e) => {
    const house = document.querySelector('#house');
    e.target.checked ? house.classList.add('house_day') : house.classList.remove('house_day')
});


//фильтры
document.querySelector('#filterFloor').addEventListener('input', (e) => {
    setFilters({
        searchFloor: e.target.value
    });
    renderLodgers();
});

document.querySelector('#genderFilter').addEventListener('change', (e) => {
    setFilters({
        searchGender: e.target.value
    });
    renderLodgers();
});

let other = [];

document.querySelector('#checkboxFilter').addEventListener('change', (e) => {

    if (e.target.checked) {
        other.push(e.target.value);
    } else {
        other.splice(other.indexOf(e.target.value), 1);
    }
    setFilters({
        searchOther: other
    });
    renderLodgers();
});

document.querySelector('#filterRooms').addEventListener('change', (e) => {
    setFilters({
        searchRooms: e.target.value
    });
    renderLodgers();
});

document.querySelector('#filterReset').addEventListener('click', () => {
    resetFilters();
    renderLodgers();
});


//разобрать слайды
const slideInformation = document.querySelector('.information__slide');
const tab1 = document.querySelector('#addTab');
const tab2 = document.querySelector('#filterTab');
const panel1 = document.querySelector('.add-form');
const panel2 = document.querySelector('.filter-form');
const formBlock = document.querySelector('.information__form-block');

function slideLeft() {
    tab2.classList.remove('information__tab_active');
    this.classList.add('information__tab_active');
    slideInformation.style.transform = "translateX(0%)";
    formBlock.style.transform = "translateX(0%)";
}

function slideRight() {
    tab1.classList.remove('information__tab_active');
    this.classList.add('information__tab_active');
    slideInformation.style.transform = "translateX(100%)";
    formBlock.style.transform = "translateX(-54%)"
}

tab1.addEventListener('click', slideLeft);
tab2.addEventListener('click', slideRight);

const maleLabel = document.querySelector('#male');
const femaleLabel = document.querySelector('#female');
const genderSlide = document.querySelector('.slide_gender');
const addResetButton = document.querySelector('#addReset');


maleLabel.addEventListener('click', () => {
    genderSlide.style.display = 'block';
    genderSlide.style.transform = "translateX(0%)"
});
addResetButton.addEventListener('click', () => {
    genderSlide.style.display = 'none';
    genderSlide.style.transform = "translateX(0%)"
});
femaleLabel.addEventListener('click', () => {
    genderSlide.style.display = 'block';
    genderSlide.style.transform = "translateX(100%)"
});

const maleLabelFilter = document.querySelector('#maleFilter');
const femaleLabelFilter = document.querySelector('#femaleFilter');
const genderSlideFilter = document.querySelector('.slide_filter');
const filterResetButton = document.querySelector('#filterReset');

maleLabelFilter.addEventListener('click', () => {
    genderSlideFilter.style.display = 'block';
    genderSlideFilter.style.transform = "translateX(0%)"
});

filterResetButton.addEventListener('click', () => {
    genderSlideFilter.style.display = 'none';
    genderSlideFilter.style.transform = "translateX(0%)"
});

femaleLabelFilter.addEventListener('click', () => {
    genderSlideFilter.style.display = 'block';
    genderSlideFilter.style.transform = "translateX(100%)"
});

document.querySelector('.house-block').addEventListener('click', (e) => {
    const floorForm = document.querySelector('#floorNumber');
    if (e.target.classList.contains('floor')) {
        floorForm.value = e.target.dataset.floor;
    }
});