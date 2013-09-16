function breakOn(obj, prop, mode){

    var value = obj[prop]

    Object.defineProperty(obj, prop, {
        get: function () {
            if ( mode == 'read' )
                debugger;
            return value;
        },
        set: function(val) {
            debugger;
            value = val;
            return val;
        }
    });

};
