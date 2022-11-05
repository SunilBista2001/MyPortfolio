import React, { useEffect } from "react";
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  webPortfolio,
  mobilePortfolio,
  gamingPortfolio,
  brandingPortfolio,
  featuredPortfolio,
} from "../../data.js";
import "./portfolio.scss";
const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "web app":
        setData(webPortfolio);
        break;
      case "mobile app":
        setData(mobilePortfolio);
        break;
      case "gaming":
        setData(gamingPortfolio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const List = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "mobile app",
      title: "Mobile App",
    },
    {
      id: "gaming",
      title: "Gaming",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {List.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h4>{d.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
