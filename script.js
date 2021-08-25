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

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
    // setInterval(countdown(targetDate),1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

var moveInArray = function (arr, from, to) {
	// Make sure a valid array is provided
	if (Object.prototype.toString.call(arr) !== '[object Array]') {
		throw new Error('Please provide a valid array');
	}
	// Delete the item from it's current position
	var item = arr.splice(from, 1);
	// Make sure there's an item to move
	if (!item.length) {
		throw new Error('There is no item in the array at index ' + from);
	}
	// Move the item to its new position
	arr.splice(to, 0, item[0]);
};


function inputValue(){
    
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
    // setInterval((countdown(targetDate)), 1000);
}

// countdown();

// setInterval(countdown, 1000);
setInterval(inputValue, 1000);