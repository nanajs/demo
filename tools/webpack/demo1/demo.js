function write(str) {
  console.log(str);
}
write('hello world')

var arr = ["a", "b", "c"];
var iterator = arr.entries();
for (let item of iterator) {
  console.log(item[1]);
}

Array.isArray(Array.prototype);
// false
Array.isArray();
Array.isArray(null);
Array.isArray(undefined);
Array.isArray({});
Array.isArray('');
Array.isArray(123);