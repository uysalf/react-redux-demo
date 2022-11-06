import React, { useState, useEffect } from "react";
import { connect, useStore, useSelector, useDispatch } from "react-redux";
import { addProduct, editProduct, removeProduct, fetchProduct } from "../redux";
import axios from "axios";
const ProductsContainer = (props) => {
  const [error, setError] = useState("");
  const [productEditedId, setProductEditedId] = useState(null);
  const [submitButtonText, setSubmitButtonText] = useState("Yeni Product Ekle");
  const [title, setTitle] = useState(props.product ? props.product.title : "");
  const [description, setDescription] = useState(
    props.product ? props.product.description : ""
  );
  const store = useStore();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const products2 = store.getState().product;

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const onDescriptionChange = (e) => {
    const desc = e.target.value;
    setDescription(desc);
  };

  const addNewProductOrUpdate = (e) => {
    if (!title || !description) {
      setError("Lütfen tüm alanları doldurunuz.");
    } else {
      setError("");

      productEditedId
        ? dispatch(
            editProduct({
              id: productEditedId,
              title: title,
              description: description,
            })
          )
        : dispatch(
            addProduct({
              id: Math.floor(Math.random() * 1000),
              title: title,
              description: description,
              dateAdded: Date.now(),
            })
          );
    }
  };

  const editProductLocal = (e, productId) => {
    // e.preventDefault();
    const productEdited = products2.find((productItem) => {
      return productItem.id === productId;
    });
    setProductEditedId(productEdited.id);

    setTitle(productEdited.title);
    setDescription(productEdited.description);
    setSubmitButtonText("Product Güncelle");
  };

  async function getProducts() {
    try {
      const response = await axios.get("http://localhost:3004/products");
      return await response.data;
    } catch (error) {
      console.log("hata getProducts:", error);
    }
  }

  useEffect(() => {
    getProducts().then((data) => {
      dispatch(fetchProduct(data));
    });
  }, []);

  return (
    <div>
      <h2>******************ProductsContainer******************</h2>
      <div>
        <div>
          <input
            name="title"
            type="text"
            placeholder="enter title"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={onDescriptionChange}
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            setSubmitButtonText("Yeni Product Ekle");
            setProductEditedId(null);
            setTitle("");
            setDescription("");
          }}
        >
          Input Temizle
        </button>
        <button onClick={(e) => addNewProductOrUpdate(e)}>
          {submitButtonText}
        </button>
      </div>
      {products2 &&
        products2.map((product, index) => (
          <div key={product.id}>
            <span>{product.id}-</span>
            <span>{product.title}-</span>
            <span>{product.description}</span>
            <button onClick={(e) => editProductLocal(e, product.id)}>
              Güncelle
            </button>
            <button
              onClick={(e) => {
                dispatch(
                  removeProduct({
                    id: product.id,
                  })
                );
              }}
            >
              Sil
            </button>
          </div>
        ))}
    </div>
  );
};

export default ProductsContainer;
