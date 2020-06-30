const listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const listTwo = [6,7,8,9,10,11,12,13,14,15,16,17,18]
const listThree = [13,14,15,16,17,18,19,20,21,22,23]
const listFour = [21,22,23,24,25,26,27,28,29,30,31,32,33,34]
const listFive = [31,32,33,34,35,36,37,38,39,40,41]
const listSix = [36,37,38,39,40,41,42,43,44,45]



let numGen = function(){ 

    /* 각 입력숫자를 받아 배열에 추가하는 함수를 숫자만 받는 부분만 실행 
       function input_get(){ */
    let inputResult = [];
    let inputGet = document.querySelector('#input_get')
    let inputGet2 = document.querySelector('#input_get2')
    let inputGet3 = document.querySelector('#input_get3')

    let list = [];

    for (var i = 1; i <= 45; i++) {
        list.push(i);
    }
    if (isNaN(inputGet.value) || inputGet.value == 0 || inputGet.value > 45){
        inputGet.value = null
    } else {
        inputResult.push(Number(inputGet.value)) && list.splice(Number(inputGet.value)-1, 1)
    };

    if (isNaN(inputGet2.value) || inputGet2.value == 0 || inputGet2.value > 45 || inputGet2.value == inputGet.value){
        inputGet2.value = null
    } else {
        inputResult.push(Number(inputGet2.value)) && list.splice(Number(inputGet2.value)-2, 1)

    };
    if (isNaN(inputGet3.value) || inputGet3.value == 0 || inputGet3.value > 45 || inputGet3.value == inputGet2.value || inputGet3.value == inputGet.value){
        inputGet3.value = null
    } else {
        inputResult.push(Number(inputGet3.value)) && list.splice(Number(inputGet3.value)-3, 1)
    };

    
/* 추천번호 1번라인 숫자 */

    var fstNo = document.getElementById('fst_text');
    var fstNo1 = document.getElementById('fst_text1');
    var fstNo2 = document.getElementById('fst_text2');
    var fstNo3 = document.getElementById('fst_text3');
    var fstNo4 = document.getElementById('fst_text4');
    var fstNo5 = document.getElementById('fst_text5');

    let result = inputResult; 

    result.sort(function(a,b){
        return a-b;
    });
    
    list.sort(function() {return 0.5 - Math.random()});
    a = 6 - result.length;

    for (i = 0; i<a; i++){
    let num = list[i];
    result.push(num);
    }

    result.sort(function(a,b){
        return a-b;
    });
    
    for (let i = 0; i < result.length; i++) {
        if (i == 0){
            fstNo.innerHTML = result[i]
        } else if (i == 1) {
            fstNo1.innerHTML = result[i]
        } else if (i == 2) {
            fstNo2.innerHTML = result[i]
        } else if (i == 3) {
            fstNo3.innerHTML = result[i]
        } else if (i == 4) {
            fstNo4.innerHTML = result[i]
        } else {
            fstNo5.innerHTML = result[i]
        }
    }    
}

let numGen2 = function(){ 

    /* 각 입력숫자를 받아 배열에 추가하는 함수를 숫자만 받는 부분만 실행 
       function input_get(){ */
        let inputResult = [];
        let inputGet = document.querySelector('#input_get')
        let inputGet2 = document.querySelector('#input_get2')
        let inputGet3 = document.querySelector('#input_get3')

    let list = [];

    for (var i = 1; i <= 45; i++) {
        list.push(i);
    }
    if (isNaN(inputGet.value) || inputGet.value == 0 || inputGet.value > 45){
        inputGet.value = null
    } else {
        inputResult.push(Number(inputGet.value)) && list.splice(Number(inputGet.value)-1, 1)
    };

    if (isNaN(inputGet2.value) || inputGet2.value == 0 || inputGet2.value > 45 || inputGet2.value == inputGet.value){
        inputGet2.value = null
    } else {
        inputResult.push(Number(inputGet2.value)) && list.splice(Number(inputGet2.value)-2, 1)

    };
    if (isNaN(inputGet3.value) || inputGet3.value == 0 || inputGet3.value > 45 || inputGet3.value == inputGet2.value || inputGet3.value == inputGet.value){
        inputGet3.value = null
    } else {
        inputResult.push(Number(inputGet3.value)) && list.splice(Number(inputGet3.value)-3, 1)
    };

    
/* 추천번호 1번라인 숫자 */

    var sndNo = document.getElementById('snd_text');
    var sndNo1 = document.getElementById('snd_text1');
    var sndNo2 = document.getElementById('snd_text2');
    var sndNo3 = document.getElementById('snd_text3');
    var sndNo4 = document.getElementById('snd_text4');
    var sndNo5 = document.getElementById('snd_text5');

    var result = inputResult; 

    result.sort(function(a,b){
        return a-b;
    });
    

    /* 배열 list에서 inputResult 값 삭제(코드작성중) 후 결과값에 표시(작성필요) */
    
    list.sort(function() {return 0.5 - Math.random()});
    a = 6 - result.length;

    for (i = 0; i<a ; i++){
    let num = list[i];
    result.push(num);
    }

    result.sort(function(a,b){
        return a-b;
    });
    
    for (let i = 0; i < result.length; i++) {
        if (i == 0){
            sndNo.innerHTML = result[i]
        } else if (i == 1) {
            sndNo1.innerHTML = result[i]
        } else if (i == 2) {
            sndNo2.innerHTML = result[i]
        } else if (i == 3) {
            sndNo3.innerHTML = result[i]
        } else if (i == 4) {
            sndNo4.innerHTML = result[i]
        } else {
            sndNo5.innerHTML = result[i]
        }
    }
    
}

