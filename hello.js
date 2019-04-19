console.log("hello, world!", "how is it going?");
> let firstName = "Michael";
undefined
> let laastName = "Hartl";
undefined
> firstName + " " + lastName;
Thrown:
ReferenceError: lastName is not defined
//> let lastName = "Hartl:
Thrown:
//let lastName = "Hartl:
               ^^^^^^^

SyntaxError: Invalid or unexpected token
> let lastName = "Hartl";
undefined
> firstName + " " + lastName;
'Michael Hartl'
> `${firstName} is his first name.`
'Michael is his first name.'
> firstName + " " + lastName;  // Concatenation, with a space in between
'Michael Hartl'
> `${firstName} ${lastName}`; // Interpolation equivalent of concatenation
