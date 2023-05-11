
describe('Which day function', function () {
    
    it('it should return Sunday if the date is on a Sunday', function () {
      assert.equal(getDate('2023-05-14'), "Sunday");
    });
  
    it('it should return Monday if the date is on a Monday', function () {
        assert.equal(getDate('2023-05-08'), "Monday");
    });
  
    it('it should return Tuesday if the date is on a tuesday', function () {
        assert.equal(getDate('2023-05-09'), "Tuesday");
    });
    it('it should return Wednesday if the date is on a Wednesday', function () {
        assert.equal(getDate('2023-05-10'), "Wednesday");
    });
  
    it('it should return Thursday if the date is on a Thursday', function () {
        assert.equal(getDate('2023-05-11'), "Thursday");
    });
  
    it('it should return Friday  if the date is on a Friday', function () {
        assert.equal(getDate('2023-05-12'), "Friday");
    });
    it('it should return Saturday  if the date is on a Saturday', function () {
      assert.equal(getDate('2023-05-13'), "Saturday");
      });
  
  });