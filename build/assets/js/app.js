'use strict';
import { createLodger, loadLodgers, getLodgers } from './lodgers.js'
import { generateLodgerDOM, renderLodgers} from "./views.js";


//local-storage
loadLodgers();
renderLodgers();

document.querySelector('#addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    createLodger(e.target.elements);
    renderLodgers();
});

document.querySelector('#lodgerClose').addEventListener('click', () => {
    document.querySelector('.information-block').style.display = 'block';
    document.querySelector('.lodger-block').style.display = 'none';
});

document.querySelector('#timeOfDay').addEventListener('change', (e)=> {
    const house = document.querySelector('#house');
    e.target.checked? house.classList.add('house_day'):house.classList.remove('house_day')
});





//разобрать слайды
const slideInformation = document.querySelector('.information__slide');
const tab1 =document.querySelector('#addTab');
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

document.querySelector('.house-block').addEventListener('click', (e)=> {
    const floorForm = document.querySelector('#floorNumber');
    if (e.target.classList.contains('floor')) {
        floorForm.value = e.target.dataset.floor;
    }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2RnZXIsIGxvYWRMb2RnZXJzLCBnZXRMb2RnZXJzIH0gZnJvbSAnLi9sb2RnZXJzLmpzJ1xyXG5pbXBvcnQgeyBnZW5lcmF0ZUxvZGdlckRPTSwgcmVuZGVyTG9kZ2Vyc30gZnJvbSBcIi4vdmlld3MuanNcIjtcclxuXHJcblxyXG4vL2xvY2FsLXN0b3JhZ2VcclxubG9hZExvZGdlcnMoKTtcclxucmVuZGVyTG9kZ2VycygpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY3JlYXRlTG9kZ2VyKGUudGFyZ2V0LmVsZW1lbnRzKTtcclxuICAgIHJlbmRlckxvZGdlcnMoKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9kZ2VyQ2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcm1hdGlvbi1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZGdlci1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWVPZkRheScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKT0+IHtcclxuICAgIGNvbnN0IGhvdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXNlJyk7XHJcbiAgICBlLnRhcmdldC5jaGVja2VkPyBob3VzZS5jbGFzc0xpc3QuYWRkKCdob3VzZV9kYXknKTpob3VzZS5jbGFzc0xpc3QucmVtb3ZlKCdob3VzZV9kYXknKVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vL9GA0LDQt9C+0LHRgNCw0YLRjCDRgdC70LDQudC00YtcclxuY29uc3Qgc2xpZGVJbmZvcm1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcm1hdGlvbl9fc2xpZGUnKTtcclxuY29uc3QgdGFiMSA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhYicpO1xyXG5jb25zdCB0YWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlclRhYicpO1xyXG5jb25zdCBwYW5lbDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcclxuY29uc3QgcGFuZWwyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlci1mb3JtJyk7XHJcbmNvbnN0IGZvcm1CbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvcm1hdGlvbl9fZm9ybS1ibG9jaycpO1xyXG5cclxuZnVuY3Rpb24gc2xpZGVMZWZ0KCkge1xyXG4gICAgdGFiMi5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgc2xpZGVJbmZvcm1hdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMCUpXCI7XHJcbiAgICBmb3JtQmxvY2suc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZVJpZ2h0KCkge1xyXG4gICAgdGFiMS5jbGFzc0xpc3QucmVtb3ZlKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbmZvcm1hdGlvbl9fdGFiX2FjdGl2ZScpO1xyXG4gICAgc2xpZGVJbmZvcm1hdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTAwJSlcIjtcclxuICAgIGZvcm1CbG9jay5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoLTU0JSlcIlxyXG59XHJcblxyXG50YWIxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2xpZGVMZWZ0KTtcclxudGFiMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlUmlnaHQpO1xyXG5cclxuY29uc3QgbWFsZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbGUnKTtcclxuY29uc3QgZmVtYWxlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVtYWxlJyk7XHJcbmNvbnN0IGdlbmRlclNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlX2dlbmRlcicpO1xyXG5jb25zdCBhZGRSZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRSZXNldCcpO1xyXG5cclxuXHJcbm1hbGVMYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmRlclNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZ2VuZGVyU2xpZGUuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5hZGRSZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmRlclNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBnZW5kZXJTbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMCUpXCJcclxufSk7XHJcbmZlbWFsZUxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2VuZGVyU2xpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBnZW5kZXJTbGlkZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMTAwJSlcIlxyXG59KTtcclxuXHJcbmNvbnN0IG1hbGVMYWJlbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWxlRmlsdGVyJyk7XHJcbmNvbnN0IGZlbWFsZUxhYmVsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlbWFsZUZpbHRlcicpO1xyXG5jb25zdCBnZW5kZXJTbGlkZUZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9maWx0ZXInKTtcclxuY29uc3QgZmlsdGVyUmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyUmVzZXQnKTtcclxuXHJcbm1hbGVMYWJlbEZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdlbmRlclNsaWRlRmlsdGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZ2VuZGVyU2xpZGVGaWx0ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5cclxuZmlsdGVyUmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZW5kZXJTbGlkZUZpbHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZ2VuZGVyU2xpZGVGaWx0ZXIuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKDAlKVwiXHJcbn0pO1xyXG5cclxuZmVtYWxlTGFiZWxGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnZW5kZXJTbGlkZUZpbHRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIGdlbmRlclNsaWRlRmlsdGVyLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgxMDAlKVwiXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXNlLWJsb2NrJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICBjb25zdCBmbG9vckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmxvb3JOdW1iZXInKTtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zsb29yJykpIHtcclxuICAgICAgICBmbG9vckZvcm0udmFsdWUgPSBlLnRhcmdldC5kYXRhc2V0LmZsb29yO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbn0pOyJdLCJmaWxlIjoiYXBwLmpzIn0=
