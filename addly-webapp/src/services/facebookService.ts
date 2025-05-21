import axios from 'axios';

export class FacebookService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://graph.facebook.com/v12.0'; // Example API version
    }

    async fetchFacebookData(accessToken: string, userId: string) {
        try {
            const response = await axios.get(`${this.apiUrl}/${userId}`, {
                params: {
                    access_token: accessToken,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error fetching Facebook data: ${error.message}`);
        }
    }

    async updateFacebookData(accessToken: string, userId: string, data: object) {
        try {
            const response = await axios.post(`${this.apiUrl}/${userId}`, data, {
                params: {
                    access_token: accessToken,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error updating Facebook data: ${error.message}`);
        }
    }
}