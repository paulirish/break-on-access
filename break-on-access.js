function breakOn(obj, propertyName, mode) {
    // this is directly from https://github.com/paulmillr/es6-shim
    function getPropertyDescriptor(obj, name) {         
        var property = Object.getOwnPropertyDescriptor(obj, name);
        var proto = Object.getPrototypeOf(obj);
        while (property === undefined && proto !== null) {
            property = Object.getOwnPropertyDescriptor(proto, name);
            proto = Object.getPrototypeOf(proto);
        }
        return property;
    }
    
    function verifyNotWritable() {
        if (mode !== 'read')
            throw "This property is not writable, so only possible mode is 'read'.";
    }
           
    var originalProperty = getPropertyDescriptor(obj, propertyName);
    var newProperty = { enumerable: originalProperty.enumerable };    
    
    if (originalProperty.get || originalProperty.set) {
        // accessor property
        
        if (originalProperty.set) {
            newProperty.set = function(val) {
                debugger;
                originalProperty.set.call(this, val);
            }
        }
        else  {
            verifyNotWritable();
        }
        
        if (originalProperty.get) {            
            newProperty.get = function(val) {
                if (mode === 'read')
                    debugger;
                
                return originalProperty.get.call(this, val);
            }
        }
    }
    else {
        // value property
    
        if (originalProperty.writable) {
            newProperty.set = function(val) {
                debugger;
                originalProperty.value = val;
            }
        }
        else {
            verifyNotWritable();
        }
        
        newProperty.get = function(val) {
            if (mode === 'read')
                debugger;
                
            return originalProperty.value;
        }
    }

    Object.defineProperty(obj, propertyName, newProperty);
};