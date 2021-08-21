
export class User_New {

    constructor(id?: string, b_username?: string, createdAt?: Date, twitter?: Object) {
        this.id = id ? id : null;
        this.b_username = b_username ? b_username : '';
        this.createdAt = createdAt ? createdAt : null;
        this.twitter = twitter ? twitter : null
    }

    id: string;
    b_username: string;
    createdAt: Date;
    twitter: Object // TODO: add twitter model here


    map(data: any) {
        for (const key in data) {
            this[key] = data[key]
        }
        return this;
    }

    saveState() {
        const result = Object.assign({}, this);
        delete result.id
        return result;
    }

}
