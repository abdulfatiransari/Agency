import Agencycreate from "../components/Agencycreate";
import Buildmoreapp from "../components/Buildmoreapp";
import Latestwork from "../components/Latestwork";
import Navbar from "../components/Navbar";
import Quality from "../components/Quality";
import Slider from "../components/Slider";
import Subscriptiontiers from "../components/Subscriptiontiers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Agencycreate />
      <Slider />
      <Quality />
      <Buildmoreapp />
      <Latestwork />
      <Subscriptiontiers />
    </div>
  );
}
