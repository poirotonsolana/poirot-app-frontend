import { StaticImageData } from 'next/image';
import Logo from '../public/a0014888b45ec0d1d61d90b0522a2651.jpg'

export interface Audits {
    id:number;
    name: string; 
    status: string;
    logo: string;
    date:string;
}

const audits:Audits[]=[
    {
        id:1,
        name: "Audit 1",
        status: "completed",
        logo: '/a0014888b45ec0d1d61d90b0522a2651.jpg',
        date: "2024-01-01"
      },
      {
        id:2,
        name: "Audit 2",
        status: "active",
        logo: '/a0014888b45ec0d1d61d90b0522a2651.jpg',
        date: "2024-02-15"
      },
      {
        id:3,
        name: "Audit 3",
        status: "judging",
        logo: '/a0014888b45ec0d1d61d90b0522a2651.jpg',
        date: "2024-03-20"
      },
      {
        id:4,
        name: "Audit 4",
        status: "upcoming",
        logo: '/a0014888b45ec0d1d61d90b0522a2651.jpg',
        date: "2024-04-10"
      }
]

export default audits;