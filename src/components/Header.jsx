import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
    const { dark, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="flex justify-between items-center mb-10">
        <div>
            <h1 className="text-2xl font-bold">Social Media Dashboard</h1>
            <p className={`${dark ? "text-gray-400" : "text-gray-500"}`}>Total Followers: 23,004</p>
        </div>

        {/* TOGGLE */}
        <div className="flex items-center gap-3">
            <span className={`${dark ? "text-gray-400" : "text-gray-500"}`}>Dark Mode</span>

            <button onClick={toggleTheme} className={`w-14 h-7 flex items-center rounded-full p-1 ${dark ? "bg-gradient-to-r from-blue-500 to-green-400" : "bg-gray-300"}`}>
                <div className={`bg-white w-5 h-5 rounded-full shadow-md transition ${dark ? "translate-x-7" : ""}`}/>
            </button>
        </div>
        </div>
    );
}
