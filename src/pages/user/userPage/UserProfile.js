// import React, { useState } from "react";

// const Profile = () => {
//   const [profileData, setProfileData] = useState({
//     name: "Badhri Narayanan",
//     email: "badhrinarayanan325@gmail.com",
//     phone: "9159552150",
//     address: "Krishnagiri, Tamil Nadu, India",
//     profileImage: null, // Stores image as a URL
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editableData, setEditableData] = useState(profileData);

//   // Handle profile image upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setEditableData((prev) => ({
//         ...prev,
//         profileImage: imageURL,
//       }));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditableData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//     if (!isEditing) {
//       setEditableData(profileData);
//     }
//   };

//   const handleSave = () => {
//     setProfileData(editableData);
//     setIsEditing(false);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="bg-light rounded shadow-sm p-4">
//         <div className="d-flex align-items-center justify-content-between mb-3">
//           <h3 className="card-title mb-0">My Profile</h3>
//           {!isEditing && (
//             <button className="btn btn-primary" onClick={toggleEdit}>
//               Edit Profile
//             </button>
//           )}
//         </div>

//         <div className="row">
//           <div className="col-md-4 text-center">
//             <div className="mb-3">
//               <img
//                 src={
//                   editableData.profileImage ||
//                   "https://via.placeholder.com/150x150.png?text=Profile"
//                 }
//                 alt="Profile"
//                 className="rounded-circle shadow"
//                 style={{ width: "150px", height: "150px", objectFit: "cover" }}
//               />
//             </div>
//             {isEditing && (
//               <div className="mb-3">
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="form-control"
//                 />
//               </div>
//             )}
//           </div>

//           <div className="col-md-8">
//             <form>
//               <div className="mb-3">
//                 <label className="form-label">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-control"
//                   value={editableData.name}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   value={editableData.email}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   className="form-control"
//                   value={editableData.phone}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label">Address</label>
//                 <textarea
//                   name="address"
//                   className="form-control"
//                   rows="3"
//                   value={editableData.address}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                 />
//               </div>

//               {isEditing && (
//                 <div className="d-flex justify-content-end">
//                   <button
//                     type="button"
//                     className="btn btn-success me-2"
//                     onClick={handleSave}
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-outline-secondary"
//                     onClick={toggleEdit}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import defaultProfileImage from "../../../../src/assets/education1.jpg";

const ProfileCard = () => {
  const [profileData, setProfileData] = useState({
    name: "Badhri Narayanan",
    role: "Frontend Developer",
    email: "badhrinarayanan325@gmail.com",
    phone: "9159552150",
    address: "Krishnagiri, Tamil Nadu, India",
    profileImage: defaultProfileImage,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState(profileData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setEditableData((prev) => ({
        ...prev,
        profileImage: imageURL,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    if (!isEditing) setEditableData(profileData);
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setProfileData(editableData);
    setIsEditing(false);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 0 10px #ccc",
        borderRadius: "10px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={editableData.profileImage}
          alt="Profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #3498db",
          }}
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "block", margin: "10px auto" }}
          />
        )}
        <h2>{profileData.name}</h2>
        <p>{profileData.role}</p>
      </div>

      <div>
        {["name", "role", "email", "phone", "address"].map((field) => (
          <div key={field}>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            {isEditing ? (
              field === "address" ? (
                <textarea
                  name={field}
                  value={editableData[field]}
                  onChange={handleChange}
                  style={{ ...inputStyle, height: "80px" }}
                />
              ) : (
                <input
                  name={field}
                  value={editableData[field]}
                  onChange={handleChange}
                  style={inputStyle}
                />
              )
            ) : (
              <div style={{ marginBottom: "15px" }}>{profileData[field]}</div>
            )}
          </div>
        ))}
      </div>

      <div style={{ textAlign: "right", marginTop: "20px" }}>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              style={{
                marginRight: "10px",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
              }}
            >
              Save
            </button>
            <button
              onClick={toggleEdit}
              style={{
                backgroundColor: "#ccc",
                color: "#333",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={toggleEdit}
            style={{
              backgroundColor: "#3498db",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "6px",
            }}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
