// var names = ['Thomas','Olivia','Brian','Roy'];
//
// names.forEach(function(name) {
// 	console.log('forEach', name);
// });
//
// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Thomas'));
//
// var person = {
// 	name: 'Thomas',
// 	greet: function() {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name);
// 		})
// 	}
// };
//
// person.greet();
//

// Challange area

function add (a, b) {
	return a + b;
}

console.log('add', add(1,3));
console.log('add', add(9,0));

// addStatement
var addStatement = (a, b) => {
	return a + b;
}
console.log('addStatement', addStatement(4,7));

// addExpression
var addExpression = (a, b) => a + b;
console.log('addExpression', addStatement(3,-2));
