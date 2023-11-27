const pointScale = ['매우 나쁨🤬', '나쁨😑', '보통🙂', '좋음😉', '매우 좋음🥳'];
const names = [
  'ㅇㅈㅎ',
  'ㄱㄱㅇ',
  'ㄱㄴㅎ',
  'ㄱㅁㅅ',
  'ㄱㅇㅇ',
  'ㄱㅈㅊ',
  'ㄱㅈㄱ',
  'ㄱㅌㅎ',
  'ㄴㄱㄹ',
  'ㅁㅈㅎ',
  'ㅂㅅㅈ',
  'ㅂㅇㅎ',
  'ㅂㅈㅎ',
  'ㅅㅇㅅ',
  'ㅅㅅㅁ',
  'ㅇㅅㅇ',
  'ㅇㅅㅁ',
  'ㅇㅇㅎ',
  'ㅇㅈㅇ',
  'ㅇㄱㅈ',
  'ㅇㄱㄹ',
  'ㅇㅇㅈ',
  'ㅇㅈㅊ',
  'ㅇㄷㅂ',
  'ㅇㅅㅅ',
  'ㅈㅁㅎ',
  'ㅈㅇㅈ',
  'ㅊㅈㅁ',
  'ㅎㅎㅈ',
  'ㅇㅇㅅ',
];
const result = document.getElementById('result');
const luckyColor = document.getElementById('luckyColor');
const color = document.getElementById('color');
const colorName = document.getElementById('colorName');

const emoji = document.getElementById('emoji');

const moneyButton = document.getElementById('money-button');
const successButton = document.getElementById('success-button');
const loveButton = document.getElementById('love-button');
const buttonList = [moneyButton, successButton, loveButton];

const fortuneResult = document.getElementById('fortune-result');
const luckyText = document.getElementById('lucky-text');
const luckyName = document.getElementById('lucky-name');

const buttons = document.getElementById('buttons');

const dbtn = document.getElementById('destroy');
const fact = document.getElementById('fact');
const top2 = document.getElementById('top');
const middle = document.getElementById('middle');

function randomColorSelector() {
  const colorCode = [
    'white',
    'black',
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'navy',
    'purple',
    'violet',
    'olive',
    'skyblue',
    'lime',
    'beige',
    'brown',
    'ivory',
    'khaki',
    'pink',
  ];
  const randomColor = Math.floor(Math.random() * colorCode.length);
  return colorCode[randomColor];
}

const getFortunePoint = () => {
  return Math.floor(Math.random() * 100);
};

const fortunePointToText = (point) => {
  if (point < 10) {
    return pointScale[0];
  } else if (point < 30) {
    return pointScale[1];
  } else if (point < 70) {
    return pointScale[2];
  } else if (point < 90) {
    return pointScale[3];
  } else {
    return pointScale[4];
  }
};

const getLuckyName = () => {
  console.log(names.length);
  return names[Math.floor(Math.random() * names.length)];
};

const setFortuneResult = (target) => {
  const fortunePoint = getFortunePoint();
  let fortuneText = fortunePointToText(fortunePoint);

  if (target === 'money-button') {
    fortuneText = `재물운 ${fortuneText}`;
  } else if (target === 'success-button') {
    fortuneText = `성공운 ${fortuneText}`;
  } else {
    fortuneText = `애정운 ${fortuneText}`;
  }

  fortuneResult.innerText = fortuneText;
};

const setLuckyPerson = () => {
  luckyText.innerText = '오늘의 은인';
  luckyName.innerText = getLuckyName();

};

const setLuckyColor = () => {
  const colorValue = randomColorSelector();

  color.style.backgroundColor = colorValue;
  colorName.innerText = colorValue.toUpperCase();

  result.style.display = 'flex';
  luckyColor.style.width = 'fit-content';
};

const changeButtons = (target) => {
  const others = buttonList.filter((button) => button.id !== target);

  others.forEach((otherButton) => {
    otherButton.style.display = 'none';
  });

  buttonList.forEach((button) => {
    button.disabled = true;
  });

  buttons.style.justifyContent = 'center';
  dbtn.style.display = 'flex';
};

const buttonClickHandler = (event) => {
  const target = event.currentTarget.id;
  setFortuneResult(target);
  setLuckyPerson();
  setLuckyColor();
  changeButtons(target);
};

moneyButton.addEventListener('click', buttonClickHandler);
successButton.addEventListener('click', buttonClickHandler);
loveButton.addEventListener('click', buttonClickHandler);

const emojiMouseEnterHandler = () => {
  emoji.innerText = '✌';
};

const emojiMouseLeaveHandler = () => {
  emoji.innerText = '🤞';
};
emoji.addEventListener('mouseenter', emojiMouseEnterHandler);
emoji.addEventListener('mouseleave', emojiMouseLeaveHandler);

/**
 * 마지막 버튼을 눌렀을 때 정해진 문구를 제외한 나머지 none처리 함수
 */

const reset = () => {
  fact.style.display = 'inline-block';
  dbtn.style.display = 'none';
  top2.style.display = 'none';
  middle.style.display = 'none';
};

dbtn.addEventListener('click', reset);
