export class UserModel {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    static fromJson(json: any): UserModel {
        return new UserModel(
            json.id,
            json.name,
            json.email,
            json.password,
            new Date(json.createdAt),
            new Date(json.updatedAt)
        );
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString()
        };
    }
}