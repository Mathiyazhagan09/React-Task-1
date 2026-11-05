// function UserCard(props) {
//   return (
//     <div>
//       <h2>{props.user.name}</h2>
//       <p>City: {props.user.city}</p>
//       <p>Age: {props.user.age}</p>
//       <p>Email: {props.user.email}</p>
//       <p>Phone: {props.user.phone}</p>
//       <hr />
//     </div>
//   );
// }

// export default UserCard;


import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="user-card">
      <h2>{props.user.name}</h2>
      <p>City: {props.user.city}</p>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
      <p>Phone: {props.user.phone}</p>
    </div>
  );
}

export default UserCard;