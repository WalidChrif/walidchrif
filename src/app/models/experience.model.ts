export interface Experience {

    company : string;
    position : string;
    tasks? : string[];
    startDate : Date;
    endDate : Date | string;
    location : string;

}
