export class Utils {
    
    public static getCompleteHost(): string {
        return 'localhost' + this.getPort();
    }

    public static getPort(): string {
        return ':4200';
    }

    public static getCurrentUser(): any {
        // Dovrebbe esserci un sistema di sicurezza, ma ora banalizziamo con questo metodo.
        let user:any = {id:1, name: 'Armando Autuori', avatarIMG: "https://www.svgrepo.com/show/81103/avatar.svg"}
        return user;
    }

    public static getUserByID(id:number): any {
        const allUsers = [{
            id:1, name: 'Armando Autuori', avatarIMG: "https://www.svgrepo.com/show/81103/avatar.svg"
        },
        {
            id:2, name: 'Batman', avatarIMG: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png"
        },
        {
            id:11, name: 'Iron Man', avatarIMG: "https://www.iconninja.com/files/335/464/40/iron-saver-superhero-hero-ironman-man-super-icon.png"
        },
        {
            id:22, name: 'Willy il Coyote', avatarIMG: "https://i1.sndcdn.com/avatars-000592085856-0tg0r9-t200x200.jpg"
        }]
        return allUsers.find(e => e.id === id);
    }


}