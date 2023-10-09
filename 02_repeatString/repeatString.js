const repeatString = function(nome,num) {
    let nomes = '';
    
    if(num >= 0)
    {

    for(i=num;i>0;i--)
    {
        nomes +=  nome;
    }

    }
    else
    {
        return 'ERROR';
    }
        return nomes;


};

// Do not edit below this line
module.exports = repeatString;
