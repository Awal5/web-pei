import React from "react";
import { showFormattedDate } from "@/data";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import Loading from "@/components/atoms/Loading";
import EmptyState from "@/components/atoms/emptyState";

const MainProduct = props => {
  const { products, errors, onDelete, loading } = props;

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
        <Link className="btn btn-success mb-3" to="/dashboard/products/create">
          Tambahkan Produk +
        </Link>
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
            {products.map((product, index) => {
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
