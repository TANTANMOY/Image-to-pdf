import jsPDF from 'jspdf';
import { React, useState } from 'react';

const Pdfimg = () => {
  const [photo, setPhoto] = useState(null);

  const onChangephoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  console.log(photo);

  const pdfGenerate = () => {
    var doc = new jsPDF('p', 'px', 'a4');
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    var img = URL.createObjectURL(photo);
    doc.addImage(img, null, 0, 0, width, height, null, 'FAST');
    doc.save(`${photo.name}.pdf`);
  };

  return (
    <div className="container mt-5">
      <div>
        <h2 className="text-center">
          <img
            src="https://img.icons8.com/external-others-justicon/48/000000/external-image-photography-others-justicon-2.png"
            alt="icon"
          />{' '}
          Image to Pdf
          <img
            src="https://img.icons8.com/cute-clipart/50/000000/pdf.png"
            alt="icon"
          />
        </h2>
      </div>

      <div className="row mt-5">
        <div className="col-lg-3">
          {photo && (
            <div>
              <img
                alt="not fount"
                width="250"
                height="250"
                className="rounded-circle shadow image-fit"
                src={URL.createObjectURL(photo)}
              />
              <br />
            </div>
          )}
        </div>
        <div className="col-lg-4">
          {' '}
          <div className="form-group mt-5">
            <input
              type="file"
              name="photo"
              className="form-control"
              onChange={onChangephoto}
              accept="image/png, image/png, image/jpeg"
            />
          </div>
        </div>
        <div className="col-lg">
          {' '}
          <button
            className="btn btn-outline-primary mt-5"
            onClick={pdfGenerate}
            disabled={!photo}
          >
            Download pdf
          </button>
        </div>
      </div>
      <footer>
        <p className="text-center">
          Made by{' '}
          <a href="http://tantanmoy.netlify.app" target="_blank">
            Tanmoy
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Pdfimg;
