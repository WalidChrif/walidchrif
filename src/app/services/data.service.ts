import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {


  myClass = 'timeline-unverted';

  walid: Person = {
    fullName: 'Walid Chrif',
    title: 'FullStack Developer',
    phone: '+212660701821',
    email: 'walid.chrif111@gmail.com',
    website: '',
    address: 'Lotissemnt Al Hamd Rue 01 Nr 36 Sidi Moumen, Casablanca',
    profileDescription:
      'I am a junior Full Stack Developer with proven expertise in Angular for ' +
      'front-end and Spring for back-end. Successfully led the development of a real estate and vacation ' +
      'platform, and an E-commerce website, showcasing my ability to navigate the entire process from ' +
      'conception to  completion. Committed to continuous skill development, I actively seek professional ' +
      'experiences to amplify my proficiency and broaden my industry knowledge.',
    links: [
      { name: 'GitHub', url: '//www.github.com/WalidChrif' },
      { name: 'LinkedIn', url: '//www.linkedin.com/in/walid-chrif' },
      {
        name: 'Facebook',
        url: '//www.facebook.com/profile.php?id=100090756348995',
      },
    ],
    experiences: [
      {
        position: 'Content Moderator',
        company: 'Majorel',
        startDate: new Date(2022, 9-1, 19).toDateString().split(' ').slice(1).join(' '),
        endDate: new Date(2023, 7-1, 21).toDateString().split(' ').slice(1).join(' '),
        location: 'Casablanca',
        tasks: ['Handle and manage multimedia content.'],
      }
    ],
    education: [
      {
        diploma: 'Professional Licence',
        major: 'Java/JEE',
        school: 'FST Settat',
        graduationDate: new Date(2023,7-1,25).toDateString().split(' ').slice(1).join(' '),
        tasks: [
          'Design and development of a real estate and vacation' +
            'management platform (HTML5, CSS3, Angular Material, Angular,' +
            'SpringBoot, Hibernate, MySql).',
        ],
      },
      {
        diploma: 'Bachelor Degree',
        major: 'English Studies',
        school: "FLSH Ben M'sik",
        graduationDate: 'ongoing',
        tasks: [
          'Research Project : Cultural Traditions in Transition; ' +
            'Contrasting the Impact of Heritage on America and Morocco.',
        ],
      },
      {
        diploma: 'Specialized Technicien Diploma',
        major: 'IT Development',
        school: "ISTA Sidi Maarouf",
        graduationDate: new Date('11 Jul 2020').toDateString().split(' ').slice(1).join(' '),
      },
      {
        diploma: 'Baccalaureate',
        major: 'Experimental Science',
        school: 'Lycee Moulay Driss',
        graduationDate: new Date(2018, 6-1, 20).toDateString().substring(new Date(2018, 7-1, 20).toDateString().indexOf(' ')),
      },
    ],
  };

  getPerson(): Person {
    return this.walid;
  }
  getAboutInfo() {
    return {
      FullName: this.walid.fullName,
      Phone: this.walid.phone,
      Email: this.walid.email,
      Address: this.walid.address,
      Website: this.walid.website,
    };
  }
  getExperiences() {
    return this.walid.experiences;
  }
  getEducation() {
    return this.walid.education;
  }
  getFullName(): string {
    return this.walid.fullName;
  }
  getPhone(): string {
    return this.walid.phone;
  }
  getEmail(): string {
    return this.walid.email;
  }
  getAddress() {
    return this.walid.address;
  }
  getWebsite() {
    return this.walid.website;
  }
  getProfileDescription() {
    return this.walid.profileDescription;
  }
  getLinks() {
    return this.walid.links;
  }
  getSiteIcon(site: string) {
    return site === 'linkedin' || 'github'
      ? site.toLocaleLowerCase() + '2'
      : site.toLocaleLowerCase() + '3';
  }

  // getClass() : string {   
  //   if (DataService.myClass === 'timeline-inverted') {
  //     DataService.myClass = 'timeline-unverted';
  //     return DataService.myClass;
  //   } else {
  //     DataService.myClass = 'timeline-inverted'
  //     return DataService.myClass;
  //   }
  // }
  getClass() : string {   
    if (this.myClass === 'timeline-inverted') {
      this.myClass = 'timeline-unverted';
      return this.myClass;
    } else {
      this.myClass = 'timeline-inverted'
      return this.myClass;
    }
  }
}
