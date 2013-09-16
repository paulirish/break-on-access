function breakOn(obj, prop, mode){

    var origValue = obj[prop]

    Object.defineProperty(obj, prop, {
        get: function () {
            if ( mode == 'read' )
                debugger;
            return origValue;
        },
        set: function(val) {
            debugger;
            origValue = val;
            return val;
        }
    });

};
