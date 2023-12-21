/* eslint-disable react/prop-types */
import "./doctorCard.css"

const Doctor = ({doctor}) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow mb-5 bg-body rounded">
        <div className="img-hover-zoom">
        <img src={doctor.photo || 'placeholder.jpg'} className="card-img-top" alt="Doctor Photo" />
        </div>
       
        <div className="card-body">
          <h4 className="card-title text-center" >{doctor.fullName}</h4>
          <p className="card-text text-center"> {doctor.specialization}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
 