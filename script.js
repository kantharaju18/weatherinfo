let image = document.querySelector('.image');
let temperature = document.querySelector('.temperature');
let celcius = document.querySelector('.celcius');
let fahrenhiet = document.querySelector('.fahrenhiet');
let extraDetails = document.querySelectorAll('.extra-details ul li');
let city = document.querySelector('.location-details h1');
let date = document.querySelectorAll('.location-details p');
let change, information;

gettingData('Ramanagaram');

let location1 = document.querySelector('#input');
let EnterBtn = document.querySelector('#Enter-btn');

EnterBtn.addEventListener('click', () => {
    gettingData(location1.value);
    location1.value = "";
});

function convertTemp(type){
    if(type == 'celcius'){
        temperature.innerHTML = information.current.temp_c;
    }else{
        temperature.innerHTML = information.current.temp_f;
    }
}

celcius.addEventListener('click', ()=>{
    celcius.classList.add('highlight');
    fahrenhiet.classList.remove('highlight');
    convertTemp('celcius');
})
fahrenhiet.addEventListener('click', ()=>{
    fahrenhiet.classList.add('highlight');
    celcius.classList.remove('highlight');
    convertTemp('fahrenhiet');
})

async function gettingData(location){
    change = await fetch(`https://api.weatherapi.com/v1/current.json?key=3a8659a85d7541dd89734005221509&q=${location}&aqi=yes`);            
    information = await change.json();
    image.src = information.current.condition.icon;
    temperature.innerText = information.current.temp_c;
    extraDetails[0].innerText = `humidity: ${information.current.humidity}`;
    extraDetails[1].innerText = `cloud: ${information.current.cloud}`; 
    city.innerText = `${information.location.name}, ${information.location.region}`;
    date[0].innerText = `${information.location.localtime}`;
    date[1].innerText = `${information.current.condition.text}`;
}



