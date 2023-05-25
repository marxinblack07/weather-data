import { data } from './weather.js';
let today;
let days;
let btn = document.querySelectorAll('.btn');
const introDisplay = async () =>
{
    const display = `
    <div class="intro page-transition">
        <div class="intro__centered">
            <h1 class="intro--title">oasis whether</h1>
            <h3 class="intro--description">unprofessional website for weather browsing.</h3>
            <div class="intro--btn__container">
                <button class="intro--btn btn">current</button>
                <button class="intro--btn btn">days</button>
            </div>
        </div>
    </div>
    `;
    document.body.innerHTML= display;
}
const todayShow = async () =>
{
    let result = `
    <div class="weather page-transition" id="today">
        <div class="weather__centered">
            <div class="weather--image">
                <img src=${today.condition.icon} alt="Weather-Picture" class="weather--icon">
                <h3 class="weather--temperature">${today.temp_c}°C</h3>
            </div>
            <div class="weather--divider"></div>
            <div class="weather--info">
                <h3 class="weather--text">今日氣溫</h3>
                <span class="weather--range">
                    <h3 class="weather--temperature">High:<span>${days[0].day.maxtemp_c}°C</span></h3>
                    <h3 class="weather--temperature">Low:<span>${days[0].day.mintemp_c}°C</span></h3>
                </span>
                <div class="weather--divider"></div>
                <p class="weather--text">${today.condition.text}</p>
            </div>
        </div>
    </div>
    <button class="btn__refresh btn"><i class="fa-solid fa-arrows-rotate"></i></button>`;
    document.body.animate({
        opacity:[0,1],
        "transform": ""
    },600);
    document.body.innerHTML = result;
}
const daysShow = async (days) =>
{

}

const locationShow = async (location)=>
{

}

window.addEventListener('DOMContentLoaded',async()=>
{
    introDisplay();
    data.then(async (item)=>
    {
        today = item.current;
        days = item.forecast.forecastday;
        console.log(today);
        btn = document.querySelectorAll('.btn')
        console.log('btn: ', btn);
        btn.forEach(singleBtn=>
        {
            singleBtn.addEventListener('click', (e)=>
            {
                // console.log(e.target.textContent);
                switch (e.target.textContent)
                {
                    case 'current':
                        // console.log('current');
                        todayShow();
                    case 'days':
                        console.log('days');
                }
            });
        });
    });
});
