const cityInput = document.getElementById("input");
const btn = document.getElementById('button')

console.log(cityInput);



const key = "56349306b7aa38d4662fc1673b72bb68"
// const getData = () => {
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&APPID=${key}`)
//     .then(response => {
//         console.log(response)
//     })
//     .then((data))
// }

let error = false

// async function getUsers() {
//     try {
        // const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&units=metric&APPID=${key}`);
    //   const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&APPID=${key}`);


//       updateDom(res);

//       console.log(res);

//       if (!res.ok) {
//         error = true;
//       }
//     } catch (error) {
//       alert(error);
//     }finally {
//         error = false
//     }
// }

// const updateDom = (res) => {
//     let {name} = res.data;
//     let {temp} = res.data.main;
//     let {icon, description} = res.data.weather[0];
//     let {country} = res.data.sys

//     console.log(name, temp, icon, description, country);
// }

// getUsers()