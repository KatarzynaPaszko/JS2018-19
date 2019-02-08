const {
    compareTwoArrays,
    checkPattern,
    areCardsInOrder,
    checkPokerKrolewskiValues,
    onHandValues,
    checkIfAllSameColors
} = require('./services');

// Poker królewski	Royal flush	Royal Flush.png	Poker złożony z kart od asa do dziesiątki.
const pokerKrolewski = (talia) => {
    const areAllSameColor = checkIfAllSameColors(talia).allSame;
    const isPokerKrolewski = checkPokerKrolewskiValues(talia);
    if (areAllSameColor && isPokerKrolewski) {
        console.log("Masz pokera królewskiego! Brawo!!!");
        return true;
    }
}

// Poker	Straight flush	Straight Flush.png	Strit w kolorze. Gdy kilku graczy ma podany 
// układ, wygrywa gracz z wyższą wysoką kartą.

const pokerZwykly = (talia) => {
    const areAllSameColor = checkIfAllSameColors(talia).allSame;
    const correctOrder = areCardsInOrder(talia);

    if (areAllSameColor && correctOrder) {
        console.log("Masz pokera zwykłego! Brawo!!!");
        return true;
    }
}

// Kareta	Four of a kind (Quads)	Poker.png	Cztery karty o tej samej wartości. Gdy kilku 
// graczy ma podany układ, wygrywa gracz z mocniejszymi kartami, z których złożył układ. Gdy nadal 
// nie można wyłonić zwycięzcy, decyduje wysoka karta.

const kareta = (talia) => {
    const uklad = checkPattern(talia);
    const isKareta = compareTwoArrays(uklad, [4, 1]);
    if (isKareta) {
        console.log("Masz Karetę - 4 takie same karty");
        return true;
    }
}

// Ful (także full)	Full house	Full.png	Układ składający się z trójki i pary. Gdy kilku
// graczy ma podany układ, wygrywa gracz z silniejszą trójką. Gdy kilku graczy ma taką samą trójkę, 
// wygrywa gracz z silniejszą parą.

const ful = (talia) => {
    const uklad = checkPattern(talia);
    const isFul = compareTwoArrays(uklad, [3, 2]);
    if (isFul) {
        console.log("Masz Fula - trójkę i parę");
        return true;
    }
}

// Kolor	Flush	Flush.png	Pięć kart w tym samym kolorze, nienastępujących po sobie. Gdy 
// kilku graczy ma podany układ, wygrywa układ z lepszą wysoką kartą.

const kolor = (talia) => {
    const isKolor = checkIfAllSameColors(talia).allSame;
    if (isKolor) {
        console.log("Masz Kolor - wszystkie karty w tym samym kolorze");
        return true;
    }
}

// Strit	Straight	Straight.png	Pięć kart następujących po sobie, przy czym co najmniej 
// jedna musi być w innym kolorze. As może być zarówno najwyższą kartą (strit A-K-D-W-10) jak i najniższą 
// (strit A-2-3-4-5), jednak zakazane jest tworzenie stritów, w których as ma podwójną rolę (np. K-A-2-3-4) - 
// taki układ jest wtedy wysoką kartą. Wygrywa układ z silniejszą wysoką kartą.

const strit = (talia) => {
    const areInOrder1 = checkPokerKrolewskiValues(talia);
    const areInOrder2 = areCardsInOrder(talia);

    if (areInOrder1 || areInOrder2) {
        console.log("Masz Strita - Pięć kart następujących po sobie");
        return true;
    }
}

// Trójka	Three of a kind	Three of a kind.png	Trzy karty tej samej wartości. Gdy kilku graczy ma podany 
// układ, wygrywa gracz z mocniejszą wartością kart, z których ułożył trójkę. Gdy nadal nie można wyłonić 
// zwycięzcy, decyduje wysoka karta.

const trojka = (talia) => {
    const uklad = checkPattern(talia);
    const isTrojka = compareTwoArrays(uklad, [3, 1, 1]);
    if (isTrojka) {
        console.log("Masz Trójkę");
        return true;
    }
}

// Dwie pary	Two pair	Two Pairs.png	Układ składający się z dwóch różnych par. Gdy kilku 
// graczy ma podany układ, wygrywa gracz z mocniejszą starszą parą. Gdy starsze pary są takie same, 
// o wygranej decyduje młodsza para. Gdy nadal nie można wyłonić zwycięzcy, decyduje wysoka karta.

const dwiePary = (talia) => {
    const uklad = checkPattern(talia);
    const isDwiePary = compareTwoArrays(uklad, [2, 2, 1]);
    if (isDwiePary) {
        console.log("Masz Dwie Pary");
        return true;
    }
}

// Para	One pair	One Pair.png	Dwie karty o takiej samej wartości. Gdy kilku graczy ma podany układ, 
// wygrywa układ z silniejszą parą. Gdy pary są takie same, o wygranej decyduje wysoka karta.

const jednaPara = (talia) => {
    const uklad = checkPattern(talia);
    const isJednaPara = compareTwoArrays(uklad, [2, 1, 1, 1]);
    if (isJednaPara) {
        console.log("Masz jedną parę");
        return true;
    }
}

// Wysoka karta	High card	No Pair.png	Każdy układ kart, który nie kwalifikuje się do powyższych układów. 
// Gdy kilku graczy ma podany układ, wygrywa układ z najwyższą kolejną kartą.

const wysokaKarta = (talia) => {
    const onHand = onHandValues(talia);
    onHand.sort((a, b) => a - b);
    if (onHand[0] == 1) {
        console.log("Masz wysoką kartą - asa");
        return true;
    } else {
        console.log("Masz wysoką kartą - " + onHand[4]);
        return true;
    }
}

const highestConfigutration = (talia) => {
    if (pokerKrolewski(talia)) {
        return;
    }
    if (pokerZwykly(talia)) {
        return;
    }
    if (kareta(talia)) {
        return;
    }
    if (ful(talia)) {
        return;
    }
    if (kolor(talia)) {
        return;
    }
    if (strit(talia)) {
        return;
    }
    if (trojka(talia)) {
        return;
    }
    if (dwiePary(talia)) {
        return;
    }
    if (jednaPara(talia)) {
        return;
    }
    if (wysokaKarta(talia)) {
        return;
    }
}

module.exports = {
    highestConfigutration
}
