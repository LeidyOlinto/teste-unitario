function assert(value , description ) {
    console.log(description);
    //Bolean vai retornar verdadeiro ou false
    if (! value) {
       //throw new Error('Invalid Value');
       console.log('Invalid value');
       return false;

    } else {
        console.log('Sccess!!!');
        return true;
    }
}
module.exports = assert;