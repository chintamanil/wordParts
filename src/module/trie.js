(function() {
    var readline = require('readline');
    var fs = require('fs'),
        stream = require('stream');

    /**
     * Trie Data structure is used  'here' to maintain a dictionary(actual one)
     * It stores string value as as a trie data structure.
     * this.trie = dictionary
     */
    function Trie() {
        this.trie = {};
    }

    /**
     * add series of string to dictionary
     *
     * @param {[string]} str [e.g 'word1 word2 word3']
     */
    Trie.prototype.addSeries = function(str) {
        // TODO check type of string add try catch
        var words = str.split(' ');
        var self = this;
        words.forEach(function(word) {
            self._add(word, self.trie);
        });
        return true;
    };

    /**
     * add a word
     *
     * @param {[string]} word
     */
    Trie.prototype.add = function(word) {
        // TODO check word type
        return this._add(word, this.trie);
    };

    /**
     * find word
     *
     * @param  {[string]} word [word to find in dictionary]
     *
     * @return {[string]}      [found word]
     */
    Trie.prototype.find = function(word) {
        // TODO check if word is a string
        return this._find(word, this.trie);
    };

    /**
     * returns the map of entire 'dictionary'
     *
     * @return {[trie Hash map]} [description]
     */
    Trie.prototype.toObject = function() {
        return this.trie;
    };

    Trie.prototype.build = function(readFile) {
        return this._build(readFile);
    };

    Trie.prototype._add = function(word, cur) {
        var j, letter, pos;
        var letters = word.split('');
        var len = letters.length;
        // check if word is already in dictionary before addition
        for (j = 0; j < len; j++) {
            letter = letters[j];
            pos = cur[letter];
            if (!pos) {
                cur[letter] = j === len - 1 ? { $: true } : {};
                cur = cur[letter];

            } else {
                cur = cur[letter];
            }
        }
        return true;
    };

    /**
     * [_find description]
     *
     * @param  {[type]} word [description]
     * @param  {[type]} trie [description]
     *
     * @return {[type]}      [description]
     */
    Trie.prototype._find = function(word, trie) {
        var first = word[0];

        if (word.length === 1) {
            if (typeof trie[first] === 'object' && trie[first].$) {
                return trie[first].$;
            }
            return false;
        }
        if (trie[first]) {
            return this._find(word.slice(1), trie[first]);
        }
        return null;
    };

    /**
     * [_build description]
     *
     * @param  {[type]} file [description]
     *
     * @return {[type]}      [description]
     */
    Trie.prototype._build = function(file) {
        var cur;
        cur = this.trie;

        var instream = fs.createReadStream(file);
        var outstream = new stream;
        var rl = readline.createInterface(instream, outstream);
        var self = this;
        rl.on('line', function(line) {
            // console.log(line)

        }).on('close', function() {

        });

        var contents = fs.readFileSync(file, 'utf8').split('\n');
       // console.log(contents.split(''));
       for (var i = 0; i < contents.length; i++) {
            // console.log(contents[i])
            self._add(contents[i].replace('\r', ''), cur);
       };

        contents = null;
        return true;
    };

    module.exports = Trie;
    //  function cb(){
    //         console.log('Tata')
    //     }
    // var filePath = '../dict/sample_words.txt';
    // var trie = new Trie();
    // trie.build(filePath, cb)

})();
