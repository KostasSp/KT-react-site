import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Info";
  }, []);

  return (
    <div>
      <div style={{ background: "Gold" }}>
        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
        IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
        IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
      </div>
    </div>
  );
};

export default About;
