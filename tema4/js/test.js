items = [ {id:1, value:11, perc:0.5}, {id:2, value:12, perc:0.3}, {id:3, value:10, perc:0.2} ]
items.sort(function (a, b){
    return (b.value - a.value)
});

for(var x=0 ; x < items.length; x++){

    console.log(items[x].value);
}
