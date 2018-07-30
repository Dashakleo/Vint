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


//Слайд меню
const slideInformation = document.querySelector('.information__slide');
const tab1 = document.querySelector('#addTab');
const tab2 = document.querySelector('#filterTab');
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


//Слайд смены пола
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


//Слайд смены пола в фильтре
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


//Запись этажа при клике в соответствующее поле
document.querySelector('.house-block').addEventListener('click', (e) => {
    const floorForm = document.querySelector('#floorNumber');
    if (e.target.classList.contains('floor')) {
        floorForm.value = e.target.dataset.floor;
    }
});

//Ресет всего при перезагрузке страницы
filterResetButton.click();
addResetButton.click();
document.querySelector('#timeOfDay').checked = false;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQge2NyZWF0ZUxvZGdlciwgbG9hZExvZGdlcnMsIGdldExvZGdlcnN9IGZyb20gJy4vbG9kZ2Vycy5qcydcclxuaW1wb3J0IHtnZW5lcmF0ZUxvZGdlckRPTSwgcmVuZGVyTG9kZ2Vyc30gZnJvbSBcIi4vdmlld3MuanNcIjtcclxuaW1wb3J0IHtzZXRGaWx0ZXJzLCByZXNldEZpbHRlcnN9IGZyb20gJy4vZmlsdGVycy5qcyc7XHJcblxyXG5cclxuLy9sb2NhbC1zdG9yYWdlXHJcbmxvYWRMb2RnZXJzKCk7XHJcbnJlbmRlckxvZGdlcnMoKTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNyZWF0ZUxvZGdlcihlLnRhcmdldC5lbGVtZW50cyk7XHJcbiAgICByZW5kZXJMb2RnZXJzKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZGdlckNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uX2FjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3BlcnNvbl9hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcm1hdGlvbi1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZGdlci1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWVPZkRheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICBjb25zdCBob3VzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3VzZScpO1xyXG4gICAgZS50YXJnZXQuY2hlY2tlZCA/IGhvdXNlLmNsYXNzTGlzdC5hZGQoJ2hvdXNlX2RheScpIDogaG91c2UuY2xhc3NMaXN0LnJlbW92ZSgnaG91c2VfZGF5JylcclxufSk7XHJcblxyXG5cclxuLy/RhNC40LvRjNGC0YDRi1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyRmxvb3InKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJzKHtcclxuICAgICAgICBzZWFyY2hGbG9vcjogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyTG9kZ2VycygpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW5kZXJGaWx0ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgc2V0RmlsdGVycyh7XHJcbiAgICAgICAgc2VhcmNoR2VuZGVyOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgICByZW5kZXJMb2RnZXJzKCk7XHJcbn0pO1xyXG5cclxubGV0IG90aGVyID0gW107XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3hGaWx0ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cclxuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgb3RoZXIucHVzaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG90aGVyLnNwbGljZShvdGhlci5pbmRleE9mKGUudGFyZ2V0LnZhbHVlKSwgMSk7XHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXJzKHtcclxuICAgICAgICBzZWFyY2hPdGhlcjogb3RoZXJcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyTG9kZ2VycygpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJSb29tcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJzKHtcclxuICAgICAgICBzZWFyY2hSb29tczogZS50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gICAgcmVuZGVyTG9kZ2VycygpO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJSZXNldCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzZXRGaWx0ZXJzKCk7XHJcbiAgICByZW5kZXJMb2RnZXJzKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8v0KHQu9Cw0LnQtCDQvNC10L3RjlxyXG5jb25zdCBzbGlkZUluZm9ybWF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9ybWF0aW9uX19zbGlkZScpO1xyXG5jb25zdCB0YWIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhYicpO1xyXG5jb25zdCB0YWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlclRhYicpO1xyXG5jb25zdCBmb3JtQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb3JtYXRpb25fX2Zvcm0tYmxvY2snKTtcclxuXHJcbmZ1bmN0aW9uIHNsaWRlTGVmdCgpIHtcclxuICAgIHRhYjIuY2xhc3NMaXN0LnJlbW92ZSgnaW5mb3JtYXRpb25fX3RhYl9hY3RpdmUnKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb25fX3RhYl9hY3RpdmUnKTtcclxuICAgIHNsaWRlSW5mb3JtYXRpb24uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiO1xyXG4gICAgZm9ybUJsb2NrLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwJSlcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2xpZGVSaWdodCgpIHtcclxuICAgIHRhYjEuY2xhc3NMaXN0LnJlbW92ZSgnaW5mb3JtYXRpb25fX3RhYl9hY3RpdmUnKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb25fX3RhYl9hY3RpdmUnKTtcclxuICAgIHNsaWRlSW5mb3JtYXRpb24uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDEwMCUpXCI7XHJcbiAgICBmb3JtQmxvY2suc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC01NCUpXCJcclxufVxyXG5cclxudGFiMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlTGVmdCk7XHJcbnRhYjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZVJpZ2h0KTtcclxuXHJcblxyXG4vL9Ch0LvQsNC50LQg0YHQvNC10L3RiyDQv9C+0LvQsFxyXG5jb25zdCBtYWxlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFsZScpO1xyXG5jb25zdCBmZW1hbGVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZW1hbGUnKTtcclxuY29uc3QgZ2VuZGVyU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVfZ2VuZGVyJyk7XHJcbmNvbnN0IGFkZFJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFJlc2V0Jyk7XHJcblxyXG5cclxubWFsZUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2VuZGVyU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBnZW5kZXJTbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMCUpXCJcclxufSk7XHJcbmFkZFJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2VuZGVyU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGdlbmRlclNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwJSlcIlxyXG59KTtcclxuZmVtYWxlTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZW5kZXJTbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGdlbmRlclNsaWRlLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxMDAlKVwiXHJcbn0pO1xyXG5cclxuXHJcbi8v0KHQu9Cw0LnQtCDRgdC80LXQvdGLINC/0L7Qu9CwINCyINGE0LjQu9GM0YLRgNC1XHJcbmNvbnN0IG1hbGVMYWJlbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWxlRmlsdGVyJyk7XHJcbmNvbnN0IGZlbWFsZUxhYmVsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlbWFsZUZpbHRlcicpO1xyXG5jb25zdCBnZW5kZXJTbGlkZUZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9maWx0ZXInKTtcclxuY29uc3QgZmlsdGVyUmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyUmVzZXQnKTtcclxuXHJcbm1hbGVMYWJlbEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmRlclNsaWRlRmlsdGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZ2VuZGVyU2xpZGVGaWx0ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5cclxuZmlsdGVyUmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZW5kZXJTbGlkZUZpbHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZ2VuZGVyU2xpZGVGaWx0ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5cclxuZmVtYWxlTGFiZWxGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZW5kZXJTbGlkZUZpbHRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGdlbmRlclNsaWRlRmlsdGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxMDAlKVwiXHJcbn0pO1xyXG5cclxuXHJcbi8v0JfQsNC/0LjRgdGMINGN0YLQsNC20LAg0L/RgNC4INC60LvQuNC60LUg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdC1INC/0L7Qu9C1XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VzZS1ibG9jaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGZsb29yRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmbG9vck51bWJlcicpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmxvb3InKSkge1xyXG4gICAgICAgIGZsb29yRm9ybS52YWx1ZSA9IGUudGFyZ2V0LmRhdGFzZXQuZmxvb3I7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy/QoNC10YHQtdGCINCy0YHQtdCz0L4g0L/RgNC4INC/0LXRgNC10LfQsNCz0YDRg9C30LrQtSDRgdGC0YDQsNC90LjRhtGLXHJcbmZpbHRlclJlc2V0QnV0dG9uLmNsaWNrKCk7XHJcbmFkZFJlc2V0QnV0dG9uLmNsaWNrKCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lT2ZEYXknKS5jaGVja2VkID0gZmFsc2U7Il0sImZpbGUiOiJhcHAuanMifQ==