let numGen3 = function(){ 

    /* 각 입력숫자를 받아 배열에 추가하는 함수를 숫자만 받는 부분만 실행 
       function input_get(){ */
        let inputResult = [];
        let inputGet = document.querySelector('#input_get')
        let inputGet2 = document.querySelector('#input_get2')
        let inputGet3 = document.querySelector('#input_get3')

    let list = [];

    for (var i = 1; i <= 45; i++) {
        list.push(i);
    }
    if (isNaN(inputGet.value) || inputGet.value == 0 || inputGet.value > 45){
        inputGet.value = null
    } else {
        inputResult.push(Number(inputGet.value)) && list.splice(Number(inputGet.value)-1, 1)
    };

    if (isNaN(inputGet2.value) || inputGet2.value == 0 || inputGet2.value > 45 || inputGet2.value == inputGet.value){
        inputGet2.value = null
    } else {
        inputResult.push(Number(inputGet2.value)) && list.splice(Number(inputGet2.value)-2, 1)

    };
    if (isNaN(inputGet3.value) || inputGet3.value == 0 || inputGet3.value > 45 || inputGet3.value == inputGet2.value || inputGet3.value == inputGet.value){
        inputGet3.value = null
    } else {
        inputResult.push(Number(inputGet3.value)) && list.splice(Number(inputGet3.value)-3, 1)
    };

    
/* 추천번호 1번라인 숫자 */

    var trdNo = document.getElementById('trd_text');
    var trdNo1 = document.getElementById('trd_text1');
    var trdNo2 = document.getElementById('trd_text2');
    var trdNo3 = document.getElementById('trd_text3');
    var trdNo4 = document.getElementById('trd_text4');
    var trdNo5 = document.getElementById('trd_text5');

    var result = inputResult; 

    result.sort(function(a,b){
        return a-b;
    });
    

    /* 배열 list에서 inputResult 값 삭제(코드작성중) 후 결과값에 표시(작성필요) */

    list.sort(function() {return 0.5 - Math.random()});
    a = 6 - result.length;

    for (i = 0; i<a; i++){
    let num = list[i];
    result.push(num);
    }

    result.sort(function(a,b){
        return a-b;
    });
    
    for (let i = 0; i < result.length; i++) {
        if (i == 0){
            trdNo.innerHTML = result[i]
        } else if (i == 1) {
            trdNo1.innerHTML = result[i]
        } else if (i == 2) {
            trdNo2.innerHTML = result[i]
        } else if (i == 3) {
            trdNo3.innerHTML = result[i]
        } else if (i == 4) {
            trdNo4.innerHTML = result[i]
        } else {
            trdNo5.innerHTML = result[i]
        }
    }
}


