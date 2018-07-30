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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQge2NyZWF0ZUxvZGdlciwgbG9hZExvZGdlcnMsIGdldExvZGdlcnN9IGZyb20gJy4vbG9kZ2Vycy5qcydcclxuaW1wb3J0IHtnZW5lcmF0ZUxvZGdlckRPTSwgcmVuZGVyTG9kZ2Vyc30gZnJvbSBcIi4vdmlld3MuanNcIjtcclxuaW1wb3J0IHtzZXRGaWx0ZXJzLCByZXNldEZpbHRlcnN9IGZyb20gJy4vZmlsdGVycy5qcyc7XHJcblxyXG5cclxuLy9sb2NhbC1zdG9yYWdlXHJcbmxvYWRMb2RnZXJzKCk7XHJcbnJlbmRlckxvZGdlcnMoKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNyZWF0ZUxvZGdlcihlLnRhcmdldC5lbGVtZW50cyk7XHJcbiAgICByZW5kZXJMb2RnZXJzKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZGdlckNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uX2FjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcnNvbl9hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcm1hdGlvbi1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZGdlci1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWVPZkRheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICBjb25zdCBob3VzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3VzZScpO1xyXG4gICAgZS50YXJnZXQuY2hlY2tlZCA/IGhvdXNlLmNsYXNzTGlzdC5hZGQoJ2hvdXNlX2RheScpIDogaG91c2UuY2xhc3NMaXN0LnJlbW92ZSgnaG91c2VfZGF5JylcclxufSk7XHJcblxyXG5cclxuLy/RhNC40LvRjNGC0YDRi1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyRmxvb3InKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJzKHtcclxuICAgICAgICBzZWFyY2hGbG9vcjogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyTG9kZ2VycygpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5kZXJGaWx0ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgc2V0RmlsdGVycyh7XHJcbiAgICAgICAgc2VhcmNoR2VuZGVyOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgICByZW5kZXJMb2RnZXJzKCk7XHJcbn0pO1xyXG5cclxubGV0IG90aGVyID0gW107XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3hGaWx0ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgb3RoZXIucHVzaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG90aGVyLnNwbGljZShvdGhlci5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSwgMSk7XHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJzKHtcclxuICAgICAgICBzZWFyY2hPdGhlcjogb3RoZXJcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyTG9kZ2VycygpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJSb29tcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJzKHtcclxuICAgICAgICBzZWFyY2hSb29tczogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyTG9kZ2VycygpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJSZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzZXRGaWx0ZXJzKCk7XHJcbiAgICByZW5kZXJMb2RnZXJzKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8v0YDQsNC30L7QsdGA0LDRgtGMINGB0LvQsNC50LTRi1xyXG5jb25zdCBzbGlkZUluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9ybWF0aW9uX19zbGlkZScpO1xyXG5jb25zdCB0YWIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhYicpO1xyXG5jb25zdCB0YWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlclRhYicpO1xyXG5jb25zdCBwYW5lbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcclxuY29uc3QgcGFuZWwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1mb3JtJyk7XHJcbmNvbnN0IGZvcm1CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcm1hdGlvbl9fZm9ybS1ibG9jaycpO1xyXG5cclxuZnVuY3Rpb24gc2xpZGVMZWZ0KCkge1xyXG4gICAgdGFiMi5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgc2xpZGVJbmZvcm1hdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMCUpXCI7XHJcbiAgICBmb3JtQmxvY2suc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZVJpZ2h0KCkge1xyXG4gICAgdGFiMS5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgc2xpZGVJbmZvcm1hdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTAwJSlcIjtcclxuICAgIGZvcm1CbG9jay5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTU0JSlcIlxyXG59XHJcblxyXG50YWIxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVMZWZ0KTtcclxudGFiMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlUmlnaHQpO1xyXG5cclxuY29uc3QgbWFsZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbGUnKTtcclxuY29uc3QgZmVtYWxlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVtYWxlJyk7XHJcbmNvbnN0IGdlbmRlclNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlX2dlbmRlcicpO1xyXG5jb25zdCBhZGRSZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRSZXNldCcpO1xyXG5cclxuXHJcbm1hbGVMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmRlclNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZ2VuZGVyU2xpZGUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5hZGRSZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmRlclNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBnZW5kZXJTbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMCUpXCJcclxufSk7XHJcbmZlbWFsZUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2VuZGVyU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBnZW5kZXJTbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTAwJSlcIlxyXG59KTtcclxuXHJcbmNvbnN0IG1hbGVMYWJlbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWxlRmlsdGVyJyk7XHJcbmNvbnN0IGZlbWFsZUxhYmVsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlbWFsZUZpbHRlcicpO1xyXG5jb25zdCBnZW5kZXJTbGlkZUZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9maWx0ZXInKTtcclxuY29uc3QgZmlsdGVyUmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyUmVzZXQnKTtcclxuXHJcbm1hbGVMYWJlbEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmRlclNsaWRlRmlsdGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZ2VuZGVyU2xpZGVGaWx0ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5cclxuZmlsdGVyUmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZW5kZXJTbGlkZUZpbHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZ2VuZGVyU2xpZGVGaWx0ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5cclxuZmVtYWxlTGFiZWxGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZW5kZXJTbGlkZUZpbHRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGdlbmRlclNsaWRlRmlsdGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxMDAlKVwiXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXNlLWJsb2NrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgZmxvb3JGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zsb29yTnVtYmVyJyk7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbG9vcicpKSB7XHJcbiAgICAgICAgZmxvb3JGb3JtLnZhbHVlID0gZS50YXJnZXQuZGF0YXNldC5mbG9vcjtcclxuICAgIH1cclxufSk7Il0sImZpbGUiOiJhcHAuanMifQ==
