const sumAll = function(num1,num2) {

    let final = 0;
    if(!Number.isInteger(num1) || !Number.isInteger(num2))
    {
        return 'ERROR';
    }
    if(num1 < 0 || num2 < 0)
    {
        return 'ERROR';
    }
    if(num1 < num2)
    {
        for(num1; num1 <= num2;num1++)
        {
            final += num1;
        }
    }else if (num1 >num2){
        for(num2; num2 <= num1;num2++)
        {
            final += num2;
        }
    }

    return final;
    
};

// Do not edit below this line
module.exports = sumAll;
