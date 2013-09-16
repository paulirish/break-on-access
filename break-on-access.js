function breakOn(obj, prop, mode, stopped){

    var origValue = obj[prop]

    stopped = stopped || false;

    Object.defineProperty(obj, prop, {
        get: function () {
            if ( !stopped && mode == 'read' )
                debugger;
            return origValue;
        },
        set: function(val) {
            if ( !stopped )
                debugger;
            origValue = val;
            return val;
        }
    });

    return {
        start: function() {
            stopped = false;
        },

        stop: function() {
            stopped = true;
        }
    };
};
