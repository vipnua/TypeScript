export class Pokemon {
    ablities: any[];
    height: Number;
    id: Number;
    image: String;
    name: String;
    type: any[];
    weight: Number;
    constructor(ablities: any[], height: Number, id: Number, image: String, name: String, type: any[], weight: Number) {
        this.ablities = ablities;
        this.height = height;
        this.id = id;
        this.image = image;
        this.name = name;
        this.type = type;
        this.weight = weight
    }
}