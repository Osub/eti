module.exports = function(debug,is_low){
    var pos = 1,        //位数
        remainder, //余数
        quotient;  //商
        return strPosChar = function(index,str){
            if(is_low==='D'){
                start = 64;
            }else{
                start = 96;
            }
            remainder = index%26;
            quotient  = Math.floor(index/26);
            if(quotient>26){
                str += String.fromCharCode(remainder+start);
                pos++;
                console.log(str);
                strPosChar(quotient,str);
            }else{
                str += String.fromCharCode(remainder+start);
                console.log(str);
                if(quotient) str += String.fromCharCode(quotient+start);
                console.log(str);
                return str.split(" ").reverse().join(" ");
            }
        };
};