let numGen4 = function(){ 

    /* 각 입력숫자를 받아 배열에 추가하는 함수를 숫자만 받는 부분만 실행 
       function input_get(){ */
        let inputResult = [];
        let inputGet = document.querySelector('#input_get')
        let inputGet2 = document.querySelector('#input_get2')
        let inputGet3 = document.querySelector('#input_get3')

    let list = [];

    for (var i = 1; i <= 45; i++) {
        list.push(i);
    }
    if (isNaN(inputGet.value) || inputGet.value == 0 || inputGet.value > 45){
        inputGet.value = null
    } else {
        inputResult.push(Number(inputGet.value)) && list.splice(Number(inputGet.value)-1, 1)
    };

    if (isNaN(inputGet2.value) || inputGet2.value == 0 || inputGet2.value > 45 || inputGet2.value == inputGet.value){
        inputGet2.value = null
    } else {
        inputResult.push(Number(inputGet2.value)) && list.splice(Number(inputGet2.value)-2, 1)

    };
    if (isNaN(inputGet3.value) || inputGet3.value == 0 || inputGet3.value > 45 || inputGet3.value == inputGet2.value || inputGet3.value == inputGet.value){
        inputGet3.value = null
    } else {
        inputResult.push(Number(inputGet3.value)) && list.splice(Number(inputGet3.value)-3, 1)
    };

    
/* 추천번호 1번라인 숫자 */

    var fthNo = document.getElementById('fth_text');
    var fthNo1 = document.getElementById('fth_text1');
    var fthNo2 = document.getElementById('fth_text2');
    var fthNo3 = document.getElementById('fth_text3');
    var fthNo4 = document.getElementById('fth_text4');
    var fthNo5 = document.getElementById('fth_text5');

    var result = inputResult; 

    result.sort(function(a,b){
        return a-b;
    });
    
    /* 배열 list에서 inputResult 값 삭제(코드작성중) 후 결과값에 표시(작성필요) */

    list.sort(function() {return 0.5 - Math.random()});
    a = 6 - result.length;

    for (i = 0; i<a; i++){
    let num = list[i];
    result.push(num);
    }
    
    result.sort(function(a,b){
        return a-b;
    });
    
    for (let i = 0; i < result.length; i++) {
        if (i == 0){
            fthNo.innerHTML = result[i]
        } else if (i == 1) {
            fthNo1.innerHTML = result[i]
        } else if (i == 2) {
            fthNo2.innerHTML = result[i]
        } else if (i == 3) {
            fthNo3.innerHTML = result[i]
        } else if (i == 4) {
            fthNo4.innerHTML = result[i]
        } else {
            fthNo5.innerHTML = result[i]
        }
    }
}

let numGen5 = function(){ 

    /* 각 입력숫자를 받아 배열에 추가하는 함수를 숫자만 받는 부분만 실행 
       function input_get(){ */
        let inputResult = [];
        let inputGet = document.querySelector('#input_get')
        let inputGet2 = document.querySelector('#input_get2')
        let inputGet3 = document.querySelector('#input_get3')

    let list = [];

    for (var i = 1; i <= 45; i++) {
        list.push(i);
    }
    if (isNaN(inputGet.value) || inputGet.value == 0 || inputGet.value > 45){
        inputGet.value = null
    } else {
        inputResult.push(Number(inputGet.value)) && list.splice(Number(inputGet.value)-1, 1)
    };

    if (isNaN(inputGet2.value) || inputGet2.value == 0 || inputGet2.value > 45 || inputGet2.value == inputGet.value){
        inputGet2.value = null
    } else {
        inputResult.push(Number(inputGet2.value)) && list.splice(Number(inputGet2.value)-2, 1)

    };
    if (isNaN(inputGet3.value) || inputGet3.value == 0 || inputGet3.value > 45 || inputGet3.value == inputGet2.value || inputGet3.value == inputGet.value){
        inputGet3.value = null
    } else {
        inputResult.push(Number(inputGet3.value)) && list.splice(Number(inputGet3.value)-3, 1)
    };

    
/* 추천번호 1번라인 숫자 */

    var fftNo = document.getElementById('fft_text');
    var fftNo1 = document.getElementById('fft_text1');
    var fftNo2 = document.getElementById('fft_text2');
    var fftNo3 = document.getElementById('fft_text3');
    var fftNo4 = document.getElementById('fft_text4');
    var fftNo5 = document.getElementById('fft_text5');

    var result = inputResult; 

    result.sort(function(a,b){
        return a-b;
    });
    

    /* 배열 list에서 inputResult 값 삭제(코드작성중) 후 결과값에 표시(작성필요) */

    list.sort(function() {return 0.5 - Math.random()});
    a = 6 - result.length;

    for (i = 0; i<a; i++){
    let num = list[i];
    result.push(num);
    }

    result.sort(function(a,b){
        return a-b;
    });
    
    for (let i = 0; i < result.length; i++) {
        if (i == 0){
            fftNo.innerHTML = result[i]
        } else if (i == 1) {
            fftNo1.innerHTML = result[i]
        } else if (i == 2) {
            fftNo2.innerHTML = result[i]
        } else if (i == 3) {
            fftNo3.innerHTML = result[i]
        } else if (i == 4) {
            fftNo4.innerHTML = result[i]
        } else {
            fftNo5.innerHTML = result[i]
        }
    }
}