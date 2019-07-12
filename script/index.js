// scripts go here

const flexStart = document.querySelector('[data-flex-start]');
const flexStartDiv = document.querySelector('[data-flex-start-div]');

const flexEndDiv = document.querySelector('[data-flex-end-div]');
const flexEnd = document.querySelector('[data-flex-end]');

const flexCenterDiv = document.querySelector('[data-flex-center-div]');
const flexCenter = document.querySelector('[data-center-end]');

const flexBetweenDiv = document.querySelector('[data-flex-between-div]');
const flexBetween = document.querySelector('[data-flex-between]');

const flexAroundDiv = document.querySelector('[data-flex-around-div]');
const flexAround = document.querySelector('[data-flex-around]');

const flexEvenDiv = document.querySelector('[data-flex-even-div]');
const flexEven = document.querySelector('[data-flex-even]');


flexStart.addEventListener('click', ()=> {
    console.log('click')
    flexStartDiv.classList.toggle('hidden');
});

flexEnd.addEventListener('click', ()=> {
    console.log('click')
    flexEndDiv.classList.toggle('hidden');
});

flexCenter.addEventListener('click', ()=> {
    console.log('click')
    flexCenterDiv.classList.toggle('hidden');
});

flexBetween.addEventListener('click', ()=> {
    console.log('click')
    flexBetweenDiv.classList.toggle('hidden');
});

flexAround.addEventListener('click', ()=> {
    console.log('click')
    flexAroundDiv.classList.toggle('hidden');
});

flexEven.addEventListener('click', ()=> {
    console.log('click')
    flexEvenDiv.classList.toggle('hidden');
});

