(function() {

    var Checker = require('./module/checker.js');
    var file = './src/dict/words_for_problem.txt';
    var res;

    // Builds the file using Checker API for Trie
    Checker.build(file);

    // Traverses the trie instance to find words which has sub words
    res = Checker.traverse();

    console.log('---------------------------------------------------------------------------------------------');
    console.log('First Longest word: ' + res.firstLongest.word);
    console.log('Second Longest word: ' + res.secondLongest.word);
    console.log('Total number of words: ' + res.count);

})();
