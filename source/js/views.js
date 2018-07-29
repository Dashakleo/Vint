'use strict';
import { getLodgers} from "./lodgers.js";

const generateLodgerDOM = (lodger) => {
    const lodgerEl = document.createElement('div');

    lodgerEl.classList.add('person');
    if (lodger.gender === 'male') {
        lodgerEl.classList.add('person_male');
    }
    lodgerEl.style.marginLeft = `${lodger.floorOrder*134}px`;
    lodgerEl.style.top = `${59 + (5-lodger.floor)*131}px`;

    lodgerEl.addEventListener('click', ()=> {
        document.querySelector('.information-block').style.display = 'none';
        makeLodgerModal(lodger);
        document.querySelector('.lodger-block').style.display = 'flex';
    });

    return lodgerEl;
};

const renderLodgers = () => {
    const house = document.querySelector('.house-block');
    const lodgers = getLodgers();
    for (let i=0; i<lodgers.length; i++) {
        let lodgerEl = generateLodgerDOM(lodgers[i]);
        house.appendChild(lodgerEl);
    }
    console.log(lodgers);
};

const makeLodgerModal = (lodger) => {

    const lodgerName = document.querySelector('#lodgerName');
    const lodgerGender = document.querySelector('#lodgerGender');
    const lodgerRooms = document.querySelector('#lodgerRooms');
    const lodgerCount = document.querySelector('#lodgerCount');
    const lodgerFloor = document.querySelector('#lodgerFloor');
    const lodgerOther = document.querySelector('#lodgerOther');

    if(lodger.gender ==='female') {
        lodgerName.classList.add('lodger__name_female');
    } else {
        lodgerName.classList.remove('lodger__name_female')
    }

    lodgerName.innerHTML = lodger.name;
    lodgerGender.innerHTML = lodger.gender === 'male'? 'Мужской': 'Женский';
    lodgerRooms.innerHTML = lodger.rooms;
    lodgerCount.innerHTML = lodger.count;
    lodgerFloor.innerHTML = lodger.floor;
    lodgerOther.innerHTML = lodger.other.join(', ');
};

export { generateLodgerDOM, renderLodgers}