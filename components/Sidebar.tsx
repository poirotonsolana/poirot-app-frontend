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
  ShoppingBagIcon,

} from "@heroicons/react/24/solid";

  import Link from "next/link";
  import poirotLogo from '../public/logo.png'
  import Image from "next/image";
   
  export default function Sidebar() {
    return (
      <Card className="h-[calc(100vh-2rem)] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 border-r-2">
        <div className="mb-2 p-4 flex items-center justify-center">
          <Typography variant="h5" color="blue-gray">
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
        <List>
          <Link href={"/contests"}>
              <ListItem className="text-lg">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Contests
              </ListItem>
          </Link><hr className="h-3 w-48 border-t-2"/>

          <Link href={"/leaderboard"}>
              <ListItem className="text-lg">
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                Leaderboard
              </ListItem>
          </Link>
        </List>
      </Card>
    );
  }