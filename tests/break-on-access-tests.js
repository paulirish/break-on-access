"use strict";

test("Simple value (get+set)", function() {
    var obj = { x: 'before' };
    breakOn(obj, 'x');
    obj.x = 'after';
    
    ok(obj.x == "after");
});

test("Simple value in prototype (get+set)", function() {
    var Constructor = function() {};
    Constructor.prototype = { x: 'before' };
    
    var obj = new Constructor();
    breakOn(obj, 'x');
    obj.x = 'after';
    
    ok(obj.x == "after");
});

test("Accessors (get+set)", function() {
    var obj = {};
    Object.defineProperty(obj, 'x', {
        configurable: true,
        get: function() { return this['_x']; },
        set: function(value) { this['_x'] = value; }
    });
    
    obj.x = 'before';
    breakOn(obj, 'x');
    obj.x = 'after';
    
    ok(obj.x == "after");
});

test("Accessors in protype (get+set)", function() {
    var Constructor = function() {};
    Object.defineProperty(Constructor.prototype, 'x', {
        configurable: true,
        get: function() { return this['_x']; },
        set: function(value) { this['_x'] = value; }
    });
    
    var obj = new Constructor();
    
    obj.x = 'before';
    breakOn(obj, 'x');
    obj.x = 'after';
    
    ok(obj.x == "after");
});

[false, true].forEach(function(enumerable) {
    test("Enumerable=" + enumerable + " preserved", function() {
        var obj = {};
        Object.defineProperty(obj, 'x', {
            configurable: true,
            enumerable: enumerable,
            writable: true,
            value: 'value'
        });
        
        breakOn(obj, 'x');
        
        var found = false;
        for (var property in obj) {
            if (property === 'x')
                found = true;
        }
        
        ok(found === enumerable);
    });
});