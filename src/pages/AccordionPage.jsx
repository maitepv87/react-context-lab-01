import { Accordion } from "../components/Accordion";

export const AccordionPage = () => {
  const items = [
    { id: "1245", label: "label1", content: "content 1" },
    { id: "6789", label: "label2", content: "content 2" },
    { id: "9123", label: "label3", content: "content 3" },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
