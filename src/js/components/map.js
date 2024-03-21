let center = [48.8866527839977,2.34310679732974];

function init() {
	let firstMap = new ymaps.Map('first_map', {
		center: center,
		zoom: 17
	});

  let secondMap = new ymaps.Map('second_map', {
		center: center,
		zoom: 17
	});


	// map.controls.remove('geolocationControl'); // удаляем геолокацию
  // map.controls.remove('searchControl'); // удаляем поиск
  // map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);

// ymaps.ready(function() {
//   var map1 = new ymaps.Map("first_map", {
//     center: [55.76, 37.64],
//     zoom: 10
//   });
//   var map2 = new ymaps.Map("second_map", {
//     center: [55.76, 37.64],
//     zoom: 10
//   });
// });
