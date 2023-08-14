"use client";
import React, { useState } from "react";

const usePagination = (maxPage: number) => {
  const [page, setPage] = useState(0);
  const onNextPage = () => {
    if (page + 1 < maxPage) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const onBackPage = () => {
    if (page > 0) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  return { page, onNextPage, onBackPage };
};

export default usePagination;
