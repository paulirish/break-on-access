function debugAccess(obj, prop, debugGet){
 
    var origValue = obj[prop];
 
    Object.defineProperty(obj, prop, {
        get: function () {
            if ( debugGet )
                debugger;
            return origValue;
        },
        set: function(val) {
            debugger;
            return origValue = val;
        }
    });
 
};
