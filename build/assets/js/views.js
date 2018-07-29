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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ2aWV3cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGdldExvZGdlcnN9IGZyb20gXCIuL2xvZGdlcnMuanNcIjtcclxuXHJcbmNvbnN0IGdlbmVyYXRlTG9kZ2VyRE9NID0gKGxvZGdlcikgPT4ge1xyXG4gICAgY29uc3QgbG9kZ2VyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsb2RnZXJFbC5jbGFzc0xpc3QuYWRkKCdwZXJzb24nKTtcclxuICAgIGlmIChsb2RnZXIuZ2VuZGVyID09PSAnbWFsZScpIHtcclxuICAgICAgICBsb2RnZXJFbC5jbGFzc0xpc3QuYWRkKCdwZXJzb25fbWFsZScpO1xyXG4gICAgfVxyXG4gICAgbG9kZ2VyRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAke2xvZGdlci5mbG9vck9yZGVyKjEzNH1weGA7XHJcbiAgICBsb2RnZXJFbC5zdHlsZS50b3AgPSBgJHs1OSArICg1LWxvZGdlci5mbG9vcikqMTMxfXB4YDtcclxuXHJcbiAgICBsb2RnZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcm1hdGlvbi1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgbWFrZUxvZGdlck1vZGFsKGxvZGdlcik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZGdlci1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbG9kZ2VyRWw7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJMb2RnZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaG91c2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91c2UtYmxvY2snKTtcclxuICAgIGNvbnN0IGxvZGdlcnMgPSBnZXRMb2RnZXJzKCk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8bG9kZ2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsb2RnZXJFbCA9IGdlbmVyYXRlTG9kZ2VyRE9NKGxvZGdlcnNbaV0pO1xyXG4gICAgICAgIGhvdXNlLmFwcGVuZENoaWxkKGxvZGdlckVsKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGxvZGdlcnMpO1xyXG59O1xyXG5cclxuY29uc3QgbWFrZUxvZGdlck1vZGFsID0gKGxvZGdlcikgPT4ge1xyXG5cclxuICAgIGNvbnN0IGxvZGdlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9kZ2VyTmFtZScpO1xyXG4gICAgY29uc3QgbG9kZ2VyR2VuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZGdlckdlbmRlcicpO1xyXG4gICAgY29uc3QgbG9kZ2VyUm9vbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9kZ2VyUm9vbXMnKTtcclxuICAgIGNvbnN0IGxvZGdlckNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZGdlckNvdW50Jyk7XHJcbiAgICBjb25zdCBsb2RnZXJGbG9vciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2RnZXJGbG9vcicpO1xyXG4gICAgY29uc3QgbG9kZ2VyT3RoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9kZ2VyT3RoZXInKTtcclxuXHJcbiAgICBpZihsb2RnZXIuZ2VuZGVyID09PSdmZW1hbGUnKSB7XHJcbiAgICAgICAgbG9kZ2VyTmFtZS5jbGFzc0xpc3QuYWRkKCdsb2RnZXJfX25hbWVfZmVtYWxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvZGdlck5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnbG9kZ2VyX19uYW1lX2ZlbWFsZScpXHJcbiAgICB9XHJcblxyXG4gICAgbG9kZ2VyTmFtZS5pbm5lckhUTUwgPSBsb2RnZXIubmFtZTtcclxuICAgIGxvZGdlckdlbmRlci5pbm5lckhUTUwgPSBsb2RnZXIuZ2VuZGVyID09PSAnbWFsZSc/ICfQnNGD0LbRgdC60L7QuSc6ICfQltC10L3RgdC60LjQuSc7XHJcbiAgICBsb2RnZXJSb29tcy5pbm5lckhUTUwgPSBsb2RnZXIucm9vbXM7XHJcbiAgICBsb2RnZXJDb3VudC5pbm5lckhUTUwgPSBsb2RnZXIuY291bnQ7XHJcbiAgICBsb2RnZXJGbG9vci5pbm5lckhUTUwgPSBsb2RnZXIuZmxvb3I7XHJcbiAgICBsb2RnZXJPdGhlci5pbm5lckhUTUwgPSBsb2RnZXIub3RoZXIuam9pbignLCAnKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdlbmVyYXRlTG9kZ2VyRE9NLCByZW5kZXJMb2RnZXJzfSJdLCJmaWxlIjoidmlld3MuanMifQ==
