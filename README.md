# controlfib

simple server to give back a fibonacci number given a position.

### Running

Do a `docker-compose install` then `docker-compose up -d` (remove the `-d`to see the console output).

### Testing / Using

Simply hit your localhost at port 3000 with path `fibonacci`. Pass as a query parameter the position you want to check, for example:

`http://localhost:3000/fibonacci?position=2`

Notes: missing a position or a wrong position number will return an error.

### Solution

This is a simple server setup using docker and babel so we can have a nice ES6 code. The function I used for the solution can be found here:
https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e. Note that the function in the page does not work because the values of `a` and `b` are inverted, I fixed this and it seems to work as expected.

This function is faster than the recursive solution, more testing needs to be done to see if the other function that keeps in memory the position is faster than the one in use.
