// console.log('Hello World');

/*
	JSON
		- JavaScript Object Notation is a popular data format for application to communicate with each other
		-it may look like a JavaScript Object but it is actually a string.
	Syntax:
		{
			"key":"value",
			"key2": "valueB"
		}
		keys are wrapped in curly braces

*/
let sample = `
	{
		"name":"Bob",
		"age" : 35,
		"address" : {
			"city":"Makati",
			"state": "Metro Manila"
		}
	}
`;

console.log(sample);

console.log(JSON.parse(sample));

//comments
// - ctrl + / = //
// - ctrl + shift + / - /

let sampleArr = `
	[
		{
			"email": "jasonLr@gmail.com",
			"password": "qwertyuiop",
			"isAdmin" : true
		},
		{
			"email": "robKr@gmail.com",
			"password": "asdfghjkl",
			"isAdmin": false
		}
	]
`;

console.log(sampleArr);

let parsedSampleArr = JSON.parse(sampleArr);
console.log(parsedSampleArr);

console.log(parsedSampleArr.pop());
console.log(parsedSampleArr);

sampleArr = JSON.stringify(parsedSampleArr);
console.log(sampleArr);

/*

	Mini-Activity: Assignment

	Given a JSON array, Process it and convert to a JS Object so we can manipulate the array
		sample = ['pizza', 'hamburger', 'spaghetti', 'shanghai', 'hotdog stick on a pineapple', 'pancit bihon']
	Delete the last item in the array and add a new item in the array.

	Stringify the array back in JSON and update jsonArr with the stringified array

*/