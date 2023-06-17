import useAxios from "@/hook/useAxios";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../api";
interface IProps {}

const pageList = [
  {
    label: "Home",
    color: "#ff4d4d",
    id: "home",
  },
  {
    label: "About",
    color: "#c56cf0",
    id: "about",
  },
  {
    label: "Services",
    color: "#ffeaa7",
    id: "services",
  },
  {
    label: "Protfolio",
    color: "#17c0eb",
    id: "protfolio",
  },
  {
    label: "Contact",
    color: "#fd79a8",
    id: "contact",
  },
];

const PageScroll: React.FC<IProps> = () => {
  const onscrollHandler = () => {
    let sec = document.querySelectorAll("section");
    let links = document.querySelectorAll("nav a");
    sec.forEach((section) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 60;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (top >= offset && top < offset + height) {
        links.forEach((link) => {
          link.classList.remove("active");
          document
            .querySelector("nav a[href*=" + id + "]")
            ?.classList.add("active");
        });
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", onscrollHandler);

    return () => window.removeEventListener("scroll", onscrollHandler);
  }, []);
  return (
    <div className="page-scroll">
      <header className="page-scroll-header">
        <a href="" className="logo">
          LOGO
        </a>
        <nav>
          {pageList.map((page) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              style={{ "--clr": page.color } as React.CSSProperties}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="page-scroll-content">
        {pageList.map((page) => (
          <section
            key={page.id}
            id={page.id}
            style={{ "--clr": page.color } as React.CSSProperties}
          >
            {page.label}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PageScroll;
