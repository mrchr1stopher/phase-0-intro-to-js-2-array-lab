const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){ 
    cats.push(name);
}
destructivelyAppendCat("Ralph")

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(){
    cats.pop()
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()

function appendCat(name){
  return [...cats,name]
}
appendCat("Broom")

function prependCat(name){
    return [name,...cats]
}
prependCat("Arnold")

function removeLastCat() {
    return cats.slice(0, cats.length -1)
}

removeLastcat()

function removeFirstCat(name){
   return cats.slice(1)
   
    
}
removeFirstCat()