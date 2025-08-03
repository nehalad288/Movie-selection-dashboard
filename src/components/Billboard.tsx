import billboardData from "./../data/billboard.json";

export const Billboard = () => {
  const webpImage = billboardData.metadata.storyart;
  const image = billboardData.metadata.boxart;
  const { title, logline } = billboardData;
  
  /** return function renders billboard image and overlay text*/
  return (
    <div className="billboard">
      <picture>
        <source srcSet={webpImage} type="image/webp" />
        <img
          role="image"
          src={image}
          alt={title || "Billboard Image"}
          loading="lazy"
          aria-labelledby="Billboard-image"
        />
      </picture>

      <div className="gradient-overlay image-text">
        <h1 id="billboard-title" className="billboard-title">{title}</h1>
        <p className="billboard-logline">{logline}</p>
      </div>
    </div>
  );
};
