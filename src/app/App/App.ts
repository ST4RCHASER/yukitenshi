import { ExpressServer, SocketServer, MySQLClient } from '@yukiTenshi/app';
import { clientConnectedEvent } from './events/clientConnectedEvent';
export class App {
    private httpServer: ExpressServer;
    private socketServer: SocketServer;
    private databaseClient: MySQLClient;
    constructor(httpServer: ExpressServer, socketServer: SocketServer) {
        this.httpServer = httpServer;
        this.socketServer = socketServer;
        return this;
    }
    public async start() {
        //Register slef
        this.socketServer.setApp(this);
        //Register event
        this.socketServer.registerEvent(new clientConnectedEvent());

    }
    public self(): App {
        return this;
    }
}