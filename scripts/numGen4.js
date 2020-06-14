
let numGen = function(){

    var fstNo = document.getElementById('fst_text');
    var fstNo1 = document.getElementById('fst_text1');
    var fstNo2 = document.getElementById('fst_text2');
    var fstNo3 = document.getElementById('fst_text3');
    var fstNo4 = document.getElementById('fst_text4');
    var fstNo5 = document.getElementById('fst_text5');

    var list = [];
    var result = [];

    for (var i = 1; i <= 45; i++) {
        list.push(i);
    }

    for (var af = 1; af <= 6; af++) {
        var index = Math.floor(Math.random() * list.length);
        var num = list[index];
        list.splice(index, 1);
        result.push(num);
    }

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