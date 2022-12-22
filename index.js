const adviceNumber = document.querySelector("#advice_num"); 
const adviceContiner = document.querySelector("#advice_quote"); 
const adviceButton = document.querySelector("#btn"); 

const randomAdvice = () => {
    const rand = Math.floor(Math.random() * 224) + 1;
    return rand; 
}

const getAdvice = async() => {
    const getRand = randomAdvice()
    const res =  await axios.get(`https://api.adviceslip.com/advice/${getRand}`); 
    adviceNumber.innerHTML = `A d v i c e #${getRand}`
    const advice = res.data.slip.advice; 
    return advice; 
}

const appendAdvice = async() => {
    const advice = await getAdvice();  
    adviceContiner.innerHTML = advice; 
}


adviceButton.addEventListener('click',appendAdvice); 



 