const removeFromArray = function(array, ...itens) {
    
    let i = itens.length;
    
    
    if(array === itens)
    {
        while (array.length > 0)
        {
            console.log('deu');
           return 'eu';
        }
    }
    
    for(i = i-i;i<itens.length;i++)
    {
    let index = array.indexOf(itens[i]);

    

    if(index > 0)
    {
        array.splice(index,1);
    }else{

    }
    
    }
    console.log(array);
    return array;
    

};

// Do not edit below this line
module.exports = removeFromArray;
