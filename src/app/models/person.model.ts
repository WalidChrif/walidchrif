import { Education } from './education.model';
import { Experience } from './experience.model';
import { Link } from './link.model';
import { Project } from './project.model';
import { Service } from './service.model';
import { Skill } from './skill.model';
export interface Person {

    fullName: string;
    title : string;
    phone: string;
    email: string;
    address: string;
    profileDescription: string;
    website?: string;
    links?: Link[];
    experiences? : Experience[];
    education ? : Education[];
    services? : Service[];
    mainSkills? : Skill[];
    otherSkills? : Skill[];
    projects? : Project[];


}
