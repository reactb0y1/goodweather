import noUiSlider from "nouislider";
import wNumb from "wnumb";


// Стоимость квартиры

let payCost = document.getElementById('pay-cost');
let payCostInput = document.getElementById('pay-cost-input');

noUiSlider.create(payCost, {
    start: [2500000],
    step: 1000,
    connect: 'lower',
    range: {
        'min': [1000000],
        'max': [5000000]
    },
    format: wNumb({
        decimals: 0,
        thousand: ' '
    })
});

payCost.noUiSlider.on('update', function (values, handle) {
    payCostInput.value = values[handle];
});

payCostInput.addEventListener('change', function () {
    payCost.noUiSlider.set(this.value);
});


// Стоимость квартиры

let payContribution = document.getElementById('pay-contribution');
let payContributionInput = document.getElementById('pay-contribution-input');

noUiSlider.create(payContribution, {
    start: [1500000],
    step: 1000,
    connect: 'lower',
    range: {
        'min': [1000000],
        'max': [5000000]
    },
    format: wNumb({
        decimals: 0,
        thousand: ' '
    })
});

payContribution.noUiSlider.on('update', function (values, handle) {
    payContributionInput.value = values[handle];
});

payContributionInput.addEventListener('change', function () {
    payContribution.noUiSlider.set(this.value);
});


// Стоимость квартиры

let payYear = document.getElementById('pay-year');
let payYearInput = document.getElementById('pay-year-input');

noUiSlider.create(payYear, {
    start: [5],
    step: 1,
    connect: 'lower',
    range: {
        'min': [1],
        'max': [10]
    },
    format: wNumb({
        decimals: 0
    })
});

payYear.noUiSlider.on('update', function (values, handle) {
    payYearInput.value = values[handle];
});

payYearInput.addEventListener('change', function () {
    payYear.noUiSlider.set(this.value);
});


// Вкладки

let tabsHeaders = document.querySelectorAll('.pay__tabs-header');
let tabsBorder = document.querySelector('.pay__tabs-border');
let tabs = document.querySelectorAll('.pay__tab');
let payTabList = document.querySelector('.pay__tab-list');

for (let i = 0; i < tabsHeaders.length; i++) {
    tabsHeaders[i].onclick = () => {

        for (let j = 0; j < tabs.length; j++) {
            if (tabs[j].classList.contains('pay__tab--active')) {
                tabs[j].classList.add('was-animated')
            }
        }

        for (let i = 0; i < tabsHeaders.length; i++) {
            tabsHeaders[i].classList.remove('pay__tabs-header--active')
            tabs[i].classList.remove('pay__tab--active')
            tabs[i].classList.remove('pay__tab--animate');
        }

        tabsHeaders[i].classList.add('pay__tabs-header--active');
        if (!tabs[i].classList.contains('was-animated')) {
            tabs[i].classList.add('pay__tab--animate');
        }
        tabs[i].classList.add('pay__tab--active');

        if (i === 0) {
            tabsBorder.classList.remove('pay__tabs-border--2')
            tabsBorder.classList.remove('pay__tabs-border--3')
            payTabList.classList.remove('pay__tab-list--height-1');
            tabsBorder.classList.add('pay__tabs-border--1');
        }
        if (i === 1) {
            tabsBorder.classList.remove('pay__tabs-border--1')
            tabsBorder.classList.remove('pay__tabs-border--3')
            tabsBorder.classList.add('pay__tabs-border--2');
            payTabList.classList.add('pay__tab-list--height-1');
        }
        if (i === 2) {
            tabsBorder.classList.remove('pay__tabs-border--1')
            tabsBorder.classList.remove('pay__tabs-border--2')
            tabsBorder.classList.add('pay__tabs-border--3');
            payTabList.classList.add('pay__tab-list--height-1');
        }

    }
}
