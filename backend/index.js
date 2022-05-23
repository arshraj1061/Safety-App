'use strict';
const environment = require('../src/environments/environment')
const Hapi = require('@hapi/hapi');
const Nexmo = require('nexmo');
const {
    Console
} = require('console');

const nexmo = new Nexmo({
    apiKey: environment.NEXMO_API_KEY, /** PUT YOUR KEY HERE! **/
    apiSecret: environment.NEXMO_SECRET_KEY /** PUT YOUR SECRET HERE! **/
}, {
    debug: true
});

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });
    server.route({
        method: 'POST',
        path: '/send-sms',
        options: {
            cors: true,
            handler: async (request, h) => {
                const payload = request.payload;
                const result = await new Promise((resolve, reject) => {
                    nexmo.message.sendSms(payload.from, payload.to, payload.text, (error, response) => {
                        if (error) {
                            return reject(error)
                        } else {
                            return resolve(response);
                        }
                    });
                });

                console.log(JSON.stringify(result));

                if (result.messages[0].status === '0') {
                    // alert("Message sent!")
                    return { message: 'Message sent!' };
                } else {
                    // alert({message: result.messages[0]['error-text']});
                    return { message: result.messages[0]['error-text'] };
                }
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();