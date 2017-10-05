/**
 * Created by olga on 25/9/17.
 */

function call_me(coord) {
    for (i = 0; i < coord.length; i++) {
        return (coord[i])
    }
}

function feq(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in FEQ function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (alfaA == alfaB) {
        return 1;
    }

    if (gammaA > betaB && alfaA < alfaB) {
        res = (gammaA - betaB) / (deltaA - deltaB);
        if (res >= 1) {
            return (gammaB - betaA) / (deltaA + deltaB);
        } else {
            return res;
        }
    }

    if (gammaA <= betaB || betaA >= gammaB) {
        return 0;
    }
}

function nfeq(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in NFEQ function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (alfaA == alfaB) {
        return 1;
    }

    if (gammaA > betaB && alfaA < alfaB) {
        res = (gammaA - betaB) / (deltaA - deltaB);
        if (res >= 1) {
            return (gammaB - betaA) / (deltaA + deltaB);
        } else {
            return res;
        }
    }

    if (gammaA <= betaB || betaA >= gammaB) {
        return 0;
    }
}

function fgt(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in FGT function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (gammaA >= deltaB) {
        return 1;
    }

    if (gammaA < deltaB && deltaA > gammaB) {
        return (deltaA - gammaB) / ((deltaB - gammaB) - (gammaA - deltaA));
    }

    if (deltaA <= gammaB) {
        return 0;
    }
}

function nfgt(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in NFGT function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (alfaA >= deltaB) {
        return 1;
    }

    if (alfaA < deltaB && betaA > gammaB) {
        return (betaA - gammaB) / ((deltaB - gammaB) - (alfaA - betaA));
    }

    if (betaA <= gammaB) {
        return 0;
    }
}

function fgeq(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in FGEQ function");
    }
    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (gammaA >= betaB) {
        return 1;
    }

    if (gammaA < betaB && deltaA > alfaB) {
        return (deltaA - alfaB) / ((betaB - alfaA) - (gammaA - deltaA));
    }

    if (deltaA <= alfaB) {
        return 0;
    }
}

function nfgeq(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in NFGEQ function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (alfaA >= betaB) {
        return 1;
    }

    if (alfaA < betaB && betaA > alfaB) {
        return (betaA - alfaB) / ((betaB - alfaB) - (alfaA - betaA));
    }

    if (betaA <= alfaB) {
        return 0;
    }
}

function flt(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in FLT function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (betaA <= alfaB) {
        return 1;
    }

    if (betaA > alfaB && alfaA < betaB) {
        return (alfaA - betaB) / ((alfaB - betaB) - (betaA - alfaA));
    }

    if (alfaA >= betaB) {
        return 0;
    }
}

function nflt(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in NFLT function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (deltaA <= alfaB) {
        return 1;
    }

    if (deltaA > alfaB && gammaA < betaB) {
        return (gammaA - betaB) / ((alfaB - betaB) - (deltaA - gammaA));
    }

    if (gammaA >= betaB) {
        return 0;
    }

}

function fleq(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in FLEQ function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (betaA <= gammaB) {
        return 1;
    }

    if (betaA > gammaB && alfaA < deltaB) {
        return (deltaB - alfaA) / ((betaA - alfaA) - (gammaB - deltaB));
    }

    if (alfaA >= deltaB) {
        return 0;
    }
}

function nfleq(arrayA, arrayB) {

    if (arrayA.length != 4 || arrayB.length != 4) {
        throw new Exception("Invalid parameter in NFLEQ function");
    }

    if (typeof (arrayA[0]) !== 'number' || typeof (arrayA[1]) !== 'number' || typeof (arrayA[2]) !== 'number' || typeof (arrayA[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    if (typeof (arrayB[0]) !== 'number' || typeof (arrayB[1]) !== 'number' || typeof (arrayB[2]) !== 'number' || typeof (arrayB[3]) !== 'number') {
        throw new Exception("Invalid first parameter,please, revise the type of data");
    }

    alfaA = arrayA  [0];
    betaA = arrayA  [1];
    gammaA = arrayA  [2];
    deltaA = arrayA  [3];

    alfaB = arrayB  [0];
    betaB = arrayB  [1];
    gammaB = arrayB  [2];
    deltaB = arrayB  [3];

    if (deltaA <= gammaB) {
        return 1;
    }

    if (deltaA > gammaB && gammaA < deltaB) {
        return (gammaA - deltaB) / ((gammaB - deltaB) - (deltaA - gammaA));
    }

    if (gammaA >= deltaB) {
        return 0;
    }

}

function f_and(value1, value2) {

    if (value1 <= value2)
        return value1;
    else
        return value2;
}

function f_or(value1, value2) {

    if (value1 >= value2)
        return value1;
    else
        return value2;
}

function f_not(value1) {
    return 1 - value1;
}