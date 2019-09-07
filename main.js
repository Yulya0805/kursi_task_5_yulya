
let first = ['Dnepr', 'Kiev', 'Lviv', 'Chernigov', 'Kharkov', 'Khmelnitsky'];
let second = [];

(function init() {
  let container = document.getElementById('container');
  container.innerHTML = `
    <div id="first-list">
        <ul id="firstUlElement"></ul>
    </div>
    <div id="second-list">
        <ul id="secondUlElement"></ul>
    </div>
  `;

  let firstCityList = '';
  first.map(city => {
    firstCityList += `<li>${city}<button onclick="removeCityFromFirstList('${city}')">x</button></li>`;
  });
    let firstUlElement = document.getElementById('firstUlElement');
  firstUlElement.innerHTML = firstCityList;
})();


function removeCityFromFirstList(city) {
  first.splice(first.indexOf(city), 1);//remove element
  if (second.indexOf(city) === -1) {
    second.push(city);
  }
  let firstCityList = '';
  let secondCityList = '';
  first.map(city => {
    firstCityList += `<li>${city}<button onclick="removeCityFromFirstList('${city}')">x</button></li>`;
  });
  second.map(city => {
    secondCityList += `<li>${city}<button onclick="removeCityFromSecondList('${city}')">x</button></li>`;
  });
  let firstUlElement = document.getElementById('firstUlElement');
  let secondUlElement = document.getElementById('secondUlElement');
  firstUlElement.innerHTML = firstCityList;
  secondUlElement.innerHTML = secondCityList;
}


function removeCityFromSecondList(city) {
  second.splice(second.indexOf(city), 1);//remove element
  if (first.indexOf(city) === -1) {
    first.push(city);
  }
  let firstCityList = '';
  let secondCityList = '';
  first.map(city => {
    firstCityList += `<li>${city}<button onclick="removeCityFromFirstList('${city}')">x</button></li>`;
  });
  second.map(city => {
    secondCityList += `<li>${city}<button onclick="removeCityFromSecondList('${city}')">x</button></li>`;
  });
  let firstUlElement = document.getElementById('firstUlElement');
  let secondUlElement = document.getElementById('secondUlElement');
  firstUlElement.innerHTML = firstCityList;
  secondUlElement.innerHTML = secondCityList;
}

