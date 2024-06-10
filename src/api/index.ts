

export class API {
    private url;
    constructor(url: string){
        this.url = url;
    }

    async list() {
        const resp = await fetch(this.url);
        if(!resp.ok){
            throw new Error(`Error: ${resp.status}`);
        }
        const data = await resp.json();
        return data
    }
}