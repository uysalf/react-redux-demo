import React, { useState, useEffect } from "react";
import { connect, useStore, useSelector, useDispatch } from "react-redux";
import { addBlog, editBlog, removeBlog } from "../redux";
const BlogsContainer = (props) => {
  const [error, setError] = useState("");
  const [blogEditedId, setBlogEditedId] = useState(null);
  const [submitButtonText, setSubmitButtonText] = useState("Yeni Blog Ekle");
  const [title, setTitle] = useState(props.blog ? props.blog.title : "");
  const [description, setDescription] = useState(
    props.blog ? props.blog.description : ""
  );
  const store = useStore();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog);
  const blogs2 = store.getState().blog;

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const onDescriptionChange = (e) => {
    const desc = e.target.value;
    setDescription(desc);
  };

  const addNewBlogOrUpdate = (e) => {
    if (!title || !description) {
      setError("Lütfen tüm alanları doldurunuz.");
    } else {
      setError("");

      blogEditedId
        ? dispatch(
            editBlog({
              id: blogEditedId,
              title: title,
              description: description,
            })
          )
        : dispatch(
            addBlog({
              title: title,
              description: description,
              dateAdded: Date.now(),
            })
          );
      // store.dispatch(
      //   addBlog({
      //     title: title,
      //     description: description,
      //     dateAdded: Date.now(),
      //   })
      // );
    }
  };

  const editBlogLocal = (e, blogId) => {
    // e.preventDefault();
    const blogEdited = blogs2.find((blogItem) => {
      return blogItem.id === blogId;
    });
    setBlogEditedId(blogEdited.id);

    setTitle(blogEdited.title);
    setDescription(blogEdited.description);
    setSubmitButtonText("Blog Güncelle");
  };

  return (
    <div>
      <h2>******************BlogsContainer******************</h2>
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
            setSubmitButtonText("Yeni Blog Ekle");
            setBlogEditedId(null);
            setTitle("");
            setDescription("");
          }}
        >
          Input Temizle
        </button>
        <button onClick={(e) => addNewBlogOrUpdate(e)}>
          {submitButtonText}
        </button>
      </div>
      {blogs2 &&
        blogs2.map((blog, index) => (
          <div key={blog.id}>
            <span>{blog.id}-</span>
            <span>{blog.title}-</span>
            <span>{blog.description}</span>
            <button onClick={(e) => editBlogLocal(e, blog.id)}>Güncelle</button>
            <button
              onClick={(e) => {
                dispatch(
                  removeBlog({
                    id: blog.id,
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

export default BlogsContainer;
