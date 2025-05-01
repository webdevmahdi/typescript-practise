{
    type PersonDetails = {
        name: string;
        email: string;
        phoneNo?: string;
        bloodGroup: 'A+' | 'B+' | 'AB+';
        gender: 'Male' | 'Female';
    }

    type Developer = 'Front-end developer' | 'Back-end Developer';

    type User = PersonDetails | Developer;

    const mahdi: User ='Back-end Developer'


    type FrontendDeveloper = {
        skills: string[];
        role: string;
    }
    type FullstackDeveloper = {
        skills: string[];
        designation: string;
    }

    type UltraDeveloper = FrontendDeveloper & FullstackDeveloper;

    const dev : UltraDeveloper = {
        skills: ['Html', 'CSS', 'JAvascript', 'Node.js'],
        role: 'Designing',
        designation: 'Back-end engineer'        
    }



}