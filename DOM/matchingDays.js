const diviation = document.querySelector(".diviation")
const dates = document.querySelector("#datesOne")
const datesTwo = document.querySelector("#datesTwo")
const Sunday = document.querySelector(".Sunday")
const Monday = document.querySelector(".Monday")
const Tuesday = document.querySelector(".Tuesday")
const Wednesday = document.querySelector(".Wednesday")
const Thursday = document.querySelector(".Thursday")
const Friday = document.querySelector(".Friday")
const Saturday = document.querySelector(".Saturday")
const firstDate = document.querySelector("#firstDate")
const secondDate = document.querySelector("#secondDate")


let weekDay = dayOfTheWeek()




document.addEventListener('DOMContentLoaded', function () {
    let days = [
        {
            name: "Sunday",
            same: '',
            colorOne: '',
            colorTwo: '',
        },
        {
            name: 'Monday',
            same: '',
            colorOne: '',
            colorTwo: '',
        },
        {
            name: 'Tuesday',
            same: '',
            colorOne: '',
            colorTwo: '',
        },
        {
            name: 'Wednesday',
            same: '',
            colorOne: '',
            colorTwo: '',
        },
        {
            name: 'Thursday',
            same: '',
            colorOne: '',
            colorTwo: '',
        },
        {
            name: 'Friday',
            same: '',
            colorOne: '',
            colorTwo: '',
        },
        {
            name: 'Saturday',
            same: '',
            colorOne: '',
            colorTwo: '',
        },
    ];





    function createDays(days) {
        var data = { days: days };
        var templateSource = document.querySelector(".userTemplate").innerHTML;
        var template = Handlebars.compile(templateSource);
        const theWeek = template(data);
        const dayContainer = document.getElementById("day-container");
        dayContainer.innerHTML = theWeek;

    }
    createDays(days);

    dates.addEventListener("change", function () {

        for (let i = 0; i < days.length; i++) {

            days[i].colorOne = "";
            days[i].same = '';
            firstDate.classList.remove('yellow')
            firstDate.classList.remove('green')
            secondDate.classList.remove('green')

        }

        createDays(days);
        weekDay.setBothDates(dates.value, datesTwo.value)

        if (weekDay.checkDates().same === "green") {


            for (let i = 0; i < days.length; i++) {
                if (days[i].name === weekDay.dateOne()) {
                    days[i].same = 'green';
                    firstDate.classList.add('green')
                    secondDate.classList.add('green')
                    break;
                }
            }
            createDays(days);

        } else {


            for (let i = 0; i < days.length; i++) {
                if (days[i].name === weekDay.dateOne()) {
                    days[i].colorOne = 'yellow';
                    firstDate.classList.add('yellow')
                }
                if (days[i].name === weekDay.dateTwo()) {
                    days[i].colorTwo = 'blue';
                    secondDate.classList.add('blue')
                }
            }
            createDays(days);
        }

    });

    datesTwo.addEventListener("change", function () {

        for (let i = 0; i < days.length; i++) {

            days[i].colorTwo = "";
            secondDate.classList.remove('blue')
            days[i].same = '';
            firstDate.classList.remove('green')
            secondDate.classList.remove('green')
        }

        createDays(days);

        weekDay.setBothDates(dates.value, datesTwo.value)

        if (weekDay.checkDates().same === "green") {


            for (let i = 0; i < days.length; i++) {
                if (days[i].name === weekDay.dateTwo()) {
                    days[i].same = 'green';
                    firstDate.classList.add('green')
                    secondDate.classList.add('green')
                    break;
                }
            }
            createDays(days);
        } else {



            for (let i = 0; i < days.length; i++) {
                if (days[i].name === weekDay.dateTwo()) {
                    days[i].colorTwo = 'blue';
                    secondDate.classList.add('blue')
                }
                if (days[i].name === weekDay.dateOne()) {
                    days[i].colorOne = 'yellow';
                    firstDate.classList.add('yellow')
                }
            }
            createDays(days);

        }

    });
});