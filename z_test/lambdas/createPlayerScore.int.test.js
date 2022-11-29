const createPlayerScore = require('../../lambdas/endpoints/createPlayerScore');
const eventGenerator = require('../testUtils/eventGenerator');
const validators = require('../testUtils/validators');

describe('create player score intregation test', () => {
    test('it should take a body and return an API Gateway response', async () => {
        const event = eventGenerator({
            body: {
                name: 'tom',
                score: 43
            }
        });

        const res = await createPlayerScore.handler(event);

        expect(res).toBeDefined();
        expect(validators.isApiGatewayResponse(res)).toBe(true);
    });

    test('should return a 200 with the player if the player is valid', async () => {
        const event = eventGenerator({
            body: {
                name: 'tom',
                score: 43,
            },
            pathParametersObject: {
                ID: 'jgugvcnje49',
            },
        });
        
        const res = await createPlayerScore.handler(event);

        expect(res.statusCode).toBe(200);
        const body = JSON.parse(res.body);
        expect(body).toEqual({
            newUser: {
                name: 'tom',
                score: 43,
                ID: 'jgugvcnje49',
            }
        });
    });
});