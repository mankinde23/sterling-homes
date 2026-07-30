"use client";
import React, { useState, useMemo } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CATEGORIES = [
  {
    name: "Tax",
    docs: [
      {
        title: "Tax Questionnaire",
        description: "Client tax preparation form",

        href: "https://docs.google.com/forms/d/e/1FAIpQLSdeJp2lq83lxrUDRNYo6AfPM_9isyE4i0sZU2YLewZ0i-8VPg/viewform",
      },
    ],
  },
  {
    name: "Real Estate",
    docs: [
      {
        title: "Real Estate Questionnaire",
        description: "Property needs and preferences",

        href: "https://docs.google.com/forms/d/e/1FAIpQLSfTJ8xXkwKR9uylMKSxit9SDGVbYjYmViQibnyrNjbJmUC77A/viewform",
      },
    ],
  },
];

function DocRow({ doc }) {
  return (
    <a
      href={doc.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[0.75rem] py-[0.9rem] px-[1.5rem] border-b border-stroke-main border-opacity-17 hover:bg-sterling-theme hover:bg-opacity-[0.06] transition duration-300 ease-in-out group"
    >
      <HiOutlineDocumentText className="text-nav-text opacity-60 w-[1.25rem] h-[1.25rem] flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-nav-text text-[0.875rem] font-medium leading-normal truncate">
          {doc.title}
        </p>
        <p className="text-footer-test1 text-[0.6875rem] font-light leading-normal truncate">
          {doc.description}
        </p>
      </div>
      <FiExternalLink className="text-sterling-theme w-[1rem] h-[1rem] flex-shrink-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out" />
    </a>
  );
}

export default function DocsModal({ open, onOpenChange }) {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.map((cat) => ({
      ...cat,
      docs: cat.docs.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q),
      ),
    })).filter((cat) => cat.docs.length > 0);
  }, [query]);

  const hasResults = filteredCategories.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-navbar-bg backdrop-blur-[7px] border-stroke-main border-opacity-17 p-0 gap-0 max-w-[34rem] max-h-[80vh] flex flex-col overflow-hidden ring-transparent">
        <DialogHeader className="px-[1.5rem] pt-[1.5rem] pb-[1rem] space-y-0">
          <DialogTitle className="text-sterling-theme text-[1.375rem] font-semibold leading-normal text-left">
            Docs
          </DialogTitle>
          <DialogDescription className="text-footer-test1 text-[0.75rem] font-light leading-normal mt-[0.15rem] text-left">
            Find the form you need
          </DialogDescription>
        </DialogHeader>

        {/* Search */}
        <div className="px-[1.5rem] pb-[1rem]">
          <div className="flex items-center gap-[0.6rem] bg-light-gray bg-opacity-10 border border-stroke-main border-opacity-17 rounded-md px-[0.9rem] h-[2.6rem]">
            <IoSearchOutline className="text-nav-text opacity-50 w-[1.1rem] h-[1.1rem] flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search documents..."
              className="bg-transparent outline-none w-full text-nav-text text-[0.8125rem] font-light placeholder:text-footer-test1"
            />
          </div>
        </div>

        {/* List */}
        <div className="overflow-y-auto flex-1 border-t border-stroke-main border-opacity-17">
          {hasResults ? (
            filteredCategories.map((cat) => (
              <div key={cat.name}>
                <p className="text-sterling-theme text-[0.6875rem] font-semibold tracking-[0.05em] uppercase px-[1.5rem] pt-[0.9rem] pb-[0.3rem]">
                  {cat.name}
                </p>
                {cat.docs.map((doc) => (
                  <DocRow key={doc.title} doc={doc} />
                ))}
              </div>
            ))
          ) : (
            <p className="text-footer-test1 text-[0.8125rem] font-light text-center py-[2.5rem]">
              {`No documents match "${query}"`}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
