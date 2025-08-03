import { useState, useEffect, useRef, MouseEvent } from "react";

export interface Show {
  id: number;
  title: string;
  image: string;
  inMyList: boolean;
}

export interface GridBoxProps {
  show: Show;
  onSelect: () => void;
}

export const GridBox = ({ show, onSelect }: GridBoxProps) => {
  const { title, image, inMyList } = show;
  const [isSelected, setIsSelected] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    // Prevents from rendering the border if clicked on the button
    if ((e.target as HTMLElement).closest("button")) return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsSelected(!isSelected);

    // Remove the border after 2 seconds (2000ms)
    timeoutRef.current = setTimeout(() => {
      setIsSelected(false);
    }, 2000);
  };

  // Clear the timeoutRef
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  /** return function renders the grid box containing
   *  the image and button for adding and removing the show from the list
   **/
  return (
    <div
      className={`grid-box ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <img src={image} alt={title} loading="lazy" />
      <button
        className="grid-box-button"
        onClick={onSelect}
        title={
          inMyList
            ? "Click to remove from your list"
            : "Click to add to your list"
        }
      >
        {inMyList ? (
          <>
            <img
              src="/assets/icons/checkmark.svg"
              className="grid-box-button-image"
            />
            <span className="grid-box-button-text">Remove from my List</span>
          </>
        ) : (
          <>
            <img
              src="/assets/icons/add.svg"
              className="grid-box-button-image"
            />
            <span className="grid-box-button-text">Add to my list</span>
          </>
        )}
      </button>
    </div>
  );
};
