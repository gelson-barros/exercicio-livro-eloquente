let something = 1;
{
    let something = 2;
    console.log(something); //2
}
console.log(something); //1

var things = 1;
{
    var things = 2;
    console.log(things); //2
}
console.log(things); //2
