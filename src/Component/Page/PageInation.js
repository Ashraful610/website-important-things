import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Page from "./Page";

const PageInation = () => {
  const [items , setItems] = useState([])
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/items?page=${page}`)
      .then((res) => res.json())
      .then((data) =>setItems(data));
  }, [page]);

  useEffect(() => {
    fetch("http://localhost:5000/pageCount")
      .then((res) => res.json())
      .then((data) => {
        const pageCount = data.pageCount;
        const page = Math.ceil(pageCount / 10);
        setPages(page);
      });
  }, [pages]);

  if(!items){
    return <Loading></Loading>
  }

  return (
    <div className="p-20">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Item</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
                items?.map(item => <Page key={item._id} item={item} items={items}></Page>)
            }
          </tbody>
        </table>
        <div className="p-5">
          {[...Array(pages).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={`w-[30px] h-[30px] rounded border-2 border-teal-500 mx-2 ${
                page === number ? "bg-blue-300 text-white font-bold " : ""
              }`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageInation;
