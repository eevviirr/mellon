import { Favorite } from "../screens/Favorite/Favorite";
import { Home } from "../screens/Home/Home";
import { Profile } from "../screens/Profile/Profile";
import { Search } from "../screens/Search/Search";

import searchIcon from "../../assets/search.png";
import homeIcon from "../../assets/home.png";
import favorite from "../../assets/favorite.png";
import profile from "../../assets/profile.png";

export const authRoute = [
    {
        name: "Home",
        Component: Home,
        icon: homeIcon,
    },
    {
        name: "Profie",
        Component: Profile,
        icon: profile,
    },
    {
        name: "Search",
        Component: Search,
        icon: searchIcon,
    },
    {
        name: "Favorite",
        Component: Favorite,
        icon: favorite,
    },
];
