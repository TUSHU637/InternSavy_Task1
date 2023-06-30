let API_KEY='f3d0d7b5f7b413c8b4e9cdf45b6b265e';

let inp=document.querySelector(".place");
let weather=document.querySelector(".row");
let getweather=async(city)=>{
    weather.innerHTML=`<h1>Loading.....</h1>`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    let response = await fetch(url);
   // console.log(response);
    const data=await response.json();
    return showWeather(data);

}
function showWeather(data){
    if(data.cod=="404"){
        weather.innerHTML=`<h1 class="red">!!City not found!!</h1>`;
        return;
    }
    weather.innerHTML=`
    <div class="animation">
        <img src="data:image/png;base64,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">
    </div>
  <div>
    <h2 class="animation">${data.main.temp}</h2>
   <h2 class="color">${data.weather[0].main}</h2>
</div>
</div>
    `
}

inp.addEventListener("keydown",(e)=>{
let key=e.key;
if(key=="Enter"){
    getweather(inp.value);

}
})