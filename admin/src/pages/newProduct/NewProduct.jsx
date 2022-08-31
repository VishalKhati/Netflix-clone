import { ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import storage from "../../firebase";
import "./newProduct.css";

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setmImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const upload = (items) => {
    items.forEach((item) => {
      const storageRef = ref(storage, `/items/${item.file.name}`);
      uploadBytes(storageRef, item.file).then((snapshot) => {
        const progress = Math.round(snapshot.byteTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is" + progress + " % done.");
        const gsRef = ref(
          storage,
          `gs://netflix-a5459.appspot.com/items/${item.file.name}`
        );
        setMovie((prev) => {
          return { ...prev, [item.label]: gsRef };
        });
        setUploaded((prev) => prev + 1);
      })
    });
    
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: URL.createObjectURL(img), label: "img" },
      { file: URL.createObjectURL(imgTitle), label: "imgTitle" },
      { file: URL.createObjectURL(imgSm), label: "imgSm" },
      { file: URL.createObjectURL(trailer), label: "trailer" },
      { file: URL.createObjectURL(video), label: "video" },
    ]);
  };
  console.log("ngds", movie);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input
            type="file"
            id="imageTitle"
            name="imgTitle"
            onChange={(e) => setmImgTitle(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="john wick"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="desc"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input
            type="text"
            placeholder="duration"
            name="duration"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input
            type="text"
            placeholder="limit"
            name="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>isSeries?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        {uploaded === 5 ? (
          <button className="addProductButton">Create</button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
