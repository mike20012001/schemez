
let numGen = function(){

    var fstNo = document.getElementById('fst_text');
    var fstNo1 = document.getElementById('fst_text1');
    var fstNo2 = document.getElementById('fst_text2');
    var fstNo3 = document.getElementById('fst_text3');
    var fstNo4 = document.getElementById('fst_text4');
    var fstNo5 = document.getElementById('fst_text5');

    var sndNo = document.getElementById('snd_text');
    var sndNo1 = document.getElementById('snd_text1');
    var sndNo2 = document.getElementById('snd_text2');
    var sndNo3 = document.getElementById('snd_text3');
    var sndNo4 = document.getElementById('snd_text4');
    var sndNo5 = document.getElementById('snd_text5');

    var trdNo = document.getElementById('trd_text');
    var trdNo1 = document.getElementById('trd_text1');
    var trdNo2 = document.getElementById('trd_text2');
    var trdNo3 = document.getElementById('trd_text3');
    var trdNo4 = document.getElementById('trd_text4');
    var trdNo5 = document.getElementById('trd_text5');

    var fthNo = document.getElementById('fth_text');
    var fthNo1 = document.getElementById('fth_text1');
    var fthNo2 = document.getElementById('fth_text2');
    var fthNo3 = document.getElementById('fth_text3');
    var fthNo4 = document.getElementById('fth_text4');
    var fthNo5 = document.getElementById('fth_text5');

    var fftNo = document.getElementById('fft_text');
    var fftNo1 = document.getElementById('fft_text1');
    var fftNo2 = document.getElementById('fft_text2');
    var fftNo3 = document.getElementById('fft_text3');
    var fftNo4 = document.getElementById('fft_text4');
    var fftNo5 = document.getElementById('fft_text5');

    var list = [];
    var result = [];
    var list2 = [];
    var result2 = [];
    var list3 = [];
    var result3 = [];
    var list4 = [];
    var result4 = [];
    var list5 = [];
    var result5 = [];
    var list6 = [];
    var result6 = [];

    for (var i = 1; i <= 45; i++) {
        list.push(i);
    }

    for (var i = 1; i <= 45; i++) {
        list2.push(i);
    }
    for (var i = 1; i <= 45; i++) {
        list3.push(i);
    }
    for (var i = 1; i <= 45; i++) {
        list4.push(i);
    }
    for (var i = 1; i <= 45; i++) {
        list5.push(i);
    }

    for (var i = 1; i <7; i++){
        if (i==1){
        for (var af = 1; af <= 6; af++) {
            var index = Math.floor(Math.random() * list.length);
            var num = list[index];
            list.splice(index, 1);
            result.push(num);
            }
        } else if (i==2){
            for (var af = 1; af <= 6; af++) {
                var index = Math.floor(Math.random() * list2.length);
                var num = list2[index];
                list2.splice(index, 1);
                result2.push(num);
            }
        } else if (i==3){
            for (var af = 1; af <= 6; af++) {
                var index = Math.floor(Math.random() * list3.length);
                var num = list3[index];
                list3.splice(index, 1);
                result3.push(num);
                }
        } else if (i==4){
            for (var af = 1; af <= 6; af++) {
                var index = Math.floor(Math.random() * list4.length);
                var num = list4[index];
                list4.splice(index, 1);
                result4.push(num);
                }
        } else if (i==5){
            for (var af = 1; af <= 6; af++) {
                var index = Math.floor(Math.random() * list5.length);
                var num = list5[index];
                list5.splice(index, 1);
                result5.push(num);
                }
        } else if (i==6){
            for (var af = 1; af <= 6; af++) {
                var index = Math.floor(Math.random() * list6.length);
                var num = list6[index];
                list6.splice(index, 1);
                result6.push(num);
                }
    }}

    function compare(a, b) {
        if (a<b){
            return -1;
            }

        if (a>b){
            return 1;
            }
        if (a==b){
            return 0;
            }
        }

    result.sort(function(a,b){
        return a-b;
    });
    
    for (let ii = 1; i < 7; i++) {
        if (ii == 1) {
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
        } else if (ii == 2) {
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
        } else if (ii == 3) {
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
        } else if (ii == 4) {
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
        } else if (ii == 5) {
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
        } else {
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
    }    






}