import axios from 'axios';

const BASE_URL = 'https://graph.facebook.com/v12.0';

export const fetchUserData = async (accessToken: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/me`, {
            params: {
                access_token: accessToken,
                fields: 'id,name,email,picture'
            }
        });
        return response.data;
    } catch (error) {
        let message = 'Unknown error';
        if (error && typeof error === 'object' && 'message' in error) {
            message = (error as { message: string }).message;
        }
        throw new Error('Error fetching user data: ' + message);
    }
};

export const postToFeed = async (accessToken: string, message: string) => {
    try {
        const response = await axios.post(`${BASE_URL}/me/feed`, {
            message: message
        }, {
            params: {
                access_token: accessToken
            }
        });
        return response.data;
    } catch (error) {
        let message = 'Unknown error';
        if (error && typeof error === 'object' && 'message' in error) {
            message = (error as { message: string }).message;
        }
        throw new Error('Error posting to feed: ' + message);
    }
};

export const getFriendsList = async (accessToken: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/me/friends`, {
            params: {
                access_token: accessToken
            }
        });
        return response.data;
    } catch (error) {
        let message = 'Unknown error';
        if (error && typeof error === 'object' && 'message' in error) {
            message = (error as { message: string }).message;
        }
        throw new Error('Error fetching friends list: ' + message);
    }
};