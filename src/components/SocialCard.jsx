import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SocialCard({ name, followers, today, icon, down }) {
    const { dark } = useContext(ThemeContext);

    return (
        <div
            className={`p-6 rounded-lg text-center transition ${dark ? "bg-slate-800" : "bg-slate-200"}`}>
        <div className="flex item-center justify-center gap-2">
            <img src={icon} alt="" />        
            <p className={`${dark ? "text-gray-400" : "text-gray-500"}`}>{name}</p>
        </div>
        <h2 className="text-4xl font-bold my-3">
            {followers}
        </h2>

        <p className={`${dark ? "text-gray-400" : "text-gray-500"} tracking-widest`}>
            FOLLOWERS
        </p>
        <div className="flex item-center justify-center ">
            <img src={down} alt="" className="h-[5px] mt-5 mr-2"/>
            <p className="text--500 mt-2">
                {today} Today
            </p>
        </div>
        </div>
    );
}
