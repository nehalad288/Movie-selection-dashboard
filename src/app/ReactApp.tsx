import "../styles/app.css";
import { useState } from "react";
import { Home } from "./../components/Home";
import { Mylist } from "./../components/Mylist";
import gridData from "./../data/grid.json";
import videos from "./../data/videos.json";
import { Show } from "../components/GridBox";
import { Tabs } from "../components/Tabs";

/**
 * Construct allShowData by getting the meta data from videos for all the ids in the grid.json
 */
const allShowData = gridData.grid.map((id) => {
  const meta = videos.videos[id.toString() as keyof typeof videos.videos];
  return {
    id: meta.id,
    title: meta.title,
    image: meta.boxart,
    inMyList: false,
  };
});

type ActionType = "add" | "remove";

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [myshows, setMyShows] = useState<Show[]>([]);
  const [allShows, setAllShows] = useState(allShowData);

  /**
   * Updates the "My List" status of a show, adding or removing it from the list.
   *
   * @param show - The show to update
   * @param action - Either "add" to include the show in the list, or "remove" to exclude it
   */
  const handleUpdateMyList = (show: Show, action: ActionType) => {
    // Find the index of the show in the complete list of shows
    const index = allShows.findIndex((s) => s.id === show.id);

    // If the show is not found in allShows, exit early
    if (index === -1) return;

    // Create a new show object with the updated inMyList status
    const updatedShow: Show = {
      ...show,
      inMyList: action === "add",
    };

    // Copy the allShows array to avoid mutating state directly
    const updatedAllShows = [...allShows];

    // Replace the old show with the updated show at the found index
    updatedAllShows.splice(index, 1, updatedShow);

    // Update the myShows list based on the action
    if (action === "add") {
      // Add the updated show to myShows
      setMyShows((prev) => [...prev, updatedShow]);
    } else {
      // Remove the show from myShows by filtering it out
      setMyShows((prev) => prev.filter((s) => s.id !== show.id));
    }

    // Update the complete list of shows with the updated show info
    setAllShows(updatedAllShows);
  };

  /** List of tabs */
  const tabs = [
    {
      name: "Home",
      component: Home,
      data: allShows,
    },
    {
      name: "My list",
      component: Mylist,
      data: myshows,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  const activeData = tabs[activeTab].data;
  
  return (
    <div className="main-container">
      <div className="container">
        <Tabs tabs={tabs} activeIndex={activeTab} onTabClick={setActiveTab} />
        <ActiveTabComponent
          shows={activeData}
          updateMyList={handleUpdateMyList}
        />
      </div>
    </div>
  );
};
