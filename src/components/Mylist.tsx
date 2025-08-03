import { GridBox, Show } from "./GridBox";

export interface CommonProps {
  shows: Array<Show>;
  updateMyList: (show: Show, action: "add" | "remove") => void;
}

export const Mylist = ({ shows, updateMyList }: CommonProps) => {
  
  const removeFromList = (show: Show) => {
    updateMyList(show, "remove");
  };
  
  /** return function renders the my list view containing the selected shows */
  return (
    <div className="mylist-container" aria-label="My saved videos">
      {shows.length ? (
        shows.map((show, index) => (
          <GridBox
            key={index}
            show={show}
            onSelect={() => removeFromList(show)}
          />
        ))
      ) : (
        <p>There are no videos in your list</p>
      )}
    </div>
  );
};
