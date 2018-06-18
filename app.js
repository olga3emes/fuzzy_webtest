/**
 * Created by olga on 28/9/17.
 */
$('body').on('click', function () {


    //----------- A menor que B (no se tocan) ----------
    /*
    var arrayA= [1,3,9,10];
     var arrayB= [11,13,18,19];*/

    //----------- B menor que A (no se tocan)----------
    /*
     var arrayA= [11,13,18,19];
     var arrayB= [1,3,9,10]; */


    // ----------- A menor que B (se tocan un poco) ----------
    /*
    var arrayA = [3, 6, 10, 13];
    var arrayB = [9, 12, 18, 20];*/

    //----------- B menor que A (se tocan un poco) ----------

    var arrayA = [9, 12, 18, 20];
    var arrayB = [3, 6, 10, 13];

    //----------- A menor que B (se tocan) ----------
    /*var arrayA = [1, 3, 7, 10];
    var arrayB = [4, 5, 7, 14];*/

    //----------- B menor que A (se tocan) ----------
   /* var arrayA = [4, 5, 7, 14];
    var arrayB = [1, 3, 7, 10];*/

    //----------- A = B -------------
    /*var arrayA = [4, 5, 7, 14];
    var arrayB = [4, 5, 7, 14];*/

    //   ----  var arrayA= [1,5,8,9];
    //var arrayB = [9.8, 4, 3.6, 9];

    //------------*/


    //var arrayA= [1,5,8,9];
    $('#arrayA').text("A =[" + arrayA + "]");
    //var arrayB= [9.8,4,3.6,9];
    $('#arrayB').text("B =[" + arrayB + "]");

    var value0 = feq(arrayA, arrayB);
    $('#feq').text(value0);
    var value = nfeq(arrayA, arrayB);
    $('#nfeq').text(value);

    var value1 = nflt(arrayA, arrayB);
    $('#nflt').text(value1);
    var value2 = flt(arrayA, arrayB);
    $('#flt').text(value2);

    var value1e = nfleq(arrayA, arrayB);
    $('#nfleq').text(value1e);
    var value2e = fleq(arrayA, arrayB);
    $('#fleq').text(value2e);

    var value3 = fgt(arrayA, arrayB);
    $('#fgt').text(value3);
    var value4 = nfgt(arrayA, arrayB);
    $('#nfgt').text(value4);

    var value3e = nfgeq(arrayA, arrayB);
    $('#nfgeq').text(value3e);
    var value4e = fgeq(arrayA, arrayB);
    $('#fgeq').text(value4e);


});