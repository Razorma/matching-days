
describe('Which day function should get the day', function () {
    let weekDays = dayOfTheWeek()
    it('it should return Sunday if the date is on a Sunday', function () {

        assert.equal(weekDays.setOneDate('2023-05-14'), "Sunday");
    });

    it('it should return Monday if the date is on a Monday', function () {
        assert.equal(weekDays.setOneDate('2023-05-08'), "Monday");
    });

    it('it should return Tuesday if the date is on a tuesday', function () {
        assert.equal(weekDays.setOneDate('2023-05-09'), "Tuesday");
    });
    it('it should return Wednesday if the date is on a Wednesday', function () {
        assert.equal(weekDays.setOneDate('2023-05-10'), "Wednesday");
    });

    it('it should return Thursday if the date is on a Thursday', function () {
        assert.equal(weekDays.setOneDate('2023-05-11'), "Thursday");
    });

    it('it should return Friday  if the date is on a Friday', function () {
        assert.equal(weekDays.setOneDate('2023-05-12'), "Friday");
    });
    it('it should return Saturday  if the date is on a Saturday', function () {
        assert.equal(weekDays.setOneDate('2023-05-13'), "Saturday");
    });

});
describe('Which day function should check if it is the same day', function () {
    let weekDays = dayOfTheWeek()
    it('it should return same as green if it is the same day of the week', function () {
        weekDays.setBothDates('2023-05-14', '2023-05-14')
        assert.equal(weekDays.checkDates().same, "green");
    });

    it('it should return colorOne as yellow if it is not the same day of the week', function () {
        weekDays.setBothDates('2023-05-14', '2023-05-15')
        assert.equal(weekDays.checkDates().colorOne, "yellow");
    });
    it('it should return colorTwo as blue if it is not the same day of the week', function () {
        weekDays.setBothDates('2023-05-14', '2023-05-15')
        assert.equal(weekDays.checkDates().colorTwo, "blue");
    });


});
