function breakOn(obj, prop, mode, stopped){

    var origValue = obj[prop]

    stopped = stopped || false;

    Object.defineProperty(obj, prop, {
        get: function () {
            if ( !stopped && mode == 'read' )
                debugger;
            else if ( typeof mode === 'function' && mode(origValue) === true )
                debugger;
            return origValue;
        },
        set: function(val) {
            if ( !stopped && ( typeof mode !== 'function' || (typeof mode === 'function' && mode(val) === true ) ) )
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
