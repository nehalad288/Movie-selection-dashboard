interface Tab {
  name: string;
}
interface TabsProps {
  tabs: Array<Tab>;
  activeIndex: number;
  onTabClick: (index: number) => void;
}

export const Tabs = ({ tabs, activeIndex, onTabClick }: TabsProps) => {
  // Renders the tabs from the tabs list 
  return (
    <div className="tab-container" role="tab-list">
      {tabs.map((tab, index) => (
        <div
          key={tab.name}
          role="tab"
          aria-selected={index === activeIndex}
          className={index === activeIndex ? "tab tab--selected" : "tab"}
          onClick={() => onTabClick(index)}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};
