import { Billboard } from "./Billboard";
import { GridBox, Show } from "./GridBox";
import { CommonProps } from "./Mylist";

export const Home = ({ shows, updateMyList }: CommonProps) => {
  const toggleShowInList = (show: Show) => {
    const action = show.inMyList ? "remove" : "add";
    updateMyList(show, action);
  };
  /** return function renders the home view containing the billboard and the grid of shows */
  return (
    <div className="home">
      <Billboard />
         {shows.length ? (
        shows.map((show) => (
          <GridBox
            key={show.id}
            show={show}
            onSelect={() => toggleShowInList(show)}
          />
        ))
      ) : (
        <p>There are no shows available</p>
      )}
    </div>
  );
};
