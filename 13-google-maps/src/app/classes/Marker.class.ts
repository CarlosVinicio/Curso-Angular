export class Marker {

    public title = 'Título por defecto';
    public desc = 'Descipcion por defecto';
    public lat = null;
    public lng = null;

    constructor(lat: any, lng: any) {
        this.lat = lat;
        this.lng = lng;
    }
}