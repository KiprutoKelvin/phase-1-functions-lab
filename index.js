// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
   let hq = 42;
   return Math.abs(hq-blocks); 
}
function distanceFromHqInFeet(currentStreet) {
   let distanceInFeet = 264;
    return (distanceFromHqInBlocks(currentStreet)*distanceInFeet);
}
function distanceTravelledInFeet(start,destination){
    let lengthInBlocks = Math.abs(destination-start);
    let distanceInFeet = lengthInBlocks*264;
    return distanceInFeet;
}
function calculatesFarePrice(start, destination){
    let fareprice;
    let distance;
    distance=distanceTravelledInFeet(start, destination);
    if(distance<401){
        fareprice =0;
    }
    else if(distance>400 && distance <= 2000){
        fareprice=(distance-400)*0.02;
    }
    else if(distance>2001 && distance <= 2500){
        fareprice=25;
    }
    else{
        fareprice="cannot travel that far";
    }
    return fareprice;
}