export class WebsiteModel {
    constructor(
        public id: string,
        public name: string,
        public url: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    static fromData(data: any): WebsiteModel {
        return new WebsiteModel(
            data.id,
            data.name,
            data.url,
            new Date(data.createdAt),
            new Date(data.updatedAt)
        );
    }

    toData(): any {
        return {
            id: this.id,
            name: this.name,
            url: this.url,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString()
        };
    }
}