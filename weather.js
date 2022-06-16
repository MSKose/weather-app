const cityInput = document.getElementById("input");
const btn = document.getElementById('button')
const ulCont = document.getElementById('ulContainer')

// console.log(cityInput.value);



const key = "56349306b7aa38d4662fc1673b72bb68"

let error = false

async function getUsers() {
    try {
        // const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&APPID=${key}`);
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value.toLowerCase()}&units=metric&APPID=${key}`);
      console.log(cityInput.value);

        console.log(res);
      if (!res.ok) {
          error = true;
        }
        updateDom(res);
    } catch (error) {
        alert(error);
    }finally {
        error = false
    }
}

const updateDom = (res) => {
    let {country} = res.data.sys
    let {name} = res.data;
    let {temp} = res.data.main;
    let {icon} = res.data.weather[0];
    let {description} = res.data.weather[0];

    console.log(name, temp, icon, description, country);



    ulContainer.innerHTML += `<li class="li" style="background-color: white; border-radius: 10px; padding: 10px; width: 350px;">
    <p style="font-size: 40px;">${name}<sup style="text-transform: uppercase; font-size: small; background-color: orange; border-radius: 5px; padding: 2px;">${country}</sup></p>
    <p style="font-weight: 900; font-size: 80px;">${temp}<sup style='font-size: 40px;'>°C</sup></p>
    <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="sys">
    <p style="text-transform: uppercase;">${description}s</p>
    </li>`

}

 btn.addEventListener('click', (e) => {
    e.preventDefault()
    getUsers()
    cityInput.value = ''
 })


// btn.addEventListener('click', (e) => {
//     e.preventDefault()
    
//     if (!cityInput.value) {
//         alert('plese type somethin')
//     }else {
//         console.log(cityInput.value);
//     }
// })

// getUsers()