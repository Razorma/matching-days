
function dayOfTheWeek(){ 
   
    let theFirstDate = '';
    let theSecondDate = ''; 
    
   function setOneDate(date){
       return new Date(date).toLocaleString('UTC', { weekday: 'long' })
   }
  
   function setBothDates(dateOne,dateTwo){
       theFirstDate = new Date(dateOne).toLocaleString('UTC', { weekday: 'long' })
       theSecondDate = new Date(dateTwo).toLocaleString('UTC', { weekday: 'long' })
       
   }
   function checkDates(){
       if(theFirstDate === theSecondDate){
            return "same day"
       }else{
        return "not the same day"

       }
   }
   function dateOne(){
       return theFirstDate
   }
   function dateTwo(){
       return theSecondDate
   }


   return{
       setOneDate,
       setBothDates,
       checkDates,
       dateOne,
       dateTwo,     
   }
}