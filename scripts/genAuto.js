
function genAuto(){
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
}