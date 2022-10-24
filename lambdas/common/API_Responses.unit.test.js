const Responses = require('./API_Responses');

test('Responses is an object', () => {
    expect(typeof Responses).toEqual('object');
});

test('_200 works', () => {
    const res = Responses._200({name: 'josh'});

    expect(res.statusCode).toEqual(200);
    expect(typeof res.body).toEqual('string');
    expect(res.headers['Content-Type']).toEqual('application/json');
});

test('_204 works', () => {
    const res = Responses._204({name: 'josh'});

    expect(res.statusCode).toEqual(204);
    expect(typeof res.body).toEqual('string');
    expect(res.headers['Content-Type']).toEqual('application/json');
});

test('_400 works', () => {
    const res = Responses._400({name: 'josh'});

    expect(res.statusCode).toEqual(400);
    expect(typeof res.body).toEqual('string');
    expect(res.headers['Content-Type']).toEqual('application/json');
});