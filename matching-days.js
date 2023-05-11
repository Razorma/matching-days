function getDate(date){
    return  new Date(date).toLocaleString('en-ZA', { weekday: 'long' })
}