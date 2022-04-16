// code your solution here

function superbowlWin(data){
    let won= [];
    for(let collection of data){
        if(collection.result === "W"){
            won.push(collection.year)
        }
    }
    return won[0]
}

console.log(superbowlWin(record))