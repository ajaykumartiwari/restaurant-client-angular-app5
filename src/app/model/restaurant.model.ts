export class Restaurant{
    id: number;
    name: string;
    location: string;
    cuisines: string;
    image: string;
    review: string;

    constructor(id, name, location, cuisines, image, review){

        this.id = id;
        this.name = name;
        this.location = location;
        this.cuisines = cuisines;
        this.image = image;
        this.review = review;
    }
}