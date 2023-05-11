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


dates.addEventListener("change",function(){
   
    let daysOfTheWeek ={ 'Sunday':Sunday,
        'Monday':Monday,
        'Tuesday':Tuesday,
        'Wednesday':Wednesday,
        'Thursday':Thursday,
        'Friday':Friday,
       'Saturday':Saturday,

    } 


    for (var day in daysOfTheWeek) {
        daysOfTheWeek[day].classList.remove('green');
        daysOfTheWeek[day].classList.remove('yellow');
        firstDate.classList.remove('yellow')
        secondDate.classList.remove('green')
        firstDate.classList.remove('green')
        
      }

      if(getDate(dates.value) === getDate(datesTwo.value)){

       
       
        for(var day in daysOfTheWeek){ 
            if(getDate(dates.value) === day){
                daysOfTheWeek[day].classList.add('green')
                firstDate.classList.add('green')
                secondDate.classList.add('green')
            }
        }

    }else{

    for(var day in daysOfTheWeek){ 
        if(getDate(dates.value) === day){
             daysOfTheWeek[day].classList.add('yellow')
             firstDate.classList.add('yellow')
        }
    }
  }
    
});

datesTwo.addEventListener("change",function(){

    let weekDays ={ 'Sunday':Sunday,
        'Monday':Monday,
        'Tuesday':Tuesday,
        'Wednesday':Wednesday,
        'Thursday':Thursday,
        'Friday':Friday,
       'Saturday':Saturday,

    } 
    for (var day in weekDays) {
        weekDays[day].classList.remove('green');
        weekDays[day].classList.remove('blue');
        secondDate.classList.remove('blue')
        firstDate.classList.remove('green')
        secondDate.classList.remove('green')
      }

    if(getDate(dates.value) === getDate(datesTwo.value)){

       
       
        for(var day in weekDays){ 
            if(getDate(datesTwo.value) === day){
                weekDays[day].classList.add('green')
                firstDate.classList.add('green')
                secondDate.classList.add('green')
            }
        }

    }else{
       
        for(var day in weekDays){ 
            if(getDate(datesTwo.value) === day){
                weekDays[day].classList.add('blue')
                secondDate.classList.add('blue')
            }
        }
    }
  
   
    
});