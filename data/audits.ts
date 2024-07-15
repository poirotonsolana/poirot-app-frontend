export interface Audits {
    id:number;
    name: string; 
    status: string;
    logo: string;
    date:string;
    description:string;
    tags:string[];
    prizepool:string;
}

const audits:Audits[]=[
    {
        id:1,
        name: "Audit 1",
        status: "completed",
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        date: "2024-01-01",
        description:"Audit 1 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
      {
        id:2,
        name: "Audit 2",
        status: "active",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png',
        date: "2024-02-15",
        description:"Audit 2 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
      {
        id:3,
        name: "Audit 3",
        status: "judging",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Eth-diamond-rainbow.png/1024px-Eth-diamond-rainbow.png',
        date: "2024-03-20",
        description:"Audit 3 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
      {
        id:4,
        name: "Audit 4",
        status: "upcoming",
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png',
        date: "2024-04-10",
        description:"Audit 4 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
      {
        id:5,
        name: "Audit 5",
        status: "completed",
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        date: "2024-03-09",
        description:"Audit 5 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
      {
        id:6,
        name: "Audit 6",
        status: "active",
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        date: "2024-01-01",
        description:"Audit 6 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
      {
        id:7,
        name: "Audit 7",
        status: "upcoming",
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        date: "2024-01-01",
        description:"Audit 7 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
      {
        id:8,
        name: "Audit 8",
        status: "judging",
        logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
        date: "2024-01-01",
        description:"Audit 8 description.",
        tags:["Hardhat","Foundry"],
        prizepool:"1000 BTC"
      },
]

export default audits;