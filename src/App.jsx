import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import SocialCard from "./components/SocialCard";
import OverviewCard from "./components/OverviewCard";
import iconFacebook from "./assets/images/icon-facebook.svg"
import iconTwitter from './assets/images/icon-twitter.svg'
import iconYoutube from './assets/images/icon-youtube.svg'
import iconInstagram from  './assets/images/icon-instagram.svg'
import iconDown  from './assets/images/icon-down.svg'
import iconUp from './assets/images/icon-up.svg'
export default function App() {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-8 transition ${dark ? "bg-slate-900 text-white" : "bg-white text-black"}`}>
      <Header />

      {/* SOCIAL CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <SocialCard name="@nathanf" followers="1987" today="12" down={iconUp} icon={iconFacebook}/>
        <SocialCard name="@nathanf" followers="1044" today="99" down={iconUp} icon={iconTwitter} />
        <SocialCard name="@realnathanf" followers="11k" today="1099" down={iconUp} icon={iconYoutube}/>
        <SocialCard name="Nathan F." followers="8239" today="144" down={iconDown} icon={iconInstagram} />
      </div>

      {/* OVERVIEW */}
      <h2 className="text-2xl font-bold mb-6">
        Overview - Today
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        <OverviewCard title="Page Views" number="87" percent="3" icon={iconFacebook} down={iconUp}/>
        <OverviewCard title="Likes" number="52" percent="2" icon={iconFacebook} down={iconDown}/>
        <OverviewCard title="Likes" number="52" percent="2257" icon={iconInstagram} down={iconUp} />
        <OverviewCard title="Profile Views" number="117" percent="1375" icon={iconInstagram} down={iconUp}/>
        <OverviewCard title="Retweets" number="52" percent="303" icon={iconTwitter} down={iconUp}/>
        <OverviewCard title="Likes" number="52k" percent="553" icon={iconTwitter} down={iconUp}/>
        <OverviewCard title="Likes" number="117" percent="19" icon={iconYoutube} down={iconDown}/>
        <OverviewCard title="Total Views" number="117" percent="12"  icon={iconYoutube} down={iconDown}/>
      </div>
    </div>
  );
}
