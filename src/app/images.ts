export class Images {
    category: string[];
    location: string="";
    url: string="";
    username: string="";
    constructor(category: string[], location: string, url: string, username: string) {
        this.category = category;
        this.location = location;
        this.url = url;
        this.username = username;
    }
}