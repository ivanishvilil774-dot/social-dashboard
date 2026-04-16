import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function OverviewCard({ title, number, percent, icon, down }) {
    const { dark } = useContext(ThemeContext);

    return (
        <div className={`p-5 rounded-lg ${dark ? "bg-slate-800" : "bg-slate-200"}`}>
            <div className="flex item-center justify-between">
                <p className={`${dark ? "text-gray-400" : "text-gray-500"}`}>
                    {title}
                </p>
                <img src={icon} alt="" />
            </div>
            <div className="flex justify-between mt-4">
                <h3 className="text-2xl font-bold">{number}</h3>
                <div className="flex item-center justify-center">
                    <img src={down} alt="" className="h-2 mt-2 mr-1w-2" />
                    <span>{percent}%</span>
                </div>
            </div>
        </div>
    );
}
