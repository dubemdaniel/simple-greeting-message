const message = prompt('please, what is your name?...', 'input your name');
const now = new Date();
const hrs = now.getHours();
const mins = now.getMinutes();
// const div = document.getElementsByTagName('div')
if (hrs <= 11) {
    document.write(`Good Morning ${message} <br/> The time is ${hrs} : ${mins}`)
}else if (hrs <= 17){
    document.write(`Good Afternoon ${message} <br/> The time is ${hrs} : ${mins}`)
}else {
    document.write(`Good Evening ${message} <br/> The time is ${hrs} : ${mins}`)
}
