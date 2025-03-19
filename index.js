// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Append a cat to the end of the array without modifying the original array
function appendCat(name) {
  return [...cats, name];
}

// Prepend a cat to the beginning of the array without modifying the original array
function prependCat(name) {
  return [name, ...cats];
}

// Remove the last cat in the array without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Remove the first cat in the array without modifying the original array
function removeFirstCat() {
  return cats.slice(1);  
}