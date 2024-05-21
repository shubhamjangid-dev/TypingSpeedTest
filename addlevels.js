const levels = [
    {
      "levelName": "Practice F  J",
      "levelContent": "ffff jjjj ff jj fff jjj fj fj jjf ffj fff jjj ffj jjf fifj fffj jjjf ffjj ff jj ffff"
    },
    {
      "levelName": "Practice F, J  D, K",
      "levelContent": "ddkk fffd jjdk fjkd kdjk ddfk jjdk fjkd kdjk ddff jjkk ffdj djkf jkkd fjdf kkjd"
    },
    {
      "levelName": "Practice F, J, D, K  S, L",
      "levelContent": "ssll ffsj jlds fjks lskj sdfj jlkd fjsk sklj sdlf jjfl sflk sjlf klsj fdfk sjlf"
    },
    {
      "levelName": "Practice F, J, D, K, S, L  A, ;",
      "levelContent": "a;;; ffal jl;a fjdk lkaj sadj jlka fjsk skla sdlf jjfl s;lk s;jf klsa fa;f sjlf"
    },
    {
      "levelName": "Practice Home Row",
      "levelContent": "asdf jkl; asdf jkl; fjdk lkaj sadj jlka fjsk skla sdlf jjfl s;lk s;jf klsa fa;f sjlf"
    },
    {
      "levelName": "Practice Home Row Words",
      "levelContent": "ask fall dad jade salad flask desk ladle ask jack dad salad ladle ask fall desk jack"
    },
    {
      "levelName": "Practice E, R, U, I",
      "levelContent": "eerr uuii eeru iuer rieu ueir eriu uire eire ueri ireu eriu eiru rei eiru uire"
    },
    {
      "levelName": "Practice T, Y, G, H",
      "levelContent": "ttyy gghh tygh gyht thgy htyg ytgh tghy hgyt tygh gyht thgy htyg ytgh tghy hgyt"
    },
    {
      "levelName": "Practice Top Row",
      "levelContent": "qwertyuiop asdfghjkl; qwertyuiop asdfghjkl; qwerty asdfg hjkl; qwertyuiop qwerty asdfg hjkl;"
    },
    {
      "levelName": "Module 1: Home  Top Rows",
      "levelContent": "The quick brown fox jumps over the lazy dog. Type all keys from the top row and home row."
    },
    {
      "levelName": "Practice C, V, N, M",
      "levelContent": "ccvv nnmm cvmn mcnv vnmc cmnv cvnm mcvn nvmc vnmc cmnv cvnm mcvn nvmc cvnm"
    },
    {
      "levelName": "Practice X, Z, B",
      "levelContent": "xxzz bb xxzb bzx xzb zx xxzb bzx zxb zx zbx xzb"
    },
    {
      "levelName": "Practice Bottom Row",
      "levelContent": "zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm"
    },
    {
      "levelName": "Practice All Rows",
      "levelContent": "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."
    },
    {
      "levelName": "Practice Words and Sentences",
      "levelContent": "The quick brown fox jumps over the lazy dog. Jack and Jill went up the hill to fetch a pail of water."
    },
    {
      "levelName": "Practice Short Words",
      "levelContent": "cat dog bat rat mat hat fat pat sat vat"
    },
    {
      "levelName": "Practice Medium Words",
      "levelContent": "apple banana orange grape cherry melon berry lemon peach"
    },
    {
      "levelName": "Practice Long Words",
      "levelContent": "strawberry pineapple watermelon cantaloupe pomegranate blackberry"
    },
    {
      "levelName": "Practice Short Sentences",
      "levelContent": "The cat sits. The dog runs. The bird flies. The fish swims. The sun shines."
    },
    {
      "levelName": "Practice Medium Sentences",
      "levelContent": "Typing is fun. Practice makes perfect. Speed and accuracy matter. Keep your fingers on home row."
    },
    {
      "levelName": "Practice Long Sentences",
      "levelContent": "The quick brown fox jumps over the lazy dog. Every good boy does fine. A journey of a thousand miles begins with a single step."
    },
    {
      "levelName": "Practice Paragraphs 1",
      "levelContent": "Typing is a fundamental skill that improves with practice. By prioritizing accuracy over speed initially, you'll gradually enhance your typing speed over time. Regular practice sessions without relying on looking at the keyboard will solidify muscle memory and enhance overall proficiency. Consistent dedication to daily practice will yield noticeable enhancements in your typing abilities."
    },
    {
      "levelName": "Practice Paragraphs 2",
      "levelContent": "Efficient typing is a crucial skill that can be honed with regular practice. Initially focusing on precision rather than speed will enable you to gradually increase your typing speed. Attempting longer passages without peering at the keyboard will aid in establishing muscle memory and advancing overall proficiency. Sustained commitment to daily practice sessions will result in significant improvements in your typing aptitude."
    },
    {
      "levelName": "Practice Paragraphs 3",
      "levelContent": "Mastering typing requires consistent practice and dedication. Prioritize accuracy over speed at first, and as you progress, gradually increase your typing pace. Practicing longer passages without glancing at the keyboard will help solidify muscle memory and enhance overall typing proficiency. Commit to daily practice sessions, and you'll witness substantial advancements in your typing skills."
    },
    {
      "levelName": "Module 3: Advanced Words and Sentences",
      "levelContent": "By now, you should be comfortable typing most common words and sentences. Focus on improving your speed while maintaining accuracy."
    },
    {
      "levelName": "Practice Tongue Twisters 1",
      "levelContent": "She sells seashells by the seashore. How much wood would a woodchuck chuck if a woodchuck could chuck wood"
    },
    {
      "levelName": "Practice Tongue Twisters 2",
      "levelContent": "Peter Piper picked a peck of pickled peppers. Betty Botter bought some butter but she said the butter’s bitter."
    },
    {
      "levelName": "Practice Famous Quotes 1",
      "levelContent": "The only thing we have to fear is fear itself. Franklin D. Roosevelt"
    },
    {
      "levelName": "Practice Famous Quotes 2",
      "levelContent": "In the end, we will remember not the words of our enemies, but the silence of our friends.  Martin Luther King Jr."
    },
    {
      "levelName": "Practice Famous Quotes 3",
      "levelContent": "The future belongs to those who believe in the beauty of their dreams. Eleanor Roosevelt"
    },
    {
      "levelName": "Practice Common Phrases 1",
      "levelContent": "Break a leg. Hit the nail on the head. Piece of cake. Once in a blue moon."
    },
    {
      "levelName": "Practice Common Phrases 2",
      "levelContent": "A blessing in disguise. Beat around the bush. Better late than never. Call it a day."
    },
    {
      "levelName": "Practice Common Phrases 3",
      "levelContent": "Cut somebody some slack. Speak of the devil. Under the weather. Pull yourself together."
    },
    {
      "levelName": "Practice Home Row Combinations",
      "levelContent": "asdf asdf asdf jkl; jkl; jkl; asdf jkl; asdf jkl; asdf jkl;"
    },
    {
      "levelName": "Practice Top Row Combinations",
      "levelContent": "qwerty qwerty qwerty uiop uiop uiop qwertyuiop qwertyuiop qwertyuiop"
    },
    {
      "levelName": "Practice Bottom Row Combinations",
      "levelContent": "zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm"
    },
    {
      "levelName": "Module 4: Comprehensive Practice",
      "levelContent": "The quick brown fox jumps over the lazy dog. Jack and Jill went up the hill. She sells seashells by the seashore."
    },
    {
      "levelName": "Practice Mixed Words 1",
      "levelContent": "apple banana carrot dog elephant frog grape hat igloo jacket kite lemon"
    },
    {
      "levelName": "Practice Mixed Words 2",
      "levelContent": "lion monkey notebook orange penguin quail rabbit snake tiger umbrella violin"
    },
    {
      "levelName": "Practice Mixed Words 3",
      "levelContent": "watermelon xylophone yak zebra antelope bear cat dolphin eagle flamingo"
    },
    {
      "levelName": "Practice Punctuation 1",
      "levelContent": "The quick brown fox jumps over the lazy dog. She sells seashells by the seashore. How much wood would a woodchuck chuck"
    },
    {
      "levelName": "Practice Punctuation 2",
      "levelContent": "Jack and Jill went up the hill, to fetch a pail of water. Peter Piper picked a peck of pickled peppers."
    },
    {
      "levelName": "Practice Punctuation 3",
      "levelContent": "He said, 'Hello' She replied, 'Hi, how are you' They talked for hours, discussing various topics."
    },
    {
      "levelName": "Practice Short Words with Special Characters 1",
      "levelContent": "cat dog bat rat mat hat fat pat sat vat"
    },
    {
      "levelName": "Practice Short Words with Special Characters 2",
      "levelContent": "apple banana carrot dog elephant frog grape hat igloo jacket"
    },
    {
      "levelName": "Practice Short Words with Special Characters 3",
      "levelContent": "kite lemon lion monkey notebook orange penguin quail rabbit snake"
    },
    {
      "levelName": "Practice Sentences with Special Characters 1",
      "levelContent": "The quick brown fox jumps Over the lazy dog She sells seashells by the seashore"
    },
    {
      "levelName": "Practice Sentences with Special Characters 2",
      "levelContent": "Jack and Jill went up the hill to fetch a pail of water Peter Piper picked a peck of pickled peppers"
    },
    {
      "levelName": "Practice Sentences with Special Characters 3",
      "levelContent": "He said 'Hello' She replied 'Hi, how are you' They talked for hours, discussing various topics."
    },
    {
      "levelName": "Module 6: Advanced Mixed Practice",
      "levelContent": "Combine everything you've learned so far. Type accurately and quickly with special characters, numbers, and advanced words."
    },
    {
      "levelName": "Practice Long Words with Punctuation 1",
      "levelContent": "strawberry, pineapple; watermelon cantaloupe. pomegranate blackberry"
    },
    {
      "levelName": "Practice Long Words with Punctuation 2",
      "levelContent": "xylophone, quizzical; juxtaposition mnemonic. quintessential phenomenon"
    },
    {
      "levelName": "Practice Long Words with Punctuation 3",
      "levelContent": "antidisestablishmentarianism, counterproductive; electromagnetic: gastrointestinal. supercalifragilisticexpialidocious"
    },
    {
      "levelName": "Practice Phrases with Punctuation 1",
      "levelContent": "Break a leg Hit the nail on the head. Piece of cake. Once in a blue moon"
    },
    {
      "levelName": "Practice Phrases with Punctuation 2",
      "levelContent": "A blessing in disguise Beat around the bush. Better late than never Call it a day."
    },
    {
      "levelName": "Practice Phrases with Punctuation 3",
      "levelContent": "Cut somebody some slack. Speak of the devil. Under the weather Pull yourself together"
    },
    {
      "levelName": "Practice Tongue Twisters with Punctuation 1",
      "levelContent": "She sells seashells, by the seashore How much wood would a woodchuck chuck, if a woodchuck could chuck wood"
    },
    {
      "levelName": "Practice Tongue Twisters with Punctuation 2",
      "levelContent": "Peter Piper picked a peck, of pickled peppers. Betty Botter bought some butter, but she said the butter’s bitter."
    },
    {
      "levelName": "Practice Tongue Twisters with Punctuation 3",
      "levelContent": "How can a clam cram in a clean cream can I scream, you scream, we all scream for ice cream"
    },
    {
      "levelName": "Module 7: Tongue Twisters and Phrases",
      "levelContent": "Combine your skills with tricky phrases and tongue twisters. Focus on accuracy and speed"
    },
    {
      "levelName": "Practice Mixed Sentences 1",
      "levelContent": "The quick brown fox jumps over the lazy dog. She sells seashells by the seashore. How much wood would a woodchuck chuck"
    },
    {
      "levelName": "Practice Mixed Sentences 2",
      "levelContent": "Jack and Jill went up the hill, to fetch a pail of water. Peter Piper picked a peck of pickled peppers."
    },
    {
      "levelName": "Practice Mixed Sentences 3",
      "levelContent": "He said, 'Hello' She replied, 'Hi, how are you' They talked for hours, discussing various topics."
    },
    {
      "levelName": "Practice Long Paragraphs 1",
      "levelContent": "Typing is a valuable skill that enhances productivity and communication. Regular practice and dedication are key to improving typing speed and accuracy. By focusing on proper finger placement and technique, you can type more efficiently and reduce the risk of strain or injury. Set aside time each day to practice typing and challenge yourself with different exercises and texts. Over time, you will notice significant improvements in your typing abilities."
    },
    {
      "levelName": "Practice Long Paragraphs 2",
      "levelContent": "Effective typing requires a combination of speed and accuracy. Start by mastering the basics of home row keys and proper finger placement. As you become more comfortable, gradually increase your typing speed while maintaining accuracy. Practice typing different types of content, such as paragraphs, sentences, and lists. Use typing games and online tools to keep your practice sessions engaging and fun. Consistent practice will lead to faster and more accurate typing skills."
    },
    {
      "levelName": "Practice Long Paragraphs 3",
      "levelContent": "Mastering typing skills takes time and persistence. Begin by focusing on accuracy rather than speed. Ensure your fingers are placed correctly on the home row keys and practice typing without looking at the keyboard. As your confidence grows, start increasing your typing speed while maintaining accuracy. Try typing a variety of texts, including paragraphs, quotes, and dialogue. Utilize typing software and online resources to track your progress and identify areas for improvement. With regular practice, you will become a proficient typist."
    },
    {
      "levelName": "Module 8: Advanced Paragraphs and Sentences",
      "levelContent": "By now, you should be able to type complex sentences and paragraphs with ease. Continue to challenge yourself with longer texts and focus on increasing your typing speed while maintaining accuracy."
    }
  ]
var i = 0;
//   const addLevelToDB = async function(levelObject) {
//     const data = {
//       levelName: levelObject.levelName,
//       levelContent: levelObject.levelContent.toLowerCase()
//     }
//     const url = 'http://localhost:4500/api/v1';
//     await fetch(`${url}/levels/addNewLevel`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.success) {
//         console.log(`done -> ${levelObject.levelName}`);
//       } else {
//         console.log(`failed -> ${levelObject.levelName}`);
//       }
//     })
//     .catch(error => {
//         console.log(`internal error : ${error}`);
//     });
//   }

//   function add(){
//     console.log(i);
//     addLevelToDB(levels[i]);
//     i++;
//     if(i >= levels.length)
//     {
//         clearInterval(myInterval);
//         console.log("done");
//         return;
//     }
//   }
  
//   myInterval = setInterval(add,1000)