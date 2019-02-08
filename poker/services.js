const { talia } = require('./cards');

const oneFromTalia = () => {
    const randomnumber = Math.floor(Math.random() * 52);
    if (talia[randomnumber].taken != true) {
        talia[randomnumber].taken = true;
        return talia[randomnumber];
    } else {
        return;
    }
}

const getFiveRandomCards = () => {
    const cardsOnHand = [];
    while (cardsOnHand.length < 5) {
        const takenCard = oneFromTalia();
        if (takenCard) {
            cardsOnHand.push(takenCard)
        }
    }
    return cardsOnHand;
};

const checkIfAllSameColors = (cardsOnHand) => {
    const color = cardsOnHand[0].color;
    let allSame = true;
    cardsOnHand.forEach(card => {
        if (card.color != color) {
            allSame = false;
        }
    });
    return { color, allSame };
}

const onHandValues = (cardsOnHand) => {
    const onHandValues = [];
    cardsOnHand.forEach(card => {
        onHandValues.push(card.value)
    });
    return onHandValues;
}

const checkPokerKrolewskiValues = (cardsOnHand) => {
    const pokerKrolewskiValues = [1, 10, 11, 12, 13];
    const onHand = onHandValues(cardsOnHand);
    isPokerKrolewski = false;
    if (pokerKrolewskiValues.every((value, index) => value === onHand[index])) {
        isPokerKrolewski = true;
    }
    return isPokerKrolewski;
}

const areCardsInOrder = (cardsOnHand) => {
    const onHand = onHandValues(cardsOnHand);
    const valuesInOrder = onHand.sort((a, b) => a - b);
    const firstValue = valuesInOrder[0];
    let correctOrder = true;
    for (let index = 0; index < valuesInOrder.length; index++) {
        if ((firstValue + index) != valuesInOrder[index]) {
            correctOrder = false;
        }
    }
    return correctOrder;
};

const checkPattern = (cardsOnHand) => {
    const onHand = onHandValues(cardsOnHand);
    var reducedHand = onHand.reduce(function (m, v) {
        m[v] = (m[v] || 0) + 1;
        return m;
    }, {});
    const amountOfApperenceTab = (Object.values(reducedHand)).sort((a, b) => b - a);
    return amountOfApperenceTab;
}

const compareTwoArrays = (array1, array2) => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index]);
}

module.exports = {
    getFiveRandomCards,
    compareTwoArrays,
    checkPattern,
    areCardsInOrder,
    checkPokerKrolewskiValues,
    onHandValues,
    checkIfAllSameColors
}