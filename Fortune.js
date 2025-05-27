// User's birth month
let birthMonth = 'January'; // Replace this with user input if needed

// Function to get zodiac sign and symbol
function getZodiac(month) {
  switch (month.toLowerCase()) {
    case 'january':
      return { sign: 'Capricorn', symbol: '♑' };
    case 'february':
      return { sign: 'Aquarius', symbol: '♒' };
    case 'march':
      return { sign: 'Pisces', symbol: '♓' };
    case 'april':
      return { sign: 'Aries', symbol: '♈' };
    case 'may':
      return { sign: 'Taurus', symbol: '♉' };
    case 'june':
      return { sign: 'Gemini', symbol: '♊' };
    case 'july':
      return { sign: 'Cancer', symbol: '♋' };
    case 'august':
      return { sign: 'Leo', symbol: '♌' };
    case 'september':
      return { sign: 'Virgo', symbol: '♍' };
    case 'october':
      return { sign: 'Libra', symbol: '♎' };
    case 'november':
      return { sign: 'Scorpio', symbol: '♏' };
    case 'december':
      return { sign: 'Sagittarius', symbol: '♐' };
    default:
      return { sign: 'Unknown', symbol: '?' };
  }
}

// List of fortunes
const fortunes = [
  'Today is a great day to start something new.',
  'You will find what you have been looking for.',
  'Challenges ahead will make you stronger.',
  'A pleasant surprise is waiting for you.',
  'Trust your instincts; they will guide you well.'
];

// Function to get a random fortune
function getRandomFortune() {
  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
}

// Main function to display horoscope
function displayHoroscope(month) {
  const zodiac = getZodiac(month);
  const fortune = getRandomFortune();
  console.log(`Your Birth Month is ${month}.`);
  console.log(`Your Star Sign is ${zodiac.sign}.`);
  console.log(`Your Star Symbol is ${zodiac.symbol}`);
  console.log(`Your fortune: ${fortune}`);
}

// Example usage
displayHoroscope(birthMonth);
