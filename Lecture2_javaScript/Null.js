function getVowels(str){
    const m = str.maych(/[aeiou]/gi);
    if(m == null){
        return 0;
    }
    return m.length;
}
console.log(getVowels("seeing"));