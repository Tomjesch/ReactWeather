// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }
//
// getTempCallback('Amsterdam', function(err, temp){
// 	if (err) {
// 		console.log('error', err)
// 	} else {
// 		console.log('succes', temp);
// 	}
// });
//
//
// function getTempPromise(location){
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(79);
// 			reject('city not found');
// 		}, 1000);
// 	});
// }
//
// getTempPromise('Amsterdam').then(function(temp){
// 	console.log('promise succes', temp);
// }, function (err) {
// 	console.log('promise error', err);
// });

// Challange action_create_team

function addPromise(a, b){
	return new Promise(function(resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('A & B need to be numbers');
		}
	});
}

addPromise(2,3).then(function(sum){
	console.log('success', sum);
}, function (err) {
	console.log('error', err);
});

addPromise('Thomas', 9).then(function(sum){
	console.log('success', sum);
}, function (err) {
	console.log('error', err);
});
