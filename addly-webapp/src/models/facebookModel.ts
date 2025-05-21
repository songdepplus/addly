export class FacebookModel {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public profilePicture: string,
        public friends: string[],
        public posts: string[]
    ) {}

    public updateProfile(name: string, email: string, profilePicture: string): void {
        this.name = name;
        this.email = email;
        this.profilePicture = profilePicture;
    }

    public addFriend(friendId: string): void {
        if (!this.friends.includes(friendId)) {
            this.friends.push(friendId);
        }
    }

    public removeFriend(friendId: string): void {
        this.friends = this.friends.filter(friend => friend !== friendId);
    }

    public addPost(postId: string): void {
        this.posts.push(postId);
    }

    public deletePost(postId: string): void {
        this.posts = this.posts.filter(post => post !== postId);
    }
}