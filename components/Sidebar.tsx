"use client"
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,

} from "@heroicons/react/24/solid";

  import Link from "next/link";
  import poirotLogo from '../public/logo.png'
  import Image from "next/image";
  import LeaderboardIcon from "./LeaderboardIcon";
  import { Space_Grotesk } from "next/font/google";
  const space = Space_Grotesk({ subsets: ["latin"] });

   
  export default function Sidebar() {
    return (
        <Card
          className="h-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 border-r-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="mb-2 p-4 flex items-center justify-center">
          <Typography 
            variant="h5" 
            color="blue-gray" 
            placeholder="Enter text" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}
          >              
          <Link href={"/"}>
              <Image
                 src={poirotLogo}
                  alt="logo"
                  width={58}
                  height={48}
                  />
              </Link>
            </Typography>
          </div>
          <List
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Link href={"/contests"}>
                <ListItem
                  className="text-lg"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Contests
                </ListItem>
            </Link><hr className="h-3 my-2 w-48 border-t-2"/>
            <Link href={"/leaderboard"}>
                <ListItem
                  className="text-lg"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <ListItemPrefix placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <LeaderboardIcon/>
                  </ListItemPrefix>
                  Leaderboard
                </ListItem>
            </Link>
          </List>
        </Card>
    );
  }