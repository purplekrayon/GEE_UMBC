//When you are figuring out what a function does, you start where it is called(1), then look at what is does (2).
//functions can be written different ways depending on the stype of the developer

//Function example 1: 
//(2) here is where the function is defined
var my_hello_function = function(string) {
  return 'Hello ' + string + '!';
}; //The function “my_hello_world” receives the string, ‘world’ as the variable, ‘string’; The function performs the string math operation on the variable, string, and returns the results as a variable to the function, print.

//(1) here is where the function is called
print(my_hello_function('world')); //This line sends the string ‘world’ to the function called, my_hello_world. The variable that is returned is then printed to the console.


//Function example 2: 
// A list of harvest dates.
var dates = ee.List(["2012-08-14", "2013-08-25", "2014-09-01", "2015-08-23"])

//(2) here is where the function is defined. The function, DayOfYear returns a function that converts a date to day of year.
function DayOfYear(date) {
  return ee.Date(date).getRelative('day', 'year')
} 

//(1) here is where the function is called
print(dates.map(DayOfYear))  //’.map’ applies the function, DayOfYear, to every object in the list, "dates". [.map is essentially a loop over a vector or array]
