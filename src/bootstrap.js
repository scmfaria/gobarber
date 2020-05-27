// vai servir basicamente para carregar as variaveis ambiente da aplicacao

import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

