//Problem-1
// seer to moon converter
function seerToMon(seer) {
    // (as 40 seer = 1 mon)
    let result = 0;

    if (seer >= 0 && typeof (seer) == 'number') {
        result = seer / 40;
    }
    else if (typeof (seer) == 'string') {
        result = 'String is not allowed, please input numbers only';
    }
    else {
        result = 'Please input positive number';
    }
    return result;
}
//let result = seerToMon(80);
//console.log(result);




//Problem-2
// calculate total sales of three products
// You must include three products which quantity will be 0 or greater than 0
function totalSales(shirt, pant, shoe) {
    let totalPrice = 0;
    if (shirt >= 0 && typeof (shirt) == 'number' && pant >= 0 && typeof (pant) == 'number' && shoe >= 0 && typeof (shoe) == 'number') {
        let totalShirtPrice = shirt * 100;    //each shirt price is 100
        let totalPantPrice = pant * 200;    //each pant price is 200
        let totalShoePrice = shoe * 500;    //each shoe price is 500
        totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    }
    else if (typeof (shirt) == 'string' || typeof (pant) == 'string' || typeof (shoe) == 'string') {
        totalPrice = 'String is not allowed, Please input numbers only';
    }
    else if (shirt < 0 || pant < 0 || shoe < 0) {
        totalPrice = 'Please input positive numbers only';
    }
    else {
        totalPrice = 'Please input three products with 0 or greater than 0';
    }
    return totalPrice;
}
//let result = totalSales(0, 2, 3);
//console.log(result);




//Problem-3
// delivery cost for Shirt
function deliveryCost(shirt) {
    const deliveryCostFirstHundredPerShirt = 100;
    const deliveryCostSecondHundredPerShirt = 80;
    const deliveryCostRestHundredPerShirt = 50;
    let totalDeliveryCost = 0;
    if (shirt <= 100 && shirt >= 0 && typeof (shirt) == 'number') {
        totalDeliveryCost = shirt * deliveryCostFirstHundredPerShirt;
    }
    else if (shirt <= 200 && shirt >= 0 && typeof (shirt) == 'number') {
        const firstHundredDeliveryCost = 100 * deliveryCostFirstHundredPerShirt;
        const restshirt = shirt - 100;
        const secondHundredDeliveryCost = restshirt * deliveryCostSecondHundredPerShirt;
        totalDeliveryCost = firstHundredDeliveryCost + secondHundredDeliveryCost;
    }
    else if (shirt >= 0 && typeof (shirt) == 'number') {
        const firstHundredDeliveryCost = 100 * deliveryCostFirstHundredPerShirt;
        const secondHundredDeliveryCost = 100 * deliveryCostSecondHundredPerShirt;
        const restShirt = shirt - 200;
        const restHundredDeliveryCost = restShirt * deliveryCostRestHundredPerShirt;
        totalDeliveryCost = firstHundredDeliveryCost + secondHundredDeliveryCost + restHundredDeliveryCost;
    }
    else if (typeof (shirt) == 'string') {
        totalDeliveryCost = 'String is not allowed, Please input numbers only';
    }
    else {
        totalDeliveryCost = 'Please input positive number';
    }
    return totalDeliveryCost;
}
//let result = deliveryCost(400);
//console.log(result);




//Problem-4
//find a friend's name with five character
//and stop the function when first name is found
const friends = ['rony', 'rakib', 'mahi', 'tarek', 'mahfuz']
function perfectFriend(friends) {
    let perfectFriend = '';
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 5 && typeof (friends[i]) == 'string') {
            perfectFriend = friends[i];
            break;
        }
        else {
            perfectFriend = "Sorry there is no friend's name with five character";
        }
    }
    return perfectFriend;
}
//let result = perfectFriend(friends);
//console.log(result);
