
function greet(name) {
  console.log('this is starting:');
  console.log("Hello, " + name + "!");
}
let set = () => {
  setTimeout(function() {
    console.log("Goodbye!");
  }, 3000);
}
set();
greet('qasim ali');   set();