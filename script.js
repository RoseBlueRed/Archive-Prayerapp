const API_LINK = "http://api.aladhan.com/v1/timingsByCity?city=paris&country=FR&method=8";

fetch(API_LINK)
   .then(response => response.json())
   .then(json => console.log(JSON.stringify(json)));

async function getPrayers() {
   let url = 'http://api.aladhan.com/v1/timingsByCity?city=paris&country=FR&method=8';
   try {
      let res = await fetch(url);
      return await res.json(); 
   } catch (error) {
      console.log(error);
   }
}

 async function renderPrayers() {
   let prayers = await getPrayers();
   
      let htmlSegment = `<div class="prayer">
                        <h2>Fajr : ${prayers.data.timings.Fajr} <h2>
                        <h2>Dhuhr : ${prayers.data.timings.Dhuhr} <h2>
                        <h2>Asr : ${prayers.data.timings.Asr} <h2>
                        <h2>Maghrib : ${prayers.data.timings.Maghrib} <h2>
                        <h2>Isha : ${prayers.data.timings.Isha} <h2>
                        </div>`;
         
                        let container = document.querySelector('.container');
                        container.innerHTML = htmlSegment;
   };

   


renderPrayers();

