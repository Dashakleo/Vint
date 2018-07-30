'use strict';
import {getLodgers} from "./lodgers.js";
import {getFilters} from './filters.js';


Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return !(a.indexOf(i) > -1);
    });
};

const renderLodgers = () => {
    const house = document.querySelector('.lodgers');
    const {searchFloor, searchGender, searchOther, searchRooms} = getFilters();
    const lodgers = getLodgers().filter((lodger) => {
        const searchFloorMatch = !searchFloor || lodger.floor === searchFloor;
        const searchGenderMatch = !searchGender || lodger.gender === searchGender;
        const searchRoomsMatch = !searchRooms || lodger.rooms === searchRooms;
        let searchOtherMatch = true;
        if (searchOther) {
            searchOther.forEach((value) => {
                if (!lodger.other.includes(value)) {
                    searchOtherMatch = false;
                }
            });
        }
        return searchFloorMatch && searchGenderMatch && searchOtherMatch && searchRoomsMatch;
    });
    house.innerHTML = '';
    for (let i = 0; i < lodgers.length; i++) {
        let lodgerEl = generateLodgerDOM(lodgers[i]);
        house.appendChild(lodgerEl);
    }
};

const generateLodgerDOM = (lodger) => {
    const lodgerEl = document.createElement('div');

    lodgerEl.classList.add('person');
    if (lodger.gender === 'male') {
        lodgerEl.classList.add('person_male');
    }
    lodgerEl.style.marginLeft = `${lodger.floorOrder * 134}px`;
    lodgerEl.style.top = `${65 + (5 - lodger.floor) * 131}px`;

    lodgerEl.addEventListener('click', () => {
        let activePerson = document.querySelector('.person_active');
        if (activePerson) {
            activePerson.classList.remove('person_active');
        }
        document.querySelector('.information-block').style.display = 'none';
        lodgerEl.classList.add('person_active');
        makeLodgerModal(lodger);
        document.querySelector('.lodger-block').style.display = 'flex';
    });

    return lodgerEl;
};

const makeLodgerModal = (lodger) => {

    const lodgerName = document.querySelector('#lodgerName');
    const lodgerGender = document.querySelector('#lodgerGender');
    const lodgerRooms = document.querySelector('#lodgerRooms');
    const lodgerCount = document.querySelector('#lodgerCount');
    const lodgerFloor = document.querySelector('#lodgerFloor');
    const lodgerOther = document.querySelector('#lodgerOther');

    if (lodger.gender === 'female') {
        lodgerName.classList.add('lodger__name_female');
    } else {
        lodgerName.classList.remove('lodger__name_female')
    }

    lodgerName.innerHTML = lodger.name;
    lodgerGender.innerHTML = lodger.gender === 'male' ? 'Мужской' : 'Женский';
    lodgerRooms.innerHTML = lodger.rooms;
    lodgerCount.innerHTML = lodger.count;
    lodgerFloor.innerHTML = lodger.floor;
    lodgerOther.innerHTML = lodger.other.join(', ');
};

export {generateLodgerDOM, renderLodgers}