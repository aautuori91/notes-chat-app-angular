export class Message {
    id: number;
    idUser: number;
    dataMessage: string;
    textMessage: string;

    constructor(id: number,
        idUser: number,
        dataMessage: string,
        textMessage: string) {
        this.id = id;
        this.idUser = idUser;
        this.dataMessage = dataMessage;
        this.textMessage = textMessage;
    }
}