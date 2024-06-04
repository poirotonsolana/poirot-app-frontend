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
      <Card className="h-[calc(100vh-2rem)] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4 flex items-center justify-center">
          <Typography variant="h5" color="blue-gray">
            <Link href={"/"}>
                <Image
                    src={poirotLogo}
                    alt="logo"
                    width={52}
                    height={48}
                />
            </Link>
          </Typography>
        </div>
        <List>
          <Link href={"/contests"}>
              <ListItem>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Contests
              </ListItem>
          </Link>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>

          <Link href={"/leaderboard"}>
              <ListItem>
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