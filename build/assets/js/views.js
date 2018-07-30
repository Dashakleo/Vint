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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7Z2V0TG9kZ2Vyc30gZnJvbSBcIi4vbG9kZ2Vycy5qc1wiO1xyXG5pbXBvcnQge2dldEZpbHRlcnN9IGZyb20gJy4vZmlsdGVycy5qcyc7XHJcblxyXG5cclxuQXJyYXkucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgcmV0dXJuICEoYS5pbmRleE9mKGkpID4gLTEpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJMb2RnZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaG91c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9kZ2VycycpO1xyXG4gICAgY29uc3Qge3NlYXJjaEZsb29yLCBzZWFyY2hHZW5kZXIsIHNlYXJjaE90aGVyLCBzZWFyY2hSb29tc30gPSBnZXRGaWx0ZXJzKCk7XHJcbiAgICBjb25zdCBsb2RnZXJzID0gZ2V0TG9kZ2VycygpLmZpbHRlcigobG9kZ2VyKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRmxvb3JNYXRjaCA9ICFzZWFyY2hGbG9vciB8fCBsb2RnZXIuZmxvb3IgPT09IHNlYXJjaEZsb29yO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEdlbmRlck1hdGNoID0gIXNlYXJjaEdlbmRlciB8fCBsb2RnZXIuZ2VuZGVyID09PSBzZWFyY2hHZW5kZXI7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUm9vbXNNYXRjaCA9ICFzZWFyY2hSb29tcyB8fCBsb2RnZXIucm9vbXMgPT09IHNlYXJjaFJvb21zO1xyXG4gICAgICAgIGxldCBzZWFyY2hPdGhlck1hdGNoID0gdHJ1ZTtcclxuICAgICAgICBpZiAoc2VhcmNoT3RoZXIpIHtcclxuICAgICAgICAgICAgc2VhcmNoT3RoZXIuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9kZ2VyLm90aGVyLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaE90aGVyTWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWFyY2hGbG9vck1hdGNoICYmIHNlYXJjaEdlbmRlck1hdGNoICYmIHNlYXJjaE90aGVyTWF0Y2ggJiYgc2VhcmNoUm9vbXNNYXRjaDtcclxuICAgIH0pO1xyXG4gICAgaG91c2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvZGdlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbG9kZ2VyRWwgPSBnZW5lcmF0ZUxvZGdlckRPTShsb2RnZXJzW2ldKTtcclxuICAgICAgICBob3VzZS5hcHBlbmRDaGlsZChsb2RnZXJFbCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUxvZGdlckRPTSA9IChsb2RnZXIpID0+IHtcclxuICAgIGNvbnN0IGxvZGdlckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbG9kZ2VyRWwuY2xhc3NMaXN0LmFkZCgncGVyc29uJyk7XHJcbiAgICBpZiAobG9kZ2VyLmdlbmRlciA9PT0gJ21hbGUnKSB7XHJcbiAgICAgICAgbG9kZ2VyRWwuY2xhc3NMaXN0LmFkZCgncGVyc29uX21hbGUnKTtcclxuICAgIH1cclxuICAgIGxvZGdlckVsLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHtsb2RnZXIuZmxvb3JPcmRlciAqIDEzNH1weGA7XHJcbiAgICBsb2RnZXJFbC5zdHlsZS50b3AgPSBgJHs2NSArICg1IC0gbG9kZ2VyLmZsb29yKSAqIDEzMX1weGA7XHJcblxyXG4gICAgbG9kZ2VyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVBlcnNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb25fYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVBlcnNvbikge1xyXG4gICAgICAgICAgICBhY3RpdmVQZXJzb24uY2xhc3NMaXN0LnJlbW92ZSgncGVyc29uX2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb3JtYXRpb24tYmxvY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGxvZGdlckVsLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbl9hY3RpdmUnKTtcclxuICAgICAgICBtYWtlTG9kZ2VyTW9kYWwobG9kZ2VyKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9kZ2VyLWJsb2NrJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBsb2RnZXJFbDtcclxufTtcclxuXHJcbmNvbnN0IG1ha2VMb2RnZXJNb2RhbCA9IChsb2RnZXIpID0+IHtcclxuXHJcbiAgICBjb25zdCBsb2RnZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZGdlck5hbWUnKTtcclxuICAgIGNvbnN0IGxvZGdlckdlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2RnZXJHZW5kZXInKTtcclxuICAgIGNvbnN0IGxvZGdlclJvb21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZGdlclJvb21zJyk7XHJcbiAgICBjb25zdCBsb2RnZXJDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2RnZXJDb3VudCcpO1xyXG4gICAgY29uc3QgbG9kZ2VyRmxvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9kZ2VyRmxvb3InKTtcclxuICAgIGNvbnN0IGxvZGdlck90aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZGdlck90aGVyJyk7XHJcblxyXG4gICAgaWYgKGxvZGdlci5nZW5kZXIgPT09ICdmZW1hbGUnKSB7XHJcbiAgICAgICAgbG9kZ2VyTmFtZS5jbGFzc0xpc3QuYWRkKCdsb2RnZXJfX25hbWVfZmVtYWxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvZGdlck5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnbG9kZ2VyX19uYW1lX2ZlbWFsZScpXHJcbiAgICB9XHJcblxyXG4gICAgbG9kZ2VyTmFtZS5pbm5lckhUTUwgPSBsb2RnZXIubmFtZTtcclxuICAgIGxvZGdlckdlbmRlci5pbm5lckhUTUwgPSBsb2RnZXIuZ2VuZGVyID09PSAnbWFsZScgPyAn0JzRg9C20YHQutC+0LknIDogJ9CW0LXQvdGB0LrQuNC5JztcclxuICAgIGxvZGdlclJvb21zLmlubmVySFRNTCA9IGxvZGdlci5yb29tcztcclxuICAgIGxvZGdlckNvdW50LmlubmVySFRNTCA9IGxvZGdlci5jb3VudDtcclxuICAgIGxvZGdlckZsb29yLmlubmVySFRNTCA9IGxvZGdlci5mbG9vcjtcclxuICAgIGxvZGdlck90aGVyLmlubmVySFRNTCA9IGxvZGdlci5vdGhlci5qb2luKCcsICcpO1xyXG59O1xyXG5cclxuZXhwb3J0IHtnZW5lcmF0ZUxvZGdlckRPTSwgcmVuZGVyTG9kZ2Vyc30iXSwiZmlsZSI6InZpZXdzLmpzIn0=
