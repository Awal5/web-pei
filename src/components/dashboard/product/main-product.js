import React, { useState } from "react";
import { showFormattedDate } from "@/data";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";
import EmptyState from "@/components/atoms/emptyState";
import Search from "../Search";
import Sorting from "../Sorting";
import Filter from "../Filter";

const MainProduct = props => {
  const { products, errors, onDelete, loading } = props;
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const onFilterHandler = filter => {
    setFilter(filter);
  };

  const onSortHandler = sort => {
    setSort(sort);
  };

  const onSearchHandler = search => {
    setSearch(search);
  };

  const sortedProduct = products.sort((a, b) => {
    if (sort === "ASC" && filter === "date") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else if (sort === "DESC" && filter === "date") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sort === "ASC" && filter === "title") {
      return a.name.localeCompare(b.name);
    } else if (sort === "DESC" && filter === "title") {
      return b.name.localeCompare(a.name);
    } else {
      return products;
    }
  });

  const searchProduct = sortedProduct.filter(product => {
    if (!search) {
      return products;
    }
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return <Loading />;
  } else if (products.length === 0) {
    return (
      <EmptyState
        title="Produk"
        errors={errors}
        addLink="/dashboard/products/create"
      />
    );
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Produk</h1>
      </div>
      <div className="table-responsive">
        <div className="d-flex justify-content-between">
          <Link
            className="btn btn-success mb-3"
            to="/dashboard/products/create"
          >
            Tambahkan Produk +
          </Link>
          <div className="w-50 d-flex justify-content-end gap-2">
            <Filter filter={filter} onFilterHandler={onFilterHandler} />
            <Sorting sort={sort} onSortHandler={onSortHandler} />
            <Search search={search} onSearchHandler={onSearchHandler} />
          </div>
        </div>

        <table className="table table-striped table-sm text-center">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Produk</th>
              <th scope="col">Dibuat Pada</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {searchProduct.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>
                    <p className="text-break">{product.name}</p>
                  </td>

                  <td>{showFormattedDate(product.createdAt)}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/dashboard/products/${product.slug}`}
                      title="Detail"
                    >
                      <i className="bi bi-eye"></i>
                    </Link>

                    <Link
                      to={`/dashboard/products/edit/${product.slug}`}
                      className="btn btn-warning mx-3"
                      title="Edit"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>

                    <Button
                      className="btn btn-danger"
                      title="Delete"
                      onClick={() => onDelete(product.slug)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MainProduct;
