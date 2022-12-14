const { STATUS_CODES } = require('http');
const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async event => {
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({ message: 'missing the ID from the path' })
    }

    let ID = event.pathParameters.ID;

    const user = await Dynamo.get(ID, tableName).catch(err => {
        console.log("error in Dynamo Get", err);

        return null;
    });

    if (!user) {
        return Responses._204({message: 'no ID in data'});
    }
    
    return Responses._200({user});
}