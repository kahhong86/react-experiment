export interface switchGamesJson{
    id: number,
    name: string,
}

export interface weatherApi{
    city: string,
    country: string
}

export interface weatherInfo{
    id: number,
    name: string,
    main: {
        temp_min:number,
        temp_max:number,
        humidity:number,
    },
    sys:{
        country:string,
    },
    weather: [{
        main:string,
        description:string,
    }],
    dt:number,
}