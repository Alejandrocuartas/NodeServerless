import express from 'express';
import cors from 'cors';

import router from './router';

class ServerModel {
    private origin
    private port

    app

    constructor() {
        this.app = express();

        this.origin = "*";
        this.port = 3000;

        this.middlewares();
        this.routes();

    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            origin: this.origin,
        }));
    }

    routes() {
        this.app.use("/v1", router)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Listening at', this.port);
        });
    }
}

export default ServerModel;
