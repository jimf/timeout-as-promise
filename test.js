'use strict';

var test = require('tape'),
    delay = require('./');

test('when given no arguments', { timeout: 5 }, function(t) {
    t.plan(1);

    delay()
        .then(function() {
            t.pass('should resolve after 0ms');
            t.end();
        })
        .catch(function() {
            t.fail('should resolve');
            t.end();
        });
});

test('when given a timeout in ms', { timeout: 15 }, function(t) {
    t.plan(1);

    delay(10)
        .then(function() {
            t.pass('should resolve after given ms');
            t.end();
        })
        .catch(function() {
            t.fail('should resolve');
            t.end();
        });
});

test('when given a timeout and additional args', { timeout: 15 }, function(t) {
    t.plan(1);

    delay(10, 'foo')
        .then(function(val) {
            t.equal(val, 'foo', 'should resolve with given args');
            t.end();
        })
        .catch(function() {
            t.fail('should resolve');
            t.end();
        });
});
