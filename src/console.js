(function() {

    var Checker = require('./module/checker.js');
    var file = './dict/words_for_problem.txt';

    Checker.build(file);
    var res = Checker.traverse();

    console.log('---------------------------------------------------------------------------------------------');
    console.log('First Longest word: ' + res.firstLongest.word);
    console.log('Second Longest word: ' + res.secondLongest.word);
    console.log('Total number of words: ' + res.count);

})();
