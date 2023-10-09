const reverseString = function(name) {

    let names = name;
    let final = '';
    let len = names.length -1;

    for(len;len>=0;len--)
    {
        final += names.slice(len,len+1);
    }    

    return final;





};

// Do not edit below this line
module.exports = reverseString;
