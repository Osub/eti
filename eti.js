module.exports = function(debug,is_low){
    var pos = 1,        //位数
        remainder, //余数
        quotient;  //商
    if(debug==='de') {
        return strPosChar = function (index, str) {
            if (is_low === 'D') {
                start = 64;
            } else {
                start = 96;
            }
            remainder = index % 26;
            quotient = Math.floor(index / 26);
            if (quotient > 26) {
                str += String.fromCharCode(remainder + start);
                pos++;
                strPosChar(quotient, str);
            } else {
                str += String.fromCharCode(remainder + start);

                if (quotient) str += String.fromCharCode(quotient + start);

                str = str.split("").reverse().join("");
                console.log(str);
                return str;
            }
        };
    }else if(debug==='en'){
       return function (stri) {
           var map_arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
               char_pos = function (current) {
                   return map_arr.lastIndexOf(current) + 1;
               }
           var str_len = stri.length,
               res = 0;
           for(var i=1;i<=str_len;i++){
              res += Math.pow(26,str_len-i)*char_pos(stri[i-1].toUpperCase());
           }
           console.log(res);
           return   res;
       }
    }
};
