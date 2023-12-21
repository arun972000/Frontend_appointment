import Doctor from "./doctorCard.jsx";

const DoctorList = () => {
const doctors=[
    {
      "id": 1,
      "fullName": "Dr. Jessy",
      "specialization": "Cardiologist",
      "photo": "https://img.freepik.com/free-photo/smiley-female-doctor-posing-suit-stethoscope_23-2149014357.jpg"
    },
    {
      "id": 2,
      "fullName": "Dr. Emily Davis",
      "specialization": "Dermatologist",
      "photo": "https://thumbs.dreamstime.com/b/young-beautiful-woman-pink-hair-wearing-doctor-uniform-smiling-confident-gesturing-hand-doing-small-size-sign-fingers-226911345.jpg"
    },
    {
      "id": 3,
      "fullName": "Dr. Marry",
      "specialization": "Endocrinologist",
      "photo": "https://img.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-showing-thumb-up-isolated-pink-wall_141793-90123.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais"
    },
    {
      "id": 4,
      "fullName": "Dr. Sarah Brown",
      "specialization": "Gastroenterologist",
      "photo": "https://thumbs.dreamstime.com/b/young-beautiful-woman-wearing-doctor-stethoscope-glasses-smiling-confident-gesturing-hand-doing-small-size-sign-fingers-218289739.jpg"
    },
    {
      "id": 5,
      "fullName": "Dr. Robert Lee",
      "specialization": "Neurologist",
      "photo": "https://img.freepik.com/free-photo/smiling-young-bald-male-doctor-wearing-medical-robe-stethoscope-points-side-isolated-pink-with-copy-space_141793-73565.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais"
    },
    {
      "id": 6,
      "fullName": "Dr. Elizabeth Wilson",
      "specialization": "Orthopedic Surgeon",
      "photo": "https://thumbs.dreamstime.com/b/young-caucasian-woman-wearing-doctor-uniform-stethoscope-smiling-confident-gesturing-hand-doing-small-size-sign-fingers-213171285.jpg"
    },
    {
      "id": 7,
      "fullName": "Dr. William Moore",
      "specialization": "Pediatrician",
      "photo": "https://img.freepik.com/premium-photo/smiling-happily-with-friendly-offering-showing-concept_1194-517750.jpg"
    },
    {
      "id": 8,
      "fullName": "Dr. Taylor",
      "specialization": "Psychiatrist",
      "photo": "https://img.freepik.com/free-photo/young-handsome-doctor-wearing-white-medical-gown-white-medical-gloves-stethoscope-puzzled-measuring-size-with-fingers-standing-pink-wall_141793-30645.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699833600&semt=ais"
    },
    {
      "id": 9,
      "fullName": "Dr. Andrew Clark",
      "specialization": "Radiologist",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gp9tuIrK54cVBBMXBmuagk6JWuXFquWdqIlLHivBv4fittLDKNmAsVyrpypumhKhmB8&usqp=CAU"
    },
   
  ]
  
  return (
    <div className="container mt-4">
      <h2>Doctor List</h2>
      <div className="row">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
