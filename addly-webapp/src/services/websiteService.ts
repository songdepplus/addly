import { WebsiteModel } from '../models/websiteModel';

export class WebsiteService {
    private websiteModel: WebsiteModel;

    constructor() {
        this.websiteModel = new WebsiteModel();
    }

    public async fetchWebsiteData(websiteId: string) {
        return await this.websiteModel.getWebsiteData(websiteId);
    }

    public async updateWebsiteData(websiteId: string, data: any) {
        return await this.websiteModel.updateWebsiteData(websiteId, data);
    }

    public async deleteWebsiteData(websiteId: string) {
        return await this.websiteModel.deleteWebsiteData(websiteId);
    }

    public async createWebsiteData(data: any) {
        return await this.websiteModel.createWebsiteData(data);
    }
}