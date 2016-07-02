
module.exports = (function() {

    var _private = {
        findWord: function findWord(word, previous, trieInstance, depth) {
            var wordLen = word.length;
            var cache = {};
            var str1, str2, i;
            if (cache[word]) {
                return cache[word];
            }
            for (i = 1; i < wordLen; i++) {
                str1 = word.slice(0, i);
                str2 = word.slice(i);
                if (trieInstance.find(str1) && trieInstance.find(str2)) {
                    cache[word] = 2;
                    return 2;
                }
            }

            if (depth > 0 && trieInstance.find(word)) {
                return 1;
            }
            if (depth > 1 && trieInstance.find(previous.concat(word))) {
                return 0;
            }
            return -1;
        },

        traverse: function(trieInstance) {
            var firstLongest = { word: '', len: 0 };
            var secondLongest = { word: '', len: 0 };
            var depth = 0;
            var currentWord = [];
            var previousWord = [];
            var count = 0;
            var counted = {};
            var wholeWord = [];

            traversal(trieInstance.toObject());
            console.log(counted);
            console.log(firstLongest, secondLongest);
            console.log(count);
            return {
                count: count,
                counted: counted,
                firstLongest: firstLongest,
                secondLongest: secondLongest
            };

            function traversal(current, parts) {
                var currentKeys = Object.keys(current);
                var len = currentKeys.length;
                var i, letter, incremented = false;
                var incrCount = 0;
                var numOfParts = parts || 1;
                var currentLocalword, previousLocalword;

                for (i = 0; i < len; i++) {
                    letter = currentKeys[i];
                    if (letter === '$' && current[letter] === true) {
                        currentLocalword = currentWord.join('');
                        previousLocalword = previousWord.join('');
                        incremented = true;
                        // console.log(wholeWord.join(''), previousLocalword, currentLocalword, numOfParts, depth);
                        incrCount = _private.findWord(currentLocalword, previousLocalword, trieInstance, depth);
                        if (incrCount >= 0) {
                            numOfParts += incrCount;
                            counted[count++] = {
                                word: wholeWord.join(''),
                                len: numOfParts
                            };
                            if (numOfParts >= firstLongest.len) {
                                secondLongest = firstLongest;
                                firstLongest = {
                                    word: wholeWord.join(''),
                                    len: numOfParts
                                };
                            } else if (numOfParts >= secondLongest.len) {
                                secondLongest = {
                                    word: wholeWord.join(''),
                                    len: numOfParts
                                };
                            }
                        }
                        depth++;
                        if (incremented) {
                            previousWord = currentWord;
                        } else {
                            previousWord.concat(currentWord);
                        }
                        currentWord = [];
                    } else {
                        wholeWord.push(letter);
                        currentWord.push(letter);
                        traversal(current[letter], numOfParts);
                    }

                }
                depth = incremented ? depth - 1 : depth;
                previousWord = [];
                wholeWord.pop();
            }
        }
    };

    return {
        traverse: _private.traverse
    };

})();
