import React, { useState } from "react";
import { showFormattedDate } from "@/data";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";
import EmptyState from "@/components/atoms/emptyState";
import Search from "../Search";
import Sorting from "../Sorting";

const MainProduct = props => {
  const { products, errors, onDelete, loading } = props;
  const [search, setSearch] = useState(""); // State to store the search query
  const [sort, setSort] = useState(""); // State to store the sort option

  /**
   * Handler for sorting the products
   * @param {string} sort - The sort option
   */
  const onSortHandler = sort => {
    setSort(sort);
  };

  /**
   * Handler for searching the products
   * @param {string} search - The search query
   */
  const onSearchHandler = search => {
    setSearch(search);
  };

  // Sort the products based on the selected sort option
  const sortedProduct = products.sort((a, b) => {
    if (sort === "ASC") {
      return a.name.localeCompare(b.name); // Sort in ascending order by name
    } else if (sort === "DESC") {
      return b.name.localeCompare(a.name); // Sort in descending order by name
    } else if (sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt); // Sort by newest creation date
    } else if (sort === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt); // Sort by oldest creation date
    } else {
      return products; // Return the products array as is
    }
  });

  // Filter the sorted products based on the search query
  const searchProduct = sortedProduct.filter(product => {
    if (!search) {
      return products; // Return the products array as is if search query is empty
    }
    return product.name.toLowerCase().includes(search.toLowerCase()); // Case-insensitive search by name
  });

  if (loading) {
    return <Loading />; // Show loading spinner if data is still loading
  } else if (products.length === 0) {
    return (
      <EmptyState
        title="Produk"
        errors={errors}
        addLink="/dashboard/products/create"
      />
    ); // Show empty state component if there are no products
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Kelola Produk</h1>
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
                      <i class="bi bi-info-circle"></i> Detail
                    </Link>

                    <Link
                      to={`/dashboard/products/edit/${product.slug}`}
                      className="btn btn-warning mx-3"
                      title="Edit"
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </Link>

                    <Button
                      className="btn btn-danger"
                      title="Delete"
                      onClick={() => onDelete(product.slug)}
                    >
                      <i className="bi bi-trash"></i> Hapus
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
