const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const inputElement = document.getElementById('end');

// const targetDate = '01 Jan 2022'; // day/month/year

var months = {
    '01' : 'Jan',
    '02' : 'Feb',
    '03' : 'Mar',
    '04' : 'Apr',
    '05' : 'May',
    '06' : 'Jun',
    '07' : 'Jul',
    '08' : 'Aug',
    '09' : 'Sep',
    '10' : 'Oct',
    '11' : 'Nov',
    '12' : 'Dec'
};

function countdown(targetDate) {
    const targetYearDate = new Date(targetDate);
    const currentDate = new Date();

    const totalSeconds = (targetYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = (Math.floor(totalSeconds / 60) % 24);
    const seconds = Math.floor(totalSeconds % 60);

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    const stringTime = time.toString();
    if (stringTime.includes("-")) {
        return '0'
    }

    return time < 10 ? `0${time}` : time;
}

var moveInArray = function (arr, from, to) {
	// make sure a valid array is provided
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		throw new Error('Please provide a valid array');
	}
	// delete the item from it's current position
	var item = arr.splice(from, 1);
	// make sure there's an item to move
	if (!item.length) {
		throw new Error('There is no item in the array at index ' + from);
	}
	// move the item to its new position
	arr.splice(to, 0, item[0]);
};


function inputValue(){
    // read the value from the date input
    var x = inputElement.value;
    var nums = x.split('-');

    // date rearranged {dd/mm/yyyy}
    moveInArray(nums, 2, 0);
    moveInArray(nums, 1, 2);    

    // grabbing mm
    const month = nums[1].toString(); 

    // convert mm into Month
    const stringMonth = months[month] 
    nums[1] = stringMonth;

    // convert array into string
    var targetDate = nums.join(" "); 

    countdown(targetDate);
}

setInterval(inputValue, 1000);