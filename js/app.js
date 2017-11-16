
let $box = $('.weatherBox');//the larger <div>
let $submit = $('.weatherSubmit');//the button
let $initialContents = $('.innerContents');//the inner contents of the <div>
let $inputField = $('.inputField'); // this is the actual input field- we await a value

/**
 * on sumbit button click
 * sizeup the background
 * - while fading out the initial welcome screen
 * make the ajax call
 * the ajax callback function will create two <divs>
 * In <div> 1 - will hold the image icon, temp and temp descript.

 * creat a button to reset/make a new search.
 */
$submit.on('click', function(e) {
    event.preventDefault();
    $box.addClass('animateBackground');
    $initialContents.addClass('disappear');
})
$initialContents.on('animationend', function(){
    makeAjaxCall()
});






function makeAjaxCall(){
    let userQuery = $('#welcomeBox input[type = "text"]').val();
       $.getJSON(
           `http://api.openweathermap.org/data/2.5/weather?zip=${userQuery},us&APPID=4b17eba4b039ebbc1562124e1af269ad&units=imperial`,
          function(data) {
    let iconCode = data.weather[0].icon
    let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    let temp = data.main.temp;
    let weatherDescription = data.weather[0].description;
    let cityName = data.name;
    
    let leftDiv = 
    $(`<div class="leftDiv appear">
        <img src="${iconUrl}" width="80" height="auto">
        <h2>${cityName}<h2/>
        <p>${new Date().toDateString()}</p>
        <p>${temp}</p>
        <p>${weatherDescription}</p>
        <p class="weatherDetails">Humidity: ${data.main.humidity}</p>
        <button>life</button>
    </div>`);
    
        $box.prepend(leftDiv);
}
       ) // end other half of  $.getJSON( ...
    } // end makeAjaxCall()

$('leftDiv button').on('click', function() {
    console.log('next');
})



    //HONARABLE MENTION: removed due to trouble finding how to transform unix time to human time
        //    <p class="weatherDetails">Sunrise: ${data.sys.sunrise}</p>
        // <p class="weatherDetails">Sunset: ${data.sys.sunset}</p>








// function makeAjaxCall(){
//     let userQuery = $('#welcomeBox input[type = "text"]').val();
//        $.getJSON(
//            `http://api.openweathermap.org/data/2.5/weather?zip=${userQuery},us&APPID=4b17eba4b039ebbc1562124e1af269ad&units=imperial`,
//           function(data) {
//     let iconCode = data.weather[0].icon
//     let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
//     let temp = data.main.temp;
//     let weatherDescription = data.weather[0].description;
//     let cityName = data.name;
    
//     let leftDiv = 
//     `<div class="leftDiv appear">
//         <img src="${iconUrl}" width="80" height="auto">
//         <h2>${cityName}<h2/>
//         <p>${new Date().toDateString()}</p>
//         <p>${temp}</p>
//         <p>${weatherDescription}</p>
//         <p class="weatherDetails">Humidity: ${data.main.humidity}</p>
//         <button>life</button>
//     </div>
//     `;
//         $box.prepend(leftDiv);
// }
//        ) // end other half of  $.getJSON( ...
//     } // end makeAjaxCall()

// $('leftDiv button').on('click', function() {
//     console.log('next');
// })










// $submit.on('click', function(event){
//     event.preventDefault();
//     $initialQuery.addClass('js-box-animate');
// })

// $box.on('animationend', function(){
//    $initialQuery.removeClass('js-box-animate');
// })

