import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteById, getAllProduct } from "../redux/useSlices/productSlice";
import FormAdd from "./FormAdd";

export default function Product() {
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.product.data);

  // console.log(listProduct);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  //ham xoa thong tin mot product theo id
  const handleDelete = (id) => {
    dispatch(deleteById(id));
  };

  // hien thi form moi
  const handleShowForm = () => {
    setShowAdd(true)
  }

  return (
    <>
      {showAdd && <FormAdd />}
      <h1 className="display-1 text-center">ListProduct</h1>
      <button onClick={handleShowForm} className="btn btn-primary m-3 ">Them moi san pham</button>
      <table border={1} className="table table-success table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Product name</th>
            <th>Price</th>
            <th>From</th>
            <th colSpan={2}>Option</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.ProductName}</td>
              <td>{product.Price}</td>
              <td>{product.From}</td>
              <td>
                <button className="btn btn-warning">Sua</button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger"
                >
                  Xoa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
